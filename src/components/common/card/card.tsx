import * as React from 'react';
import { Card as MuiCard, SxProps, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';



interface ICard{
    children: React.ReactNode;
    sx?: SxProps,
}
export const Card = ({children, sx}:ICard) => {
  return (
    <MuiCard sx={sx}>
       {children}
    </MuiCard>
  );
};
