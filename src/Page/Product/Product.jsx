import { useState } from "react";
import sp1 from "../../assets/sapthom/sp1.jpg";
import sp2 from "../../assets/sapthom/sp2.jpg";
import sp3 from "../../assets/sapthom/sp3.jpg";
import sp4 from "../../assets/sapthom/sp4.jpg";
import sp5 from "../../assets/sapthom/sp5.jpg";
import sp6 from "../../assets/sapthom/sp6.jpg";
import sp7 from "../../assets/sapthom/sp7.jpg";
import sp8 from "../../assets/sapthom/sp8.jpg";
import sp9 from "../../assets/sapthom/sp9.jpg";
import sp10 from "../../assets/sapthom/sp10.jpg";
import sp11 from "../../assets/sapthom/sp11.jpg";
import sp12 from "../../assets/sapthom/sp12.jpg";
import "./Product.css";
import Navbar from "../../Components/Navbar/Navbar.jsx"; 

const allProducts = [
  { id: 1, name: "Sáp thơm Lavender", price: "120.000₫", img: sp1 },
  { id: 2, name: "Sáp thơm Cam Ngọt", price: "110.000₫", img: sp2 },
  { id: 3, name: "Sáp thơm Bạc Hà", price: "130.000₫", img: sp3 },
  { id: 4, name: "Sáp thơm Hoa Nhài", price: "125.000₫", img: sp4 },
  { id: 5, name: "Sáp thơm Oải Hương", price: "115.000₫", img: sp5 },
  { id: 6, name: "Sáp thơm Gỗ Trầm", price: "140.000₫", img: sp6 },
  { id: 7, name: "Sáp thơm Hồng Nhung", price: "135.000₫", img: sp7 },
  { id: 8, name: "Sáp thơm Biển Xanh", price: "128.000₫", img: sp8 },
  { id: 9, name: "Sáp thơm Chanh Tươi", price: "118.000₫", img: sp9 },
  { id: 10, name: "Sáp thơm Dâu Tây", price: "132.000₫", img: sp10 },
];

const Product = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = allProducts.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(allProducts.length / productsPerPage);

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
              <button className="product-btn">👆 Thông tin chi tiết</button>
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
