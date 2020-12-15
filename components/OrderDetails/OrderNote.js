import React, { useState } from "react";

const OrderNote = () => {
  const [checkStatus, setCheckStatus] = useState(0);
  const handleChange = () => {
    setCheckStatus(!checkStatus);
  };

  return (
    <div className="order-note bg-light my-2 p-3 card-border">
      <div>
        <label className="order-note-label">
          <input
            type="checkbox"
            className="mr-2"
            checked={checkStatus}
            onChange={handleChange}
          />
          Siparişime not eklemek istiyorum.
        </label>
      </div>
      {checkStatus ? <Textarea /> : null}
    </div>
  );
};
const Textarea = () => (
  
    <textarea
      placeholder="Sipariş notunuzu buraya ekleyebilirsiniz"
      className="my-2"
    />
);
export default OrderNote;
