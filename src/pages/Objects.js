import React from 'react';
import { Collapse, Card, Button, Tooltip, List } from 'antd';
import { CheckCircleTwoTone, HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';

const ObjectCardList = ({objects}) => {
  const filterObject = (object, name) => {
    return object.name === name;
  }

  return(
    <List
      grid={{
        gutter: 16,
        xs: 2,
        sm: 4,
        md: 6,
        lg: 8,
        xl: 10,
        xxl: 12,
      }}
      dataSource={objects}
      renderItem={item => (
        <List.Item>
          <Card size='small' title={item.name} hoverable>
            <p>{item.name_latin}</p>
            <p>{item.family}</p>
            <div className='iconButton'>
              <Tooltip title='Lisää Bongaus'>
                <Button shape='circle' icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}></Button>         
              </Tooltip>
              <Tooltip title='Lisää Suosikkeihin'>
                <Button icon={<HeartTwoTone twoToneColor="#eb2f96" />}></Button>                 
              </Tooltip>
            </div>
          </Card>
      </List.Item>
      )}
      />
  )
}

export const Objects = () => {
  const data = useSelector(state => state.data);
  const user = useSelector(state => state.user);
  console.log(data);

  const countBongauksetFromTotal = (data, user, species) => {
    const maara = user.bongaukset.filter(bongaus => {return bongaus.species === species}).length;
    return `${maara} / ${data[species].length}`;
  }

  return(
    <div>
      <Collapse accordion>
      <Collapse.Panel header={`Nisäkkäät: ${countBongauksetFromTotal(data, user, 'nisakas')}`} key='1'>
            <ObjectCardList objects={data.nisakas} />
        </Collapse.Panel>
        <Collapse.Panel header={`Linnut: ${countBongauksetFromTotal(data, user, 'lintu')}`} key='2'>        
        <ObjectCardList objects={data.lintu} />        
        </Collapse.Panel>
        <Collapse.Panel header={`Kalat: ${countBongauksetFromTotal(data, user, 'kala')}`} key='3'>
        <ObjectCardList objects={data.kala} />
        </Collapse.Panel>
        <Collapse.Panel header={`Sienet: ${countBongauksetFromTotal(data, user, 'sieni')}`} key='4'>
        <ObjectCardList objects={data.sieni} />
        </Collapse.Panel>
        <Collapse.Panel header={`Perhoset: ${countBongauksetFromTotal(data, user, 'perhonen')}`} key='5'>
        <ObjectCardList objects={data.perhonen} />
        </Collapse.Panel>
        <Collapse.Panel header={`Kukkakasvit: ${countBongauksetFromTotal(data, user, 'kukkakasvi')}`} key='6'>
        <ObjectCardList objects={data.kukkakasvi} />
        </Collapse.Panel>
        <Collapse.Panel header={`Puut & Pensaat: ${countBongauksetFromTotal(data, user, 'puu_pensas')}`} key='7'>
        <ObjectCardList objects={data.puu_pensas} />
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}
