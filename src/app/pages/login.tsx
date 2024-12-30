import React, { useEffect } from 'react';
import { enablelogin, setEmail, setPassword, useLoginSlice } from '../features/slice';
import { useAppDispatch, useAppSelector } from 'app/features/hooks';
import { useNavigate } from 'react-router-dom';
function Login(){
    const trigger = useLoginSlice();
    const email = useAppSelector((state)=>state.login.email);
    const password = useAppSelector((state)=>state.login.password);
    const Dispatch = useAppDispatch();
    const navigate = useNavigate();
    const signupSuccess = useAppSelector((state) => state.login.success);
        useEffect(()=>{
          if(signupSuccess){
            navigate('/blogs');
          }
        },[signupSuccess])
    const handleClick= ()=>{
        
        Dispatch(enablelogin());
    }
    return(<>
    <h1>login page{email}{password}</h1>
    <text>email</text>
    <input 
  type="text"
  placeholder="email"
  onChange={(e) => Dispatch(setEmail(e.target.value))} 
  value={email} 
/>
<br />
<text>password</text>
<input 
  type="password"
  placeholder="password"
  onChange={(e) => Dispatch(setPassword(e.target.value))} 
  value={password} 
/>
<br />
<button onClick={handleClick}>Login</button>
      
       </>
    );
}
export default Login;