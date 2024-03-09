import React, {useState} from 'react';

function OnChange()
{
    const[name,setName]= useState("Guest");
    const[quantity,setQuantity]=useState(1);
    const[comment,setComment]=useState("");


    function handleChangeName(event)
    {
        setName(event.target.value);
    }

    function handleChangeQuantity(event)
    {
        setQuantity(event.target.value);
    }

    function handleChangeComment(event)
    {
        setComment(event.target.value);
    }


    return(
    <div>
        <input value={name} onChange={handleChangeName}/>
        <p>Name: {name}</p>

        <input value ={quantity} onChange={handleChangeQuantity} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleChangeComment}/>
        <p>Comment: {comment}</p>

    </div>

    );

}

export default OnChange
