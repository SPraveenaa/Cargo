import React from 'react';
import { Card, Row, Col, Typography, Avatar } from 'antd';
import { EyeOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const newsData = [
  {
    date: '26',
    month: 'May',
    title: 'CURABITUR LOREM UISM QUIS',
    author: 'Admin',
    views: 15,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...',
    image: '/train.jpg', // Updated image
  },
  {
    date: '22',
    month: 'May',
    title: 'CURABITUR LOREM UISM QUIS',
    author: 'Admin',
    views: 15,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...',
    image: '/plane.jpg', // Updated image
  },
  {
    date: '20',
    month: 'May',
    title: 'CURABITUR LOREM UISM QUIS',
    author: 'Admin',
    views: 15,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...',
    image: '/lorry.jpg', // Updated image
  },
  {
    date: '15',
    month: 'May',
    title: 'CURABITUR LOREM UISM QUIS',
    author: 'Admin',
    views: 15,
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames turpis egestas. Aenean non donec...',
    image: '/ship.jpg', // Updated image
  },
];

const NewsCard = ({ news }) => (
  <Card
    hoverable
    style={{
      marginBottom: 24,
      overflow: 'hidden',
      padding: 0,
      borderRadius: 8,
    }}
    bodyStyle={{ padding: 0 }}
  >
    <Row gutter={0}>
      <Col xs={24} sm={8}>
        <div
          style={{
            position: 'relative',
            height: '100%',
            backgroundImage: `url(${news.image})`, // Using news.image to display the correct image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: 200,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
              backgroundColor: '#00bcd4',
              color: '#fff',
              padding: '5px 10px',
              borderRadius: 4,
              textAlign: 'center',
            }}
          >
            <Title level={4} style={{ color: '#fff', margin: 0 }}>
              {news.date}
            </Title>
            <Text style={{ color: '#fff' }}>{news.month}</Text>
          </div>
        </div>
      </Col>

      <Col xs={24} sm={16}>
        <div style={{ padding: 16 }}>
          <Title level={5} style={{ marginBottom: 8 }}>
            {news.title}
          </Title>
          <div style={{ marginBottom: 12, display: 'flex', gap: '1rem' }}>
            <Text>
              <UserOutlined /> {news.author}
            </Text>
            <Text>
              <EyeOutlined /> {news.views}
            </Text>
          </div>
          <Text>{news.description}</Text>
        </div>
      </Col>
    </Row>
  </Card>
);

const NewsSection = () => {
  return (
    <div style={{ padding: '50px 20px', backgroundColor: '#fafafa' }}>
      <div style={{ textAlign: 'center', marginBottom: 40 }}>
        <Title level={3}>LATEST NEWS</Title>
        <Text style={{ color: '#888' }}>INTEGER CONGUE ELIT</Text>
      </div>
      <Row gutter={[24, 24]} justify="center">
        {newsData.map((news, index) => (
          <Col xs={24} md={12} key={index}>
            <NewsCard news={news} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewsSection;
