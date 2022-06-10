import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { Context } from '..';
import "../styles/brandbar.scss"


const BrandBar = observer(() => {
  const {device} = useContext(Context)

  return (
    <div className='brandRowStyle'>
      {device.brands.map(brand => 
        <Card 
          key={brand.id} 
          className='brandCardStyle p-3' 
          onClick={() => device.setSelectedBrand(brand)} 
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>
      )}
    </div>
  );
});

export default BrandBar;