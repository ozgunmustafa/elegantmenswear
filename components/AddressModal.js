import ModalDialog from "./Partials/ModalDialog";

const AddressModal = (props) => {
  return (
    <div>
      <ModalDialog
        title="Adres Oluştur"
        show={props.show}
        onHide={props.onHide}
      >
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
    </div>
  );
};

export default AddressModal;
