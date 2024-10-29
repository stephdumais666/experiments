import React from "react";
import { ShopifyProduct } from "../types/types";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup/ButtonGroup";

interface Props {
  products: ShopifyProduct[];
  cat: string;
}

const GridFilters: React.FC<Props> = ({ products, cat }) => {
  const filters: React.JSX.Element[] = [];

  const categories = [
    ...new Set(
      products.map((product) => {
        const category = product[cat as keyof ShopifyProduct];
        if (typeof category === "string") {
          return category;
        }
      }),
    ),
  ];

  if (categories) {
    categories.map((category) => {
      if (category) {
        const item = (
          <Button variant="outlined" key={category} data-filter={category}>
            {category}
          </Button>
        );
        filters.push(item);
      }
    });
  }

  return <ButtonGroup className="filtr-controls">{filters}</ButtonGroup>;
};

export default GridFilters;
