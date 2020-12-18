import Layout from "../components/layout";
import Head from "next/head";
import Breadcrumb from "../components/Partials/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ProductIndex from "../components/ProductIndex";
import Slide from "../components/Slide";
import { homeProducts } from "../src/data/homeProducts";
import Link from "next/link";

const Urun = () => {
  var releatedProductSlider = {
    dots: false,
    autoplay: true,
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
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
          {homeProducts.map((product) => {
            return (
              <Link href="/urun">
                <a>
                  <div>
                    <ProductCard product={product} />
                  </div>
                </a>
              </Link>
            );
          })}
        </Slide>
      </div>
    </Layout>
  );
};

export default Urun;
