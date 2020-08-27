import React from 'react';
import { Col, Row } from 'antd';
import { UserPicture } from '../components/UserPicture';
import { UserBars, UserCircles } from '../components/UserInformation';
import { TimelineComponent } from '../components/Timeline';

const user = {
  username: 'user',
  email: 'user@email.com',
  bongaukset: [{name: 'kissa', species: 'nisakas'}, {name: 'koira', species: 'nisakas'}, {name: 'kala', species: 'kala'}],
  achievements: [{name: 'testi'}],
  level: 3,
}

export const Profile = () => {
  return(
    <>
    <Row>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}> 
        <UserPicture user={user} />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12}> 
        <UserBars />
      </Col>
    </Row>
      <UserCircles />
      <TimelineComponent />
  </>  
  )
}