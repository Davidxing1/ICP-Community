import React from "react"
import Header from "../../../components/header"
import Tail from "../../../components/tail"
import Link from "next/link";


const SubmitTask = () =>{

  return (
    <div className="mx-auto  dark:bg-current  transition duration-700">
      <Header/>
      <div className="relative pt-16">
        <div className="absolute inset-x-0 bottom-0    " />
        <div className="bg-black bg-opacity-90 mx-auto">
          <div className="max-w-7xl relative px-5 pb-16 pt-16 sm:px-6 sm:pb-24 lg:pb-32 mx-auto ">
            <div className="text-white text-5xl">
              Claim Task
            </div>

            <div className="mt-16 ">
                <div className="bg-gray-700 bg-opacity-20 text-white rounded-3xl  cursor-auto p-10   ">
                  <div className="text-xl md:text-2xl mb-10">
                    Task Information
                  </div>

                  <div className="md:flex  text-xl ">
                    <div>
                      Task Logo
                      <Link href=''>
                      <a href=''>
                      <div className="mt-3 md:p-5 w-28 h-28 text-center text-4xl rounded-2xl border-dashed border border-gray-500 hover:border-white transition duration-300">
                          {/*  show image*/}
                      </div>
                      </a>
                      </Link>
                    </div>
                   <div className="mt-5 md:mt-0 md:ml-16 ">
                     Cover Image
                     <Link href="">
                     <a>
                       <div className="mt-3 md:p-5  h-28 flex rounded-2xl border-dashed border border-gray-500 hover:border-white transition duration-300">
                       {/*  image*/}
                       </div>

                     </a>
                     </Link>

                   </div>
                  </div>
                  <div className="text-xl mt-10  md:flex">
                    <div>
                    Task URL
                    <div className="mt-3 flex">
                    <input type="text"
                           className="bg-gray-700 bg-opacity-30 text-xs md:text-sm   rounded-2xl p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                           placeholder="Enter a Github Task URL"
                           id="Name"
                    />

                    </div>

                    </div>
                    <div className="md:mt-5">
                    <button className="px-2 h-8 md:h-11  md:ml-5  text-sm  text-black mt-5 bg-gray-400  rounded-xl md:rounded-2xl">
                      <div className="">
                        Check URL
                      </div>
                    </button>
                    </div>

                  </div>
                  {/*<div className="text-xl mt-10">*/}
                  {/*  Task Domain*/}
                  {/*  <div className="text-gray-600 text-base">*/}
                  {/*    Allow 9-20 letters temporarily*/}
                  {/*  </div>*/}
                  {/*  <div className="mt-3 flex">*/}
                  {/*    <input type="text"*/}
                  {/*           className="bg-gray-700 bg-opacity-30 text-xs md:text-sm   rounded-2xl p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"*/}
                  {/*           placeholder="Enter a Task Domain"*/}
                  {/*           id="Domain"*/}
                  {/*    />*/}
                  {/*    <div className="mt-3 ml-1 text-gray-200">*/}
                  {/*      .playerlink*/}
                  {/*    </div>*/}
                  {/*  </div>*/}
                  {/*</div>*/}
                  {/*<div className="text-xl mt-10">*/}
                  {/*  Task Introduction*/}
                  {/*  <div className="mt-3 flex ">*/}
                  {/*    <textarea*/}
                  {/*           className="bg-gray-700 bg-opacity-30 text-xs md:text-sm break-normal h-32 rounded-2xl p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"*/}
                  {/*           placeholder="Enter Task Introduction"*/}
                  {/*           id="Introduction"*/}
                  {/*    />*/}
                  {/*  </div>*/}
                  {/*</div>*/}

                  <Link href=''>
                  <a  className="mt-3 flex justify-end">
                    <button className="px-5 py-2 text-black mt-5  bg-gradient-to-r from-blue-300  to-red-300 rounded-2xl">
                      <div className="">
                          Submit Claim
                      </div>
                    </button>
                  </a>
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Tail/>
    </div>
  )
}

export default SubmitTask

