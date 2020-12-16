import Head from "next/head";
import Layout from "../components/layout";
import Slide from "../components/Slide";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FaPlayCircle } from "react-icons/fa";
import { BiCreditCard, BiSupport } from "react-icons/bi";
import { AiOutlineSafety } from "react-icons/ai";
import { GiPayMoney, GiTie } from "react-icons/gi";
import CategoryCard from "../components/CategoryCard";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <span className="firstSliderNextArrow sm-hide" onClick={onClick}>
      <GrFormNext />
    </span>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <span className="firstSliderPrevArrow sm-hide" onClick={onClick}>
      <GrFormPrevious />
    </span>
  );
};

export default function Home() {
  const firstSliderSetting = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const productSlide = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Layout>
      <Head>
        <title>Havan Giyim Anasayfa</title>
      </Head>

      <section id="intro">
        <div className="d-grid-2 place-center">
          <img src="/images/black-friday-banner.png" />
          <div className="intro-text-area">
            <p className="title mb-3">EFSANE CUMA İNDİRİMLERİ</p>
            <h2 className="head mb-3">
              Takım Elbiseler <br /> 225 TL
            </h2>
            <p className="desc mb-3">
              Takım Elbiseler 295 TL'den başlayan fiyatlarla. İndirimleri
              kaçırma...
            </p>
            <div className="intro-buttons">
              <a href="#" className=" alfa-btn-outline d-inline-block">
                TAKIM ELBİSELER
              </a>
              <a href="#" className=" alfa-btn d-inline-block">
                KOLEKSİYONLAR
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light py-5">
        <div className="custom-container d-grid-4">
          <div className="advantage">
            <div className="icon">
              <BiCreditCard className="d-block" />
            </div>
            <div className="text-left px-2">
              <div className="title">Müşteri Hizmetleri</div>
              <small className="sm-hide">
                Kredi kartı bilgileriniz 128 bit SSL güvenlik sistemi ile
                korunmaktadır.
              </small>
            </div>
          </div>
          <div className="advantage">
            <div className="icon">
              <GiPayMoney className="d-block" />
            </div>
            <div className="text-left px-2">
              <div className="title">Güvenilir Alışveriş</div>
              <small className="sm-hide">
                Kredi kartı bilgileriniz 128 bit SSL güvenlik sistemi ile
                korunmaktadır.
              </small>
            </div>
          </div>
          <div className="advantage">
            <div className="icon">
              <AiOutlineSafety className="d-block" />
            </div>
            <div className="text-left px-2">
              <div className="title">Müşteri Hizmetleri</div>
              <small className="sm-hide">
                Kredi kartı bilgileriniz 128 bit SSL güvenlik sistemi ile
                korunmaktadır.
              </small>
            </div>
          </div>
          <div className="advantage">
            <div className="icon">
              <BiSupport className="d-block" />
            </div>
            <div className="text-left px-2">
              <div className="title">Güvenilir Alışveriş</div>
              <small className="sm-hide">
                Kredi kartı bilgileriniz 128 bit SSL güvenlik sistemi ile
                korunmaktadır.
              </small>
            </div>
          </div>
        </div>
      </section>
      <section id="home-categories" className="custom-container">
        <div className="separator">İlginizi Çekebilecek Kategoriler</div>
        <div className="d-grid-4 grid-gap">
          <CategoryCard
            src="/images/category/tie-vertical.jpg"
            name="Aksesuar"
          />
          <CategoryCard
            src="/images/category/shirt-vertical.png"
            name="Gömlek"
          />
          <CategoryCard
            src="/images/category/blazer-vertical.png"
            name="Blazer"
          />
          <CategoryCard src="/images/category/underwear.png" name="Dış Giyim" />
        </div>
      </section>
      <div className="separator">Diğer Kombin Seçenekleri</div>
      <section className="custom-container my-2">
        <div className="home-product-grid">
          <div className="product-card">
            <Slide settings={productSlide}>
              <div>
                <figure>
                  <img
                    className="prd-img"
                    src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_1_buyuk.JPG"
                    alt=""
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    className="prd-img"
                    src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_2_buyuk.JPG"
                    alt=""
                  />
                </figure>
              </div>
            </Slide>
            <div className="card-bottom">
              <div className="product-name">Sarı Ekose Ceket</div>
              <div className="product-price">742.99 TL</div>
            </div>
          </div>
          <div className="product-card">
            <Slide settings={productSlide}>
              <div>
                <figure>
                  <img
                    className="prd-img"
                    src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/10120757/dokuma-smokin-takim-elbise_bordo-bordo_4_buyuk.JPG"
                    alt=""
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    className="prd-img"
                    src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/10120757/dokuma-smokin-takim-elbise_bordo-bordo_3_buyuk.JPG"
                    alt=""
                  />
                </figure>
              </div>
            </Slide>

            <div className="card-bottom">
              <div className="product-name">Sarı Ekose Ceket</div>
              <div className="product-price">742.99 TL</div>
            </div>
          </div>

          <div className="product-card">
            <Slide settings={productSlide}>
              <div>
                <figure>
                  <img
                    className="prd-img"
                    src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_1_buyuk.JPG"
                    alt=""
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    className="prd-img"
                    src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_2_buyuk.JPG"
                    alt=""
                  />
                </figure>
              </div>
            </Slide>
            <div className="card-bottom">
              <div className="product-name">Sarı Ekose Ceket</div>
              <div className="product-price">742.99 TL</div>
            </div>
          </div>
          <div className="product-card">
            <Slide settings={productSlide}>
              <div>
                <figure>
                  <img
                    className="prd-img"
                    src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_1_buyuk.JPG"
                    alt=""
                  />
                </figure>
              </div>
              <div>
                <figure>
                  <img
                    className="prd-img"
                    src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_2_buyuk.JPG"
                    alt=""
                  />
                </figure>
              </div>
            </Slide>
            <div className="card-bottom">
              <div className="product-name">Sarı Ekose Ceket</div>
              <div className="product-price">742.99 TL</div>
            </div>
          </div>
        </div>
      </section>
      <section className=" bg-light p-3 mb-3">
        <div className="custom-container">
        <div className="d-grid-2 ">
          <div className="d-flex flex-column justify-content-center p-2">
            <p>50 TL'lik indirim kuponunu yakala</p>
            <small>Fırsatlardan haberdar olmak ve ilk aboneliğe özel 50 TL'lik indirim kuponunu almak için abone ol.</small>
          </div>
          <div className="p-3">
            <p>Bültenimize Abone Ol!</p>
            <form id="subscribe-form">
                <input className="" type="email" placeholder="Eposta Adresi"></input>
                <button>Abone Ol</button>
            </form>
          </div>
        </div>
        </div>

      </section>
      {/* <section id="introduce-video" className="introduce-video">
        <div className="separator">Bizi Yakından Tanıyın</div>

        <div className="d-grid-2 bg-video-sec">
          <div
            className="video-image"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1593032465175-481ac7f401a0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80')`,
            }}
          >
            <span>
              <FaPlayCircle className="video-play" />
            </span>
          </div>
          <div className=" video-texts">
            <GiTie className="tie-icon sm-hide" />
            <h3 className="title">Çekimlerimizi Nasıl Hazırlıyoruz ?</h3>
            <p className="desc">
              Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
              metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir
              hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak
              karıştırdığı 1500'lerden beri endüstri standardı sahte metinler{" "}
            </p>
          </div>
        </div>
      </section> */}

      {/* <div className="separator">İlginizi Çekebilecek Kategoriler</div>
      <section>
        <div className="d-grid-2 grid-gap">
          <a href="">
            <div className="category-box-wrap">
              <div className="color-overlay"></div>
              <img src="/images/category/blazers.jpg" className="w-100" />
              <div className="category-name">Blazerlar</div>
            </div>
          </a>

          <a href="">
            <div className="category-box-wrap">
              <div className="color-overlay"></div>
              <img src="/images/category/blazers.jpg" className="w-100" />
              <div className="category-name">Blazerlar</div>
            </div>
          </a>
          <a href="">
            <div className="category-box-wrap">
              <div className="color-overlay"></div>
              <img src="/images/category/blazers.jpg" className="w-100" />
              <div className="category-name">Blazerlar</div>
            </div>
          </a>

          <a href="">
            <div className="category-box-wrap">
              <div className="color-overlay"></div>
              <img src="/images/category/blazers.jpg" className="w-100" />
              <div className="category-name">Blazerlar</div>
            </div>
          </a>
        </div>
      </section> */}
      {/* 
      <div className="custom-container my-2">
        <Slide settings={firstSliderSetting}>
          <div>
            <div className="banner-slide-wrap">
              <figure>
                <img
                  className="banner-slide-img"
                  src="https://cdn.sorsware.com/kip/ContentImages/Product/2018-1/10105555/takim-elbise_indigo-indigo_1_buyuk.JPG"
                  alt=""
                />
              </figure>

              <div className="banner-slide-right">
                <div className="title">Özel Blazerlar</div>
                <div className="subtitle">
                  500 TL
                  <br />
                  'den başlayan fiyatlarla
                </div>
                <button className="view-button">Alışverişe Başla</button>
              </div>
            </div>
          </div>
          <div>
            <div className="banner-slide-wrap">
              <figure>
                <img
                  className="banner-slide-img"
                  src="https://cdn.dsmcdn.com/mnresize/415/622/ty26/product/media/images/20201125/9/31982311/19753891/1/1_org_zoom.jpg"
                  alt=""
                />
              </figure>
              <div className="banner-slide-right">
                <div className="title">Özel Blazerlar</div>
                <div className="subtitle">
                  500 TL
                  <br />
                  'den başlayan fiyatlarla
                </div>
                <button className="view-button">Alışverişe Başla</button>
              </div>
            </div>
          </div>
          <div>
            <div className="banner-slide-wrap">
              <figure>
                <img
                  className="banner-slide-img"
                  src="https://cdn.dsmcdn.com/mnresize/415/622/ty26/product/media/images/20201125/9/31982311/19753891/1/1_org_zoom.jpg"
                  alt=""
                />
              </figure>
              <div className="banner-slide-right">
                <div className="title">Özel Blazerlar</div>
                <div className="subtitle">
                  500 TL
                  <br />
                  'den başlayan fiyatlarla
                </div>
                <button className="view-button">Alışverişe Başla</button>
              </div>
            </div>
          </div>
        </Slide>
      </div> */}
    </Layout>
  );
}
