// ProductList.js
import React from "react";
import Typography from "@mui/material/Typography";
import styles from "./product-list.module.scss";
import { Button } from "@/components/common/button/button";
import { Product } from "@/components/common/product/product";

interface ProductResponse {
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
}

interface ProductListProps {
  products: ProductResponse[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles["items"]}>
      {products &&
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
    </div>
  );
};
