"use client"
import { Product } from '@/typing'
import { Heart, ShoppingBag, StarIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { useDispatch} from 'react-redux'
import { addItem } from '@/store/cartSlice'
import { toast } from "sonner"


type Props = {
    product: Product
}

const ProductCard = ({ product }: Props) => {

    const num = Math.round(product.rating.rate)
    const ratingArray = new Array(num).fill(0)
    
    const dispatch = useDispatch()

    const addToCartHandler = (product: Product) => {
        toast.success("Item Added to Cart",)
        dispatch(addItem(product))
    }

    return (
        <div className='p-4'>
            <div className='w-[200px] h-[150px]'>
                <Image src={product.image} alt={product.title} width={100} height={100} className='rounded-lg w-[80%] h-[80%] object-contain' />
            </div>
            <p className='mt-5 text-xs capitalize text-gray-600'>{product.category}</p>
            <Link href={`/product/product-details/${product.id}`}>
                <h1 className='mt-2 text-lg cursor-pointer hover:text-blue-900 transition-all  hover:underline  sm:w-full sm:truncate font-semibold text-black'>{product.title}</h1>
            </Link>
            <div className='flex items-center '>
                {ratingArray.map(() => {
                    return <StarIcon key={Math.random() * 1000} size={16} fill='yellow' className='text-yellow-500' />
                })}
            </div>
            <div className='flex mt-2 items-center  space-x-2'>
                <p className='text-black text-base line-through font-semibold opacity-50'>{`₹${(product.price + 10).toFixed(2)}`}</p>
                <p className='text-black text-lg opacity-80 font-bold'>{`₹${product.price.toFixed(2)}`}</p>
            </div>
            <div className='mt-4 flex items-center space-x-2'>
                <Button size={"icon"} onClick={() => addToCartHandler(product)}>
                    <ShoppingBag size={18} />
                </Button>
                <Button size={"icon"} className='bg-red-500 text-white'>
                    <Heart size={18} />
                </Button>
            </div>
        </div>

    )
}

export default ProductCard