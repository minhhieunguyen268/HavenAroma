import ProductDetail from "./ProductDetail";
import huongcam from "../../assets/sappage/huongcam.jpg";

const CamngotProduct = () => {
  return (
    <ProductDetail
      data={{
        name: "Sáp thơm Cam Ngọt",
        tagline: "Đánh thức giác quan – Tràn đầy năng lượng",
        price: "49.000đ",
        color: "#e67c00",
        button: "linear-gradient(90deg,#ff9800,#ffc107)",
        image: huongcam,
        benefits: [
          "🍊 Hương cam tươi mát",
          "⚡ Giảm mệt mỏi – tăng tập trung",
          "🌿 Khử mùi hiệu quả",
        ],
        specs: [
          "Thành phần: Sáp đậu nành, tinh dầu cam ngọt",
          "Khối lượng: 50g",
          "Thời gian sử dụng: ~20 giờ",
        ],
      }}
    />
  );
};

export default CamngotProduct;
