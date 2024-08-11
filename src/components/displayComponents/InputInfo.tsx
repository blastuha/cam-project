import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

export const InputInfo = ({
  contentMinHegith,
  labelTitle,
  text,
}: {
  labelTitle: string;
  text: string;
  contentMinHegith?: string;
}) => {
  return (
    <Box sx={{ width: '100%', padding: 0 }}>
      <Typography display="block" gutterBottom sx={{ color: 'secondary.main' }}>
        {labelTitle}
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          padding: 1,
          textAlign: 'left',
          color: 'secondary.main',
          minHeight: `${contentMinHegith ?? 'auto'}`,
          height: 'fit-content',
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Paper>
    </Box>
  );
};
