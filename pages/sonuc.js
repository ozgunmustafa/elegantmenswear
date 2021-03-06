import ProductOptionCard from "../components/ProductOptionCard";
import ProductCard from "../components/ProductCard";
import Layout from "../components/layout";
import { homeProducts } from "../src/data/homeProducts";
import Link from "next/link";

const Sonuc = () => {
  return (
    <Layout>
      <div className="container">
        <div className="result-grid grid-gap">
          <div className="py-3">
            <ProductOptionCard title="Aranan Kelime">
              <div className="filter-box-desktop my-2">
                <p>Blazer</p>
              </div>
              <hr />
            </ProductOptionCard>
            <ProductOptionCard title="Beden">
              <div className="filter-box-desktop my-2">
                <label className="option-label">
                  <input type="checkbox" />
                  <span>XS</span>
                </label>
                <label className="option-label">
                  <input type="checkbox" />
                  <span>S</span>
                </label>
                <label className="option-label">
                  <input type="checkbox" />
                  <span>M</span>
                </label>
                <label className="option-label">
                  <input type="checkbox" />
                  <span>L</span>
                </label>
                <label className="option-label">
                  <input type="checkbox" />
                  <span>XL</span>
                </label>
                <label className="option-label">
                  <input type="checkbox" />
                  <span>XXL</span>
                </label>
              </div>
              <hr />
            </ProductOptionCard>
            <ProductOptionCard title="Fiyat Aralığı">
              <div className="filter-box-desktop my-2">
                <label className="option-label">
                  <input type="checkbox" />
                  <span>100-200</span>
                </label>
                <label className="option-label">
                  <input type="checkbox" />
                  <span>200-300</span>
                </label>
                <label className="option-label">
                  <input type="checkbox" />
                  <span>2000-3000</span>
                </label>
              </div>
              <hr />
            </ProductOptionCard>
          </div>
          <div className="">
            <div className="d-flex align-items-center justify-content-between py-3 px-2">
              <p className="mb-0">
                <strong>Blazer</strong> için arama sonuçları.
              </p>

              <select className="filter-select">
                <option>Sıralama Seçiniz</option>
                <option>Küçükten Büyüğe</option>
              </select>
            </div>

            <div className="fav-grid">
            {homeProducts.map((product) => {
            return (
              <Link href="/urun">
                <a>
                  <div>
                    <ProductCard classnames="fs-small" product={product} />
                  </div>
                </a>
              </Link>
            );
          })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sonuc;
