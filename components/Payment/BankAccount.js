
const BankAccount = ({image,name,accountNo}) => {
  return (
    <div className="bank-radio">
      <img className="bank-image" src={image} />
      <p className="">
        <span className="d-block">
  Hesap Sahibi: <strong>{name}</strong>
        </span>
        <strong className="d-block">T.GARANTİ BANKASI A.Ş. BAŞKENT ŞUBE</strong>
        <span className="d-block">
  Hesap Numarası: <strong>{accountNo}</strong>
        </span>
      </p>
    </div>
  );
};

export default BankAccount;
