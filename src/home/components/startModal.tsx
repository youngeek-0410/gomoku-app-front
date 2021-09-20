import React, { useState } from 'react';
import styled from "styled-components";
import { Modal, Tabs, Tab, Button } from 'react-bootstrap';

import { NameSingleForm } from './nameSingleForm';
import { NameDoubleForm } from './nameDoubleForm';

export const StartModal: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <StartButton
        variant="success"
        onClick={() => handleShow()}
      >
        ゲームを始める
      </StartButton>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>ゲームを始める</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StartTabs
            defaultActiveKey="single"
            id="uncontrolled-tab-example"
          >
            <Tab eventKey="single" title="1人で遊ぶ">
              <NameSingleForm></NameSingleForm>
            </Tab>
            <Tab eventKey="double" title="2人で遊ぶ">
              <NameDoubleForm></NameDoubleForm>
            </Tab>
          </StartTabs>
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

const StartButton = styled(Button)`
  height: 110px;
  width: 280px;
  font-size: 32px;
  font-weight: 700;
`;

const StartTabs = styled(Tabs)`
  margin-bottom: 1rem;
`;
