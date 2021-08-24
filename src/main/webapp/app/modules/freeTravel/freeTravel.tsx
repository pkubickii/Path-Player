import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const FreeTravel = () => {
  return (
    <>
      <Row>
        <div>
          <h2>
            <Translate contentKey="freeTravel.title">Free Travel</Translate>
          </h2>
          <h3>
            <Translate contentKey="freeTravel.subtitle">Free Travel</Translate>
          </h3>
          <p>TEST</p>
        </div>
      </Row>
    </>
  );
};

export default FreeTravel;
