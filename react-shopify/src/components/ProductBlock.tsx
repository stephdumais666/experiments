import React from "react";
import { ShopifyProduct } from "../types/types";

interface Props {
  product: ShopifyProduct;
}

const ProductBlock: React.FC<Props> = ({ product }) => {
  return (
    <div className="book">
      <a href={product.onlineStoreUrl} target="_blank">
        <img
          src={product.images[0]?.src}
          alt={product.title}
          style={{ width: "100%" }}
        />
      </a>
    </div>
  );
};

export default ProductBlock;
