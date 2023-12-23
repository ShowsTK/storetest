import axios from 'axios'
import { iProduct } from '../types'

const baseUrl = 'https://fakestoreapi.com'
const urlProducts = `${baseUrl}/products`

export const ProductService = {
  async getAllProducts(): Promise<iProduct[]> {
    const response = await axios.get(urlProducts)

    return response.data
  },
  async getProductById(id: number): Promise<iProduct> {
    const response = await axios.get(` ${urlProducts}/${id}`)

    return response.data
  },
  async getAllCategories(): Promise<string[]> {
    const response = await axios.get(` ${urlProducts}/categories`)

    return response.data
  },
  async getProductsByCategory(category: string): Promise<iProduct[]> {
    const response = await axios.get(` ${urlProducts}/category/${category}`)

    return response.data
  },
}
