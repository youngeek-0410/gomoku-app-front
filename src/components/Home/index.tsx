import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <div className="us-center">
        <Link to="/game" className="us-tdn">
            <Button variant="success" className="us-l-btn">
              ゲームを始める
            </Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
