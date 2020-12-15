import BankAccount from "./BankAccount";
import { useState } from "react";
import Cards from "react-credit-cards";
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "../../src/utils/paymentUtils";
const PaymentMethod = ({ payMethod }) => {
  return (
    <div>
      {(() => {
        switch (payMethod) {
          case "creditCard":
            return <CreditCard />;
          case "EFT":
            return <EFT />;
          case "onDelivery":
            return <OnDelivery />;
        }
      })()}
    </div>
  );
};

const CreditCard = () => {
  const [inputs, setInputs] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });

  const handleInputChange = (e) => {


    if (e.target.name === "number") {
      e.target.value = formatCreditCardNumber(e.target.value);
    } else if (e.target.name === "expiry") {
      e.target.value = formatExpirationDate(e.target.value);
    } else if (e.target.name === "cvc") {
      e.target.value = formatCVC(e.target.value);
    }
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  };
  const handleInputFocus = (e) => {
    setInputs({ ...inputs, focus: e.target.name });
  };
  return (
    <div className="bg-white p-3 my-2 card-border">

<div className="mb-3">
<Cards
        cvc={inputs.cvc}
        expiry={inputs.expiry}
        focused={inputs.focus}
        name={inputs.name}
        number={inputs.number}
        placeholders={inputs.number}
      />
      
</div>

      <form id="payment-form">
        <div className="row">
          <div className="col-md-12">
            <label htmlFor="card">Kart No</label>
            <input
              className="form-element"
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              placeholder="Kart no"
            />
          </div>
          <div className="col-md-12">
            <label htmlFor="card">Kart Üzerindeki İsim</label>
            <input
              className="form-element"
              type="text"
              id="card"
              name="name"
              placeholder="Ad Soyad"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
            />
          </div>

          <div className="col-8 col-md-6">
            <label>Son Kullanım</label>
            <div className="d-flex">
              <input
                className="form-element mr-2"
                type="text"
                name="expiry"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                placeholder="Gün/Ay"
              />
            
            </div>
          </div>

          <div className="col-4 col-md-3 offset-md-3">
            <label htmlFor="cvv">CVC</label>
            <input
              className="form-element"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              name="cvc"
              
            />
          </div>
        </div>
      </form>
    </div>
  );
};
const EFT = () => {
  return (
    <div className="bg-white bank-account p-3 card-border">
      <p>
        Banka hesaplarımızdan birine sipariş tutarını
        aktarabilirsiniz.Kontrollerimizin ardından sipariş onayınız
        verilecektir.48 saat içinde ödemesi gönderilmeyen siparişler otomatik
        iptal edilir.
      </p>
      <BankAccount
        image="/images/banks/akbank.png"
        name="Mustafa Özgün"
        accountNo="IBAN:TR26 0011 1000 0000 0086 7175 55"
      />
      <BankAccount
        image="/images/banks/garanti-bbva.png"
        name="Mustafa Özgün"
        accountNo="IBAN:TR26 0011 1000 0000 0086 7175 55"
      />
      <BankAccount
        image="/images/banks/yapi-kredi.png"
        name="Mustafa Özgün"
        accountNo="IBAN:TR26 0011 1000 0000 0086 7175 55"
      />
    </div>
  );
};

const OnDelivery = () => {
  return (
    <div className="bg-white bank-account p-3 card-border">
      <p>Kapıda Ödeme</p>
    </div>
  );
};

export default PaymentMethod;
