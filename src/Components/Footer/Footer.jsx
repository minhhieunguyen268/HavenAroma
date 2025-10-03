import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1 */}
        <div className="footer-section">
          <h3>HavenAroma</h3>
          <p>Sáp thơm tự nhiên mang lại hương thơm dễ chịu và sự thư giãn.</p>
        </div>

        {/* Cột 2 */}
        <div className="footer-section">
          <h4>Liên kết nhanh</h4>
          <div className="footer-links">
            <a href="/product">Sản phẩm</a>
            <a href="/promotion">Ưu đãi</a>
            <a href="/contact">Liên hệ</a>
          </div>
        </div>

        {/* Cột 3 */}
        <div className="footer-section">
          <h4>Liên hệ</h4>
          <p>Email: support@havenaroma.vn</p>
          <p>Hotline: 0909 123 456</p>
          <p>Địa chỉ: 600 Nguyễn Văn Cừ, Cần Thơ</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 HavenAroma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
