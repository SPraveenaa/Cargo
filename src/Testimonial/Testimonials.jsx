import React, { useState } from 'react';
import { Row, Col, Carousel, Collapse, Button } from 'antd';
import { LeftOutlined, RightOutlined, PlusOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const testimonial = {
    quote: "Integer congue elit non semper laoreet sed lectus orci posuere nisl tempor ac felis ac mauris. Pellentesque in urna. Integer vitae felis vel magna posuere vestibulum. Nam rutrum congue diam.",
    name: "JOHN DEO",
    position: "Managing Director",
  };
  

const whyChooseUs = [
  'Dui ac hendrerit elementum quam ipsum auctor lorem',
  'Mauris vel magna a est lobortis volutpat',
  'Sed bibendum ornare lorem mauris feugiat suspendisse neque',
  'Nulla scelerisque dul hendrerit elementum quam'
];

const TrustedClients = () => {
  const carouselRef = React.useRef(null);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <div style={styles.container}>
      <Row gutter={32}>
        <Col xs={24} md={12}>
          <h2 style={styles.heading}>TRUSTED CLIENTS</h2>
          <p style={styles.subHeading}>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>

          <Carousel ref={carouselRef} dots={false}>
            <div>
              <div style={styles.testimonialBox}>
                <div style={styles.quoteIcon}>❝</div>
                <p style={styles.quote}>{testimonial.quote}</p>
                <div style={styles.clientInfo}>
                  <strong>{testimonial.name}</strong>
                  <div>{testimonial.position}</div>
                </div>
              </div>
            </div>
          </Carousel>

          <div style={styles.carouselControls}>
            <Button shape="circle" icon={<LeftOutlined />} onClick={handlePrev} />
            <Button shape="circle" icon={<RightOutlined />} onClick={handleNext} />
          </div>
        </Col>

        <Col xs={24} md={12}>
          <h2 style={styles.heading}>WHY CHOOSE US</h2>
          <p style={styles.subHeading}>LOREM IPSUM DOLOR SIT AMET CONSECTETUR</p>

          <Collapse
            accordion
            expandIcon={({ isActive }) => <PlusOutlined rotate={isActive ? 45 : 0} />}
            style={styles.collapse}
          >
            {whyChooseUs.map((item, index) => (
              <Panel header={item} key={index}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
              </Panel>
            ))}
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px 20px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
  },
  heading: {
    fontSize: '20px',
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: '12px',
    color: '#aaa',
    marginBottom: '30px',
  },
  testimonialBox: {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    borderLeft: '10px solid #d32f2f',
    position: 'relative',
    minHeight: '200px',
  },
  quoteIcon: {
    fontSize: '40px',
    color: '#d32f2f',
    position: 'absolute',
    top: '20px',
    left: '-30px',
  },
  quote: {
    fontSize: '14px',
    lineHeight: '1.8',
    color: '#555',
  },
  clientInfo: {
    marginTop: '20px',
    fontSize: '12px',
    color: '#333',
  },
  carouselControls: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  collapse: {
    backgroundColor: '#fff',
  }
};

export default TrustedClients;