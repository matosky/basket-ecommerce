// Product.js
import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./product.module.scss";

interface ProductProps {
  product: {
    id: number;
    title: string;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
  };
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card className={styles['card-wrap']} key={product.id} sx={{ width: '180px', height: '330px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={product.thumbnail}
          alt={product.title}
        />
        <CardContent>
          <Typography gutterBottom textAlign={'center'} variant="h5">
            {product.brand}
          </Typography>
          <Typography textAlign={'center'} variant="body2">
            {product.category}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Typography textAlign={'center'}>
        ${product.price} <span className={styles['percentage']}>${product.discountPercentage}%</span>
      </Typography>
    </Card>
  );
};
