import react from 'react';
import { Form, Button } from 'react-bootstrap';

const NameDoubleForm = () => {
  const startBtnDisabled: boolean = true;

  return (
    <>
      <Form.Group className="mb-3" controlId="formName1">
        <Form.Label>ニックネーム（1人目）</Form.Label>
        <Form.Control type="text" placeholder="例）太郎" />
        <Form.Text className="alert-text">
          すでに存在する名前です。あなたは太郎ですか？
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName2">
        <Form.Label>ニックネーム（2人目）</Form.Label>
        <Form.Control type="text" placeholder="例）太郎" />
        <Form.Text className="alert-text">
          すでに存在する名前です。あなたは太郎ですか？
        </Form.Text>
      </Form.Group>
      <Button variant="primary" disabled={startBtnDisabled}>
        スタート
      </Button>
    </>
  );
};

export default NameDoubleForm;
