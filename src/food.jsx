import React, {useState} from "react";

function Food()
{
    const [foods,setFood]=useState(["Apple", "Orange", "Banana"]);

    function handleAddFood()
    {
        
    }

    function handleRemoveFood()
    {
            
    }


    return(
        <div>
            <h2> List of Food</h2>
            <ul>
                {foods.map((food,index)=> <li key={index}>{food}</li>)}
            </ul>
        </div>
    )


}

export default Food