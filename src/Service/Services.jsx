// pages/Services.js
import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
const { Title, Paragraph } = Typography;

const Services = () => {
  return (
    <div style={{ padding: '50px', backgroundColor: '#f9f9f9' }}>
      <Title level={2} style={{ color: '#66CC00', textAlign: 'center' }}>
        Real Solution, <span style={{ color: '#FF6633' }}>Real Fast!</span>
      </Title>
      <Title style={{ textAlign: 'center' }}>Best Global Logistics Solutions.</Title>

      <Row gutter={[32, 32]} justify="center">
      <Col span={10} style={{ textAlign: 'center' }}>
            <img
              src="/air.jpg"
              alt="Air Freight Services"
              style={{ 
                width: '100%', 
                height: '200px',  
                objectFit: 'cover',
                borderRadius: '8px' 
              }}
            />
        <Title level={4}>Air Freight Services</Title>
        <Paragraph>At our Auto Service garage, we fully appreciate how difficult it is for people to find a reliable service provider.</Paragraph>
        <Button type="link" icon="➡">
          Read More
        </Button>
      </Col>

      <Col span={10} style={{ textAlign: 'center' }}>
        <img
          src="/drone.jpg"
          alt="Drone Services"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px'
          }}
        />
        <Title level={4}>Drone Services</Title>
        <Paragraph>These services are unique and often differ from one industry to another. Our logistics expertise ensures seamless operations.</Paragraph>
        <Button type="link" icon="➡">
          Read More
        </Button>
      </Col>

      </Row>

      <Paragraph style={{ textAlign: 'center', marginTop: '20px' }}>
        Logistic & Transport Solutions Saves Your <strong>Time</strong>. <strong>Find Your Solutions</strong> ⬆
      </Paragraph>
    </div>
  );
};

export default Services;