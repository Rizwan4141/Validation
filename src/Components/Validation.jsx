import React, { useState } from 'react';

const Validation = () => {
    const [user,setUser]=useState("")
    const [password,setPassword]=useState("")
    const [userErr,setUserErr]=useState(false)
    
    function userHandle(e) {
        let item=e.terget.value;
        if(item.length)
        console.warn();
    }
    function loginhandle(e){
        // alert("hello")
        e.preventDefault()
    }
   function userHandle(e){
       let item=e.terget.value
       if(item.length<3)
       {
        setUserErr(true)
       }
       else
       {
           setUserErr(false)
       }
// console.warn(e.terget.value.length)
    }
    return (
        <div>
           <h1>Wellcome</h1> 
           <form onSubmit={loginhandle}>          
            <input style={{border:"none", background:" lightgray", borderRadius:"50px",fontSize:"20px"}} type="text"  placeholder='Email' onChange={userHandle}/> <br /> <br /> 
            {userErr?<span>user not valid</span>:""}
           <input style={{border:"none", background:" lightgray",borderRadius:"50px",fontSize:"20px"}} type="password" placeholder='Password' /> <br /> <br />
           <button type='submit'>Login</button>
           </form>

        </div>
    );
};

export default Validation;