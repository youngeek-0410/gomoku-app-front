import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";

export const CompleteModal: React.FC<{ show: boolean }> = ({ show }) => {
  const history = useHistory();
  const onCloseModal = () => {
    history.push("/");
  };

  return (
    <Modal show={show}>
      <Modal.Header>
        <Modal.Title>ゲームを始める</Modal.Title>
      </Modal.Header>
      <Modal.Body>終了！</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onCloseModal()}>
          ホームに戻る
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
