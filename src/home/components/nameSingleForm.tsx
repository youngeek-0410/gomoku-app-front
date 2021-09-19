import React, { useState } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useAxiosClient } from '../../common/context/axiosClientProvider';

export const NameSingleForm: React.FC = () => {
  const history = useHistory();
  const client = useAxiosClient();

  const [showOverray, setShowOverray] = useState<boolean>(false);
  const [name, setName] = useState('');
  const [err, setErr] = useState('');
  const [err1, setErr1] = useState('');

  const startBtnDisabled = (): boolean => {
    return name === "";
  };

  const handleStartClick = () => {
    if (!startBtnDisabled()) {
      setShowOverray(true);
      client
        .post("/users", {
          name: name,
        })
        .then((v) => {
          if (v.data.err) {
            setErr1(v.data.err);
            setShowOverray(false);
            return;
          }
          setShowOverray(false);
          history.push(`/game?user_id=${v.data.user.id}`);
        })
        .catch(() => {
          setErr("ユーザ作成に失敗しました。時間をおいてお試しください。");
          setShowOverray(false);
          return;
        });
    }
  };

  return (
    <>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>ニックネーム</Form.Label>
        <Form.Control
          type="text"
          placeholder="例）太郎"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Text className="alert-text">{err1}</Form.Text>
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
