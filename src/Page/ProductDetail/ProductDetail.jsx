import "./ProductDetail.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

const ProductDetail = ({ data }) => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="product-detail-page">
        <div className="product-detail-card">
          <button
            className="exit-btn"
            onClick={() => navigate("/product")}
          >
            ← Quay lại
          </button>

          <img
            src={data.image}
            alt={data.name}
            className="product-detail-img"
          />

          <div className="product-detail-info">
            <h1>{data.name}</h1>
            <p className="product-tagline">{data.tagline}</p>

            <p
              className="product-detail-price"
              style={{ color: data.color }}
            >
              {data.price}
            </p>

            <div className="product-benefits">
              {data.benefits.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>

            <ul className="product-specs">
              {data.specs.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button
              className="btn-primary"
              style={{ background: data.button }}
            >
              Đặt hàng ngay
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
