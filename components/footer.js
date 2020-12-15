
import{SiFastly} from "react-icons/si"
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

SiFastly
export default function footer() {
  return (
    <footer className="bg-light">
 


      <div className="container py-4 footer-menus">
      <div className="row desktop-footer">
        <div className="col-md-4 mb-4">
          <img src="/logo.png" alt="" className="mb-3"/>
          <div className="social-icons d-flex">
            <div className="icon">
              <a href="#"> <FaFacebookF/></a>
            </div>
            <div className="icon">
              <a href="#"><FaTwitter/></a>
            </div>
            <div className="icon">
              <a href="#"><FaInstagram/></a>
            </div>
            <div className="icon">
              <a href=""> <FaYoutube/></a>
            </div>
          </div>
         
        </div>
        <div className="col-md-2 py-4">
          <div className="footer-nav-title">KATEGORİLER</div> 
          <a href="#" className="d-block">Gömlek</a>
          <a href="#" className="d-block">Takım Elbise</a>
          <a href="#" className="d-block">Ceket</a>
        </div>
        <div className="col-md-2 py-4">
          <div className="footer-nav-title">KURUMSAL</div> 
          <a href="#" className="d-block">Hesabım</a>
          <a href="#" className="d-block">Giriş Yap</a>
          <a href="#" className="d-block">Üye Ol</a>
          <a href="#" className="d-block">Sepetim</a>
          <a href="#" className="d-block">Favorilerim</a>
        </div>
        <div className="col-md-4 py-4">
          <div className="footer-nav-title">Bize Ulaşın</div> 
          <p><strong>Adres : </strong>Yeşillik Cad. No:165/2 35400 Karabağlar - İZMİR</p>
          <p><strong>Telefon : </strong>0232 265 06 06</p>         
          <a href="#" className="d-block">havan@havan.com.tr</a>
        </div>
      </div>
      </div>
      
     

    </footer>
  );
}
