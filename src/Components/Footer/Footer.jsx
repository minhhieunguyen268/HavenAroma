import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1 */}
        <div className="footer-section">
          <h3>HavenAroma</h3>
          <p>
            HavenAroma mang đến những sản phẩm sáp thơm tự nhiên được làm thủ công
            từ sáp đậu nành và tinh dầu nguyên chất, giúp bạn thư giãn, cân bằng cảm xúc
            và tạo nên không gian sống trong lành, dễ chịu. Mỗi hương thơm là một câu
            chuyện, một trải nghiệm riêng, giúp bạn tìm thấy sự bình yên giữa nhịp sống bận rộn.
          </p>
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
          <p>Email: havenaromavn@gmail.com</p>
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
