import { createBrowserRouter } from 'react-router'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ProductsPage from '../pages/ProductsPage'
import ErrorPage from '../pages/ErrorPage'
import Layout from '../component/Layout'
import { fetchProducts } from '../API/products'

const router = createBrowserRouter([
    {
        path: '/', element: <Layout />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: 'about', element: <AboutPage /> },
            { path: 'product', element: <ProductsPage />, loader: fetchProducts },
        ],
    },
    { path: '*', element: <ErrorPage /> },
    { basename: "/react-router-workshop" }
])

export default router