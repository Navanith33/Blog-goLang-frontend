// import { TodoState } from 'app/pages/TodoPage/slice/types';
import { AddBlog, Blogarray,Email, SignupType, userblogarray } from 'app/features/slice';

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  loginSlice?: Email;
  signupSlice?: SignupType;
  blogSlice?:Blogarray;
  AddSlice?:AddBlog;
  userblog?:userblogarray;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
