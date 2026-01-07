import "./Promotion.css";
import Navbar from "../../Components/Navbar/Navbar";

import huongoaihuong from "../../assets/sappage/huongoaihuong3.jpg";
import huongcam from "../../assets/sappage/huongcam.jpg";
import huongsen from "../../assets/sappage/huongsen.jpg";

const combos = [
  {
    id: 1,
    title: "Combo Thư Giãn",
    desc: "Thư giãn tinh thần – ngủ ngon – giảm stress",
    products: ["Oải Hương", "Sen Hồng"],
    image: huongoaihuong,
    oldPrice: "90.000đ",
    newPrice: "79.000đ",
    color: "#6c63ff",
  },
  {
    id: 2,
    title: "Combo Năng Lượng",
    desc: "Tươi mới – tỉnh táo – tràn đầy năng lượng",
    products: ["Cam Ngọt", "Oải Hương"],
    image: huongcam,
    oldPrice: "94.000đ",
    newPrice: "82.000đ",
    color: "#e67c00",
  },
  {
    id: 3,
    title: "Combo Thanh Khiết",
    desc: "Không gian nhẹ nhàng – dễ chịu – thanh mát",
    products: ["Sen Hồng", "Cam Ngọt"],
    image: huongsen,
    oldPrice: "94.000đ",
    newPrice: "80.000đ",
    color: "#2c9f7c",
  },
];

const Promotion = () => {
  return (
    <>
      <Navbar />

      <div className="promotion-page">
        <h1 className="promotion-title">🎁 Ưu đãi đặc biệt</h1>
        <p className="promotion-sub">
          Combo sáp thơm – Giá tốt hơn khi mua chung
        </p>

        <div className="promotion-grid">
          {combos.map((combo) => (
            <div key={combo.id} className="promotion-card">
              <img src={combo.image} alt={combo.title} />

              <div className="promotion-info">
                <h2 style={{ color: combo.color }}>{combo.title}</h2>

                <div className="combo-content">
                  <p className="combo-desc">{combo.desc}</p>

                  <ul>
                    {combo.products.map((p, i) => (
                      <li key={i}>🌿 {p}</li>
                    ))}
                  </ul>
                </div>

                <div className="combo-price">
                  <span className="old">{combo.oldPrice}</span>
                  <span className="new" style={{ color: combo.color }}>
                    {combo.newPrice}
                  </span>
                </div>

                <button
                  className="btn-primary"
                  style={{ background: combo.color }}
                >
                  Mua combo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Promotion;
