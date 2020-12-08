import React from 'react'; 
import img1 from '../sky2.jpg'; 

function imagess (){
   return  (
    <div>
    <div className = "imge"  style={{border: 'solid 1px black', maxWidth: '100vw'}}>
      <h1 className="titleRed">Best places to skydive</h1>
      <br />
      <img  className = "img" src={img1} />
      <br />
      <img  className= "img" src="/sky0.jpeg" />
    </div>
    
    <h2 style = {{color:"grey" }}>watch it </h2>
    <video width={420} height={440} controls>
      <source src="/Skydive Dubai - April 2018.mp4" type="video/mp4" />
    </video>
  </div>
  
   )
 }

export default imagess ;