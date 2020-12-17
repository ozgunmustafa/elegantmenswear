import { SiFastly } from "react-icons/si";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

SiFastly;
export default function footer() {
  return (
    <footer className="bg-light py-5 px-2 mt-3">
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
            <div className="footer-nav-title">KULLANICI</div>
            <Link href="/giris">
              <a className="d-block">Giris Yap</a>
            </Link>
            <Link href="/kaydol">
              <a className="d-block">Kaydol</a>
            </Link>
            <Link href="/hesabim/bilgilerim">
              <a className="d-block">Hesabım</a>
            </Link>
            <Link href="/hesabim/favorilerim">
              <a className="d-block">Favorilerim</a>
            </Link>
            <Link href="/sepetim">
              <a className="d-block">Sepetim</a>
            </Link>
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
