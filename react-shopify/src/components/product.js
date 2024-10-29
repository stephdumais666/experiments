import React from "react";

const ProductBlock = (shopProduct) => {
  const { product } = shopProduct;
  if (product) {
    return (
      <div style={{ margin: "10px", width: "200px" }}>
        <img
          src={product.images[0]?.src}
          alt={product.title}
          style={{ width: "100%" }}
        />
        <h2>{product.title}</h2>
      </div>
    );
  }
};

export default ProductBlock;
