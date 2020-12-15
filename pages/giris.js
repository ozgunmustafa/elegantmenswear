import Layout from "../components/layout";

const girisYap = () => {
  return (
    <Layout>
      <div className="custom-container">
        <div className="d-grid-2 grid-gap place-center">
          <div className="sm-hide">
            <img src="/images/suit.jpg" className="w-100" />
          </div>
        <div className="position-relative"  style={{ height: "100%" }}>
        <div className="merge-box sm-hide"></div>
            <div className="merge-box-1 sm-hide"></div>
            <div className="merge-box-2 sm-hide"></div>
            <div className="paddingAuth" style={{ height: "100%" }}>
              <div
                className="bg-white w-100 loginFormWrap d-flex flex-column align-items-center justify-content-center"
                style={{ height: "100%" }}
              >
                <form className="bg-white w-100">
                  <h2 className="form-title">GİRİŞ YAP</h2>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Email</label>
                      <input className="form-element" />
                    </div>
                    <div className="col-md-12">
                      <label>Şifre</label>
                      <input className="form-element" />
                    </div>
                    <div className="col-md-12 d-flex justify-content-between my-2">
                      <label className="d-flex align-items-center">
                        <input type="checkbox" />
                        Beni Hatırla
                      </label>
                      <a href="#" className="text-underline">
                        Şifemi Unuttum
                      </a>
                    </div>

                    <div className="col-md-12">
                      <button className="primary-btn w-100 my-3">Giriş Yap</button>
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
                      <strong>Kaydol</strong>
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

export default girisYap;
