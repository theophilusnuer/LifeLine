import React, { useState } from 'react';
import { AppBar, Tab, Tabs, useMediaQuery } from '@mui/material';
import Pharmaceuticals from '../pharmaceuticals';
import Laboratory from '../laboratoryServices';
import Surgical from '../surgicalServices';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';

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

const TabsComponent = ({ addToCart, pharmaData, labData, surgicalData }) => {
  const [value, setValue] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ margin: '20px auto 10px', maxWidth: '1300px', marginLeft: isSmallScreen ? '10px' : '20px', marginRight: isSmallScreen ? '10px' : '20px' }}>
      <AppBar position="static" sx={{ borderRadius: '10px', backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          scrollButtons="auto"
          sx={{
            backgroundColor: 'transparent',
            borderRadius: '10px',
            '& .MuiTabs-flexContainer': {
              justifyContent: 'center',
            },
            '& .MuiTab-root': {
              color: '#000',
              fontWeight: 'bold',
              fontSize: isSmallScreen ? '0.75rem' : '1rem',
              border: '1px solid',
              textTransform: 'none',
              borderRadius: '10px',
              '&.Mui-selected': {
                backgroundColor: '#3B82F6',
                color: '#fff',
              },
            },
          }}
        >
          <Tab label="Pharmaceuticals" />
          <Tab label="Laboratory Services" />
          <Tab label="Surgical Services" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Pharmaceuticals addToCart={addToCart} items={pharmaData}/>
        <Link to='/pharma'>
        <div className='flex '>
        <button className='text-blue-500 ml-7'>See all Pharmaceuticals</button>
        <ArrowRightAltIcon color='primary'/>
        </div>
        </Link>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Laboratory items={labData}/>
        <Link to='/lab'>
        <div className='flex '>
        <button className='text-blue-500 ml-7'>See all Laboratory Services</button>
        <ArrowRightAltIcon color='primary'/>
        </div>
        </Link>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Surgical items={surgicalData} />
        <Link to='/surgical'>
        <div className='flex '>
        <button className='text-blue-500 ml-7'>See all Surgical Services</button>
        <ArrowRightAltIcon color='primary'/>
        </div>
        </Link>
      </TabPanel>
    </div>
  );
};

export default TabsComponent;
