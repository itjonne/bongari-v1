import React from 'react';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry,
} from 'react-virtualized';
import { Card, Tooltip, Button, Row, Col } from 'antd';
import { CheckCircleTwoTone, HeartTwoTone } from '@ant-design/icons';

export const ObjectGridVirtualized = ({objects}) => {
  // APUFUNKTIOT
  // Default sizes help Masonry decide how many images to batch-measure
    const cache = new CellMeasurerCache({
      defaultHeight: 250,
      defaultWidth: 200,
      fixedWidth: true,
    });


      // Our masonry layout will use 3 columns with a 10px gutter between
    const cellPositioner = createMasonryCellPositioner({
      cellMeasurerCache: cache,
      columnCount: 6,
      columnWidth: 200,
      spacer: 10,
    });

    const  cellRenderer = ({index, key, parent, style}) => {
      const item = objects[index];
    
      return (
        <CellMeasurer cache={cache} index={index} key={key} parent={parent}>  
          <div style={style}>
          <Card size='small' hoverable cover={<img src={item.image} alt={item.name}/>}>
            <Card.Meta title={item.name} description={item.name_latin} />
          </Card>
          </div>
        </CellMeasurer>
      );
    }

  return(

    // TÄÄ EI PYSTY HALLUSSA OLLENKAA. MITEN SÄÄDETÄÄN KORKEUS/LEVEYS?!
    <Row>
      <Col span={24}>
      <Masonry
      cellCount={objects.length}
      cellMeasurerCache={cache}
      cellPositioner={cellPositioner}
      cellRenderer={cellRenderer}
      height={window.innerHeight}
      width={window.innerWidth}
    />
      </Col>
    </Row>
  )

}