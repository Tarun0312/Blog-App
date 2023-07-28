import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
    console.log("components blogdetails");
  return (
    <div className='flex flex-col'>
        <NavLink 
        className="font-bold text-lg hover:underline transition duration-200"
        to={`/blogs/${post.id}`}>{post.title}</NavLink>


        <p
        className="text-sm my-1"
        > By  <span className='italic'>{post.author}</span> On <span>
            <NavLink 
            className="font-semibold underline cursor-pointer"
            to={`/categories/${post.category.replaceAll(" ","-")}`}>{post.category}</NavLink>
        </span></p>
        
        <p className="text-sm">Posted On <span>{post.date}</span></p>

        <p className="mt-4 mb-2">{post.content}</p>

        <div className="flex flex-wrap gap-x-2 items-center">
        {
            post.tags.map((tag,index) => <NavLink 
            to={`/tags/${tag.replaceAll(" ",'-')}`} 
            key={index}
            className="text-xs font-semibold underline text-blue-700 cursor-pointer"
            >#{tag}</NavLink>)
        }
        </div>
    
       
    </div>
  )
}

export default BlogDetails