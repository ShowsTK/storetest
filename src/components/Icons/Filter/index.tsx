import React from 'react'

type PropsType = {
  color?: string
  size?: number
}

export const FilterIcon: React.FC<PropsType> = ({ color = 'currentColor', size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      stroke={color}
      fill={color}
      strokeWidth='0'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <polygon fill='none' strokeWidth='2' points='3 6 10 13 10 21 14 21 14 13 21 6 21 3 3 3' />
    </svg>
  )
}
