import React, { useState } from 'react';
import { Button, Modal, Tabs, Tab, Form } from 'react-bootstrap';

import StartModal from './StartModal';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="us-center">
        <StartModal></StartModal>
      </div>
    </>
  );
};

export default Home;
