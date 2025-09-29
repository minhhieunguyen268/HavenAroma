import "./HomePage.css";

const HomePage = () => {
  return (
    <div
      className="homepage"
      style={{ background: "#fff", minHeight: "100vh" }}
    >
      {/* Hero Section - Full Width Image */}
      <section
        className="hero"
        style={{
          position: "relative",
          width: "100vw",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          background: "#fff",
          overflow: "hidden",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://png.pngtree.com/background/20240614/original/pngtree-alternative-medicine-and-natural-remedy-alternative-aroma-nature-photo-picture-image_9329070.jpg"
          alt="HavenAroma Hero"
          style={{
            width: "100vw",
            height: "60vh",
            objectFit: "cover",
            filter: "brightness(0.7)",
          }}
        />
        <div
          className="hero-content"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: 700,
              letterSpacing: 2,
              marginBottom: 16,
            }}
          >
            HavenAroma
          </h1>
          <p style={{ fontSize: "1.5rem", marginBottom: 24 }}>
            Hương thơm thiên nhiên cho không gian sống an yên
          </p>
          <button
            className="btn-primary"
            style={{
              padding: "12px 32px",
              fontSize: "1.1rem",
              borderRadius: 24,
              background: "#6c63ff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            Khám phá sản phẩm
          </button>
        </div>
      </section>

      {/* About Section */}
      <section
        className="about"
        style={{
          maxWidth: 1100,
          margin: "60px auto 0",
          display: "flex",
          alignItems: "center",
          gap: 48,
          flexWrap: "wrap",
          background: "#fff",
          padding: "32px 24px",
          borderRadius: 24,
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        }}
      >
        <img
          src="https://product.hstatic.net/200000210779/product/24672a39dbee26a5ec518509723f60bc_38a435d6405d4b7095b2886149d749cf.jpg"
          alt="Sáp thơm HavenAroma"
          className="about-img"
          style={{
            width: 340,
            height: 340,
            objectFit: "cover",
            borderRadius: 24,
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          }}
        />
        <img
          src="https://noithatkydieu.com/wp-content/uploads/2022/10/16.jpg"
          alt="Sáp thơm HavenAroma"
          className="about-img"
          style={{
            width: 340,
            height: 340,
            objectFit: "cover",
            borderRadius: 24,
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          }}
        />
        <img
          src="https://cf.shopee.vn/file/b89b6769a2355630bb65debaad149a2c"
          alt="Sáp thơm HavenAroma"
          className="about-img"
          style={{
            width: 340,
            height: 340,
            objectFit: "cover",
            borderRadius: 24,
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
          }}
        />
        <div>
          <h2 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 16 }}>
            Về HavenAroma
          </h2>
          <p style={{ fontSize: "1.1rem", color: "#444", lineHeight: 1.7 }}>
            Chúng tôi mang đến những sản phẩm sáp thơm từ nguyên liệu tự nhiên,
            an toàn cho sức khỏe, giúp bạn thư giãn và tạo nên một không gian
            sống đầy cảm hứng.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className="products"
        style={{
          maxWidth: 1200,
          margin: "60px auto 0",
          background: "#fff",
          padding: "32px 24px",
          borderRadius: 24,
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 600,
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          Sản phẩm nổi bật
        </h2>
        <div
          className="product-list"
          style={{
            display: "flex",
            gap: 32,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            className="product-card"
            style={{
              background: "#fafaff",
              borderRadius: 18,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              padding: 24,
              width: 260,
              textAlign: "center",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
          >
            <img
              src="https://bizweb.dktcdn.net/thumb/1024x1024/100/293/212/products/yankee-hinhdaidien-sap-thom-tang-huong-04.jpg?v=1670494102317"
              alt="Lavender Candle"
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 14,
                marginBottom: 16,
              }}
            />
            <h3
              style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: 8 }}
            >
              Sáp thơm Lavender
            </h3>
            <p style={{ color: "#6c63ff", fontWeight: 600, marginBottom: 12 }}>
              Giá: 120.000đ
            </p>
            <button
              className="btn-secondary"
              style={{
                padding: "8px 24px",
                borderRadius: 18,
                background: "#fff",
                color: "#6c63ff",
                border: "1.5px solid #6c63ff",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Mua ngay
            </button>
          </div>
          <div
            className="product-card"
            style={{
              background: "#fafaff",
              borderRadius: 18,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              padding: 24,
              width: 260,
              textAlign: "center",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
          >
            <img
              src="https://bizweb.dktcdn.net/100/293/212/products/yankee-hinhdaidien-sap-thom-tang-huong-18.jpg?v=1670493820040"
              alt="Rose Candle"
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 14,
                marginBottom: 16,
              }}
            />
            <h3
              style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: 8 }}
            >
              Sáp thơm Strawberry Lemon
            </h3>
            <p style={{ color: "#6c63ff", fontWeight: 600, marginBottom: 12 }}>
              Giá: 130.000đ
            </p>
            <button
              className="btn-secondary"
              style={{
                padding: "8px 24px",
                borderRadius: 18,
                background: "#fff",
                color: "#6c63ff",
                border: "1.5px solid #6c63ff",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Mua ngay
            </button>
          </div>
          <div
            className="product-card"
            style={{
              background: "#fafaff",
              borderRadius: 18,
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              padding: 24,
              width: 260,
              textAlign: "center",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
          >
            <img
              src="https://bizweb.dktcdn.net/100/293/212/products/yankee-hinhdaidien-sap-thom-tang-huong-15.jpg?v=1670493938707"
              alt="Vanilla Candle"
              style={{
                width: "100%",
                height: 180,
                objectFit: "cover",
                borderRadius: 14,
                marginBottom: 16,
              }}
            />
            <h3
              style={{ fontSize: "1.2rem", fontWeight: 500, marginBottom: 8 }}
            >
              Sáp thơm Vanilla
            </h3>
            <p style={{ color: "#6c63ff", fontWeight: 600, marginBottom: 12 }}>
              Giá: 140.000đ
            </p>
            <button
              className="btn-secondary"
              style={{
                padding: "8px 24px",
                borderRadius: 18,
                background: "#fff",
                color: "#6c63ff",
                border: "1.5px solid #6c63ff",
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              Mua ngay
            </button>
          </div>
        </div>
      </section>

      {/* Promotion */}
      <section
        className="promotion"
        style={{
          maxWidth: 900,
          margin: "60px auto 0",
          background: "linear-gradient(90deg, #6c63ff 0%, #b8b5ff 100%)",
          color: "#fff",
          padding: "32px 24px",
          borderRadius: 24,
          textAlign: "center",
          boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 600, marginBottom: 12 }}>
          Ưu đãi đặc biệt
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: 18 }}>
          Giảm 20% cho đơn hàng đầu tiên – Nhanh tay kẻo lỡ!
        </p>
        <button
          className="btn-primary"
          style={{
            padding: "12px 32px",
            fontSize: "1.1rem",
            borderRadius: 24,
            background: "#fff",
            color: "#6c63ff",
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          Nhận ưu đãi
        </button>
      </section>

      {/* Footer */}
      <footer
        className="footer"
        style={{
          marginTop: 60,
          padding: "32px 0 16px",
          background: "#fff",
          textAlign: "center",
          color: "#888",
          borderTop: "1px solid #eee",
        }}
      >
        <p style={{ marginBottom: 8 }}>
          © 2025 HavenAroma. All rights reserved.
        </p>
        <div className="socials" style={{ fontSize: "1.1rem" }}>
          <a
            href="#"
            style={{
              color: "#6c63ff",
              textDecoration: "none",
              margin: "0 8px",
            }}
          >
            Facebook
          </a>{" "}
          |
          <a
            href="#"
            style={{
              color: "#6c63ff",
              textDecoration: "none",
              margin: "0 8px",
            }}
          >
            Email
          </a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
