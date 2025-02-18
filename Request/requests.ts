
export async function getAllCategories() {
    const response = await fetch("https://fakestoreapi.com/products/categories")
     return response.json()
}

export async function getAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json()
}