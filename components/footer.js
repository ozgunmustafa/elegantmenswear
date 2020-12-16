import { SiFastly } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

SiFastly;
export default function footer() {
  return (
    <footer className="bg-light py-5 px-2">
      <div className="custom-container  footer-menus">
        <div className="footer-grid grid-gap">
 
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
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
          <div className="mb-3">
            <div className="footer-nav-title">Bize Ulaşın</div>
            <p>
              <strong>Adres : </strong>Bayraklı / İzmir
            </p>
            <p>
              <strong>Telefon : </strong>0507 386 11 25
            </p>
            <a href="#" className="d-block">
              elegant@manswear.com.tr
            </a>
          </div>
          <div >
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
