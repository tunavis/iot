import React from 'react';
import { Typography } from '@mui/material';
import { Pie } from 'react-chartjs-2';

const ClientA = () => {
  const data = {
    labels: ['Living Room', 'Bedroom', 'Kitchen'],
    datasets: [
      {
        label: 'Temperature Distribution',
        data: [22, 24, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Client A - Temperature Overview
      </Typography>
      <Pie data={data} />
    </div>
  );
};

export default ClientA;
