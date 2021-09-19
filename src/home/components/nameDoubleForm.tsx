import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Spinner } from 'react-bootstrap';

import { useAxiosClient } from '../../common/context/axiosClientProvider';

export const NameDoubleForm: React.FC = () => {
  const history = useHistory();
  const client = useAxiosClient();

  const [showOverray, setShowOverray] = useState<boolean>(false);
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [err, setErr] = useState('');
  const [err1, setErr1] = useState('');
  const [err2, setErr2] = useState('');

  const startBtnDisabled = (): boolean => {
    return !(name1 !== '' && name2 !== '');
  };
  const handleStartClick = () => {
    if (!startBtnDisabled()) {
      setShowOverray(true);
      Promise.all([
        client.post("/users", {
          name: name1,
        }),

        client.post("/users", {
          name: name2,
        }),
      ])
        .then((v) => {
          if (v[0].data.err) {
            setErr1(v[0].data.err);
            setShowOverray(false);
            return;
          }
          if (v[1].data.err) {
            setErr2(v[1].data.err);
            setShowOverray(false);
            return;
          }
          setShowOverray(false);
          history.push("/game");
        })
        .catch((e) => {
          setErr("ユーザ作成に失敗しました。時間をおいてお試しください。");
          setShowOverray(false);
          return;
        });
    }
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formName1">
        <Form.Label>ニックネーム（1人目）</Form.Label>
        <Form.Control
          type="text"
          placeholder="例）太郎"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <Form.Text className="alert-text">{err1}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName2">
        <Form.Label>ニックネーム（2人目）</Form.Label>
        <Form.Control
          type="text"
          placeholder="例）太郎"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
        <Form.Text className="alert-text">{err2}</Form.Text>
      </Form.Group>

      <Form.Group>
        <Form.Text className="alert-text">{err}</Form.Text>
      </Form.Group>
      <Button
        variant="primary"
        disabled={startBtnDisabled()}
        onClick={() => handleStartClick()}
      >
        スタート
      </Button>
      {showOverray && <div className="us-overray"></div>}
      {showOverray && <Spinner animation="border" className="us-spinner" />}
    </>
  );
};
