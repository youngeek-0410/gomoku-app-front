import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

export const NameDoubleForm: React.FC = () => {
  const history = useHistory();

  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const startBtnDisabled = (): boolean => {
    return !(name1 !== '' && name2 !== '');
  };
  const handleStartClick = () => {
    if(!startBtnDisabled()) {
      history.push('/game');
    }
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formName1">
        <Form.Label>ニックネーム（1人目）</Form.Label>
        <Form.Control type="text" placeholder="例）太郎" value={name1} onChange={(e) => setName1(e.target.value) }/>
        <Form.Text className="alert-text">
          すでに存在する名前です。あなたは太郎ですか？
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName2">
        <Form.Label>ニックネーム（2人目）</Form.Label>
        <Form.Control type="text" placeholder="例）太郎" value={name2} onChange={(e) => setName2(e.target.value) }/>
        <Form.Text className="alert-text">
          すでに存在する名前です。あなたは太郎ですか？
        </Form.Text>
      </Form.Group>
      <Button variant="primary" disabled={startBtnDisabled()} onClick={() => handleStartClick()}>
        スタート
      </Button>
    </>
  );
};
