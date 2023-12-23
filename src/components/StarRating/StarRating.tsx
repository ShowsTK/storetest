import { FC } from 'react'
import styles from './StarRating.module.less'
import { StarIcon } from '../Icons/Star'

type StarRatingProps = {
  rate: number
  starsCount?: number
  size?: number
}

export const StarRating: FC<StarRatingProps> = ({ rate = 0, starsCount = 5, size = 16 }) => (
  <div className={styles.wrapper}>
    {[...Array(starsCount)].map((_el, index) => {
      const currentRating = index + 1
      return (
        <StarIcon
          key={index}
          color={currentRating <= rate ? '#f3c900' : 'rgba(124, 121, 93, 0.24)'}
          size={size}
        ></StarIcon>
      )
    })}
    <span className={styles.rateValue}>{rate}</span>
  </div>
)
