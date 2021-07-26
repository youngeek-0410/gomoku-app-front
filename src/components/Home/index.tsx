import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="us-center">
        <Button variant="success" className="us-l-btn" onClick={ () => handleShow() }>
          ゲームを始める
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>ゲームを始める</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Woohoo, you're reading this text in a modal!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            閉じる
          </Button>
          <Button variant="primary" onClick={handleClose}>
            スタート
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
};

export default Home;
