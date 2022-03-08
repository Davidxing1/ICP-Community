import React from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"

const spaces=[
  {
    id:"1",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/galaxyspace/galaxyspace-logo-1640145282.png",
    title:"Galaxy Space",
  },
  {
    id:"2",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/bsc-logo.png",
    title:"BNB Chain",
  },
  {
    id:"3",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/1635133810/1635133810-logo-1635133810.jpeg",
    title:"Polygon Studios",
  },
  {
    id:"4",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/1643707204/1643707204-logo-1643707204.png",
    title:"Solana",
  },
  {
    id:"5",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/1639437714/1639437714-logo-1639437713.png",
    title:"CoinList",
  },
  {
    id:"6",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/yearn-icon.png",
    title:"Yearn Finance",
  },
  {
    id:"7",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/alpaca-icon.png",
    title:"Alpaca Finance",
  },
  {
    id:"8",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/1642609357/1642609357-logo-1642609356.png",
    title:"CoinGecko",
  },
  {
    id:"9",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/perp-logo.png",
    title:"Perpetual Protocol",
  },
  {
    id:"10",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/multicoin-logo.jpg",
    title:"Multicoin Capital",
  },
  {
    id:"11",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/logo/injective-logo.png",
    title:"Injective",
  },
  {
    id:"12",
    a:"",
    img:"https://d257b89266utxb.cloudfront.net/galaxy/images/1634534074/1634534074-logo-1634534073.jpeg",
    title:"The Defiant",
  },
]

const Square = () =>{

  return (
    <div className="mx-auto  dark:bg-current  transition duration-700">
      <Header/>
      <div className="relative pt-16">
        <div className="absolute inset-x-0 bottom-0    " />
        <div className="bg-black bg-opacity-90 mx-auto">
          <div className="max-w-7xl relative px-5 pb-16 pt-16 sm:px-6 sm:pb-24 lg:pb-32 mx-auto ">
            <div className="flex">
            <div className="flex justify-center z-10 text-gray-700 text-3xl py-3 ml-4 -mr-11">
              <i className="fa fa-search" aria-hidden="true"></i></div>
            <input type="text"
                   className="pl-12 bg-gray-700 bg-opacity-30 text-xs md:text-sm text-white  rounded-full p-3  border-black w-96 border hover:border-white focus:border-white transition duration-300  outline-none"
                   placeholder="Search Spaces"
            /> </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {spaces.map(item=>(
                <a key={item.id} href={item.a} className="bg-gray-700  rounded-lg p-5 transform transition duration-300  hover:scale-105">
                  <div className="">
                    <img className="rounded-full mx-auto w-24 h-24"
                         src={item.img} alt='' />
                  </div>
                  <div className="text-white text-center mt-2">
                    {item.title}
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

export default Square

