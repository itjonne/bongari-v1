import React, { useState } from 'react';
import { Menu } from 'antd';
import Icon, { HomeOutlined, UserOutlined, ProfileOutlined } from '@ant-design/icons';
import logo from '../img/Bongari_1_mid.gif';

export const NavBar = (props) => {
  const [current, setCurrent] = useState('home');

  const handleClick = (e) => {
    setCurrent(e.key);
    props.handleClick(e);
  }

  return(
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
      <Menu.Item key='logo' disabled='true' icon={<Icon component={() => (<img src={logo} alt='logo' className='logo'></img>)} />}>
      </Menu.Item>
      <Menu.Item key='home' icon={<HomeOutlined />}>
        Home
      </Menu.Item>
      <Menu.Item key='profile' icon={<UserOutlined />}>
        Profile
      </Menu.Item>
      <Menu.Item key='objects' icon={<ProfileOutlined />}>
        Objects
      </Menu.Item>
    </Menu>
  )
}