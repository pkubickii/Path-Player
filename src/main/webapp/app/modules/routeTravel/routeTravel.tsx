import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const RouteTravel = () => {
  return (
    <>
      <Row>
        <div>
          <h2>
            <Translate contentKey="routeTravel.title">Route Travel</Translate>
          </h2>
          <h3>
            <Translate contentKey="routeTravel.subtitle">Route Travel Subtitle</Translate>
          </h3>
          <p>TEST 2k</p>
        </div>
      </Row>
    </>
  );
};

export default RouteTravel;
