import React from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"
import Login from '../../components/login/inde';
import Link from "next/link";

const tasks=[
  {

  },
]


const Task = () =>{

  return (
    <div className="mx-auto  dark:bg-current  transition duration-700">
      <Header></Header>
      <Login></Login>

      <div className="relative pt-16">
        <div className="absolute inset-x-0 bottom-0    " />
          <div className="bg-black bg-opacity-90 mx-auto">
            <div className="max-w-7xl relative px-5 py-16  sm:px-6 sm:py-24 lg:py-32 mx-auto ">
                  <div className="text-white text-3xl">
                    Task In Progress
                  </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  <Link href='/task/submittask'>
                  <a>
                  <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto p-10 px-24 xl:px-10  transform transition duration-300  hover:scale-105 text-center ">
                    <div className="text-xl md:text-2xl mb-2">
                      Task In Progress
                    </div>
                    <div className="text-base ">
                      Please click Task List Receive the task.
                    </div>

                    <Link href='/task/submittask'>
                    <a>
                    <button className="px-5 py-2 text-black mt-5  bg-gradient-to-r from-blue-300  to-red-300 rounded-2xl">
                      <div className="">
                      Task List
                      </div>
                    </button>
                    </a>
                    </Link>
                  </div>
                  </a>
                  </Link>
                </div>


              <div className="mt-32">
                  <div className="text-white text-3xl">
                    Completed Tasks
                  </div>
                <div className="mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible">

                  <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center ">
                    <div className="flex justify-center mb-5">
                      <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
                    </div>
                    <div className="text-base ">
                      The task is not completed, please work hard to complete the task
                    </div>
                  </div>



                </div>
              </div>
            </div>
          </div>
        </div>
      <Tail></Tail>
    </div>
  )
}

export default Task

