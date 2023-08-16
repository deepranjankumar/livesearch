import React, { useState } from 'react';
import './index.css'
import Rsearch from './rsearch';
const Search =()=>{
    const [img,setImg]=useState();
    const event=(event)=>{
        setImg(event.target.value)
    }
    return(<>
    <div className="search">
 <input type="text" placeholder="enter anything for search"
    onChange={event}
    value={img}
 />
 <Rsearch name={img}/>
 </div>
    </>
    )}
export default Search;