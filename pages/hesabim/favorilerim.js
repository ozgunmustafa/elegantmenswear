import ProductCard from "../../components/ProductCard";
import ProfileLayout from "../../components/ProfileLayout";

const Favorilerim = () => {
  return (
    <ProfileLayout>
      <div className="profile-content-box">
        <div className="profile-title-section">
          <h1 className="profile-title">Favorilerim</h1>
        </div>
        <div className="fav-grid">
          <ProductCard
            src="/images/products/takim_elbise_1-2.png"
            classnames="fs-small"
            like={true}
          ></ProductCard>
          <ProductCard
            src="/images/products/takim_elbise_1-2.png"
            classnames="fs-small"
            like={true}
          ></ProductCard>
          <ProductCard
            src="/images/products/takim_elbise_1-2.png"
            classnames="fs-small"
            like={true}
          ></ProductCard>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Favorilerim;
