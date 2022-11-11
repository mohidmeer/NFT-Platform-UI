import React from 'react'

const Card = () => {
  return (
    <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-lg border border-dark'>
    <div className='flex justify-center'>
    <img  width={400} className='rounded-xl' src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeidngi3kjjhe65srrgeipjmfqqpfm23jxa565z5kvillhycwom52kq.ipfs.dweb.link/"/>
    </div>
    <p className='text-xl font-bold text-center'>Mushroom Party Soliders</p>
    <p className=' text-center text-pink-600'>LIVE</p>
    <div className='flex justify-center gap-2 mb-2'>
    <a className='text-sm border  border-dark rounded px-4 py-1'>ITEMS <span className='ml-1 font-bold'>2000 </span>  </a>
    <a className='text-sm border  border-dark rounded px-4 py-1'>PRICE <span className='ml-1 font-bold'>0.002 ETH </span>  </a>
    </div>
  </div>

  )
}


export default Card