import { useAppDispatch, useAppSelector } from "app/features/hooks";
import { enableuserblog, useUserblog } from "app/features/slice";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function UserProfile(){
     const trigger = useUserblog();
     const blogs = useAppSelector((state)=>state.userBlog.blog);
     const dispatch = useAppDispatch();
     const navigate = useNavigate();
     const isLoading= useAppSelector((state)=>state.userBlog.isLoading);
     const handleclick = () =>{
         navigate('/addBlog');
     }
     useEffect(()=>{
        dispatch(enableuserblog());
     },[]);
     if(isLoading){
        return(<>
        loading...
        </>)
     }
     else{
return (
<>
<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h1>
      blog app
    </h1>
    <div>
      <button onClick={handleclick}>
        createblog
      </button>
    </div>
  </div>
                {blogs.map((blog) => (
                    <div>
                        {blog.Title}
                        <br>
                        </br>
                        {blog.Content}
                    </div>
                ))}
            </>
)

     }

}
export default UserProfile;