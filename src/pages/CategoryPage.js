import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Template from '../components/Template';

const CategoryPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const category = location.pathname.split("/").at(-1).replace("-", " ");
  console.log("page category")
  return (
    <div className="w-11/12 max-w-2xl mx-auto">
      <div className="w-full flex gap-x-4 pt-[5rem] pb-[1rem] items-center">
        <button
          className="max-w-[5rem] border-2 border-gray-300 py-1 px-4 rounded-md"
          onClick={() => navigate(-1)}
        >Back</button>

        <h2 className='font-bold text-xl'>Blogs on <span      className="text-lg font-semibold underline text-blue-700">{category}</span></h2>
      </div>

      <Template />
      
    </div>
  )
}

export default CategoryPage