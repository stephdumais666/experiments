# Book Gallery

React+Typescript Book gallery fed via Shopify SDk from https://www.bloodygorecomix.com

#### Features

- Responsive grid layout

  Based on https://yiotis.net/filterizr/#/, using filtering by product type and sorting by title.

  ```
  new Filterizr(containerRef.current, {
        layout: "sameSize",
        gutterPixels: 10,
        filter: "books",
      });
  ```

- Sorting & Filtering
  ```
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
  ```

#### Configuration

```
const client = ShopifyBuy.buildClient({
domain: "{SHOP_URL}.myshopify.com",
storefrontAccessToken: "{TOKEN}",
});
```

#### Components

- Products (list)
- ProductBlock (Product display)

  - id: Unique identifier for the product
  - title: The title of the product
  - description: The product description
  - productType: The product type/category // filterable
  - tags: Tags used for contributing authors
  - images: ShopifyProductImage // Array of product images
  - variants: ShopifyProductVariant // Array of product variants
  - options: ShopifyProductOption // Array of product options
  - onlineStoreUrl: URL string for shop

- GridFilters
- GridSorting

### Fetching Products

#### Fetch all products

```
client.product.fetchAll().then((products) => {
    /* CODE */
    });
```

#### Fetch product by ID

```
const productId = 'gid://shopify/Product/{PRODUCT_ID}';
client.product.fetch(productId).then((product) => {
    /* CODE */
    });
```

#### Fetch product by Handle

```
const handle = 'product-handle';
client.product.fetchByHandle(handle).then((product) => {
    /* CODE */
    });
```

## Material UI

Styles with https://mui.com/ components.

## Local Build

```
git clone https://github.com/stephdumais666/experiments.git
cd react-shopify
npm install
npm start
```
