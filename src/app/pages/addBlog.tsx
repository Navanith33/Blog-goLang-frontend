import { useAppDispatch, useAppSelector } from "app/features/hooks";
import { enableaddBlog, setContent, setTitle, useAddSlice } from "app/features/slice";
import React from "react";
function CreateBlog(){
    const addslice = useAddSlice();
    const title = useAppSelector((state)=>state.AddBlog.Title);
    const content = useAppSelector((state)=>state.AddBlog.Content);
    const dispatch = useAppDispatch();

   const handleClick = ()=>{
    alert("add blog");
    dispatch(enableaddBlog());
   }

    return(
        <>
        <h1>Add Blog</h1>
          <input 
          type="text"
          placeholder="title"
          onChange={(e) => dispatch(setTitle(e.target.value))} 
          value={title} 
        />
          <input 
          type="text"
          placeholder="content"
          onChange={(e) => dispatch(setContent(e.target.value))} 
          value={content} 
        />
        <button onClick={handleClick}>
            add blog
        </button>
        </>
    )
}
export default CreateBlog;