import Link from "next/link";
import ProductCard from "../../components/ProductCard";
import ProfileLayout from "../../components/ProfileLayout";

import { homeProducts } from "../../src/data/homeProducts";


const Favorilerim = () => {
  return (
    <ProfileLayout>
      <div className="profile-content-box">
        <div className="profile-title-section">
          <h1 className="profile-title">Favorilerim</h1>
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
    </ProfileLayout>
  );
};

export default Favorilerim;
