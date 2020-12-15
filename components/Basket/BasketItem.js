import React from "react";
import styles from "./BasketItem.module.scss";
import { AiOutlineClose } from "react-icons/ai";

const BasketItem = () => {
  return (
    <div className={styles.itemWrap}>
      <AiOutlineClose className={styles.itemRemove} />
      <img
        src="https://cdn.sorsware.com/kip/ContentImages/Product/2020-1/20135037/takim-elbise_20135037_vizon-vizon_4_buyuk.JPG"
        className={styles.itemImage}
      />
      <div className={styles.itemDetails}>
        <p className={`${styles.itemName} mb-2`}>Gri Ekose Gömlek</p>
        <div>
          <p className="mb-1">
            Renk : <strong>Gri</strong>
          </p>
          <p className="mb-1">
            Beden : <strong>44/42</strong>
          </p>
          <p className="mb-1">
            Adet :
            <select className={styles.count}>
              <option>1</option>
              <option>2</option>
              <option>2</option>
            </select>
          </p>
        </div>
        <p className={`${styles.itemPrice} mb-0`}>2250 ₺</p>
      </div>
    </div>
  );
};

export default BasketItem;
