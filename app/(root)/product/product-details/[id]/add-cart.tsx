"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, CartItem } from '@/store/cartSlice'
import { Product } from '@/typing'
import { toast } from "sonner"

const AddToCart = ({product}:{product:Product}) => {

  const dispatch = useDispatch()
  const addCartHandler = () => {
    dispatch(addItem(product))
    toast.success("Item Added to Cart",)
  }
  return (
    <Button onClick={()=>{addCartHandler()}} className='mt-6'>Add to Cart</Button>
  )
}

export default AddToCart