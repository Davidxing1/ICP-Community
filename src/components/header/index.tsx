import { Dialog, Disclosure, Listbox, Popover, Tab, Transition } from '@headlessui/react';
import Link from "next/link";
import { Switch } from '@headlessui/react'
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import React, {Fragment, useEffect, useState} from "react";
import {CheckIcon, ChevronDownIcon} from "@heroicons/react/solid";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const navigation = [
  { id:1 ,name: 'Explore', href: '/home' },
  { id:2 ,name: 'Spaces', href: '/' },
  { id:3 ,name: 'Credentials', href: '/' },
  { id:4 ,name: 'My NFTs', href: '/' },
  { id:5 ,name: 'Galaxy ID', href: '/' },
  { id:6 ,name: 'Blog', href: '/' },
  { id:7 ,name: 'Docs', href: '/' },

]


const Header=()=>{


  const [opentrue, setOpentrue] = useState(false)


  const login =() => {
    setOpentrue(true)

  }


  return(
    <header>
      <Popover className="relative bg-white  ">
        <div className="flex  fixed z-20 inset-x-0 bg-black    transition duration-700 mb-10 pl-5  justify-between items-center  p-3 sm:px-6 lg:justify-end md:space-x-10 lg:px-10  ">

          <div className=" flex w-full justify-between lg:justify-start">
            <div className="flex justify-start  ">
              <Link  href="/">
                <a>
                  <span className="sr-only">Workflow</span>
                  <img
                    className=" w-auto h-10 md:mt-3 "
                    src="https://cdn.discordapp.com/attachments/897398778166906911/918367143777673216/viewfile.png"
                    alt=""
                  />
                </a></Link>

            </div>



            <Tab.Group as="nav" className="hidden  lg:flex  space-x-10 py-3 pt-3 pl-10">

              {navigation.map((item) => (
                <Tab.List key={item.name}>
                  <Link  href={item.href}>
                    <a  className=" ">
                      <Tab  className={({ selected }) =>
                        classNames(
                          'w-full py-2.5 text-sm leading-5  rounded-lg text-base font-medium text-black  text-white ',
                          ' focus: ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                          selected
                            ? 'text-black font-semibold '
                            : ''
                        )
                      }>
                        {item.name}
                      </Tab>

                    </a>
                  </Link>
                </Tab.List>
              ))}





            </Tab.Group>
          </div>

          <div className="-mr-2  my-0.5 lg:hidden">
            <Popover.Button className="bg-white  rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>


          <div className="hidden lg:flex w-full justify-end md:flex-1 ">
            <div>
              <button onClick={login} className="bg-blue-600 transition duration-700  w-36 px-4 py-2 text-white rounded-lg mr-10 flex justify-center">
                Connect Wallet
              </button>
            </div>





          </div>


        </div>

        <div className="fixed z-20 inset-x-0">
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute my-auto  fixed z-20 inset-x-0  min-h-screen  inset-y-auto   p-2 transition transform origin-top-right lg:hidden"
            >
              <div className="rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-black   transition duration-700 divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-10 w-auto"
                        src='https://cdn.discordapp.com/attachments/897398778166906911/918367494304038982/viewfile.png'
                        alt="Workflow"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>

                </div>
                <div className="py-6 ">
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center ">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className="text-base font-medium text-gray-900  dark:text-white   transition duration-700 "
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>


                </div>
                <div className="flex justify-center p-5 items-center">
                  <div className=" w-full   ">
                    <div className="flex justify-center ">
                      <button  className="bg-black w-36 p-2 text-center text-white rounded-lg   ">
                        Connect Wallet
                      </button>
                    </div>


                  </div>
                </div>
              </div>
            </Popover.Panel>

          </Transition>
          <Transition.Root show={opentrue} as={Fragment}>
            <Dialog as="div" className="fixed z-20 inset-0 overflow-y-auto " onClose={setOpentrue}>
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
                  <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:y-8 sm:align-middle  sm:p-6 lg:p-12 ">
                    <div>
                      <div className='flex justify-between text-xl font-light	'>

                        <div className=" font-bold mb-2 text-2xl">
                          Connect your wallet
                        </div>
                        <button  onClick={() => setOpentrue(false)}
                                 className="fa fa-times " aria-hidden="true"></button>
                      </div>
                      <div className="text-base text-gray-600 w-96 mr-8">
                        Connect with one of available wallet providers or create a new wallet.</div>


                      <button className="bg-black flex justify-between text-white p-4 rounded-lg w-full my-8">
                        <div className="text-lg font-semibold">
                          MetaMask
                        </div>
                        <div>
                          <img className="w-8 h-8" src="https://portal.web3games.org/icon-wallet-metamask.svg" alt=""/>
                        </div>
                      </button>

                      <button className="bg-black flex justify-between text-white p-4 rounded-lg w-full my-8">
                        <div className="text-lg font-semibold">
                          WalletConnect
                        </div>
                        <div>
                          <img className="w-8 h-8" src="https://portal.web3games.org/icon-wallet-walletconnect.svg" alt=""/>
                        </div>
                      </button>
                      <button className="bg-black flex justify-between text-white p-4 rounded-lg w-full my-8">
                        <div className="text-lg font-semibold">
                          Polkadotjs
                        </div>
                        <div>
                          <img className="w-8 h-8 rounded-lg" src="https://cdn.discordapp.com/attachments/876498266550853642/908665467273613392/unknown.png" alt=""/>
                        </div>
                      </button>
                      <div className="text-sm text-gray-500 w-96 ">
                        We do not own your private keys and cannot access your funds without your confirmation.
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </Popover>
    </header>
  )
}

export default Header
