import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ProductList from "./components/Products";

function App() {
  return (
    <div className="App">
      <h1>BGC</h1>
      <ProductList
        filter="books"
        categoriesFilter="productType"
        sorting={["title"]}
        sortingDirection="desc"
      />
    </div>
  );
}

export default App;
