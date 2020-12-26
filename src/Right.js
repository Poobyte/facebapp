import React from 'react';



const Right = () => {
   

const [state, setState] = React.useState([
    {id:1 , img:"../img/sayalee.PNG" , name :"Sayalee"},
    {id:2 , img:"../img/puja.PNG" , name :"RJ"},
    {id:3 , img:"../img/yusuf.PNG" , name :"Yusuf"},
     {id:4 , img:"../img/sudeep.PNG" , name :"Sudeep"},
     {id:5 , img:"../img/friends.PNG" , name :"Cousins"},
    ]);
    
    return(
<div className="friend" >   

  {state.map((f) => (
  
  <div className ="friendlist" key ={f.id}>
  
  <div className ="friendlistimg">
  <img src={f.img} />
  <span className="s"></span>
  </div>
  
  <div  className ="friendlistname"> {f.name}
  </div>


</div>

))}
        
 </div>
 )
}

export default Right;