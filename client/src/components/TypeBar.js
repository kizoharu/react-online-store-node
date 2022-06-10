import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '..';
import "../styles/typebar.scss"

const TypeBar = observer(() => {
  const {device} = useContext(Context)

  return (
    <ListGroup>
      {device.types.map(type =>
        <ListGroup.Item 
          className='listGroupItem'
          key={type.id} 
          onClick={() => device.setSelectedType(type)} 
          active={type.id === device.selectedType.id}
        >
          {type.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  );
});

export default TypeBar;