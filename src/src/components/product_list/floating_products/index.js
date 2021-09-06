
import React from 'react';
import './style.scss';
import  FloatingProduct from '../floating_product'


const FloatingProducts = (props) =>{
 return(
    <div className="floating-product-container" >
    {props.floatingProducts.map((floatingProduct) => {
      return <FloatingProduct key={floatingProduct.id} floatingProduct={floatingProduct} />;
    })}
  </div>
 )
}

  
export default FloatingProducts;    