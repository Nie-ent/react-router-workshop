import React from 'react'
import { useLoaderData } from 'react-router'

function ProductsPage() {
    const { products } = useLoaderData()
    return (
        <div className=''>
            <h1 className='m-4 text-2xl font-bold inline-block'>Product</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.id} : {product.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsPage