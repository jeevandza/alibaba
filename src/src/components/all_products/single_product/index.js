import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Col
} from "reactstrap";

export const SingleProduct = ({ singleProduct }) => {
  return (
    <div>
      <Col sm="3" style={{ padding: "0 10px" }}>
        <Card className="product-card">
          <CardImg className="product-image" src={singleProduct.img} />
          <CardBody style={{ fontWeight: "700" }}>
            <CardTitle style={{ fontSize: "25px" }}>
              {singleProduct.name}
            </CardTitle>
            <CardText style={{ fontSize: "15px", color: "#B12704" }}>
              32 in bravia tv 
              {singleProduct.discription}
            </CardText>
            <CardSubtitle style={{ fontSize: "15px" }}>
                totalStock
              {singleProduct.totalStock}
            </CardSubtitle>
            <CardSubtitle style={{ fontSize: "15px" }}>
                Price:
              {singleProduct.price}
            </CardSubtitle>
          </CardBody>
        </Card>
      </Col>
    </div>
  );
};



