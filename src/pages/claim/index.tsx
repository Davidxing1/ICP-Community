import React from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"
import { useAtom } from 'jotai';
import { loginstate, wallet,loginopen  } from '../../components/jotai';
import Login from '../../components/login';


const Claim = () =>{
  const [Wallet,setWallet]=useAtom(wallet)
  const [opentrue, setOpentrue] = useAtom(loginopen)
  const login =() => {
    setOpentrue(true)
  }
  return (
    <div className="mx-auto bg-gray-50 dark:bg-current   transition duration-700">
      <Header></Header>
      <Login></Login>
      <div className="px-4 w-full xl:hidden border-t border-gray-700 fixed z-20 bottom-0 bg-gray-900">
        <div className="text-center my-2 text-gray-400" >
          You are NOT Claim
        </div>
        <div className="text-sm  mb-2 text-gray-400 flex justify-center">
          Designed by the PlayerLink team
          <div className="text-blue-500 pl-1">
            <a href='https://twitter.com/playerlink_io'>PlayerLink</a>
          </div>
        </div>
        <div className={Wallet?"hidden":"flex justify-center mb-2  mx-auto"}>
          <button  className="bg-blue-600  font-semibold  w-full   py-3 text-white rounded-lg  ">
            Connect Wallet
          </button>
        </div>
        <div className={Wallet?"flex justify-center mb-2  mx-auto":"hidden"}>
          <button  className="bg-blue-600  font-semibold  w-full   py-3 text-white rounded-lg  ">
            Claim
          </button>
        </div>

      </div>
      <div className=" mx-auto pt-16    ">
        <div className="xl:flex  xl:h-screen ">
          <div className="flex justify-center px-2 bg-gradient-to-b from-gray-500 to-black  xl:w-7/12">
            <div className=" mt-4  xl:my-auto">
              <img className="  md:h-96 rounded-full" src='https://cdn.discordapp.com/attachments/876498266550853642/948879345190072320/llll.png' alt='' />

              <div className=" flex justify-center my-6 xl:my-10 ">
                <img className="h-8 w-18" src="https://cdn.discordapp.com/attachments/876498266550853642/949239933556645938/Pl.png" alt=""/>
              </div>
              <div className="hidden xl:inline-block   px-12 ">
                <div  className={Wallet?"hidden":"flex justify-center mb-2  mx-auto"}>
                  <button onClick={login} className="bg-blue-600 transition duration-700 font-semibold  w-full  px-4 py-3 text-white rounded-lg  flex justify-center">
                    Connect Wallet
                  </button>
                </div>
                <div className={Wallet?"":"hidden"}>
                  <button  className="bg-blue-600  font-semibold  w-full   py-3 text-white rounded-lg  ">
                    Claim
                  </button>

                </div>



                <div className="text-center mt-6 text-gray-300" >
                  You are NOT claim
                </div>
                <div className="text-sm text-center  text-gray-300 flex">
                  Designed by the PlayerLink team
                  <div className="text-blue-500 ml-1">
                    <a href='https://twitter.com/playerlink_io'>PlayerLink</a>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="bg-current  xl:w-8/12  md:p-32 flex  p-6  xl:px-0 xl:pl-16 ">
            <div>
              <div className="text-white font-semibold text-3xl">
                PlayerLink Community Member Exclusive
              </div>
              <div className="text-gray-400 mt-2 xl:mt-6">
                An infinitely growing and non-transferable badge of community identity
              </div>
              <div className="text-gray-400">
                This medal can be upgraded by publishing, completing tasks or consuming PL!
              </div>
              <div className="text-indigo-600">
                <a href='https://discord.com/invite/Hypkryxwsb'>
                  Join PlayerLink Discord </a>
              </div>
              <div  className="text-indigo-600">
                <a href='https://twitter.com/playerlink_io'>
                  Follow PlayerLink Twitter</a>
              </div>
              <div className="text-white mt-4 xl:mt-8">
                XXX medals have been claimed.
              </div>
            </div>
          </div>
        </div>

      </div>
      <Tail></Tail>
    </div>
  )
}

export default Claim
