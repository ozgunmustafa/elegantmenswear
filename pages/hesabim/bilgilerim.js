import Panel from "../../components/Panel";
import ProfileLayout from "../../components/ProfileLayout";

const Bilgilerim = () => {
  return (
    <ProfileLayout>
      <div className="profile-content-box">
        <div className="profile-title-section">
          <h1 className="profile-title">Bilgilerim</h1>
        </div>
        <div className="d-grid-2 grid-gap my-3">
          <Panel>
            <Panel.Header>Üyelik Bilgileri</Panel.Header>
            <Panel.Body>
            <form id="acoount-update-form">
              <div className="d-grid-2">
                <label>Ad*</label>
                <input type="text" className="form-element" value="Mustafa"/>
              </div>
              <div className="d-grid-2">
                <label>Soyad*</label>
                <input type="text" className="form-element" value="Özgün"/>
              </div>
              <div className="d-grid-2">
                <label>Email*</label>
                <input type="text" className="form-element" value="ozzgunmustafa@gmail.com"/>
              </div>
              <div className="d-grid-2">
                <label>Cep Telefonu*</label>
                <input type="text" className="form-element" value="507 386 11 25"/>
              </div>
              <div className="d-grid-2">
                <label>Doğum Tarihi*</label>
                <div className="d-flex">
                  <select className="form-element">
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                  </select>
                  <select className="form-element mx-1">
                    <option>03</option>
                    <option>04</option>
                    <option>05</option>
                  </select>
                  <select className="form-element">
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                  </select>
                </div>
              </div>
              <div className="d-grid-2">
                <label>Cinsiyet*</label>
                <div>
                  <label className="mr-3">
                    <input type="radio" name="gender" />
                    Kadın
                  </label>
                  <label>
                    <input type="radio" name="gender"/>
                    Erkek
                  </label>
                </div>
              </div>
              <hr />
              <div className="text-right">
                <button className="primary-btn">Güncelle</button>
              </div>
            </form>
            </Panel.Body>
          </Panel>
          <Panel classnames="fit-height">
            <Panel.Header>Şifre Güncelle</Panel.Header>
            <Panel.Body>
            <form id="acoount-update-form">
              <div className="d-grid-2">
                <label>Mevcut Şifre</label>
                <input type="text" className="form-element" />
              </div>
              <div className="d-grid-2">
                <div>
                <label className="d-block">Yeni Şifre</label>
                {/* <small>Şifre minimum 6 karakter uzunluğunda olmalı.</small> */}

                </div>
                <input type="text" className="form-element" />
              </div>
              <div className="d-grid-2">
                <label>Yeni Şifre Tekrar</label>
                <input type="text" className="form-element" />
              </div>
              <hr />
              <div className="text-right">
                <button className="primary-btn">Güncelle</button>
              </div>
            </form>
            </Panel.Body>
          </Panel>

        </div>

      </div>
    </ProfileLayout>
  );
};

export default Bilgilerim;
