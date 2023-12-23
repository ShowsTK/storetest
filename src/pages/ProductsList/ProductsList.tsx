import styles from './ProductsList.module.less'
import { Product } from '../../components/Product/Product.tsx'
import { FC } from 'react'
import { ProductService } from '../../core/services/product.service.ts'
import { useQuery } from '@tanstack/react-query'
import { Preloader } from '../../components/Preloader/Preloader.tsx'
import { useParams } from 'react-router-dom'

export const ProductsList: FC = () => {
  const { name: category } = useParams()
  const {
    data: products,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['productsByCategory', category],
    queryFn: () => ProductService.getProductsByCategory(category || ''),
  })
  const isGettingData = isLoading || isFetching

  return isGettingData ? (
    <Preloader />
  ) : (
    <div className={styles.products}>
      {products?.length ? (
        products.map((item) => <Product key={item.id} product={item} />)
      ) : (
        <div>No data</div>
      )}
    </div>
  )
}
