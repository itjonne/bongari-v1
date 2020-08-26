import React, { useState } from 'react';
import { Empty, Typography, Space } from 'antd';
import { HighlightOutlined } from '@ant-design/icons';

export const UserPicture = ({user}) => {
  const [description, setDescription] = useState('Description');

  return(
    <div className='centered container'>
      <Empty />
      <Space direction='vertical'>
        <Typography.Text strong>{user.username}</Typography.Text>
        <Typography.Paragraph type='secondary' editable={{
          icon: <HighlightOutlined />,
          tooltip: 'Syötä omat tiedot',
          onChange: setDescription,
        }}>
          {description}
        </Typography.Paragraph>
        <Typography.Text type='success' strong>Level: {user.level}</Typography.Text>
      </Space>
    </div>
  )
}