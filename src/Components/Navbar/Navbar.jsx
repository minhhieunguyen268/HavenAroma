import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo link về trang chủ */}
      <div className="navbar-logo">
        <Link to="/" className="navbar-home-link">
        <img
              src={logo}
              alt="Logo HavenAroma"
        />
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

      <button className="navbar-btn">🛒 Đặt hàng</button>
    </nav>
  );
};

export default Navbar;
