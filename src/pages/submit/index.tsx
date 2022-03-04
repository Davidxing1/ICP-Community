import React from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"
import Login from '../../components/login/inde';
import Link from "next/link";

const claimedtasks=[
  {
    id: "1",
    href: "",
    logo: "https://cdn.discordapp.com/attachments/876498266550853642/948887549500325888/121.png",
    name: "Web3Games",
    members: "20",
    created: "17 Days",
    network: "Polygon",
    h1: " Transforming a new generation of gameplay and digital content Transforming a new generation of gameplay and digital conten"
  },
]
const completedtasks=[
  {
    id:"1",
    href:"",
    logo:"https://cdn.discordapp.com/attachments/876498266550853642/948887549500325888/121.png",
    name:"Web3Games",
    members:"20",
    created:"17 Days",
    network:"Polygon",
    h1:" Transforming a new generation of gameplay and digital content Transforming a new generation of gameplay and digital content",

  },
  {
    id:"1",
    href:"",
    logo:"https://cdn.discordapp.com/attachments/876498266550853642/948887549500325888/121.png",
    name:"Web3Games",
    members:"20",
    created:"17 Days",
    network:"Polygon",
    h1:" Transforming a new generation of gameplay and digital content Transforming a new generation of gameplay and digital content",

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
                    Create In Progress
                  </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  <Link href='/submit/createtask'>
                  <a>
                  <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto p-10 px-24 xl:px-10  transform transition duration-300  hover:scale-105 text-center ">
                    <div className="text-xl md:text-2xl mb-2">
                      Create In Progress
                    </div>
                    <div className="text-base ">
                      Please click Task List to Create the task.
                    </div>

                    <Link href='/submit/createtask'>
                    <a>
                    <button className="px-5 py-2 text-black mt-5  bg-gradient-to-r from-blue-300  to-red-300 rounded-2xl">
                      <div className="">
                      Create Task
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
                    Created Tasks
                  </div>
                <div  className={claimedtasks.length?"mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto  md:overflow-visible":"hidden"}>
                  {claimedtasks.map(item=>(
                    <a key={item.id} href={item.href} className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105   ">
                      <div className="flex  mb-5 justify-between">
                        <div className="flex">
                          <div>
                            <img className="w-10 h-10 border rounded-lg" src={item.logo} alt='' />
                          </div>
                          <div>
                            <div className="mt-2 ml-2  bg-gradient-to-r from-green-400 to-blue-500 rounded-lg px-2">
                              {item.name}
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 text-gray-400 hover:text-white transform transition duration-300 ">
                          <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="flex text-left">
                        <div className="mr-5">
                          <div className="">
                            {item.members}
                          </div>
                          <div className="text-gray-400 text-sm">
                            Members
                          </div>
                        </div>
                        <div className="mr-5">
                          <div>
                            {item.created}
                          </div>
                          <div className="text-gray-400 text-sm">
                            Created
                          </div>
                        </div>
                        <div>
                          <div>
                            {item.network}
                          </div>
                          <div className="text-gray-400 text-sm">
                            Network
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 h-12   overflow-hidden overflow-ellipsis">
                        {item.h1}
                      </div>
                    </a>
                  ))}
                </div>
                <div className={claimedtasks.length?"hidden":"mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible"}>
                  <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center ">
                    <div className="flex justify-center mb-5">
                      <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
                    </div>
                    <div className="text-base ">
                      The task is not completed, please Wait patiently
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-32">
                <div className="text-white text-3xl">
                  Completed Tasks
                </div>
                <div  className={completedtasks.length?"mt-16 flex md:grid md:grid-cols-2 gap-4   xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible":"hidden"}>
                  {completedtasks.map(item=>(
                    <a key={item.id} href={item.href} className="bg-gray-500 bg-opacity-20  text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105   ">
                      <div className="flex  mb-5 justify-between">
                        <div className="flex">
                          <div>
                            <img className="w-10 h-10 border rounded-lg" src={item.logo} alt='' />
                          </div>
                          <div>
                            <div className="mt-2 ml-2  bg-gradient-to-r from-green-400 to-blue-500 rounded-lg px-2">
                              {item.name}
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 text-gray-400 hover:text-white transform transition duration-300 ">
                          <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div className="flex text-left">
                        <div className="mr-5">
                          <div className="">
                            {item.members}
                          </div>
                          <div className="text-gray-400 text-sm">
                            Members
                          </div>
                        </div>
                        <div className="mr-5">
                          <div>
                            {item.created}
                          </div>
                          <div className="text-gray-400 text-sm">
                            Created
                          </div>
                        </div>
                        <div>
                          <div>
                            {item.network}
                          </div>
                          <div className="text-gray-400 text-sm">
                            Network
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 h-12   overflow-hidden overflow-ellipsis">
                        {item.h1}
                      </div>
                    </a>
                  ))}
                </div>
                <div className={completedtasks.length?"hidden":"mt-16 flex md:grid md:grid-cols-2 gap-4  xl:grid xl:grid-cols-3 gap-4 xl:gap-10 overflow-x-auto md:overflow-visible"}>

                  <div className="bg-gray-500 bg-opacity-20 text-white rounded-3xl  cursor-auto  p-10 px-10  transform transition duration-300  hover:scale-105 text-center ">
                    <div className="flex justify-center mb-5">
                      <img src='https://web3games.showme.fan/static/svgs/www.svg' alt='' />
                    </div>
                    <div className="text-base ">
                      The task is completed, please go on to claim a new task
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

