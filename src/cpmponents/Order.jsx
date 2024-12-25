import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import OrderCart from './OrderCart';
import useMenu from './Hooks/useMenu';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [menu, loading] = useMenu()

    const salads = menu.filter(item => item.category === 'salad')
    const populars = menu.filter(item => item.category === 'popular')
    const desserts = menu.filter(item => item.category === 'dessert')
    const mainCourses = menu.filter(item => item.category === 'main course')
    const beverages = menu.filter(item => item.category === 'beverage')

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'full' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Salads" {...a11yProps(0)} />
        <Tab label="popular" {...a11yProps(1)} />
        <Tab label="desserts" {...a11yProps(2)} />
        <Tab label="mainCourses" {...a11yProps(3)} />
        <Tab label="beverages" {...a11yProps(4)} />
       
      </Tabs>
      <TabPanel value={value} index={0}>
       <div className='grid md:grid-cols-4 gap-8'>
       {
        salads.map(item => <OrderCart key={item._id} item={item}></OrderCart>)
       }
       </div>
      </TabPanel>

      <TabPanel value={value} index={1}>
      <div className='grid md:grid-cols-4 gap-8'>
       {
        populars.map(item => <OrderCart key={item._id} item={item}></OrderCart>)
       }
       </div>
      </TabPanel>

      <TabPanel value={value} index={2}>
      <div className='grid md:grid-cols-4 gap-8'>
       {
        desserts.map(item => <OrderCart key={item._id} item={item}></OrderCart>)
       }
       </div>
      </TabPanel>

      <TabPanel value={value} index={3}>
       <div className='grid md:grid-cols-4 gap-8'>
       {
        mainCourses.map(item => <OrderCart key={item._id} item={item}></OrderCart>)
       }
       </div>
      </TabPanel>

      <TabPanel value={value} index={4}>
   <div className='grid md:grid-cols-4 gap-8'>
       {
        beverages.map(item => <OrderCart key={item._id} item={item}></OrderCart>)
       }
       </div>
      </TabPanel>

      <TabPanel value={value} index={5}>
       Commming Soon
      </TabPanel>

      <TabPanel value={value} index={6}>
       Comming Soon
      </TabPanel>
    </Box>
  );
}
