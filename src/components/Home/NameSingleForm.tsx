import react, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const NameSingleForm = () => {
  const [name, setName] = useState('');
  const startBtnDisabled = (): boolean => {
    return name === '';
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
      <Button variant="primary" disabled={startBtnDisabled()}>
        スタート
      </Button>
    </>
  );
};

export default NameSingleForm;
