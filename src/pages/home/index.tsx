import React from "react"
import Header from "../../components/header"
import Tail from "../../components/tail"
import {useRouter} from "next/router";
import HomeContent from "../../components/homecontent";





const Home = () =>{
    return (
      <div className="mx-auto  dark:bg-current  transition duration-700">
        <Header></Header>
        <HomeContent></HomeContent>
        <Tail></Tail>
      </div>
    )
}

export default Home

