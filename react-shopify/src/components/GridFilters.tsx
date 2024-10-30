import React from "react";
import { ShopifyProduct } from "../types/types";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup/";

interface Props {
  products: ShopifyProduct[];
  cat: string;
}

const GridFilters: React.FC<Props> = ({ products, cat }) => {
  const categories = [
    ...new Set(
      products
        .map((product) => {
          const category = product[cat as keyof ShopifyProduct];
          return typeof category === "string" ? category : null;
        })
        .filter((cat) => cat !== null),
    ),
  ];

  return (
    <ButtonGroup className="filtr-controls">
      {categories.length > 0 &&
        categories.map((category) => (
          <Button key={category} variant="outlined" data-filter={category}>
            {category}
          </Button>
        ))}
    </ButtonGroup>
  );
};

export default GridFilters;
