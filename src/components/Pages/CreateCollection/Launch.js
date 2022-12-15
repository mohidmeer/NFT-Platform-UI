import { Tab } from '@headlessui/react'
import React from 'react'

const Launch = () => {
  return (
    <div className='p-6 '>
       <p className='font-bold text-sm text-gray-700'>Step 6 of 6</p>
       <div className='justify-center'>
       <Tab.Group>
      <Tab.List  className={`flex gap-6 mb-3 justify-center`}>
        <Tab as='button'  className={ `tab-menu  `}>List NFT</Tab>
        <Tab as='button'  className={`tab-menu `}>Auction NFT</Tab>
        <Tab as='button'  className={`tab-menu `}>Drop Collection</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel className={`w-2/3 mx-auto`}>

        <div class="mb-4 mt-4">
            <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">Collection Name</label>
            <input type='text' id="disname" placeholder='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
      </div>
      <div class="mb-4">
       <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">Start Date</label>
       <input type='date' id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
     </div>
        </Tab.Panel>
        <Tab.Panel className={`w-2/3 mx-auto`}>

        <div class="mb-4 mt-4">
            <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">Auction Name</label>
            <input type='text' id="disname" placeholder='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
      </div>
      <div class="mb-4">
       <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">Start Date</label>
       <input type='date' id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
     </div>
      <div class="mb-4">
       <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">End Date</label>
       <input type='date' id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
     </div>
        </Tab.Panel>
        <Tab.Panel className={`w-2/3 mx-auto`}>

        <div class="mb-4 mt-4">
            <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">Drop Collection</label>
            <input type='text' id="disname" placeholder='' class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
      </div>
      <div class="mb-4">
       <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">Start Date</label>
       <input type='date' id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
     </div>
      <div class="mb-4">
       <label  class="block mb-2 font-bold  text-gray-900 dark:text-white">End Date</label>
       <input type='date' id="disname" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
     </div>
        </Tab.Panel>
        
        
      </Tab.Panels>
    </Tab.Group>

       </div>
 <div className='w-2/3 mx-auto'>
 <p className='font-bold'>By participating in the Social Mint Marketplace you understand all the risks in the NFT and Crypto Market and assume those risks of your own volition. Furthermore you hold Social Mint LLC. harmless from any and all damages as a result of participating in the marketplace. In addition you have read and agree to all the Terms of Service and Privacy Policy in their entirety.</p>
 <div className='flex justify-center'>
        <button  className=' mt-2 p-3  w-52 flex justify-center rounded-lg text-white font-bold text-sm bg-pink-600'>
              Submit 
        </button>

        </div>
 </div>
    </div>
  )
}

export default Launch