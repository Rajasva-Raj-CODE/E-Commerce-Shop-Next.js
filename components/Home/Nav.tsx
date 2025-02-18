import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBox from '../Helper/SearchBox'
import { HeartIcon, UserIcon } from 'lucide-react'
import ShoppingCart from '../Helper/ShoppingCart'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

const Nav = () => {
  return (
    <div className='h-[12vh] sticky top-0 z-[1] bg-white shadow-md'>
      <div className='flex items-center justify-between w-[95%] md:w-4/5 mx-auto h-full'>
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={80} height={80} className='cursor-pointer rounded-lg shadow-lg hover:scale-105 transition-transform duration-300' />
        </Link>
        <div className='flex space-x-6 items-center'>
          <SearchBox />
          <HeartIcon size={26} cursor={'pointer'} />
          <ShoppingCart />
          {/*SignIn user*/}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/*Not SignIn*/}
          <SignedOut>
            <SignInButton>
              <UserIcon size={26} cursor={'pointer'} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  )
}

export default Nav