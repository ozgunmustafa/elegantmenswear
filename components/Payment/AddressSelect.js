
const AddressSelect = () => {
    return (
        <div className="addresses bg-light p-3">
        <h2 className="box-title">Teslimat Adresi</h2>
        <button className="create-new-address">
            <AiOutlinePlus className="sm-hide" />
            Yeni Adres Ekle
          </button>

        <div className="scrollmenu">
        <label className="address-label">
            <input type="radio" name="adres" />
            <span className="span-wrap">
              <span className="title">İzmir Ev</span>
              <span>Mustafa Özgün</span>
              <span>507 *** ** 25</span>
              <span>Cengizhan Mah</span>
              <span>Bayraklı/Izmir</span>
            </span>
          </label>
          <label className="address-label">
            <input type="radio" name="adres" />
            <span className="span-wrap">
              <span className="title">İzmir Ev</span>
              <span>Mustafa Özgün</span>
              <span>507 *** ** 25</span>
              <span>Cengizhan Mah</span>
              <span>Bayraklı/Izmir</span>
            </span>
          </label>
          <label className="address-label">
            <input type="radio" name="adres" />
            <span className="span-wrap">
              <span className="title">İzmir Ev</span>
              <span>Mustafa Özgün</span>
              <span>507 *** ** 25</span>
              <span>Cengizhan Mah</span>
              <span>Bayraklı/Izmir</span>
            </span>
          </label>
        
        </div>
      </div>
    )
}

export default AddressSelect
