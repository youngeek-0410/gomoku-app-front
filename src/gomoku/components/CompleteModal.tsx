import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useHistory } from "react-router";

import { useUsers } from "../context/usersProvider";
import { CurrentUser } from "./Board";

export const CompleteModal: React.FC<{ show: boolean, currentUser: CurrentUser}> = ({ show, currentUser }) => {
  const history = useHistory();
  const users = useUsers();

  const onCloseModal = () => {
    history.push("/");
  };

  return (
    <Modal show={show} centered>
      <Modal.Header>
        <Modal.Title>Finish!!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>勝者: {users[currentUser].name}</p>
        <p>
          {users[0].name} vs {users[1].name}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => onCloseModal()}>
          ホームに戻る
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
