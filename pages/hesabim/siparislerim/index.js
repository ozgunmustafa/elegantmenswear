import ProfileLayout from "../../../components/ProfileLayout";
import Panel from "../../../components/Panel";
import Link from "next/link";


const siparislerim = () => {
  return (
    <ProfileLayout title="Siparişlerim">
      <div className="profile-content-box">
        <div className="profile-title-section">
          <h1 className="profile-title">Siparişlerim</h1>
        </div>
        <Panel>
          <Panel.Header>
          <div className="order-header d-flex justify-content-between align-items-center">
              <div className="order">
                <strong>Sipariş Tarihi :</strong>
                <span> 20.03.1999</span>
              </div>
              <div className="order">
                <strong>Alıcı</strong>
                <span> Mustafa Özgün</span>
              </div>
              <div className="order">
                <strong>Sipariş Özeti :</strong>
                <span>3 ürün</span>
              </div>
              <div className="order sm-hide">
                <strong>Tutarı :</strong>
                <span>122.33 ₺</span>
              </div>
              <div className="order sm-hide">
              <Link href="/hesabim/siparislerim/detay">
                <a className="primary-btn">Sipariş Detayı</a>
                </Link>
              </div>
            </div>
          </Panel.Header>
          <Panel.Body>
          <div className="order-details">
              <div className="order-status">
                <div className="order-status-completed">
                  Siparişiniz tamamlandı.
                </div>
                <div className="order-date">
                  Siparişiniz 20.12.2020 tarihinde alındı.
                </div>
              </div>
              <img
                src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_4_buyuk.JPG"
                className="order-image"
              />
            </div>
            <div className="order-details">
              <div className="order-status">
                <div className="order-status-progress">Siparişiniz alındı.</div>
                <div className="order-date">
                  Siparişiniz 20.12.2020 tarihinde alındı.
                </div>
              </div>
              <img
                src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_4_buyuk.JPG"
                className="order-image"
              />
            </div>
            <div className="order-details">
              <div className="order-status">
                <div className="order-status-canceled">
                  Siparişiniz iptal edildi.
                </div>
              </div>
              <img
                src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_4_buyuk.JPG"
                className="order-image"
              />
            </div>
          </Panel.Body>
          <Panel.Footer classnames="lg-hide">
          <div className="d-flex justify-content-between align-items-center">
              <div className="order">
                <strong>Tutarı :</strong>
                <span>122.33 ₺</span>
              </div>
              <div className="order">
                <Link href="/hesabim/siparislerim/detay">
                <a className="primary-btn">Sipariş Detayı</a>
                </Link>
                
              </div>
            </div>
          </Panel.Footer>
        </Panel>

      </div>
    </ProfileLayout>
  );
};

export default siparislerim;
