import ProductDetail from "./ProductDetail";
import huongoaihuong3 from "../../assets/sappage/huongoaihuong3.jpg";

const OaihuongProduct = () => {
  return (
    <ProductDetail
      data={{
        name: "Sáp thơm Oải Hương",
        tagline: "Thả lỏng tâm trí – Ngủ sâu hơn",
        price: "45.000đ",
        color: "#6c63ff",
        button: "linear-gradient(90deg,#6c63ff,#b8b5ff)",
        image: huongoaihuong3,
        benefits: [
          "😌 Giảm căng thẳng",
          "🌙 Hỗ trợ giấc ngủ",
          "🪻 Hương dịu nhẹ",
        ],
        specs: [
          "Thành phần: Sáp đậu nành, tinh dầu oải hương",
          "Khối lượng: 50g",
          "Thời gian sử dụng: ~20 giờ",
        ],
      }}
    />
  );
};

export default OaihuongProduct;
