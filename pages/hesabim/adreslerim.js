import Panel from "../../components/Panel";
import { useState } from "react";
import {AiOutlineClose,AiFillEdit} from "react-icons/ai"

import ProfileLayout from "../../components/ProfileLayout";
import AddressModal from "../../components/AddressModal";

const Adreslerim = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <ProfileLayout>
      <div className="profile-content-box">
        <div className="profile-title-section">
          <h1 className="profile-title">Bilgilerim</h1>
        </div>
        <div>
          <button
            className="create-new-address my-3"
            onClick={() => setModalShow(true)}
          >
            <span>+</span>
            Yeni Adres Ekle
          </button>
          <AddressModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          ></AddressModal>
        </div>
        <div className="fav-grid my-2">
            <Panel>
            <Panel.Header>
              <div className="d-flex justify-content-between">
                İzmir Ev
              </div>
              
            </Panel.Header>
            <Panel.Body>
              <div className="panel-content">
                <strong>Mustafa Özgün</strong>
                <span>Bayraklı/İzmir</span>
                <span>
                  Cengizhan Mah Cengizhan Mahallesi 1620/22 sok no:29/A
                </span>
                <div className="address-actions d-flex justify-content-between">
                    <span><AiOutlineClose className="close-btn"/>Sil</span>
                    <span onClick={() => setModalShow(true)}><AiFillEdit className="close-btn" />Düzenle</span>
                </div>
              </div>
            </Panel.Body>
          </Panel>
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Adreslerim;
