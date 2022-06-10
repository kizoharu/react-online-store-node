import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';
import "../styles/devicepage.scss"
// import bigStar from '../assets/bigStar.png'
import bigStar from '../assets/default.png'

const DevicePage = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()


  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // console.log(id);
  // console.log(device);
  // console.log(process.env.REACT_APP_API_URL + device.img);

  return (
    <Container className='mt-3'>
      <div className='devicePageImageRowStyle'>
        <Col md={4}>
          <Image width={300} height={300} src={device.img ? process.env.REACT_APP_API_URL + device.img : ''}/>
        </Col>
        <Col md={4}>
          <div className='devicePageRatingRowStyle'>
            <h2>{device.name}</h2>
            <div className='devicePageInnerRowStyle'>
              {device.rating}
            </div>
          </div>
        </Col>
        <Col md={4}>
          <Card className='devicePageCardStyle'>
            <h3>{device.price}</h3>
            <Button variant='outline-dark'>Add to basket</Button>
          </Card>
        </Col>
      </div>
      <div className='devicePageDescriptRowStyle'>
        <h1>Details</h1>
        {device.info.map((info, index) =>
          <div 
            key={info.id} 
            style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
          >
            {info.title} : {info.description}
          </div>
        )}
      </div>
    </Container>
  );
};

export default DevicePage;