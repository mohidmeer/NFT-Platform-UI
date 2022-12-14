import React, { useState } from 'react'
import { AiFillThunderbolt } from 'react-icons/ai'
import { BsFillGrid3X3GapFill, BsGridFill } from 'react-icons/bs'
import Cart from './Cart'
import Items from './Items'

const Content = () => {
    const [layout, setLayout] = useState('lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 ')
  return (
  <div className=' '>
    <div className='flex justify-end  pb-2'>
        {/* <button className=' rounded mb-4 mr-5 py-2 px-4 text-white font-bold bg-pink-600 flex '>
        <AiFillThunderbolt className='mt-1'/>
        Instant Sell  <span className='ml-2'>(340.02) </span>  
        </button>
        <div className='flex pr-10 mb-3  gap-4'>
            <button onClick={()=>{setLayout('lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 ')}} className='font-bold text-2xl'><BsFillGrid3X3GapFill/> </button>
            <button onClick={()=>{setLayout('lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2')}} className='font-bold text-2xl'><BsGridFill/> </button>  
                     
        </div> */}


    </div>



    <div className={`${layout} px-5  grid  gap-4`}>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
        <Items/>
    </div>
</div>
  )
}

export default Content