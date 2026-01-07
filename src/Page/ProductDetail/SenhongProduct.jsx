import ProductDetail from "./ProductDetail";
import huongsen from "../../assets/sappage/huongsen.jpg";

const SenhongProduct = () => {
  return (
    <ProductDetail
      data={{
        name: "Sáp thơm Sen Hồng",
        tagline: "Thanh khiết – Cân bằng cảm xúc",
        price: "45.000đ",
        color: "#e91e63",
        button: "linear-gradient(90deg,#e91e63,#f48fb1)",
        image: huongsen,
        benefits: [
          "🪷 Hương sen thanh mát",
          "🧘‍♀️ Cân bằng tinh thần",
          "🏡 Tạo cảm giác yên bình",
        ],
        specs: [
          "Thành phần: Sáp đậu nành, tinh dầu sen",
          "Khối lượng: 50g",
          "Thời gian sử dụng: ~20 giờ",
        ],
      }}
    />
  );
};

export default SenhongProduct;
