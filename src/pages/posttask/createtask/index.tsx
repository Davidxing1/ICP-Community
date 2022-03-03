import React from "react"
import Header from "../../../components/header"
import Tail from "../../../components/tail"
import Login from '../../../components/login/inde';

const tasks=[
  {

  },
]


const CreateTask = () =>{

  return (
    <div className="mx-auto  dark:bg-current  transition duration-700">
      <Header></Header>
      <Login></Login>

      <div className="relative pt-16">
        <div className="absolute inset-x-0 bottom-0    " />
        <div className="bg-black bg-opacity-90 mx-auto">
          <div className="max-w-7xl relative px-5 pb-16 pt-16 sm:px-6 sm:pb-24 lg:pb-32 mx-auto ">
            <div className="text-white text-5xl">
              Create Task
            </div>

            <div className="mt-16 ">
                <div className="bg-gray-700 bg-opacity-20 text-white rounded-3xl  cursor-auto p-10   ">
                  <div className="text-xl md:text-2xl mb-10">
                    Task Information
                  </div>

                  <div className="md:flex  text-xl ">
                    <div>
                      Task Logo
                      <a href=''>
                      <div className="mt-3 md:p-5 w-28 h-28 text-center text-4xl rounded-2xl border-dashed border border-gray-500 hover:border-white transition duration-300">
                        <i className="fa fa-picture-o mt-8 md:mt-4" aria-hidden="true"></i>
                      </div>
                      </a>
                    </div>
                   <div className="mt-5 md:mt-0 md:ml-16 ">
                     Cover Image
                     <a href="">
                       <div className="mt-3 md:p-5  h-28 flex rounded-2xl border-dashed border border-gray-500 hover:border-white transition duration-300">
                         <div className=" text-4xl mr-5">
                         <i className="fa fa-picture-o mt-8 ml-3 md:mt-4 md:ml-4" aria-hidden="true"></i>
                         </div>
                         <div className="text-base mt-3 md:mt-0 xl:mt-3">
                         Drop files here to upload
                           <div className="text-gray-400 text-sm md:text-base">
                             Recommended size is 1600 x 400 pixels and less than 10 MB.
                           </div>
                         </div>
                       </div>

                     </a>

                   </div>
                  </div>
                  <div className="text-xl mt-10">
                    Task Name
                    <div className="mt-3 flex">
                    <input type="text"
                           className="bg-gray-700 bg-opacity-30 text-xs md:text-sm   rounded-2xl p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                           placeholder="Enter a Task Name"
                           id="Name"
                    />
                    </div>
                  </div>
                  <div className="text-xl mt-10">
                    Task Domain
                    <div className="text-gray-600 text-base">
                      Allow 9-20 letters temporarily
                    </div>
                    <div className="mt-3 flex">
                      <input type="text"
                             className="bg-gray-700 bg-opacity-30 text-xs md:text-sm   rounded-2xl p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                             placeholder="Enter a Task Domain"
                             id="Domain"
                      />
                      <div className="mt-3 ml-1 text-gray-200">
                        .playerlink
                      </div>
                    </div>
                  </div>
                  <div className="text-xl mt-10">
                    Task Introduction
                    <div className="mt-3 flex ">
                      <textarea
                             className="bg-gray-700 bg-opacity-30 text-xs md:text-sm break-normal h-32 rounded-2xl p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                             placeholder="Enter Task Introduction"
                             id="Introduction"
                      />
                    </div>
                  </div>

                  <a href='' className="mt-3 flex justify-end">
                    <button className="px-5 py-2 text-black mt-5  bg-gradient-to-r from-blue-300  to-red-300 rounded-2xl">
                      <div className="">
                        Task List
                      </div>
                    </button>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Tail></Tail>
    </div>
  )
}

export default CreateTask

