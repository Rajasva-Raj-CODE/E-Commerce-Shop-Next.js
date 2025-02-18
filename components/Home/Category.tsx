import { getAllCategories } from '@/Request/requests'
import React from 'react'

const Category = async () => {
  const categories: string[] = await getAllCategories();
  console.log(categories)

  return (
    <div className='pt-16 pb-12'>
      <h1 className='text-2xl text-center font-bold capitalize'>Shop By Category</h1>
      <div className='mt-12 w-4/5 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
        {categories.map((category, index) => (
          <div key={index} className='p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all duration-300 bg-gray-200 shadow-md'>
            <h2 className='text-sm sm:text-base md:text-lg font-bold capitalize'>{category}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category