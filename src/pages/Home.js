import React from 'react'
import Header from '../components/Header'
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs"
const Home = () => {

  console.log("page home");
  return (
    <div >
      <Header />
      <div>
        <Blogs />
        <Pagination />
      </div>

    </div>
  )
}

export default Home