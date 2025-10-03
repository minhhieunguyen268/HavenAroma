import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo link về trang chủ */}
      <div className="navbar-logo">
        <Link to="/" className="navbar-home-link">
          HavenAroma
        </Link>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Giới thiệu</Link>
        </li>
        <li>
          <Link to="/product">Sản phẩm</Link>
        </li>
        <li>
          <Link to="/promotion">Ưu đãi</Link>
        </li>
        <li>
          <Link to="/contact">Liên hệ</Link>
        </li>
      </ul>

      <button className="navbar-btn">Đặt hàng</button>
    </nav>
  );
};

export default Navbar;
