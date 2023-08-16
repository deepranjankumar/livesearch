import React from "react";

const Rsearch=(props)=>{
    const img =`https://source.unsplash.com/400x500/?${props.name}`;
    return(<>
    <div className="Image">
        <img src={img} alt="Images"/>
    </div>
    </>)
}
export default Rsearch;