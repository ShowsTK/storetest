import { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '../../core/services/product.service.ts'
import { Preloader } from '../../components/Preloader/Preloader.tsx'
import styles from './Categories.module.less'
import { useNavigate } from 'react-router-dom'

export const Categories: FC = () => {
  const navigate = useNavigate()
  const {
    data: categories,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['categories'],
    queryFn: () => ProductService.getAllCategories(),
  })
  const isGettingData = isLoading || isFetching

  const handleClickCategory = (
    _event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    category: string
  ) => {
    navigate(`/products/category/${category}`)
  }

  return (
    <>
      {isGettingData ? (
        <Preloader />
      ) : (
        <div className={styles.categories}>
          {categories?.length ? (
            categories.map((category, index) => (
              <div
                key={index}
                className={styles.wrapper}
                title={`${category}`}
                onClick={(e) => handleClickCategory(e, category)}
              >
                <img
                  className={styles.picture}
                  src='/src/assets/Products.jpg'
                  alt='Product image'
                />
                <div className={styles.title}>{category}</div>
              </div>
            ))
          ) : (
            <div>No data</div>
          )}
        </div>
      )}
    </>
  )
}
