import * as React from 'react';
import Box from '@mui/material/Box';
import {Rating as MuiRating} from '@mui/material';
import Typography from '@mui/material/Typography';

export const Rating = ()=> {
  const [value, setValue] = React.useState<number | null>(4);
  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <MuiRating
        name="simple-controlled"
        sx={{color: '#F3CD03'}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
