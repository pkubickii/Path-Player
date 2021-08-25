import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Translate } from 'react-jhipster';
import { Row, Col, Alert } from 'reactstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useAppSelector } from 'app/config/store';
import './freeTravel.scss';
import useLeafletScripts from 'app/shared/hooks/leaflet-scripts';
import { LatLngExpression } from 'leaflet';

export const FreeTravel = () => {
  useLeafletScripts();
  const position: LatLngExpression = [52.1651322, 22.271705];

  return (
    <Row>
      <Col md="3" className="pad"></Col>
      <Col md="9">
        <div>
          <h2>
            <Translate contentKey="freeTravel.title">Free Travel</Translate>
          </h2>
        </div>
        <div className="mymap">
          <MapContainer center={position} zoom={18} scrollWheelZoom={true} className="mymap">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </Col>
    </Row>
  );
};

export default FreeTravel;
