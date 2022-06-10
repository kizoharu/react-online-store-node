import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import "../styles/deviceitem.scss"
import star from '../assets/star.png'
import { useNavigate} from "react-router-dom"
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
  const history = useNavigate()

  return (
    <Col className='deviceColStyle'  md={3} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
      <Card className='deviceCardStyle' border={'light'}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
        <div className='deviceCardText'>
          <div>Samsung...</div>
          <div className='d-flex align-items-center'>
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star}/>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;