
export async function getAllCategories() {
    const response = await fetch("https://fakestoreapi.com/products/categories")
     return response.json()
}

export async function getAllProducts() {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json()
}

export async function getSingleProduct(id: string) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    return response.json()

}

export async function getProductsByCategory(category: string) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    return response.json()
}