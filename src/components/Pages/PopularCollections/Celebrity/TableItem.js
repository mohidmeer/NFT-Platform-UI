import React from 'react'
import { Link } from 'react-router-dom'

const TableItem = () => {
  return (
    <div className="bg-dark rounded-xl transition ease-in-out delay-150 hover:translate-x-1 hover:translate-y-1 hover:scale-110  border-dark-2 border-2 ">
          <Link to="/collection/sol_princess_weekly_wish_2">
            
              <img 
                draggable="false"
                loading="lazy"
                className='rounded-2xl  '
                src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://dweb.link/ipfs/bafybeig36are2osw5oztd4bop7ssdccab42zodpeva4agrxrc3wofnuj5a"
              />
           
            <div className=' lg:w-full md:w-full'>
            <h5 class="mb-2 text-center px-5 font-bold" title="Rifters Demigod Solana Princess's Weekly Wish #2">Celebrity</h5>
            <p className='text-center px-5 text-sm text-pink-600'> Solana Princes (Rifters)</p>
              
            <div className='p-3'>
               <div className='flex justify-between'>
                    <p className='font-bold '>Floor Price</p>
                    <p className='font-bold text-pink-600'>126 K</p>
                </div>
               <div className='flex justify-between'>
                    <p className='font-bold '>Owners</p>
                    <p className='font-bold text-pink-600'>12 K</p>
                </div>
               <div className='flex justify-between'>
                    <p className='font-bold '>Supply</p>
                    <p className='font-bold text-pink-600'>7.4 K</p>
                </div>
               <div className='flex justify-between'>
                    <p className='font-bold '>Last 30 days</p>
                    <p className='font-bold text-pink-600'>150 %</p>
                </div>
                

               </div>
            </div>
          </Link>
        </div>
  )
}

export default TableItem