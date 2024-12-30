import React, { useEffect } from 'react';
import { enableSignup,setsignupEmail,setsignupPassword, useSignupSlice,setrole} from '../features/slice';
import { useAppDispatch, useAppSelector } from 'app/features/hooks';
import { useNavigate } from 'react-router-dom';
function Signup(){
    const trigger = useSignupSlice();
    const email = useAppSelector((state)=>state.signup.email);
    const password = useAppSelector((state)=>state.signup.password);
    const role = useAppSelector((state)=>state.signup.role);
    const Dispatch = useAppDispatch();
    const signupSuccess = useAppSelector((state) => state.signup.success);
    const navigate = useNavigate();
    useEffect(()=>{
      if(signupSuccess){
        navigate('/blogs');
      }
    },[signupSuccess])
    const handleClick= ()=>{
        alert("signup click")
        Dispatch(enableSignup());
    }

    return(<>
    <h1>signup page</h1>
    <text>email</text>
    <input 
  type="text"
  placeholder="email"
  onChange={(e) => Dispatch(setsignupEmail(e.target.value))} 
  value={email} 
/>
<br>
</br>
<text>password</text>
<input 
  type="password"
  placeholder="password"
  onChange={(e) => Dispatch(setsignupPassword(e.target.value))} 
  value={password} 
/>
<br />
<text>role</text>
<input 
  type="text"
  placeholder="signup using admin"
  onChange={(e) => Dispatch(setrole(e.target.value))} 
  value={role} 
/>
<br />
<button onClick={handleClick}>signup</button>
      
       </>
    );
}
export default Signup;