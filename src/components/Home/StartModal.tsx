import react, { useState } from 'react';
import { Modal, Tabs, Tab, Button } from 'react-bootstrap';

import NameSingleForm from './NameSingleForm';
import NameDoubleForm from './NameDoubleForm';

const StartModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" className="us-l-btn" onClick={ () => handleShow() }>
        ゲームを始める
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>ゲームを始める</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tabs defaultActiveKey="single" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="single" title="1人で遊ぶ">
              <NameSingleForm></NameSingleForm>
            </Tab>
            <Tab eventKey="double" title="2人で遊ぶ">
              <NameDoubleForm></NameDoubleForm>
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            閉じる
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StartModal;
