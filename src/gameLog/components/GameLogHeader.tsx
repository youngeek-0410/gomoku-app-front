import React from "react";
import { Alert } from "react-bootstrap";

export const GameLogHeader: React.FC = () => {
  return (
    <Alert variant="info">
      <Alert.Heading>対戦履歴</Alert.Heading>
    </Alert>
  );
};
