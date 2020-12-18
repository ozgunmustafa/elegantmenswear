import { AiFillHeart,AiOutlineHeart } from "react-icons/ai";


const ProductCard = ({product,classnames,like}) => {
  return (
    <div className="product-card m-1">
      <div>
        <figure>
          <img
            className="card-img"
            src={product.images[0].url}
            alt=""
          />
        </figure>
      </div>
     {like?<AiFillHeart className="like-icon"/>:<AiOutlineHeart className="like-icon"/>}  
      <div className={`card-bottom ${classnames}`}>
          <div className="product-name">İndigo Dokuma Takım Elbise</div>
          <div className="product-price my-2">
            <span className="instead-price">1000₺</span>{product.price}₺
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
