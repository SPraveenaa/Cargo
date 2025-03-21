import React from 'react';
import { Button, Menu } from 'antd';
import './Navbar.css';

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Cargo</div>

      <Menu mode="horizontal" className="nav-menu">
        <Menu.Item key="home">HOME</Menu.Item>
        <Menu.Item key="pages">PAGES</Menu.Item>
        <Menu.Item key="tracking">TRACKING</Menu.Item>
        <Menu.Item key="services">SERVICES</Menu.Item>
        <Menu.Item key="blogs">BLOGS</Menu.Item>
      </Menu>

      <div className="nav-buttons">
        <Button className="quote-button">GET A QUOTE</Button>
        <Button className="signin-button">SIGN IN</Button>
      </div>
    </div>
  );
};

export default Nav;
