import React, { useEffect, useState, useRef } from "react";
import ProductOptionCard from "./ProductOptionCard";
import Slide from "./Slide";
import { Accordion, Button, Card } from "react-bootstrap";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";
import InnerImageZoom from "react-inner-image-zoom";
import ReactImageMagnify from "react-image-magnify";

const ProductCard = () => {
  const productImageSlide = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // const [height, setHeight] = useState(0);
  // const ref = useRef(null);

  // useEffect(() => {
  //   setHeight(ref.top);
  // }, []);

  // console.log(height);

  // const [je, setJe] = useState(0);
  // console.log(je);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.onscroll = () => {
  //       let currentScrollPos = window.pageYOffset;
  //       setJe(currentScrollPos);
  //       let maxScroll = document.body.scrollHeight - window.innerHeight;
  //     };
  //   }
  // }, []);

  return (
    <div className="product-detail-grid">
      <div className="w-100">
        <div className="product-image-sec sm-hide">
          <InnerImageZoom
            alt="asdasd"
            src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_1_kucuk.JPG"
            zoomSrc="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_1_buyuk.JPG"
            className="prd-img"
          />
          <img className="prd-img" src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_2_buyuk.JPG" />
          <img className="prd-img" src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_3_buyuk.JPG" />
          <img className="prd-img" src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_4_buyuk.JPG" />
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src:
                  "https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_1_buyuk.JPG",
              },
              largeImage: {
                src:
                  "https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_1_buyuk.JPG",
                width: 1200,
                height: 2000,
              },
              isHintEnabled: false,
              shouldHideHintAfterFirstActivation: false,
            }}
            className="z-index-100"
          />
                 <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src:
                  "https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_1_buyuk.JPG",
              },
              largeImage: {
                src:
                  "https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_1_buyuk.JPG",
                width: 1200,
                height: 2000,
              },
              isHintEnabled: false,
              shouldHideHintAfterFirstActivation: false,
            }}
          className="z-index-99" />
        </div>
        <div className="lg-hide">
          <Slide settings={productImageSlide}>
            <div>
              <img
                src="https://cdn.dsmcdn.com/mnresize/415/622/ty26/product/media/images/20201125/9/31982311/19753891/1/1_org_zoom.jpg"
                className="w-100"
              />
            </div>
            <div>
              <img
                src="https://cdn.dsmcdn.com/mnresize/415/622/ty26/product/media/images/20201125/9/31982311/19753891/1/1_org_zoom.jpg"
                className="w-100"
              />
            </div>
            <div>
              <img
                src="https://cdn.dsmcdn.com/mnresize/415/622/ty26/product/media/images/20201125/9/31982311/19753891/1/1_org_zoom.jpg"
                className="w-100"
              />
            </div>
          </Slide>
        </div>
      </div>

      <div className="product-details ">
        <div className="sticked">
          <h1 className="product-name mb-0">
            2018 - 2019 Sonbahar Kış Koleksiyonu
          </h1>
          <span className="product-code">KP256522</span>

          <div className="product-price my-2">
            <span className="instead-price mr-2">1000 ₺</span>
            <span className="discount-rate">30%</span>
            <span className="current-price mt-1">700 ₺</span>
          </div>
          <ProductOptionCard title="Renk" className="my-20">
            <label className="color-label">
              <input type="radio" name="color" />
              <img
                src="https://cdn.dsmcdn.com/mnresize/415/622/ty26/product/media/images/20201125/9/31982311/19753891/1/1_org_zoom.jpg"
                className=""
              />
            </label>
            <label className="color-label">
              <input type="radio" name="color" />
              <img
                src="https://cdn.dsmcdn.com/mnresize/415/622/ty26/product/media/images/20201125/9/31982311/19753891/1/1_org_zoom.jpg"
                className=""
              />
            </label>
            <label className="color-label">
              <input type="radio" name="color" />
              <img
                src="https://cdn.dsmcdn.com/mnresize/415/622/ty26/product/media/images/20201125/9/31982311/19753891/1/1_org_zoom.jpg"
                className=""
              />
            </label>
          </ProductOptionCard>

          <ProductOptionCard title="Beden" className="my-20">
            <label className="size-label">
              <input type="radio" name="size" />
              <span>S</span>
            </label>
            <label className="size-label">
              <input type="radio" name="size" />
              <span>M</span>
            </label>
            <label className="size-label">
              <input type="radio" name="size" />
              <span>L</span>
            </label>
          </ProductOptionCard>

          <button className="primary-btn w-100">Sepete Ekle</button>

          <Accordion defaultActiveKey="0" className="mt-3">
            <Card>
              <Accordion.Toggle
                className="accordion-btn d-flex justify-content-between mt-2"
                eventKey="0"
              >
                Ürün Detayları
                <span>
                  <AiOutlinePlusCircle />
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Idea of denouncing pleasure and actual laborious physical
                  exercise, except to obtain some advantage from it? But who has
                  any right to find fault with a man who chooses to enjoy a
                  pleasure that has no annoying consequences,
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <hr />
            <Card>
              <Accordion.Toggle
                className="accordion-btn d-flex justify-content-between mt-2"
                eventKey="1"
              >
                Beden Ölçüleri
                <span>
                  <AiOutlinePlusCircle />
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  But I must explain to you how all this mistaken idea of deno
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <hr />
            <Card>
              <Accordion.Toggle
                className="accordion-btn d-flex justify-content-between mt-2"
                eventKey="2"
              >
                İade ve Teslimat Koşulları
                <span>
                  <AiOutlinePlusCircle />
                </span>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  "But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure, but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful. Nor again
                  is there anyone who loves or pursues or desires to obtain pain
                  of itself, because it is pain, but because occasionally
                  circumstances occur in which toil and pain can procure him
                  some great pleasure. To take a trivial example, which of us
                  ever undertakes laborious physical exercise, except to obtain
                  some advantage from it? But who has any right to find fault
                  with a man who chooses to enjoy a pleasure that has no
                  annoying consequences, or one who avoids a pain that produces
                  no resultant pleasure?" "But I must explain to you how all
                  this mistaken idea of denouncing pleasure and praising pain
                  was born and I will give you a complete account of the system,
                  and expound the actual teachings of the great explorer of the
                  truth, the master-builder of human happiness. No one rejects,
                  dislikes, or avoids pleasure itself, because it is pleasure,
                  but because those who do not know how to pursue pleasure
                  rationally encounter consequences that are extremely painful.
                  Nor again is there anyone who loves or pursues or desires to
                  obtain pain of itself, because it is pain, but because
                  occasionally circumstances occur in which toil and pain can
                  procure him some great pleasure. To take a trivial example,
                  which of us ever undertakes laborious physical exercise,
                  except to obtain some advantage from it? But who has any right
                  to find fault with a man who chooses to enjoy a pleasure that
                  has no annoying consequences, or one who avoids a pain that
                  produces no resultant pleasure?"
                </Card.Body>
              </Accordion.Collapse>
            </Card>
            <hr />
          </Accordion>
        </div>
      </div>

      <div className="options-fixed lg-hide">
        <ProductOptionCard title="Beden Seçiniz" className="p-2">
          <div className="fixed-grid">
            <select className="mr-2">
              <option>S</option>
              <option>L</option>
              <option>M</option>
            </select>
            <button className="primary-btn ">
              <HiOutlineShoppingBag className="mr-2" />
              Sepete Ekle
            </button>
          </div>
        </ProductOptionCard>
      </div>
    </div>
  );
};

export default ProductCard;
