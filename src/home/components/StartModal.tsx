import React, { useState } from 'react';
import styled from "styled-components";
import { Modal, Tabs, Tab, Button } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { NameSingleForm } from "./NameSingleForm";
import { NameDoubleForm } from "./NameDoubleForm";

export const StartModal: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <StartContainer>
        <CardMedia
          component="img"
          height="300"
          sx={{ width: "auto", mx: "auto", mb: "20px" }}
          image={`${process.env.PUBLIC_URL}/start.jpg`}
        />
        <Typography variant="h2" component="div">
          五目並べゲーム
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          1人 / 2人 用
        </Typography>
        <Typography variant="body2">
          名前を入力してゲームを始めよう！！
        </Typography>
        <CardContent>
          <StartButton variant="success" onClick={() => handleShow()}>
            ゲームを始める
          </StartButton>
        </CardContent>
      </StartContainer>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title>ゲームを始める</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StartTabs defaultActiveKey="single" id="uncontrolled-tab-example">
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

const StartContainer = styled(Card)`
  width: 90%;
  padding: 40px;
  margin: 0 auto 40px;
  text-align: center;
  border: 3px solid #b8b8b8;
  border-radius: 16px;
`;

const StartButton = styled(Button)`
  height: 110px;
  width: 280px;
  font-size: 32px;
  font-weight: 700;
`;

const StartTabs = styled(Tabs)`
  margin-bottom: 1rem;
`;
