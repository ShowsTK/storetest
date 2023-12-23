import { Link, useParams } from 'react-router-dom'
import { ProductService } from '../../core/services/product.service.ts'
import { useQuery } from '@tanstack/react-query'
import styles from './ProductCard.module.less'
import { Preloader } from '../../components/Preloader/Preloader.tsx'
import { useMemo } from 'react'
import { formatPriceCurrency } from '../../core/utils/Helpers.ts'
import { StarRating } from '../../components/StarRating/StarRating.tsx'

export const ProductCard = () => {
  const { id, name } = useParams()
  const {
    data: productInfo,
    isFetching,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ['productInfo', id],
    queryFn: () => ProductService.getProductById(Number(id)),
  })
  const isGettingData = isLoading || isFetching
  const formattedPrice = useMemo(
    () => formatPriceCurrency('usd', productInfo?.price),
    [productInfo?.price]
  )

  return isGettingData ? (
    <Preloader />
  ) : (
    <>
      {productInfo && isSuccess && (
        <div className={styles.wrapper} title={`${productInfo.title}`}>
          <section className={styles.picture}>
            <img className={styles.image} src={productInfo.image} alt='' />
          </section>
          <section className={styles.info}>
            <article className={styles.article}>
              <p className={styles.caption}>Price</p>
              <p className={styles.price}>{formattedPrice}</p>
            </article>
            <article className={styles.article}>
              <p className={styles.caption}>Name</p>
              <p className={styles.title}>{productInfo.title}</p>
            </article>
            <article className={styles.article}>
              <p className={styles.caption}>Description</p>
              <p className={styles.description}>{productInfo.description}</p>
            </article>
            <div className={styles.extraInfo}>
              <span>Sold: {productInfo.rating.count} </span>
              <StarRating rate={productInfo.rating.rate} />
            </div>
          </section>
        </div>
      )}
      <Link className={styles.buttonLink} to={`/products/category/${name}`}>
        Back to list
      </Link>
    </>
  )
}
