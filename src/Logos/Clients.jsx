import React from 'react';
import { Row, Col } from 'antd';

const clientLogos = [
  {
    name: 'Reuss',
    src: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU', // Replace with actual logo URLs
  },
  {
    name: 'Genesis',
    src: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
  },
  {
    name: 'Integrio',
    src: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
  },
  {
    name: 'Brainbiz',
    src: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
  },
  {
    name: 'Zigzag',
    src: 'https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU',
  },
];

const Clients = () => {
  return (
    <div style={styles.container}>
      <Row justify="center" align="middle" gutter={[16, 16]}>
        {clientLogos.map((client, index) => (
          <Col key={index} xs={12} sm={8} md={4} style={styles.logoCol}>
            <img
              src={client.src}
              alt={client.name}
              style={styles.logo}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    textAlign: 'center',
  },
  logoCol: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '50px',
    opacity: 0.6,
    transition: 'opacity 0.3s',
    cursor: 'pointer',
  },
};

export default Clients;