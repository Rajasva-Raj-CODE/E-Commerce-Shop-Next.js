"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useUser } from '@clerk/nextjs'
import { addItem, CartItem, clearCart, removeItem } from '@/store/cartSlice'
import PayPalButton from '@/components/Helper/PayPalButton'
import { useRouter } from 'next/navigation'
const Cart = () => {

   //router
    const router = useRouter()
    const dispatch = useDispatch()

    // Get our cart items from the store
    const items = useSelector((state: RootState) => state.cart.items)
    // Calculate the total quantity of items in the cart
    const totalQuantity = items.reduce((total, item) => total + item.quantity, 0)
    // Calculate the total price of items in the cart
    const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    // Calculate vat (15%)
    const vat = (+totalPrice * 0.15).toFixed(2)
    // Calculate total price with vat
    const totalPriceWithVat = (+totalPrice + +vat).toFixed(2)

    //Get auth user
    const { user } = useUser()

    //add item
    const addItemHandler = (item: CartItem) => {
        dispatch(addItem(item))
    }

    //remove item
    const removeItemHandler = (id: number) => {
        dispatch(removeItem({ id }))
    }

    //handle payement success
    const handleSuccess = (details: any) => {
        router.push('/success')
        dispatch(clearCart());
    }


    return (
        <div className='mt-8 min-h-[60vh]'>
            {/* check cart is empty */}
            {items.length == 0 && (
                <div className='flex items-center w-full h-[80vh] flex-col  justify-center'>
                    <Image src="/images/cart.svg" alt="empty-cart" width={400} height={400} className='object-cover mx-auto' />
                    <h1 className='text-2xl font-semibold mt-8'>Your cart is empty</h1>
                    <Link href="/">
                        <Button className='mt-4'>
                            Shop Now
                        </Button>
                    </Link>
                </div>
            )}
            {/* if cart is not empty */}
            {items.length > 0 && (
                <div className='md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12'>
                    {/* Cart items */}
                    <div className='rounded-lg shadow-md overflow-hidden xl:col-span-4'>
                        <h1 className='p-4 text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700'>Your Cart ({totalQuantity} Item) </h1>
                        {items.map((item) => {
                            return <div className='flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center space-x-10'>
                                <div>
                                    <Image src={item.image} alt={item.title} width={180} height={180} className='' />
                                </div>
                                <div>
                                    <h1 className='md:text-xl text-base font-bold text-black'>{item.title}</h1>
                                    <h1 className=' md:text-lg text-sm font-semibold'>Category : {item.category}</h1>
                                    <h1 className='md:text-2xl text-lg font-bold text-blue-950'> ₹{item.price.toFixed(2)}</h1>
                                    <h1 className='md:text-lg text-sm font-semibold'>Quantity : {item.quantity}</h1>
                                    <div className='flex items-center space-x-2 mt-4'>
                                        <Button onClick={() => { addItemHandler(item) }} className=''>
                                            Add More
                                        </Button>
                                        <Button variant={"destructive"} onClick={() => { removeItemHandler(item.id) }}>
                                            Remove
                                        </Button>
                                    </div>

                                </div>
                            </div>
                        })}
                    </div>
                    {/* cart summary */}
                    <div className='xl:col-span-2'>
                        <div className='bg-indigo-950 sticky top-[25vh] p-6 rounded-lg'>
                            <h1 className='text-center mt-8 mb-8 text-white text-3xl font-semibold '>Summary</h1>
                            <div className='w-full h-[1.2px] bg-white bg-opacity-20'></div>
                            <div className='flex mt-4 text-xl uppercase font-semibold text-white items-center justify-between'>
                                <span>Subtotal</span>
                                <span>₹{totalPrice}</span>
                            </div>
                            <div className='flex mt-10 mb-10 text-xl uppercase font-semibold text-white items-center justify-between'>
                                <span>VAT</span>
                                <span>₹{vat}</span>
                            </div>
                            <div className='flex  mb-6 text-xl uppercase font-semibold text-white items-center justify-between'>
                                <span>Shipping</span>
                                <span>FREE</span>
                            </div>
                            <div className='w-full h-[1.2px] bg-white bg-opacity-20'></div>
                            <div className='flex mt-6  mb-6 text-xl uppercase font-semibold text-white items-center justify-between'>
                                <span>Total</span>
                                <span>₹{totalPriceWithVat}</span>
                            </div>
                            {!user && (
                                <Link href="/sign-in">
                                    <Button className='bg-orange-500 w-full'>
                                        Sign In to checkout
                                    </Button>
                                </Link>
                            )}
                            {user && (

                             <PayPalButton amount={totalPriceWithVat} onSuccess={handleSuccess} />

                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cart