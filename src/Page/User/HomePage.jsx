import "./HomePage.css";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import huongcam from "../../assets/sappage/huongcam.jpg";
import huongsen from "../../assets/sappage/huongsen.jpg";
import huongoaihuong3 from "../../assets/sappage/huongoaihuong3.jpg";
import background3 from "../../assets/sappage/background3.jpg";
import combo from "../../assets/sappage/combo.jpg";
import { useState, useEffect, useRef } from "react";

const heroImages = [
  "https://png.pngtree.com/background/20240614/original/pngtree-alternative-medicine-and-natural-remedy-alternative-aroma-nature-photo-picture-image_9329070.jpg",
  "https://media.loveitopcdn.com/6458/cach-lam-sap-thom-handmade-nghe-thuat-scented-wax-tablet-11.jpeg",
  background3
];

const HomePage = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  // Function to start or reset the interval
  const startSliderTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
  };

  useEffect(() => {
    startSliderTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line
  }, []);
  // Hiệu ứng hiện ra khi cuộn cho các section
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const promoRef = useRef(null);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [productsVisible, setProductsVisible] = useState(false);
  const [promoVisible, setPromoVisible] = useState(false);

  useEffect(() => {
    const handleObserver = (ref, setVisible) => {
      if (!ref.current) return;
      const observer = new window.IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.15 }
      );
      observer.observe(ref.current);
      return observer;
    };
    const obs1 = handleObserver(aboutRef, setAboutVisible);
    const obs2 = handleObserver(productsRef, setProductsVisible);
    const obs3 = handleObserver(promoRef, setPromoVisible);
    return () => {
      if (obs1 && aboutRef.current) obs1.disconnect();
      if (obs2 && productsRef.current) obs2.disconnect();
      if (obs3 && promoRef.current) obs3.disconnect();
    };
  }, []);

  return (
    <div className="homepage modern-font">
      <Navbar />
      <section className="hero">
        {/* Hero slider */}
        <div className="hero-slider">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Hero ${idx + 1}`}
              className={
                "hero-img" + (idx === current ? " active" : "")
              }
              style={{
                left: `${(idx - current) * 100}%`,
                transition: "left 0.8s cubic-bezier(.77,0,.18,1)",
                position: "absolute",
                top: 0,
                width: "100vw",
                height: "60vh",
                objectFit: "cover"
              }}
            />
          ))}
          {/* Nút điều hướng trái/phải */}
          <button
            className="hero-nav hero-nav-left"
            aria-label="Trước"
            onClick={e => {
              e.stopPropagation();
              setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
              startSliderTimer();
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 19L9.5 12L15.5 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="hero-nav hero-nav-right"
            aria-label="Sau"
            onClick={e => {
              e.stopPropagation();
              setCurrent((prev) => (prev + 1) % heroImages.length);
              startSliderTimer();
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 5L14.5 12L8.5 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">HavenAroma</h1>
          <p className="hero-slogan">Gửi trọn hơi thở thiên nhiên vào không gian sống Việt</p>
          <Link to="/product">
            <button className="btn-primary gradient-btn">Khám phá sản phẩm</button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className={`about modern-section fade-in-section${aboutVisible ? ' visible' : ''}`}>
        <div className="about-images">
          <img src={huongcam} alt="Sáp thơm Cam Ngọt" className="about-img shadow-img" />
          <img src={huongsen} alt="Sáp thơm Sen Hồng" className="about-img shadow-img" />
          <img src={huongoaihuong3} alt="Sáp thơm Oải Hương" className="about-img shadow-img" />
        </div>
        <div className="about-text">
          <h2 className="about-title">Về HavenAroma</h2>
          <p className="about-desc">
            Chúng tôi mang đến những sản phẩm sáp thơm từ nguyên liệu tự nhiên,
            an toàn cho sức khỏe, giúp bạn thư giãn và tạo nên một không gian
            sống đầy cảm hứng.
          </p>
          <ul className="about-list">
            <li><span role="img" aria-label="leaf">🌱</span> 100% sáp đậu nành & tinh dầu thiên nhiên</li>
            <li><span role="img" aria-label="safe">🛡️</span> An toàn cho trẻ nhỏ & thú cưng</li>
            <li><span role="img" aria-label="eco">♻️</span> Bao bì thân thiện môi trường</li>
          </ul>
        </div>
      </section>

      {/* Products */}
      <section ref={productsRef} className={`products modern-section fade-in-section${productsVisible ? ' visible' : ''}`}>
        <h2 className="section-title">Sản phẩm nổi bật</h2>
        <div className="product-list">
          <div className="product-card modern-card">
            <img src={combo} alt="Combo Haven Trio" />
            <h3>Combo Haven Trio</h3>
            <p className="price">Giá: 80.000đ</p>
            <button className="btn-secondary gradient-btn">Mua ngay</button>
          </div>
        </div>
      </section>

      {/* Promotion */}
      <section ref={promoRef} className={`promotion modern-section fade-in-section${promoVisible ? ' visible' : ''}`}>
        <h2 className="section-title">Ưu đãi đặc biệt</h2>
        <p>Giảm 20% cho đơn hàng đầu tiên – Nhanh tay kẻo lỡ!</p>
        <button className="btn-primary gradient-btn">Nhận ưu đãi</button>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
