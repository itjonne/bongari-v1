import React from 'react';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const bongaukset = [
  {
    name: 'löytö',
    time: new Date(new Date().setDate(new Date().getDate() - 1)),
    species: 'kala'
  },
  {
    name: 'löytö 2',
    time: new Date(new Date().setDate(new Date().getDate() - 2)),
    species: 'lintu'
  },
  {
    name: 'löytö 3',
    time: new Date(new Date().setDate(new Date().getDate() - 3)),
    species: 'nisakas'
  },
  {
    name: 'vanha löytö',
    time: new Date(new Date().setDate(new Date().getDate() - 100)),
    species: 'nisakas'
  }
]

export const TimelineComponent = () => {
  const countElapsedTimeInDays = (date) => {
    const diffTime = Math.abs(Date.now() - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays);
    return diffDays;
  }


  return(
    <Timeline mode='left'>
      <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="green">
        Tämä viikko
      </Timeline.Item>
      {bongaukset.filter(bongaus => {
        return (countElapsedTimeInDays(bongaus.time) <= 7)
      }).map(bongaus => {
        return <Timeline.Item label={bongaus.time.toString()}>{bongaus.name}</Timeline.Item>  
      })}
      <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="green">
        Viimeinen kuukausi
      </Timeline.Item>
      {bongaukset.filter(bongaus => {
        return (countElapsedTimeInDays(bongaus.time) > 7 && countElapsedTimeInDays(bongaus.time) <= 30) 
      }).map(bongaus => {
        return <Timeline.Item label={bongaus.time.toString()}>{bongaus.name}</Timeline.Item>  
      })}
      <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="green">
        Viimeinen vuosi
      </Timeline.Item>
      {bongaukset.filter(bongaus => {
        return (countElapsedTimeInDays(bongaus.time) > 30 ) 
      }).map(bongaus => {
        return <Timeline.Item label={bongaus.time.toString()}>{bongaus.name}</Timeline.Item>  
      })}
    </Timeline>
  )
}