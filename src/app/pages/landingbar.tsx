import React from "react";
import { useNavigate } from "react-router-dom";
function LandingBar(){
    const navigate = useNavigate();
    const handleclick = ()=>{
        navigate('/userProfile')
    }
    return(
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <h1>
      blog app
    </h1>
    <div>
      <button onClick={handleclick}>
        profile
      </button>
    </div>
  </div>
    )
}
export default LandingBar;