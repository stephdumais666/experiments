import React, { useEffect, useRef, useState } from "react";
import client from "../shopify";
import ProductBlock from "./ProductBlock";
import GridFilters from "./GridFilters";
import Filterizr from "filterizr";
import { ShopifyProduct } from "../types/types";
import GridSorting from "./GridSorting";

interface Props {
  filter?: string;
  categoriesFilter?: string;
  sorting?: string[];
  sortingDirection: string;
}

const ProductList: React.FC<Props> = ({
  filter,
  categoriesFilter,
  sorting,
  sortingDirection,
}) => {
  const [direction, setDirection] = useState(sortingDirection);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const containerRef = useRef(null);
  const filterizrRef = useRef<Filterizr | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    client.product
      .fetchAll()
      .then((fetchedProducts: React.SetStateAction<never[]>) => {
        setProducts(fetchedProducts);
      });
  }, []);

  useEffect(() => {
    if (products && products.length > 0) {
      const setProducts =
        categoriesFilter !== "productType" && filter && filter !== ""
          ? products.filter(
              (product: ShopifyProduct) => product.productType === filter,
            )
          : products;
      setFilteredProducts(setProducts);
    }
  }, [products]);

  useEffect(() => {
    if (filteredProducts.length > 0 && containerRef.current) {
      filterizrRef.current = new Filterizr(containerRef.current, {
        layout: "sameSize",
        gutterPixels: 10,
        filter: "books",
      });
      return () => filterizrRef.current?.destroy();
    }
  }, [filteredProducts, windowSize]);

  const sorter = (sortProp: string) => {
    if (containerRef.current) {
      filterizrRef.current?.sort(
        sortProp,
        direction as "asc" | "desc" | undefined,
      );
      const newDirection = direction === "desc" ? "asc" : "desc";
      setDirection(newDirection);
    }
  };

  return (
    <div className="products">
      {categoriesFilter && (
        <GridFilters products={products} cat={categoriesFilter} />
      )}
      {sorting && sorting.length > 0 && (
        <GridSorting sorter={sorter} sorting={sorting} direction={direction} />
      )}
      <div className="filtr-container" ref={containerRef}>
        {filteredProducts &&
          filteredProducts.map((product: ShopifyProduct) => {
            const sortingData = sorting
              ? sorting.reduce<Record<string, string>>((acc, item) => {
                  const productValue = product[item as keyof ShopifyProduct];
                  acc[`data-${item}`] =
                    typeof productValue === "string" ? productValue : "";
                  return acc;
                }, {})
              : {};

            return (
              <div
                key={product.id}
                className="filtr-item"
                data-category={
                  categoriesFilter
                    ? product[categoriesFilter as keyof ShopifyProduct]
                    : ""
                }
                {...sortingData}
              >
                <ProductBlock key={product.id} product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductList;
