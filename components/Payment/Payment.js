import { Tabs, Tab } from "react-bootstrap";
import ModalDialog from "../Partials/ModalDialog";

import { useState } from "react";
import PaymentMethod from "./PaymentMethod";

const Payment = () => {
  const [addressValue, setaddressValue] = useState(0);
  const [payMethod, setPayMethod] = useState("creditCard");
  const [modalShow, setModalShow] = useState(false);
  const [key, setKey] = useState("address");

  const updateAdressValue = (e) => {
    setaddressValue(e.target.value);
  };

  const updatePayMethod = (e) => {
    setPayMethod(e.target.value);
  };
  const updateKey = () => {
    setKey("payme");
  };

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="address" title="Adres Seçimi">
          <div className="addresses bg-light p-2 card-border">
            <button
              className="create-new-address"
              onClick={() => setModalShow(true)}
            >
              <span>+</span>
              Yeni Adres Ekle
            </button>
            <ModalDialog show={modalShow} onHide={() => setModalShow(false)}>
              <form id="create-address">
                <div className="row">
                  <div className="col-md-12 ">
                    <label htmlFor="email">Email</label>
                    <input id="email" className="form-element" />
                  </div>
                  <div className="col-6 ">
                    <label htmlFor="email">Ad</label>
                    <input className="form-element" />
                  </div>
                  <div className="col-6 ">
                    <label htmlFor="email">Soyad</label>
                    <input className="form-element" />
                  </div>
                  <div className="col-6">
                    <label htmlFor="email">Telefon</label>
                    <input className="form-element" />
                  </div>
                  <div className="col-6 ">
                    <label htmlFor="email">İl</label>
                    <select className="form-element">
                      <option>İl Seçiniz</option>
                      <option>İzmir</option>
                      <option>İstanbul</option>
                    </select>
                  </div>
                  <div className="col-6 ">
                    <label htmlFor="email">İlçe</label>
                    <select className="form-element">
                      <option>İlçe Seçiniz</option>
                      <option>İzmir</option>
                      <option>İstanbul</option>
                    </select>
                  </div>
                  <div className="col-6 ">
                    <label htmlFor="email">Mahalle</label>
                    <select className="form-element">
                      <option>Mahalle Seçiniz</option>
                      <option>İzmir</option>
                      <option>İstanbul</option>
                    </select>
                  </div>
                  <div className="col-md-12 ">
                    <label htmlFor="email">Adres Başlığı</label>
                    <input id="email" className="form-element" />
                  </div>
                  <div className="col-md-12 ">
                    <label htmlFor="email">Adres</label>
                    <textarea
                      rows="3"
                      className="form-element"
                      placeholder="Adresi açık şekilde giriniz"
                    />
                    <hr />
                  </div>

                  <div className="col-md-12 text-right">
                    <button className="primary-btn">Kaydet</button>
                  </div>
                </div>
              </form>
            </ModalDialog>

            <div className="scrollmenu">
              <label className="address-label">
                <input
                  type="radio"
                  name="adres"
                  value="1"
                  onClick={(e) => updateAdressValue(e)}
                />
                <div className="span-wrap">
                  <span className="title">İzmir Ev (Varsayılan)</span>
                  <span>Mustafa Özgün</span>
                  <span>507 *** ** 25</span>
                  <span>Cengizhan Mah</span>
                  <span>Bayraklı/Izmir</span>
                </div>
                <span className="checkmark"></span>
              </label>
              <label className="address-label">
                <input
                  type="radio"
                  name="adres"
                  value="2"
                  onClick={(e) => updateAdressValue(e)}
                />
                <div className="span-wrap">
                  <span className="title">İzmir Ev</span>
                  <span>Mustafa Özgün</span>
                  <span>507 *** ** 25</span>
                  <span>Cengizhan Mah</span>
                  <span>Bayraklı/Izmir</span>
                </div>
              </label>
              <label className="address-label">
                <input
                  type="radio"
                  name="adres"
                  value="3"
                  onClick={(e) => updateAdressValue(e)}
                />
                <div className="span-wrap">
                  <span className="title">İzmir Ev</span>
                  <span>Mustafa Özgün</span>
                  <span>507 *** ** 25</span>
                  <span>Cengizhan Mah</span>
                  <span>Bayraklı/Izmir</span>
                </div>
              </label>
            </div>
            <div className="text-right w-100">
              <button
                className="primary-btn my-3"
                onClick={updateKey}
                disabled={!addressValue}
              >
                Ödeme Adımına Geç
              </button>
            </div>
          </div>
        </Tab>
        <Tab eventKey="payme" title="Ödeme" disabled={!addressValue}>
          <div className="bg-light p-3 card-border">
            <h2 className="box-title">Ödeme yöntemi seçiniz</h2>
            <div>
              <div className="scrollmenu justify-content-start">
                <label className="payment-method-label ">
                  <input
                    type="radio"
                    checked={payMethod === "creditCard" ? true : false}
                    name="paymentMethod"
                    value="creditCard"
                    onClick={(e) => updatePayMethod(e)}
                  />
                  Kredi /Banka Kartı
                </label>

                <label className="payment-method-label mx-2">
                  <input
                    type="radio"
                    checked={payMethod === "onDelivery" ? true : false}
                    name="paymentMethod"
                    value="onDelivery"
                    onClick={(e) => updatePayMethod(e)}
                  />
                  Kapıda Ödeme
                </label>
                <label className="payment-method-label ">
                  <input
                    type="radio"
                    checked={payMethod === "EFT" ? true : false}
                    name="paymentMethod"
                    value="EFT"
                    onClick={(e) => updatePayMethod(e)}
                  />
                  EFT / Havale
                </label>
              </div>
            </div>

            <PaymentMethod payMethod={payMethod} />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Payment;
