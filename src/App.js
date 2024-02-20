import "./App.css";
import Header from "./containers/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        {/* Route for 404 Not Found */}
        <Route path="*">404 Not Found</Route>
      </Router>
    </div>
  );
}

export default App;
