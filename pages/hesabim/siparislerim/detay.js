import ProfileLayout from "../../../components/ProfileLayout";
import Panel from "../../../components/Panel";

const Detay = () => {
  return (
    <ProfileLayout>
      <div className="profile-content-box">
        <div className="profile-title-section">
          <h1 className="profile-title">Sipariş Detayları</h1>
        </div>
        <div className="d-grid-2 grid-gap my-3">
          <Panel>
            <Panel.Header>Teslimat Bilgileri</Panel.Header>
            <Panel.Body>
              <div className="panel-content">
                <span>Mustafa</span>
                <span>
                  Cengizhan Mah Cengizhan Mahallesi 1620/22 sok no:29/A Bayraklı
                  / İzmir
                </span>
              </div>
            </Panel.Body>
          </Panel>
          <Panel>
            <Panel.Header>Ödeme Bilgileri</Panel.Header>
            <Panel.Body>
              <div className="order-content">
                <div className="d-flex justify-content-between align-items-center">
                  <span>Ürün Toplamı </span>
                  <strong>275.99 TL</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <span>Kargo Bedeli </span>
                  <strong>9.99 TL</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center discount">
                  <span>150 TL ve üzeri kargo bedava </span>
                  <strong>9.99 TL</strong>
                </div>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                  <strong>Toplam :</strong>
                  <strong>275.99 TL</strong>
                </div>
              </div>
            </Panel.Body>
          </Panel>
        </div>
        <div>
          <Panel classnames="fit-height">
            <Panel.Header>Ürünler</Panel.Header>
            <Panel.Body>
              <div className="d-grid-2 grid-gap">
                <div className="ship-product card-border">
                  <img
                    src="/images/products/takim_elbise_1.png"
                  />
                  <div className="details">
                    <p className="mb-0"><strong>Füme Slim Fit Yelekli Takım Elbise</strong>
                    </p>
                    <div className="product-price my-1">
                      <span className="mr-2 line-through">1000 ₺</span>
                      <span className="text-red mt-1">700 ₺</span>
                    </div>
                    <div className="d-flex">
                    <a className="soft-btn mb-0 mr-2 border-light">İade Talep Et</a>
                    <a className="soft-btn mb-0 border-light">Puan Ver</a>
                    </div>
                  </div>
                </div>
                <div className="ship-product card-border">
                  <img
                    src="/images/products/takim_elbise_1.png"
                  />
                  <div className="details">
                    <p className="mb-0"><strong>Füme Slim Fit Yelekli Takım Elbise</strong>
                    </p>
                    <div className="product-price my-2">
                      <span className="mr-2 line-through">1000 ₺</span>
                      <span className="text-red mt-1">700 ₺</span>
                    </div>
                    <div className="d-flex">
                    <button className="soft-btn mb-0 mr-2 border-light">İade Talep Et</button>
                    <button className="soft-btn mb-0 border-light">Puan Ver</button>
                    </div>
                  </div>
                </div>
              </div>
            </Panel.Body>
          </Panel>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Detay;
