import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";


const ProductCard = ({src,classnames,like}) => {
  return (
    <div className="product-card m-1">
      <div>
        <figure>
          <img
            className="card-img"
            src={src}
            alt=""
          />
        </figure>
      </div>
      {like? <AiFillHeart className="like-icon"/> :<AiOutlineHeart className="like-icon"/> }
      <div className={`card-bottom ${classnames}`}>
          <div className="product-name">İndigo Dokuma Takım Elbise</div>
          <div className="product-price my-2">
            <span className="instead-price">1000₺</span>700₺
          </div>
          <div className="product-actions">
            <select className="form-element mb-0">
              <option>Beden S..</option>
              <option>40/41</option>
            </select>
            <button className="mb-0 soft-btn">Sepete Ekle</button>
          </div>
      </div>
    </div>
  );
};

export default ProductCard;
