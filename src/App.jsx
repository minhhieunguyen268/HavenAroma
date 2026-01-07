import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Page/User/HomePage";
import Product from "./Page/Product/Product";
import Promotion from "./Page/Promotion/Promotion";
import OaihuongProduct from "./Page/ProductDetail/OaihuongProduct";
import CamngotProduct from "./Page/ProductDetail/CamngotProduct";
import SenhongProduct from "./Page/ProductDetail/SenhongProduct";
import Contact from "./Page/Contact/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/oaihuong" element={<OaihuongProduct />} />
        <Route path="/product/camngot" element={<CamngotProduct />} />
        <Route path="/product/senhong" element={<SenhongProduct />} />
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
