import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography, useMediaQuery } from '@mui/material';
import Pharmaceuticals from '../../pages/pharmaceuticals';
import Laboratory from '../../pages/laboratoryServices';
import Surgical from '../../pages/surgicalServices';

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && (
        <div>
          {children}
        </div>
      )}
    </div>
  );
};

const TabsComponent = ({ addToCart }) => {
  const [value, setValue] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ margin: '20px auto', maxWidth: '1300px', marginLeft: isSmallScreen ? '10px' : '20px', marginRight: isSmallScreen ? '10px' : '20px' }}>
      <AppBar position="static" sx={{ borderRadius: '10px', backgroundColor: '#fff', color: '#000' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="auto"
        >
          <Tab label="Pharmaceuticals" sx={{ color: 'inherit', fontWeight: 'bold', fontSize: '1rem', textTransform: 'none', '&.Mui-selected': { backgroundColor: '#3B82F6', color: '#fff' } }} />
          <Tab label="Laboratory Services" sx={{ color: 'inherit', fontWeight: 'bold', fontSize: '1rem', textTransform: 'none', '&.Mui-selected': { backgroundColor: '#3B82F6', color: '#fff' } }} />
          <Tab label="Surgical Services" sx={{ color: 'inherit', fontWeight: 'bold', fontSize: '1rem', textTransform: 'none', '&.Mui-selected': { backgroundColor: '#3B82F6', color: '#fff' } }} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Pharmaceuticals addToCart={addToCart}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Laboratory />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Surgical />
      </TabPanel>
    </div>
  );
};

export default TabsComponent;
