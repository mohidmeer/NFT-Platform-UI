import React, { useState,Fragment } from 'react'
import { FaWallet } from 'react-icons/fa';
import { Dialog, Transition } from '@headlessui/react'

import Logo from '../../logo.png'
const Navbar = () => {
  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="p-4 bg-app  flex  justify-between border-b-2 border-white">
      <div>
        <img src={Logo}  width={160} alt="" />
      </div>

      <div className="w-1/3 hidden sm:block rounded-full  border border-pink-600    ">
        <div className="relative flex items-center w-full h-10 rounded-full focus-within:shadow-lg bg-app overflow-hidden">
          <div className="grid place-items-center h-full w-12 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className=" autofill:bg-slate-600    h-full w-full outline-none text-sm bg-app text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Search something.."
          />
        </div>
      </div>

      <button onClick={openModal} className=" truncate flex bg-transparent hover:bg-pink-600 text-blue-dark font-semibold hover:text-gray-700 py-2 px-4 border border-pink-600 hover:border-transparent rounded  ">
        <span className='border-r mr-2 border-pink-600'>
        <FaWallet className='mt-1  mr-2'/>
        </span>
        Connect Wallet
      </button>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Connect a wallet to continue
                  </Dialog.Title>
                  <div className="mt-2">
                  <div class="p-4 relative pt-0">
   <ul>
      <li class=" border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10  hover:border-green-200 border-2 transition-all rounded-lg">
         <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
            <img height="28" width="28" src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreies74clpwa2jslad2ehkxqk6hn7z2tsoxhpg3g6lxtrx2ycmthhn4.ipfs.nftstorage.link/" alt="MetaMask icon" class="mr-3"/>
            <div class="flex flex-col"><span>MetaMask</span></div>
         </button>
      </li>
      <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
         <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
            <img height="28" width="28" src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreifuvwajsm2dafjrhkafl3xia4outp6jxvsunuwzhxj6dajd3lnauu.ipfs.nftstorage.link" alt="WalletConnect icon" class="mr-3"/>
            <div class="flex flex-col"><span>WalletConnect</span></div>
         </button>
      </li>
      <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
         <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
            <img height="28" width="28" src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreianpwjvletuksfg6gvptwaf5qp6diejubzgf3izq2uaks42qtsrii.ipfs.nftstorage.link/" alt="Coinbase icon" class="mr-3"/>
            <div class="flex flex-col"><span>Coinbase</span></div>
         </button>
      </li>
      <li class="my-4 border-transparent p-2 hover:bg-green-200 hover:bg-opacity-10 hover:border-green-200 border-2 transition-all rounded-lg">
         <button class="flex items-center w-full text-white-primary text-lg font-medium text-left">
            <img height="28" width="28" src="https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreihv3ulcprsjlie6mhtxwhd63375nhcjubh2tkit2p6hjdm5ozrkda.ipfs.nftstorage.link/" alt="Crypto.com icon" class="mr-3"/>
            <div class="flex flex-col"><span>Crypto.com</span></div>
         </button>
      </li>
   </ul>
</div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Navbar