import React, { useState } from "react";

function MyComponent()
{
    const [name, setName]= useState("Guest");

    const updateName=() => {
        setName("Yashwant");
    }
    return(
        <footer className="foot">
            <div className="Comp">
               <p> Name: {name}</p>
                <button className="btn" onClick={updateName}>Set Name</button>
           </div>
        </footer>
        

    );
}

export default MyComponent