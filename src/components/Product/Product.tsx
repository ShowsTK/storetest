import { FC, useMemo } from 'react'
import styles from './Product.module.less'
import { iProduct } from '../../core/types'
import { useNavigate, useParams } from 'react-router-dom'
import { formatPriceCurrency } from '../../core/utils/Helpers.ts'
import { StarRating } from '../StarRating/StarRating.tsx'
import { PaidCartIcon } from '../Icons/PaidCart'

interface iProductProps {
  product: iProduct
}

export const Product: FC<iProductProps> = ({ product }) => {
  const navigate = useNavigate()
  const { name } = useParams()
  const formattedPrice = useMemo(() => formatPriceCurrency('usd', product.price), [product.price])

  return (
    <div
      className={styles.wrapper}
      title={`${product.title}`}
      onClick={() => navigate(`/products/category/${name}/${product.id}`)}
    >
      <img className={styles.picture} src={product.image} alt='Product image' />
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{formattedPrice}</div>
      <div className={styles.extraInfo}>
        <div className={styles.sold}>
          <PaidCartIcon color={'#007500'} size={12} />
          <span>{product.rating.count}</span>
        </div>
        <StarRating rate={product.rating.rate} size={14} />
      </div>
    </div>
  )
}
