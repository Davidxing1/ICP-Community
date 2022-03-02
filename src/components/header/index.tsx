import { Popover, Tab, Transition } from '@headlessui/react';
import Link from "next/link";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import React, {Fragment, useEffect, useState} from "react";
import { loginstate,wallet,loginopen,openaccount } from '../jotai';
import { useAtom } from 'jotai';
import Login from '../login/inde';
import Account from '../account';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const navigation = [
  { id:1 ,name: 'Explore', href: '/explore' },
  { id:2 ,name: 'Spaces', href: '/' },
  { id:3 ,name: 'Credentials', href: '/' },
  { id:4 ,name: 'My NFTs', href: '/' },
  { id:5 ,name: 'Galaxy ID', href: '/' },
  { id:6 ,name: 'Blog', href: '/' },
  { id:7 ,name: 'Docs', href: '/' },

]



const Header=()=>{

  //打开登陆界面
  const [opentrue, setOpentrue] = useAtom(loginopen)
  //展示地址
  const [loginState,setLoginstate]=useAtom(loginstate)
  //是否登陆钱包
  const [Wallet,setWallet]=useAtom(wallet)
  //打开基本信息
  const [openAccount,setOpenaccount]=useAtom(openaccount)
  const login =() => {
    setOpentrue(true)

  }
  function account(){
    setOpenaccount(true)
  }



  return(
    <header>
      <Login></Login>
      <Popover className="relative bg-white  ">
        <div className="flex  fixed z-20 inset-x-0 bg-black    transition duration-700 mb-10 pl-5  justify-between items-center  p-3 sm:px-6 lg:justify-end md:space-x-10 lg:px-10  ">

          <div className=" flex w-full justify-between lg:justify-start">
            <div className="flex justify-start  ">
              <Link  href="/home">
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


          <div className="hidden lg:flex w-full  md:flex-1 ">
            <div className={Wallet?"hidden":""}>
              <button   onClick={login} className="bg-blue-600 transition duration-700  w-36 px-4 py-2 text-white rounded-lg  flex justify-center">
                Connect Wallet
              </button>
            </div>
            <div className={Wallet?"":"hidden"}>
              <div className="flex bg-gray-800 rounded-full p-1 justify-center">
                <div className="flex items-center mr-4 p-2">
                  <img className="w-6 h-6 rounded-lg mx-1"
                       src='https://portal.web3games.org/_next/image?url=%2Fnetworks%2Fethereum-network.jpg&w=48&q=75' alt='' />

                  <div className=" text-white">
                    Ethereum
                  </div>
                </div>

              <button    onClick={account} className=" bg-gray-600 rounded-full truncate  w-40 px-4 py-2 text-white rounded-lg  flex  ">
                {loginState}
              </button>
              </div>
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

        </div>
      </Popover>
      <Account></Account>
    </header>
  )
}

export default Header
