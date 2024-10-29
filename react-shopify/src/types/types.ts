// types.ts
export interface ProductList {
  products: ShopifyProduct[];
}

export interface ProductListProduct {
  product: ShopifyProduct;
}

export interface ShopifyProduct {
  id: string; // Unique identifier for the product
  title: string; // The title of the product
  description: string; // The product description
  vendor: string; // The vendor/brand of the product
  productType: string; // The product type/category
  tags: string[]; // Tags associated with the product
  images: ShopifyProductImage[]; // Array of product images
  variants: ShopifyProductVariant[]; // Array of product variants
  options: ShopifyProductOption[]; // Array of product options
  onlineStoreUrl: string;
}

export interface ShopifyProductImage {
  id: string; // Unique identifier for the image
  src: string; // URL of the image
  altText: string | null; // Alternative text for the image
}

export interface ShopifyProductVariant {
  id: string; // Unique identifier for the variant
  title: string; // Title of the variant
  price: string; // Price of the variant
  available: boolean; // Availability of the variant
  sku: string; // SKU of the variant
}

export interface ShopifyProductOption {
  id: string; // Unique identifier for the option
  name: string; // Name of the option (e.g., "Size")
  values: string[]; // Available values for the option
}
