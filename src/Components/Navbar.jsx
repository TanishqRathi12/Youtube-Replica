import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-center pt-3 pb-6 '>
      <input type="search" placeholder='  Search' className='border border-solid w-5/12 rounded-l-2xl bg-stone-900 p-1 h-10 border-neutral-700 hover:border-blue-700 text-white' />
      <input type="search" placeholder='' className='w-10 border border-solid bg-stone-800 p-1 rounded-r-2xl border-neutral-700' />
    </div>
  )
}

export default Navbar
