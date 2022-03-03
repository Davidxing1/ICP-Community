import React from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"
import { useAtom } from 'jotai';
import { loginstate, wallet,loginopen  } from '../../components/jotai';
import Login from '../../components/login/inde';


const Home = () =>{
  const [Wallet,setWallet]=useAtom(wallet)
  const [opentrue, setOpentrue] = useAtom(loginopen)
  const login =() => {
    setOpentrue(true)
  }
  return (
    <div className="mx-auto bg-gray-50 dark:bg-current  transition duration-700">
      <Header></Header>
      <Login></Login>
      <div className="px-4 w-full md:hidden border-t border-gray-700 fixed z-20 bottom-0 bg-gray-900">
        <div className="text-center my-2 text-gray-400" >
          You are NOT eligible
        </div>
        <div className="text-sm text-center mb-2 text-gray-400 flex">
          Minting transaction fee is covered by
          <div className="text-blue-500 pl-1">
            <a href=''>Project Galaxy</a>
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
      <div className=" mx-auto pt-16   ">
        <div className="md:flex  md:h-screen">
          <div className="flex justify-center px-2 bg-gradient-to-b from-gray-500 to-black  md:w-7/12">
            <div className=" mt-2  md:my-auto">
              <img className="  h-96 rounded-full" src='https://cdn.discordapp.com/attachments/876498266550853642/948879345190072320/llll.png' alt='' />

              <div className=" flex justify-center my-6 md:my-10 ">
                <img  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAeCAYAAAC7Q5mxAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOLSURBVHgB5Vr/ddQwDFZ4/Z/rBoEFuMcCDRPQxwIXWKDXBWjKAu0Gl2OBMgEJExQWIGWCY4IKqfb1Uje25Py48uB7T89tIsnyl8iynUsgAog4p4YlbV3ekPxIkqSG/xCJpECkZdQsSI5JZoJ6SbIek0zq/wTMQwvhlPr87bHPqTmCfYM6Tkkq7IdrtoeBIB8zkmNFf0XAR4kTwtfpCckGh+MM+pPHD/ASDYlSLBv4WwjkQeO46EUi2S3REoOGSAnZkxOI45O3RTSJZNNY28yKhOpJCVQGOQQLJXduLJW9Vin6mO2bwKT9xOHh8qQLNyRrEq6MUkV2wVXyha9auoMGU/nv7UhykgvB9Jz8F46veY9Y44BmvpHQoK2s1F55dPhpz3GXfi4KZTxu0eD4BhUTTz9cqDJJNI4aITC+n1rdhUenbPnzEcwEzIRY8g67SvDbRgZKkG6h8NdITqS5r8E48s4wjKUQT+Wxm+OAYjIlgaElQoPjksdYBWJJA3aF1dGsT1VzHo5EYBUwTkcmLxgQhufiTcSgC9gjgaEnygNaeO6VPci7QyCWRjDlNJ7JPeiKCY5EYB+UfcmzSDviEOfilm6FMjLYA4HPIB582pLbAHiHUcA4yIX7devvc5DRex8eBYw7NFhZG9/Tu7XXgycoHTFo0jdr6WvWhAxpyTRKCl+jDhrycnv/EP0DvO6IIcfIQeAIxQRHSuFvIKOktH2P5uUp4HF68I0PYA5UD0m+gn/79AseDoIbaZ9cK6+5OIGpgfLkHfvmSW/0wuk/RRmZJ/aqr621H57C1pE33dAQkwQ6iyHv0VYOlemL5pC3cqRBGdU+CPQ54gG/IbnwBYeGXA15jJXTr6Z4bDNA0gthFjnuNlQEclX7if3AW0ENeew/dfqVpg9E/YFqCMWkBEYMZggWHX2WqAgehx+KbmAiAu8X0vZTpGaB2gd80LluX0BTfY8Eu9q2Qz9LcoZlMAEO2v/waa4d2EdQfDNWgJ19ck+JLXKQT8DXaNK+FvRYJxN0zkC39BkONIcItzgMbL/0+NcsQdSny6g7YGC4K4Bp9sL0xlxS85LkCsxbFAPW56XDa+unCynIb8wXUMJ+Z6kVqksYGQe+GxTUDTXvcPfTjrew212003tLMA/iO5iUrSEM9rMSdD5DHE5B3nk8d/7neEvBJvgRLGqes2S+ArNd2+Lux0UcjOaL27+GP46dq+2sMjDMAAAAAElFTkSuQmCC' alt='' />

              </div>
              <div className="hidden md:inline-block  px-4 ">
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
                  You are NOT eligible
                </div>
                <div className="text-sm text-center  text-gray-300 flex">
                  Minting transaction fee is covered by
                  <div className="text-blue-500 ml-1">
                    <a href=''>Project Galaxy</a>
                  </div>
                </div>
              </div>
            </div>


          </div>
          <div className="bg-current md:w-8/12  md:pt-32 flex px-6 md:px-0 md:pl-16 ">
            <div>
              <div className="text-white font-semibold text-3xl">
                The end of Feb—Gift for Meta Cowboy
              </div>
              <div className="text-gray-400 mt-2 md:mt-6">
                The end of Feb—Gift for Meta Cowboy
              </div>
              <div className="text-gray-400">
                SnapFingersDAO wish all community member catch your cowboy!
              </div>
              <div className="text-indigo-600">
                <a href=''>
                  Join SnapFingersDAO </a>
              </div>
              <div  className="text-indigo-600">
                <a href=''>
                  Follow SnapFingersDAO Twitter</a>
              </div>
              <div className="text-white mt-4 md:mt-8">
                6666 NFTs have been minted.
              </div>
            </div>
          </div>
        </div>

      </div>
      <Tail></Tail>
    </div>
  )
}

export default Home
