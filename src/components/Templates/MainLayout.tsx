import { FC } from 'react'
import { Header } from '../Header/Header.tsx'
import commonStyles from '../../styles/common.module.less'
import { Outlet } from 'react-router'

export const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <main className={commonStyles.wrapper}>
        <Outlet />
      </main>
    </>
  )
}