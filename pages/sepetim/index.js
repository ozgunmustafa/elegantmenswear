import BasketItem from "../../components/Basket/BasketItem";
import Layout from "../../components/layout";
import Head from "next/head";
import OrderNote from "../../components/OrderDetails/OrderNote";
import Link from "next/link";

const Sepetim = () => {
  return (
    <Layout>
      <Head>
        <title>Sepetim</title>
      </Head>
      <div className="container">
        <div className="product-detail-grid grid-gap my-2">
          <div className="basket-items">
            <div className="separator-1">Sepetim</div>
            <BasketItem />
            <BasketItem />
          </div>
          <div className="order-summary">
            <div className="sticked">
              <div className="bg-light p-3 ">
                <h2 className="box-title">Sipariş Özeti</h2>
                <div className="price-details">
                  <span>Ürün Toplamı</span>
                  <span>69,99 ₺</span>
                </div>
                <div className="price-details">
                  <span>Kargo Toplamı</span>
                  <span>9,99 ₺</span>
                </div>
                <div className="price-details">
                  <span>Sepette %35 indirim</span>
                  <span>11,99 ₺</span>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <span>Toplam</span>
                  <span>57,49 ₺</span>
                </div>
              </div>
              <OrderNote />

              <Link href="/sepetim/odeme">
                <button className="primary-btn w-100">Sepeti Onayla</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sepetim;
