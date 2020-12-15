import Layout from "../components/layout";

const kaydol = () => {
  return (
    <Layout>
      <div className="custom-container">
        <div className="d-grid-2 place-center">
          <div className="sm-hide">
            <img src="/images/suit.jpg" className="w-100" />
          </div>
          <div className="position-relative" style={{ height: "100%" }}>
            <div className="merge-box sm-hide"></div>
            <div className="merge-box-1 sm-hide"></div>
            <div className="merge-box-2 sm-hide"></div>
            <div className="paddingAuth" style={{ height: "100%" }}>
              <div
                className="bg-white w-100 loginFormWrap d-flex flex-column align-items-center justify-content-center"
                style={{ height: "100%" }}
              >
                <form className="bg-white w-100">
                  <h2 className="form-title">KAYDOL</h2>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Adınız</label>
                      <input className="form-element" />
                    </div>
                    <div className="col-md-6">
                      <label>Soyadınız</label>
                      <input className="form-element" />
                    </div>
                    <div className="col-md-12">
                      <label>E-posta Adresiniz</label>
                      <input className="form-element" />
                    </div>
                    <div className="col-md-6">
                      <label>Şifre</label>
                      <input className="form-element" />
                    </div>
                    <div className="col-md-6">
                      <label>Şifre Tekrar</label>
                      <input className="form-element" />
                    </div>

                    <div className="col-md-12">
                        <div className="d-flex">
                        <input type="checkbox" className="mr-2" />

                        <label className="">
                          <a className="text-underline">Kullanıcı </a> ve
                          <a className="text-underline"> Gizlilik</a>
                          Sözleşmesini okudum, onaylıyorum
                        </label>
                        </div>
                        
                    </div>
                    <div className="col-md-12">
                      <button className="primary-btn w-100 my-3">Kaydol</button>
                    </div>
                  </div>
                </form>
                <a href="#" className="google-btn w-100">
                  Google ile Giriş Yap
                </a>
                <div className="text-center my-3">
                  <p className="text-muted">
                    Hesabın yok mu?
                    <a href="#" className="mx-2 text-underline">
                      <strong>Giriş Yap</strong>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default kaydol;
