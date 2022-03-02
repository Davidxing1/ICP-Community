import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useAtom } from 'jotai';
import { loginstate, openaccount, wallet } from '../jotai';

const Account=()=>{
  const [loginState,setLoginstate]=useAtom(loginstate)
  const [openAccount,setOpenaccount]=useAtom(openaccount)
  //是否登陆钱包
  const [Wallet,setWallet]=useAtom(wallet)
  function closewallet(){
    setWallet(false)
    setOpenaccount(false)
  }
  return(
    <Transition.Root show={openAccount} as={Fragment}>
      <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto -mt-64 md:-mt-32" onClose={setOpenaccount}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4  text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:p-6 lg:p-12 ">
              <div>
                <div className='flex justify-between text-xl font-light	'>

                  <div className=" font-bold  text-2xl ">
                    Account
                  </div>
                  <button  onClick={() => setOpenaccount(false)}
                           className="fa fa-times " aria-hidden="true"></button>
                </div>
                <div className="text-gray-400 mt-2">
                  Your waller address
                </div>
                <div className="mt-5">
                  <button className="bg-gray-600 p-3 text-white rounded-full w-72 md:w-96">
                    {loginState}
                  </button>
                </div>
                <div className="mt-5 flex-col  justify-between ">
                  <div className="flex  justify-between  ">
                  <div className="">
                    <a href='' className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 ">
                    <i className="fa fa-location-arrow mt-0.5 mr-1" aria-hidden="true"></i><div>View on explorer</div></a>
                  </div>
                  <div>
                    <button className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
                    <i className="fa fa-clone mt-0.5 mr-1" aria-hidden="true"></i>
                    <div>Copy Address</div></button>
                  </div>
                  </div>
                  <div className="mt-2 flex justify-between">
                    <button  onClick={closewallet} className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 ">
                      <i className="fa fa-times mt-0.5 mr-1" aria-hidden="true"></i>
                      <div>Copy Address</div></button>
                    <div>
                  <button className="flex text-sm text-gray-800 transition duration-500 hover:text-blue-400 w-28">
                      <i className="fa fa-github mt-0.5 mr-1 " aria-hidden="true"></i>
                      <div>Bind Github</div>
                  </button>
                    </div>

                  </div>


                </div>

              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
export default Account
