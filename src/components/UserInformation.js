import React from 'react';
import { Typography, Progress, Col, Row } from 'antd';

export const UserBars = () => {
  return(
    <div className='container'>
          <Typography.Title level={3}>Bongaukset:</Typography.Title>
          <Typography.Text strong>Nisäkkäät:</Typography.Text>
          <Progress percent={0} size='small' />
          <Typography.Text strong>Linnut:</Typography.Text>
          <Progress percent={10} size='small' />
          <Typography.Text strong>Kalat:</Typography.Text>
          <Progress percent={100} size='small' />
          <Typography.Text strong>Sienet:</Typography.Text>
          <Progress percent={100} size='small' />
          <Typography.Text strong>Perhoset:</Typography.Text>
          <Progress percent={100} size='small' />
          <Typography.Text strong>Puut & Pensaat:</Typography.Text>
          <Progress percent={100} size='small' />
          <Typography.Text strong>Kukkakasvit:</Typography.Text>
          <Progress percent={100} size='small' />
        </div>
  )
}

export const UserCircles = () => {
  return(
    <>
    <Row className='container'>
      <Col span={24} className='centered'>
       <Typography.Title level={1}>Tilanne:</Typography.Title>
      </Col>
    </Row>
    <Row className='container'>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} className='centered'>
        <Typography.Title level={3}>Bongaukset:</Typography.Title>
        <Progress type='circle' percent={10} format={() => '13/1600'}/>
      </Col>
      <Col xs={24} sm={24} md={12} lg={12} xl={12} className='centered'>
        <Typography.Title level={3}>Saavutukset:</Typography.Title>
        <Progress type='circle' percent={10} format={() => '2/100'}/>
      </Col>
    </Row>
  </>
  )
}
