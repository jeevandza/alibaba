import { Product } from "../product";
import { Row, Button} from "react-bootstrap";




const Products = (props) => {
  return (
    <>
      <Row>
        {props.products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </Row>
      <Row>
      <div>
          {props.children}
       </div>
       </Row>
    </>
  );
};

export default Products;  
