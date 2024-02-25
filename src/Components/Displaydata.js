import React from "react";
import { useState } from "react";

const Displaydata=({userData})=>{

let mdata=JSON.stringify(userData)
sessionStorage.setItem('user',mdata);
let value=JSON.parse(sessionStorage.getItem('user'));
let{name,email,password,confirmPassword}=value;

console.log(typeof(value));
console.log(value)
    return(
        <div>
{value&&(
    <div>
        <p>{name}</p>
        <p>{email}</p>

    </div>
)}
        </div>
    )
}

export default Displaydata;