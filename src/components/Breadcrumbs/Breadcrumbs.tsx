import { FC } from 'react'
import { Link, useParams } from 'react-router-dom'

export const Breadcrumbs: FC = () => {
  const { name } = useParams()
  const homeLinkName = 'Categories'

  return (
    <div>
      {name ? (
        <>
          <Link to={'/'}>{homeLinkName}</Link>
          <span>
            <b>{` > "${name}"`}</b>
          </span>
        </>
      ) : (
        <span>{homeLinkName}</span>
      )}
    </div>
  )
}
