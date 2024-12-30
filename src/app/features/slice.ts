import { createSlice } from '@reduxjs/toolkit';
import {Addblogsaga, blogsaga, Loginsaga, Signupsaga, userblogsaga} from './saga';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';

export interface Email {
  email: string;
  password: string;
  success:boolean;
}

const initialState: Email = {
  email: '',
  password: '',
  success:false
};

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    setEmail(state, actions) {
      state.email = actions.payload;
    },
    setPassword(state, actions) {
      state.password = actions.payload;
    },
    setloginSuccess(state,actions){
      state.success=actions.payload;
    },
    enablelogin(state){
      // state.email=,
      // state.password=''
    }
  },
});
export const useLoginSlice = () => {
  useInjectReducer({ key: loginSlice.name, reducer: loginSlice.reducer });
  useInjectSaga({ key: loginSlice.name, saga: Loginsaga });
  return { actions: loginSlice.actions };
};

export const { setEmail,setloginSuccess,setPassword,enablelogin } = loginSlice.actions;

export interface SignupType {
  email: string;
  password: string;
  role:string;
  success:boolean;
}
const initialsignupstate: SignupType = {
  email: '',
  password: '',
  role:'',
  success:false
};

const signupSlice = createSlice({
  name: 'signupSlice',
  initialState:initialsignupstate,
  reducers: {
    setsignupEmail(state, actions) {
      state.email = actions.payload;
    },
    setsignupPassword(state, actions) {
      state.password = actions.payload;
    },
    setrole(state, actions) {
      state.role= actions.payload;
    },
    setSuccess(state,actions){
      state.success=actions.payload;
    },
    enableSignup(state){
      // state.email=,
      // state.password=''
    }
  },
});
export const useSignupSlice = () => {
  useInjectReducer({ key: signupSlice.name, reducer: signupSlice.reducer });
  useInjectSaga({ key: signupSlice.name, saga: Signupsaga });
  return { actions: signupSlice.actions };
};

export const { setsignupEmail, setsignupPassword,enableSignup,setrole,setSuccess} = signupSlice.actions;
////
export interface BlogType{
  Title:string;
  Content:string;
}
export interface Blogarray{
  isLoading:boolean
  blog: BlogType[]
}
const blogInitail:Blogarray={
  isLoading:true,
  blog :[]
}

const blogSlice = createSlice({
  name:"blogSlice",
  initialState:blogInitail,
  reducers:{
    setBlog(state,actions){
      state.blog=actions.payload;
    },
    setLoading(state,actions){
      state.isLoading=actions.payload;
    },
    enableblog(state){
      state.isLoading=true;
    }
  }
})
export const useBlogSLice = () =>{
  useInjectReducer({key:blogSlice.name,reducer:blogSlice.reducer});
  useInjectSaga({key:blogSlice.name,saga:blogsaga})
}
export const {setBlog,setLoading,enableblog}=blogSlice.actions;
///////
export interface AddBlog{
  Title:string,
  Content:string
}
const initialaddBlog:AddBlog={
  Title:'',
  Content:''
}
export const AddSlice = createSlice({
  name:"AddSlice",
  initialState:initialaddBlog,
  reducers:{
      setTitle(state,actions){
        state.Title=actions.payload;
      },
      setContent(state,actions){
        state.Content=actions.payload;
      },
      enableaddBlog(){

      }
  }
})

export const useAddSlice = ()=>{
  useInjectReducer({key:AddSlice.name,reducer:AddSlice.reducer});
  useInjectSaga({key:AddSlice.name,saga:Addblogsaga});
}

export const { enableaddBlog,setTitle,setContent}=AddSlice.actions;
/////
export interface userblog{
  Title:string;
  Content:string;
}
export interface userblogarray{
  isLoading:boolean
  blog:userblog[];
}
const initialuserblogarray:userblogarray={
  isLoading:true,
  blog:[]
}
export const userblog = createSlice({
  name:"userblog",
  initialState:initialuserblogarray,
  reducers:{
     setuserblog(state,actions){
      state.blog=actions.payload;
     },
     setisLoading(state,actions){
      state.isLoading=actions.payload;
     },
     enableuserblog(state){
      state.isLoading=true;
     }
  }
})
export const useUserblog = ()=>{
  useInjectReducer({key:userblog.name,reducer:userblog.reducer});
  useInjectSaga({key:userblog.name,saga:userblogsaga});
}
export const{setuserblog,setisLoading,enableuserblog}=userblog.actions
export default{
  loginReducer:loginSlice.reducer,
  signupReducer:signupSlice.reducer,
  blogReducer:blogSlice.reducer,
  AddBlogReducer:AddSlice.reducer,
  userblogReducer:userblog.reducer
};