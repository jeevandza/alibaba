import React from 'react';
import { SingleProduct } from '../all_products/single_product/index'
import { Row, Button} from "react-bootstrap";



const AllProducts = (props) =>{
    return(
        <div>
            <Row>
            {props.allProducts.map((singleProduct) => {
             return <SingleProduct key={singleProduct.id} singleProduct={singleProduct}/>
            }
            )}
            </Row>
        </div>
      
    )
}

export default AllProducts;