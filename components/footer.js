import { SiFastly } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

SiFastly;
export default function footer() {
  return (
    <footer className="bg-light py-5 px-2">
      <div className="custom-container  footer-menus">
        <div className="footer-grid grid-gap">
 
          <div>
            <div className="footer-nav-title">KATEGORİLER</div>
            <a href="#" className="d-block">
              Gömlek
            </a>
            <a href="#" className="d-block">
              Takım Elbise
            </a>
            <a href="#" className="d-block">
              Ceket
            </a>
          </div>
          <div>
            <div className="footer-nav-title">KOLEKSİYONLAR</div>
            <a href="#" className="d-block">
              Gömlek
            </a>
            <a href="#" className="d-block">
              Takım Elbise
            </a>
            <a href="#" className="d-block">
              Ceket
            </a>
          </div>
          <div>
            <div className="footer-nav-title">KURUMSAL</div>
            <a href="#" className="d-block">
              Hesabım
            </a>
            <a href="#" className="d-block">
              Giriş Yap
            </a>
            <a href="#" className="d-block">
              Üye Ol
            </a>
            <a href="#" className="d-block">
              Sepetim
            </a>
            <a href="#" className="d-block">
              Favorilerim
            </a>
          </div>
          <div>
            <div className="footer-nav-title">Bize Ulaşın</div>
            <p>
              <strong>Adres : </strong>Yeşillik Cad. No:165/2 35400 Karabağlar -
              İZMİR
            </p>
            <p>
              <strong>Telefon : </strong>0232 265 06 06
            </p>
            <a href="#" className="d-block">
              havan@havan.com.tr
            </a>
          </div>
          <div className="text-center">
            <img src="/logo.png" alt="" className="mb-3" />
            <div className="social-icons d-flex justify-content-between">
              <div className="icon">
                <a href="#">
                  <FaFacebookF />
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <FaTwitter />
                </a>
              </div>
              <div className="icon">
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
              <div className="icon">
                <a href="">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
