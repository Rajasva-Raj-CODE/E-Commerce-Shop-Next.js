import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='pt-20 pb-12'>
            <div className='w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                <div>
                    <h1 className='text-[25px] uppercase font-semibold text-black mb-4'>WDW Shop</h1>
                    <p className='text-sm text-black opacity-60'> we are committed to bringing you the best shopping experience with high-quality products, seamless navigation, and secure checkout. Whether you're looking for the latest trends or everyday essentials, we’ve got you covered. Enjoy fast shipping, hassle-free returns, and top-notch customer support.</p>
                    <p className='text-base mt-6 text-black opacity-80'>(+91) 9876543210 - <a href="mailto:info@example.com" className='text-blue-500 hover:underline'>info@example.com</a></p>
                </div>
                <div className='lg:mx-auto'>
                    <h1 className='footer_title'>Information</h1>
                    <p className='footer_link'>About us</p>
                    <p className='footer_link'>Privacy policy</p>
                    <p className='footer_link'>Return policy</p>
                    <p className='footer_link'>Shipping policy</p>
                    <p className='footer_link'>Dropshipping</p>
                </div>
                <div className='lg:mx-auto'>
                    <h1 className='footer_title'>Account</h1>
                    <p className='footer_link'>Dashboard</p>
                    <p className='footer_link'>My Orders</p>
                    <p className='footer_link'>Account Details</p>
                    <p className='footer_link'>Track My Orders</p>
                </div>
                <div className='lg:mx-auto'>
                    <h1 className='footer_title'>Shop</h1>
                    <p className='footer_link'>Affiliate</p>
                    <p className='footer_link'>Best sellers</p>
                    <p className='footer_link'>Latest Products</p>
                    <p className='footer_link'>Sale Products</p>
                </div>
            </div>
            <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto'>
                <p className='text-sm text-black opacity-60'>@ Copyright 2025 WDW Shop. All rights reserved.</p>
                <Image src="/images/pay.svg" alt="pay" width={230} height={230} className='object-contain sm:ml-auto' />
            </div>
        </div>
    )
}

export default Footer