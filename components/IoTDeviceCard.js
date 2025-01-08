import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const IoTDeviceCard = ({ title, description }) => (
  <Card sx={{ marginBottom: '16px', backgroundColor: '#f5f5f5' }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </CardContent>
  </Card>
);

export default IoTDeviceCard;
