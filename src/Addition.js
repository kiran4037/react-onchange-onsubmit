import React,{useState} from 'react';

export default function Addition(){
  let [n1,setN1]=useState(0);
  let [n2,setN2]=useState(0);
  let [result,setResult]=useState(0);

  let inputChange=(e)=>{
     let{name,value}=e.target;
     if(name=='n1'){
       setN1(value);
     }else if(name=='n2'){
       setN2(value);
     }
  };

  let doSum=()=>{
   setResult(parseInt(n1)+parseInt(n2));
  };

  return(
    <div>
      <form onSubmit={doSum}>
        <input type="number" value={n1} name="n1" onChange={inputChange}/>
        <br/>
        <input type="number" value={n2} name="n2" onChange={inputChange}/>
        <br/>
        <br/>
        <input type="submit" value="ADD"/>
         <br/>
         
         <p>
           Result is: {result}
         </p>
      </form>
    </div>
  )
}