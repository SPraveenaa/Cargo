import React from 'react';
import { Row, Col, Button } from 'antd';

const Welcome = () => {
  return (
    <div style={styles.wrapper}>
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={12} style={{ position: 'relative' }}>
          
          <div style={styles.imageContainer}>
            <img
              src="https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=400&q=60"
              alt="Worker Writing"
              style={styles.mainImage}
            />
            <img
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=400&q=60"
              alt="Worker Lifting"
              style={styles.secondaryImage}
            />

            
            <div style={styles.statsBox}>
              <h3 style={styles.statsNumber}>15,350+</h3>
              <p style={styles.statsText}>Clients Worldwide</p>
            </div>
          </div>
        </Col>

        
        <Col xs={24} md={12}>
          <div>
            <h2 style={styles.heading}>
              TransMax Logistics <br /> <span style={{ color: '#FF6600' }}>Around the World</span>
            </h2>
            <p style={styles.description}>
              Transmax is the world’s driving worldwide coordinations supplier — we uphold industry and exchange
              the worldwide trade of merchandise through land transport.
            </p>
            <p style={styles.description}>
              Our worth added administrations guarantee the progression of products proceeds consistently and
              supply chains stay lean and streamlined for progress.
            </p>

            <Button type="primary" style={styles.button}>
              More About Us
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '60px 20px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 'auto',
  },
  mainImage: {
    width: '80%',
    borderRadius: '8px',
  },
  secondaryImage: {
    width: '50%',
    position: 'absolute',
    bottom: '-30px',
    left: '60%',
    borderRadius: '8px',
    border: '4px solid #fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  statsBox: {
    position: 'absolute',
    bottom: '-30px',
    left: '0',
    backgroundColor: '#FF6600',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '4px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '180px',
  },
  statsNumber: {
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
  },
  statsText: {
    margin: 0,
    fontSize: '14px',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    lineHeight: '1.4',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    color: '#555',
    lineHeight: '1.8',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#FF6600',
    borderColor: '#FF6600',
    color: '#fff',
  },
};

export default Welcome;