import * as React from 'react';
import Box from '@mui/material/Box';
import {Rating as MuiRating} from '@mui/material';
import Typography from '@mui/material/Typography';

export const Rating = ()=> {
  const [value, setValue] = React.useState<number | null>(2);
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <MuiRating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
