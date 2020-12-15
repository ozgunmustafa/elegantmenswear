import Layout from "../components/layout";
import Head from "next/head";
import Breadcrumb from "../components/Partials/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ProductIndex from "../components/ProductIndex";
import Slide from "../components/Slide";


const Product = () => {
  var releatedProductSlider = {
    dots: false,
    autoplay:true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Layout>
            <Head>
        <title>Ürün Detay Sayfası</title>
      </Head>
      <div className="custom-container">
        <Breadcrumb />
        <ProductIndex />
        <div className="separator">İlginizi Çekebilecek Ürünler</div>
        <Slide settings={releatedProductSlider}>
        <div>
            <ProductCard like={false} src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/10120757/dokuma-smokin-takim-elbise_bordo-bordo_2_buyuk.JPG"/>
          </div>
          <div>
            <ProductCard like={false} src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/10120757/dokuma-smokin-takim-elbise_bordo-bordo_5_buyuk.JPG"/>
          </div>
          <div>
            <ProductCard like={false} src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/10120757/dokuma-smokin-takim-elbise_bordo-bordo_2_buyuk.JPG"/>
          </div>
          <div>
            <ProductCard like={false} src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/10120351/duz-dokuma-smokin-takim-elbise_siyah-siyah_2_buyuk.jpg" />
          </div>
          <div>
            <ProductCard like={false} src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/10120351/duz-dokuma-smokin-takim-elbise_siyah-siyah_1_buyuk.jpg"/>
          </div>
          <div>
            <ProductCard like={false} src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/10120351/duz-dokuma-smokin-takim-elbise_siyah-siyah_3_buyuk.jpg"/>
          </div>
  
        </Slide>
      </div>
    </Layout>
  );
};

export default Product;
