export async function fetchProducts() {
    const res = await fetch('https://dummyjson.com/products')
    return res.json()
}