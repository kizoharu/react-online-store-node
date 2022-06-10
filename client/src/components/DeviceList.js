import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import "../styles/devicelist.scss"
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  const {device} = useContext(Context)

  return (
    <div className='deviceListRowStyle'>
      {device.devices.map(device => 
        <DeviceItem key={device.id} device={device}/>
      )}
    </div>
  );
});

export default DeviceList;