import "./HomePage.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import huongcam from "../../assets/sappage/huongcam.jpg";
import huongsen from "../../assets/sappage/huongsen.jpg";
import huongoaihuong3 from "../../assets/sappage/huongoaihuong3.jpg";
import combo from "../../assets/sappage/combo.jpg";

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
          <p>Gửi trọn hơi thở thiên nhiên vào không gian sống Việt</p>
          <Link to="/product">
            <button className="btn-primary">Khám phá sản phẩm</button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="about-images">
          <img
            src={huongcam}
            alt="Sáp thơm HavenAroma"
            className="about-img"
          />
          <img
            src={huongsen}
            alt="Sáp thơm HavenAroma"
            className="about-img"
          />
          <img
            src={huongoaihuong3}
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
              src={combo}
              alt="Combo Haven Trio"
            />
            <h3>Combo Haven Trio</h3>
            <p className="price">Giá: 80.000đ</p>
            <button className="btn-secondary">Mua ngay</button>
          </div>

          {/* <div className="product-card">
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
          </div> */}
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
