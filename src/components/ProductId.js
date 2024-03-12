import React from "react";
import { useParams } from "react-router-dom";
const ProductId = () => {
  let { productId } = useParams();

  return (
    <div>
      <p>Displaying product : {productId}</p>
    </div>
  );
};

export default ProductId;
