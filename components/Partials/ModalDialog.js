import React from 'react'
import{Modal} from 'react-bootstrap';

const ModalDialog = (props) => {
    return (
        <Modal
          show={props.show}
          onHide={props.onHide}
          size="lg"
          backdrop="static"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
             {props.title}
          </Modal.Header>
          <Modal.Body>
              {props.children}
          </Modal.Body>
          
        </Modal>
      );
}

export default ModalDialog
