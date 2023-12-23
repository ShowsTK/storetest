import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../../components/Templates/MainLayout.tsx'
import { Categories } from '../../pages/Categories/Categories.tsx'
import { ProductCard } from '../../pages/ProductCard/ProductCard.tsx'
import { ProductsList } from '../../pages/ProductsList/ProductsList.tsx'

export const Router = () => (
  <Routes>
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Categories />} />
      <Route path='products/category/:name' element={<ProductsList />} />
      <Route path='products/category/:name/:id' element={<ProductCard />} />
      <Route path='*' element={<p>Sorry, page not found</p>} />
    </Route>
  </Routes>
)
