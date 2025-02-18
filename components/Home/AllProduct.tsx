"use client"

import { getAllProducts } from '@/Request/requests'
import { Product } from '@/typing'
import React, { useEffect, useState } from 'react'

const AllProduct = () => {
    const [products, setProducts] = useState<Product[] | null>(null)
    const [loading, setLoading] = useState(true)

    console.log(products)

    useEffect(() => {
        const getdata = async () => {
            setLoading(true)
            try {
                const products: Product[] = await getAllProducts()
                setProducts(products)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        getdata()
    }, [])
    return (
        <div>AllProduct</div>
    )
}

export default AllProduct