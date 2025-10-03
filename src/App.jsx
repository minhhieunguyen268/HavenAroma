import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/User/HomePage";
import Product from "./Page/Product/Product";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
