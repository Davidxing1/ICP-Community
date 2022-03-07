import React from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"
import Login from '../../components/login';
import Link from "next/link";



const ClaimedTask = () =>{
  const Copy=()=> {
    // @ts-ignore
    const spanText = document.getElementById("name").value;
    const oInput = document.createElement('input');
    oInput.value = spanText;
    document.body.appendChild(oInput);
    oInput.select();
    document.execCommand('Copy');
    oInput.className = 'oInput';
    oInput.style.display = 'none';
    document.body.removeChild(oInput);
  }

  return (
    <div className="mx-auto  dark:bg-current  transition duration-700">
      <Header></Header>
      <Login></Login>

      <div className="relative pt-16">
        <div className="absolute inset-x-0 bottom-0    " />
        <div className="bg-black bg-opacity-90 mx-auto">
          <div className="max-w-7xl relative px-5 pb-16 pt-16 sm:px-6 sm:pb-24 lg:pb-32 mx-auto ">
            <div className="text-white text-5xl">
              Task In Progress
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
                    <div className="mt-3 flex" >
                      <input type="text"
                             className="bg-gray-700 bg-opacity-30 text-xs md:text-sm   rounded-2xl p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                             placeholder="Enter a Github Task URL"
                             id="name"
                      />
                    </div>

                  </div>
                  <div className="md:mt-5">
                    <button onClick={Copy} className="px-2 h-8 md:h-11  md:ml-5  text-sm  text-black mt-5 bg-gray-400  rounded-xl md:rounded-2xl">
                        Copy URL
                    </button>
                  </div>
                </div>
                <Link href=''>
                  <a  className="mt-3 flex justify-end">
                    <button onClick={() => window.history.back()} className="px-5 py-2 text-black mt-5  bg-gradient-to-r from-blue-300  to-red-300 rounded-2xl">
                      <div className="">
                        Back
                      </div>
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tail></Tail>
    </div>
  )
}

export default ClaimedTask
