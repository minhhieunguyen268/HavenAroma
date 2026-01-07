import { useState } from "react";
import { useNavigate } from "react-router-dom";
import huongcam from "../../assets/sappage/huongcam.jpg";
import huongsen from "../../assets/sappage/huongsen.jpg";
import huongoaihuong3 from "../../assets/sappage/huongoaihuong3.jpg";

import "./Product.css";
import Navbar from "../../Components/Navbar/Navbar.jsx"; 


const newProducts = [
  { id: 1, name: "Sáp thơm Oải Hương", price: "29.000₫", img: huongoaihuong3 },
  { id: 2, name: "Sáp thơm Cam Ngọt", price: "29.000₫", img: huongcam },
  { id: 3, name: "Sáp thơm Sen Hồng", price: "29.000₫", img: huongsen },
];

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const navigate = useNavigate();

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = newProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(newProducts.length / productsPerPage);

  const handleDetail = (id) => {
    if (id === 1) navigate("/product/oaihuong");
    // Có thể mở rộng cho các sản phẩm khác
    if (id === 2) navigate("/product/camngot");
    if (id === 3) navigate("/product/senhong");
  };

  return (
    <>
    <Navbar />
    <div className="product-page">
      <h1 className="product-title">🌸 Sản phẩm của HavenAroma 🌸</h1>

      <div className="product-grid">
        {currentProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <div className="product-img-wrapper">
              <img src={item.img} alt={item.name} className="product-img" />
            </div>
            <div className="product-info">
              <h3 className="product-name">{item.name}</h3>
              <p className="product-price">{item.price}</p>
              <button className="product-btn" onClick={() => handleDetail(item.id)}>👆 Thông tin chi tiết</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {/* Nút Previous */}
        <button
          className="page-btn"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        >
          «
        </button>

        {/* Các số trang */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Nút Next */}
        <button
          className="page-btn"
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
        >
          »
        </button>
      </div>
    </div>
    </>
  );
};

export default Product;
