import React, { useState } from "react"

const Form=({setUserData})=>{
let [user,setUser]=useState({name:"",email:"",password:"", confirmPassword:""})
let{name,email,password,confirmPassword}=user;
let userDeatis=(e)=>{
    // console.log(e.target.name);
    let key=e.target.name;
    setUser({...user,[key]:e.target.value})
}
function registerUser(e){
    // e.preventDefault;
    e.preventDefault();
    setUserData(user);
}

    return(
        <div >
            <form id="login" onSubmit={registerUser}>
                <input type='text'placeholder="Enter Name" name="name"onChange={userDeatis}></input>
                <input type='email'placeholder="Enter Email" name="email"onChange={userDeatis}></input>
                <input type='password'placeholder="Enter password"name="password" onChange={userDeatis}></input>
                <input type='password'placeholder="ConfrimPassword" name="confirmPassword"onChange={userDeatis}></input>
          <button>Create Account</button>
            </form>
        </div>
    )
}

export default Form