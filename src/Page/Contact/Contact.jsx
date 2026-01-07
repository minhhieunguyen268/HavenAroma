
import Navbar from "../../Components/Navbar/Navbar";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <div className="contact-card">
          <h1>Liên hệ HavenAroma</h1>
          <p>Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ nhanh nhất!</p>
          <ul className="contact-info">
            <li><strong>Địa chỉ:</strong> Phường Ninh Kiều, TP.Cần Thơ</li>
            <li><strong>Hotline:</strong> <a href="tel:0901234567">0901 234 567</a></li>
            <li><strong>Email:</strong> <a href="HavenAromaVN@gmail.com">HavenAromaVN@gmail.com</a></li>
            <li><strong>Zalo:</strong> <a href="https://zalo.me/0901234567" target="_blank" rel="noopener noreferrer">0901 234 567</a></li>
          </ul>
          <div className="contact-socials">
            <a href="https://www.facebook.com/havenaromavn?locale=vi_VN" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
