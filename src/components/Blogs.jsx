import { useContext } from "react";
import { useLocation} from "react-router-dom";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  console.log("components blog");
  const { posts, loading} = useContext(AppContext);
  const location=useLocation()
  const x=location.pathname;

  return (
    <div className="flex flex-col pt-[-8rem]">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : 
      (<div className={`${ x.includes("categories") || x.includes("tag") ? "pb-[5rem]" : ("py-[5rem]")} w-full max-w-2xl mx-auto flex flex-col gap-y-10`}>
        {posts.map((post, index) => (
          <BlogDetails post={post} key={index} />

        ))}
      </div>

      )}
    </div>
  );
}
{/* <div key={post.id} className="w-11/12 max-w-2xl mx-auto">
            <p className="font-bold text-lg">{post.title}</p>
            <p className="text-sm my-1">
              By <span className="italic">{post.author}</span> on{" "}
              <span className="font-semibold underline cursor-pointer">{post.category}</span>
            </p>
            <p className="text-sm">Posted On {post.date}</p>
            <p className="mt-4 mb-2">{post.content}</p>
            <div className="flex flex-wrap gap-x-2 items-center">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold underline text-blue-700 cursor-pointer">{`#${tag}`}</span>
              ))}
            </div>
          </div> */}