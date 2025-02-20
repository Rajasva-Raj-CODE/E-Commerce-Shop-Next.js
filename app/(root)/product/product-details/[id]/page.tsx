import React from 'react'

const ProductDetails = ({ params }: { params: { id: string } }) => {
    const id = params.id
    const singleProduct = getSingleProduct(id)
    console.log(id);

    return (
        <div>Product Details</div>
    )
}

export default ProductDetails 