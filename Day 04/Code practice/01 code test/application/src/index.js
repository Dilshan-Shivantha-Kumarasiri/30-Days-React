import React from 'react'
import ReactDOM from  'react-dom'
let root = document.getElementById("root");

// js function
let userData = (data) =>{
    console.log(`The userName is ${data.userName} and age is ${data.age}`);
    return data;
}

userData({userName:"dilshan",age:22})

// component
let User = ()=>{
    return (
        <>
            <h1>{userData({userName:"dilshan",age:22}).userName}</h1>
            <h1>{userData({userName:"dilshan",age:22}).age}</h1>
        </>
    )
}

ReactDOM.render(<User />,root)