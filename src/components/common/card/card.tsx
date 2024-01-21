import * as React from 'react';
import { Card as MuiCard, SxProps, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';



interface ICard{
    children: React.ReactNode;
    sx?: SxProps,
    key?: number;
}
export const Card = ({children, sx, key}:ICard) => {
  return (
    <MuiCard sx={sx} key={key}>
       {children}
    </MuiCard>
  );
};
