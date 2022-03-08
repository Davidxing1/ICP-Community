import React, { Fragment, useState } from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"
import Link from "next/link";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const types = [
  { id: 1, name: 'Trending' },
  { id: 2, name: 'Newest' },
]

const ExploreTop = () =>{
  const [selected, setSelected] = useState(types[0])
  return(
    <>
      <div className="md:flex justify-between ">
        <div>
          <Listbox value={selected} onChange={setSelected} >
            {({ open }) => (
              <>
                <div className=" relative ">
                  <Listbox.Button className="mb-5 md:mb-0  border-gray-300 flex justify-center w-30 bg-gray-700  rounded-full   px-5  py-2 text-left cursor-default   sm:text-base">
                    <span className=" text-white "> {selected.name}</span>
                    <span className="mt-0.5 inset-y-0  right-0 flex items-center   pointer-events-none">
                                                <SelectorIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                                </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 w-36 xl:w-44 bg-gray-700 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto  sm:text-sm">
                      {types.map((type) => (
                        <Listbox.Option
                          key={type.id}
                          className={({ active }) =>
                            classNames(
                              active ? 'text-indigo-600 ' : 'text-gray-200',
                              'cursor-default select-none relative py-2 pl-8 pr-4'
                            )
                          }
                          value={type}
                        >
                          {({ selected, active }) => (
                            <>
                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {type.name}
                        </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-indigo-600 ' :"text-gray-200",
                                    'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                  )}
                                >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
        <div>
          <fieldset>
            <div className="relative flex items-start mt-3">
              <div className="flex items-center h-5">
                <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox"
                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600  border-gray-300 rounded"/>
                <label htmlFor="comments" className="font-light text-gray-300 text-xl ml-2">
                  Recommended</label>
              </div>
            </div>
          </fieldset>

        </div>
      </div></>
  )
}

const Explore = () =>{
  const task=[
    {
      id:"1",
      a:"",
      img:"https://d257b89266utxb.cloudfront.net/galaxy/images/rhizomedao/1646123036808267888.gif",
      title:"Alpaca Comics NFT 2",
      logo:"https://d257b89266utxb.cloudfront.net/galaxy/images/1645344717/1645344717-logo-1645344718.png",
      name:"Alpace City",
    },
    {
      id:"2",
      a:"",
      img:"https://d257b89266utxb.cloudfront.net/galaxy/images/web3games/1646218211355637524.gif",
      title:"Web3Games Community AMA 0304",
      logo:"https://d257b89266utxb.cloudfront.net/galaxy/images/1645008652/1645008652-logo-1645008652.png",
      name:"Web3Games",
    },
    {
      id:"3",
      a:"",
      img:"https://d257b89266utxb.cloudfront.net/galaxy/images/opendao/1646154387853663061.png",
      title:"Alpaca Comics NFT 2",
      logo:"https://d257b89266utxb.cloudfront.net/galaxy/images/1643608097/1643608097-logo-1643608097.png",
      name:"OpenDao",
    },
    {
      id:"4",
      a:"",
      img:"https://d257b89266utxb.cloudfront.net/galaxy/images/bitbtc/1646048276602415535.jpg",
      title:"“Who’s Satoshi Nakamoto” Whitelist Campaign1/2",
      logo:"https://d257b89266utxb.cloudfront.net/galaxy/images/1645541388/1645541388-logo-1645541389.png",
      name:"BitBTC",
    },
    {
      id:"5",
      a:"",
      img:"https://d257b89266utxb.cloudfront.net/galaxy/images/theweirdoghostgang/1645943727296353287.gif",
      title:"Secret Action-World Peace ",
      logo:"https://d257b89266utxb.cloudfront.net/galaxy/images/1645344717/1645344717-logo-1645344718.png",
      name:" The Weirdo Ghost Gang ",
    },
  ]
  return (
    <div className="mx-auto  dark:bg-current  transition duration-700">
      <Header/>
      <div className="relative pt-16">
        <div className="absolute inset-x-0 bottom-0    " />
        <div className="bg-black bg-opacity-90 mx-auto">
          <div className="max-w-7xl relative px-5   sm:px-6 py-24 lg:py-32 mx-auto ">
            <ExploreTop/>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5">
              {task.map(item=>(
              <a href={item.a} key={item.id} className="bg-black    rounded-2xl  transform transition duration-300  hover:scale-105">
                <img className="rounded-t-2xl h-60 mx-auto" src={item.img} alt='' />
                <div className="p-6">
                  <div className="text-white font-semibold text-lg mb-5 h-14 overflow-ellipsis overflow-hidden ">
                    {item.title}
                  </div>
                  <div className="flex">
                    <div>
                      <img className="w-8 h-8  rounded-full" src={item.logo} alt='' />
                    </div>
                    <div className="ml-4 mt-1.5 text-gray-300 text-sm hover:text-white truncate">
                      {item.name}
                    </div>
                  </div>
                </div>
              </a>
              ))}
            </div>

          </div>
        </div>
      </div>
      <Tail/>
    </div>
  )
}

export default Explore

