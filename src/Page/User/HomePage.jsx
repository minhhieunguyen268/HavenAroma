import "./HomePage.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <section className="hero">
        <img
          src="https://png.pngtree.com/background/20240614/original/pngtree-alternative-medicine-and-natural-remedy-alternative-aroma-nature-photo-picture-image_9329070.jpg"
          alt="HavenAroma Hero"
          className="hero-img"
        />
        <div className="hero-content">
          <h1>HavenAroma</h1>
          <p>Hương thơm thiên nhiên cho không gian sống an yên</p>
          <Link to="/product">
            <button className="btn-primary">Khám phá sản phẩm</button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-images">
          <img
            src="https://product.hstatic.net/200000210779/product/24672a39dbee26a5ec518509723f60bc_38a435d6405d4b7095b2886149d749cf.jpg"
            alt="Sáp thơm HavenAroma"
            className="about-img"
          />
          <img
            src="https://noithatkydieu.com/wp-content/uploads/2022/10/16.jpg"
            alt="Sáp thơm HavenAroma"
            className="about-img"
          />
          <img
            src="https://cf.shopee.vn/file/b89b6769a2355630bb65debaad149a2c"
            alt="Sáp thơm HavenAroma"
            className="about-img"
          />
        </div>
        <div className="about-text">
          <h2>Về HavenAroma</h2>
          <p>
            Chúng tôi mang đến những sản phẩm sáp thơm từ nguyên liệu tự nhiên,
            an toàn cho sức khỏe, giúp bạn thư giãn và tạo nên một không gian
            sống đầy cảm hứng.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="products">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-list">
          <div className="product-card">
            <img
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/293/212/products/yankee-hinhdaidien-sap-thom-tang-huong-04.jpg?v=1670494102317"
              alt="Lavender Candle"
            />
            <h3>Sáp thơm Lavender</h3>
            <p className="price">Giá: 120.000đ</p>
            <button className="btn-secondary">Mua ngay</button>
          </div>

          <div className="product-card">
            <img
              src="https://bizweb.dktcdn.net/100/293/212/products/yankee-hinhdaidien-sap-thom-tang-huong-18.jpg?v=1670493820040"
              alt="Rose Candle"
            />
            <h3>Sáp thơm Strawberry Lemon</h3>
            <p className="price">Giá: 130.000đ</p>
            <button className="btn-secondary">Mua ngay</button>
          </div>

          <div className="product-card">
            <img
              src="https://bizweb.dktcdn.net/100/293/212/products/yankee-hinhdaidien-sap-thom-tang-huong-15.jpg?v=1670493938707"
              alt="Vanilla Candle"
            />
            <h3>Sáp thơm Vanilla</h3>
            <p className="price">Giá: 140.000đ</p>
            <button className="btn-secondary">Mua ngay</button>
          </div>
        </div>
      </section>

      {/* Promotion */}
      <section className="promotion">
        <h2>Ưu đãi đặc biệt</h2>
        <p>Giảm 20% cho đơn hàng đầu tiên – Nhanh tay kẻo lỡ!</p>
        <button className="btn-primary">Nhận ưu đãi</button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
