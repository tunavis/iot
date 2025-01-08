import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Link from 'next/link';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WaterIcon from '@mui/icons-material/Water';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import OpacityIcon from '@mui/icons-material/Opacity';

const Sidebar = () => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Water Meters', icon: <WaterIcon />, path: '/water-meters' },
    { text: 'Temperature Sensors', icon: <ThermostatIcon />, path: '/temperature-sensors' },
    { text: 'Humidity Sensors', icon: <OpacityIcon />, path: '/humidity-sensors' },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 280, // Modernized sidebar width
        '& .MuiDrawer-paper': {
          width: 280,
          boxSizing: 'border-box',
          backgroundColor: '#1E1E2F',
          color: '#fff',
          padding: '10px',
          borderRight: 'none',
        },
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="/iotlogo.png"
          alt="IoT Logo"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '10px',
          }}
        />
        <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
          IoT Dashboard
        </Typography>
      </div>
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              sx={{
                borderRadius: '8px',
                margin: '8px 10px',
                '&:hover': {
                  backgroundColor: '#2C2C40',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#60A5FA' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} primaryTypographyProps={{ fontSize: '16px', fontWeight: 'bold' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;