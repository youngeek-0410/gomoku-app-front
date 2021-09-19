import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

export const NameSingleForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const startBtnDisabled = (): boolean => {
    return name === '';
  };
  const handleStartClick = () => {
    if(!startBtnDisabled()) {
      history.push('/game');
    }
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>ニックネーム</Form.Label>
        <Form.Control type="text" placeholder="例）太郎" value={name} onChange={(e) => setName(e.target.value)}/>
        <Form.Text className="alert-text">
          すでに存在するニックネームです。あなたは太郎ですか？
        </Form.Text>
      </Form.Group>
      <Button variant="primary" disabled={startBtnDisabled()} onClick={() => handleStartClick()}>
        スタート
      </Button>
    </>
  );
};
