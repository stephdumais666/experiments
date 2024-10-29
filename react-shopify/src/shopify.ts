import ShopifyBuy from 'shopify-buy';

const client = ShopifyBuy.buildClient({
  domain: "bloodygorecomix.myshopify.com",
  storefrontAccessToken: "fc137321df0e1016486674ca17814266",
});

export default client;

