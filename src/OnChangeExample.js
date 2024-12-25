import React,{useState} from 'react';
export default function OnChangeExample(){
  let [productName,setProductName]=useState('kiran');
  let [productPrice,setProductPrice]=useState(0);

  let changeProductInfo=(e)=>{
     setProductName(e.target.value);
  };
  let changeProductPrice=(p)=>{
    setProductPrice(p.target.value);
  }

  return(
    <div>
      product name: <input type="text" value={productName} onChange={changeProductInfo} />
      <br/>
      <br/>
      
      product price: <input type="number" value={productPrice} onChange={changeProductPrice} />
      <br/>
      <br/>
      <div>your product name is {productName} and price is {productPrice}</div>
    </div>
  )
}