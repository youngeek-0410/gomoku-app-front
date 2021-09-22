import React, { useState } from 'react';
import styled from "styled-components";
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useAxiosClient } from '../../common/context/axiosClientProvider';
import { GlobalSpinner, GlobalOverray } from '../../common/components';

export const NameSingleForm: React.FC = () => {
  const history = useHistory();
  const client = useAxiosClient();

  const [showOverray, setShowOverray] = useState<boolean>(false);
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [err1, setErr1] = useState("");

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
          history.push(`/game?user_id_1=${v.data.user.id}&user_id_2=-1`);
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
      <NameForm controlId="formName">
        <Form.Label>ニックネーム</Form.Label>
        <Form.Control
          type="text"
          placeholder="例）太郎"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Text className="alert-text">{err1}</Form.Text>
      </NameForm>
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
      {showOverray && <GlobalOverray />}
      {showOverray && <GlobalSpinner animation="border" />}
    </>
  );
};

const NameForm = styled(Form.Group)`
  margin-bottom: 1rem;
`;
