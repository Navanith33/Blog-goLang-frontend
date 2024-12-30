import { useAppDispatch, useAppSelector } from "app/features/hooks";
import { enableblog, useBlogSLice } from "app/features/slice";
import React, { useEffect, useState } from "react";
import LandingBar from "./landingbar";
function Blog(){
    const blogSlice  = useBlogSLice();
    const blogs = useAppSelector((state)=>state.Blog.blog);
    const dispatch = useAppDispatch();
    const isLoading= useAppSelector((state)=>state.Blog.isLoading);
    useEffect(()=>{
      dispatch(enableblog());
    },[])
    if(isLoading){
        return(
            <>
            loading...
            </>
        )
    }
    else{
        return (
            <>
               <LandingBar/>
               
                {blogs.map((blog, index) => (
                    <div>
                        {blog.Title}
                        <br>
                        </br>
                        {blog.Content}
                    </div>
                ))}
            </>
        );
    }

}
export default Blog;
