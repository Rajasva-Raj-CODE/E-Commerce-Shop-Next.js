import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../../../components/ui/button'

const SuccessPage = () => {
  return (
    <div className='w-full h-[60vh] flex items-center justify-center flex-col'>
        <Image src="/images/success.png" alt="success" width={400} height={400} />
        <h1 className='mb-8 text-3xl mt-2 font-bold uppercase text-green-600'>Order Successful</h1>
        <Link href="/">
         <Button>Go to Home</Button>
        </Link>
    </div>
  )
}

export default SuccessPage