import React from "react";
import { Layout, Input, Button, Row, Col, Typography, Space } from "antd";
import { PhoneOutlined, EnvironmentOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#4A5568", color: "#fff", padding: "40px 50px" }}>
      <Row gutter={[32, 16]} justify="space-between">
        <Col span={24} style={{ textAlign: "center", marginBottom: "20px" }}>
          <Title level={2} style={{ color: "#fff" }}>
            Weekly Newsletter
          </Title>
          <Text style={{ color: "#ddd" }}>
            There are many variations of passages of lorem ipsum available.
          </Text>
          <div style={{ marginTop: "10px" }}>
            <Input
              placeholder="Enter Your Mail"
              style={{ width: "300px", marginRight: "10px" }}
            />
            <Button type="primary" style={{ backgroundColor: "#FF9900", border: "none" }}>
              SUBSCRIBE
            </Button>
          </div>
        </Col>

        <Col span={6}>
          <Title level={4} style={{ color: "#FFCC00" }}>
            About Us
          </Title>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          <div style={{ marginTop: "10px" }}>
            <p>
              <PhoneOutlined /> (+94) 11 434 7575
            </p>
            <p>
              <EnvironmentOutlined /> 42 Lily Ave, Colombo 00600
            </p>
          </div>
        </Col>

        <Col span={6}>
          <Title level={4} style={{ color: "#FFCC00" }}>
            Latest News
          </Title>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>➤ Sed ut perspiciatis unde omnis.</li>
            <Text>5 Minutes Ago</Text>
            <li>➤ Sed ut perspiciatis unde omnis.</li>
            <Text>5 Minutes Ago</Text>
          </ul>
        </Col>

        <Col span={6}>
          <Title level={4} style={{ color: "#FFCC00" }}>
            Customer Service
          </Title>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>✔ Support Forums</li>
            <li>✔ Communication</li>
            <li>✔ FAQs</li>
            <li>✔ Privacy Policy</li>
            <li>✔ Rules & Conditions</li>
            <li>✔ Contact Us</li>
          </ul>
        </Col>

        <Col span={6}>
          <Title level={4} style={{ color: "#FFCC00" }}>
            Customer Service
          </Title>
          <Space wrap>
            <img src="/train.jpg" alt="train" style={{ width: "30px", height: "30px", objectFit: "cover" }} />
            <img src="/plane.jpg" alt="plane" style={{ width: "30px", height: "30px", objectFit: "cover" }} />
            <img src="/lorry.jpg" alt="lorry" style={{ width: "30px", height: "30px", objectFit: "cover" }} />
            <img src="/ship.jpg" alt="ship" style={{ width: "30px", height: "30px", objectFit: "cover" }} />
          </Space>
        </Col>

     
        <Col span={24} style={{ textAlign: "center", marginTop: "20px", color: "#ddd" }}>
          <Text>Copyright © 2025 All Rights Reserved. Site By Xiteb®</Text>
          <br />
          <Space style={{ marginTop: "10px" }}>
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
            <a href="#"><i className="fab fa-behance" /></a>
            <a href="#"><i className="fab fa-google-plus-g" /></a>
          </Space>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;
