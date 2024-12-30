import { useAppDispatch, useAppSelector } from "app/features/hooks";
import { enableblog, useBlogSLice } from "app/features/slice";
import React, { useEffect, useState } from "react";
import LandingBar from "./landingbar";
function Blog(){
    const blogSlice  = useBlogSLice();
    const blogs = useAppSelector((state)=>state.Blog);
    const dispatch = useAppDispatch();
    const [isLoading,setloading]= useState(true);
    useEffect(()=>{
      dispatch(enableblog());
      setloading(false);
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
               
                {blogs.blog.map((blog, index) => (
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
