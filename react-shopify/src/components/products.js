import React, { useEffect, useState } from "react";
import client from "../shopify";
import ProductBlock from "./product";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    client.product.fetchAll().then((fetchedProducts) => {
      setProducts(fetchedProducts);
    });
  }, []);

  return (
    <div>
      <h1>Bloody Gore Comix</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products &&
          products.map((product) => (
            <>
              <ProductBlock key={product.id} product={product} />
            </>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
