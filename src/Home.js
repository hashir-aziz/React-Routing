import React from "react"
import { NavLink } from "react-router-dom"
import Header from "./Header"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div>
       <Header></Header>
      <Outlet></Outlet>

      <section>
          <h1>Home Page</h1>
        </section>
       
    </div>
  )
}

export default Home
