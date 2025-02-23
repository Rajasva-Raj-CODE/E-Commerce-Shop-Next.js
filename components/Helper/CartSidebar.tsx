import { CartItem } from '@/store/cartSlice'
import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

type Props = {
    items: CartItem[]
}

const CartSidebar = ({ items }: Props) => {

    return (
        <div className='mt-6 h-full mb-6'>
            {/* cart header */}
            <h1 className='text-center font-bold text-lg mb-6'>Your Cart</h1>
            {/* if cart is empty */}
            {items.length == 0 && (
                <div className='flex items-center w-full h-[80vh] flex-col  justify-center'>
                    <Image src="/images/cart.svg" alt="empty-cart" width={200} height={200} className='object-cover mx-auto' />
                    <h1 className='text-2xl font-semibold mt-8'>Your cart is empty</h1>
                </div>
            )}
            {/* if there is cart items */}
            {items.length > 0 && (
                <div>
                    {items?.map((item) => {
                        return <div key={item.id} className='pb-4 border-b-2 border-gray-300 border-opacity-60 p-4' >
                            {/* product image */}
                            <div>
                                <Image src={item?.image} alt={item.title} width={60} height={60} className='mb-4 object-cover' />
                            </div>
                            <div>
                                {/* product title */}
                                <h1 className='text-sm w-4/5 font-semibold truncate'>{item?.title}</h1>
                                {/* product price */}
                                <h1 className='text-base text-blue-950 font-bold '>₹{(item?.price * item?.quantity).toFixed(2)}</h1>
                                {/* product quantity */}
                                <h1 className='text-base mb-2 font-bold'>Quantity : {item?.quantity}</h1>
                                {/* Two buttons one for remove and one for add to cart */}
                                <div className='flex items-center space-x-4'>
                                    <Button size={"sm"} variant={"destructive"} className=''>
                                        Remove
                                    </Button>
                                    <Button size={"sm"} variant={"default"} className=''>
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </div>
                    })}

                    


                </div>
            )}
        </div>
    )
}

export default CartSidebar