import React from 'react';
import { CardImg, Col} from "reactstrap";
import './style.scss';



const FloatingProduct = ({ floatingProduct } ) =>{

 const handleChange = () =>{
   
 }
 return(
   <div className="floating-product" onClick={{handleChange}}>
   <Col sm='12'>
     <div className = "floating-card">
      <CardImg  className="floating-img"  src={floatingProduct.img}/>
     
      </div>
    </Col>
    </div>
 )
}

  
export default FloatingProduct;


