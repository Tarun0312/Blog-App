import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import BlogDetails from '../components/BlogDetails';
import { AppContext } from '../context/AppContext';


const BlogPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const { loading, setLoading } = useContext(AppContext);
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const blogId = location.pathname.split("/").at(-1);
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";

  async function fetchRelatedBlogs() {
    setLoading(true)
    try {

      const url = `${newBaseUrl}get-blog?blogId=${blogId}`
      const response = await fetch(url);
      const data = await response.json();
      console.log(url, data);

      if (data === undefined || data.length === 0) {
        throw new Error("Error aaya");
      }
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
      console.log(relatedBlogs)

    } catch (e) {

      console.log(e)
      setBlog(null)
      setRelatedBlogs([])
    }
    setLoading(false)
  }

  useEffect(() => {

    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [location.pathname])

  console.log("page blog")

  return (
    <div className='w-11/12 max-w-2xl mx-auto flex flex-col gap-4'>
      <div className="w-full pt-[6rem]">
        <button
          className="border-2 border-gray-300 py-1 px-4 rounded-md max-w-[5rem]"
          onClick={() => navigate(-1)}
        >
          Back
        </button>

      </div>

      <div className="w-full flex flex-col pb-[5rem]">
        {
          loading ?
            (<div >
              <h2>Loading</h2>
            </div>) :
            (blog) ?
              (<div >

                {/* Current blogs */}

                <BlogDetails post={blog} />

                {/* Related Blogs  */}
                <h1 className='font-bold text-3xl my-[2.5rem]'>Related Blogs</h1>

                <div className='flex flex-col gap-y-4'>
                  {
                    relatedBlogs.map((blog, index) => (
                      <BlogDetails
                        key={index}
                        post={blog} />))
                  }
                </div>
              </div>) :
              (<div>No Blog Found</div>)
        }

      </div>


    </div>
  )
}

export default BlogPage