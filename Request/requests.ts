export async function getAllCategories() {
    const response = await fetch("https://fakestoreapi.com/products/categories")
     return await response.json()
}