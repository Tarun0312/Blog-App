import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Template from "../components/Template";


const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replace("-", " ");

  console.log("Page Tag");
  return (
    <div className="w-11/12 max-w-2xl mx-auto flex flex-col">

          <div className="w-full flex gap-x-4 pt-[5rem] items-center pb-[1rem]">
                <button
                className="border-2 border-gray-300 py-1 px-4 rounded-md max-w-[5rem]" 
                onClick={() => navigate(-1)}>Back</button>

                <h2 className="font-bold text-xl">
                  Blogs Tagged <span className="text-lg font-semibold underline text-blue-700 ">#{tag}</span>
                </h2>
          </div>
          <Template />
    </div>
  );
};

export default TagPage;
