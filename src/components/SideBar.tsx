import React from 'react';
import  {data}  from '../data.js';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className='sidebarData'>

            
            <img
                alt={`${data[0].title}`}
                className="hero"
                src={data[0].image}
 

            />
            <h3>{data[0].title}</h3>
            <div className="subtitle">{data[0].subtitle}</div>
            </div>
           <div className="tags">
           {data[0].tags.map((tag)=>(
<button key={tag} className="tag">{tag}</button>
            ))}
           </div>
        </div>
    )
}


export default Sidebar;