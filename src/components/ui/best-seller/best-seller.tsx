import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import styles from "./best-seller.module.scss"; // Adjust the path based on your CSS module file
import { Button } from "@/components/common/button/button";
import { getProducts } from "@/network/products";
import { Product} from "@/components/common/product/product";
import { ProductList } from "@/components/common/product-list/product-list";

export interface ProductResponse {
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
export const BestSeller = () => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [skip, setSkip] = useState(0);

  const fetchInitialProducts = async () => {
    try {
      const productsData = await getProducts(skip, 8);
      const initialProducts = productsData?.products || [];
      setProducts(initialProducts);
      setSkip((prevSkip) => prevSkip + 8);
    } catch (err) {
      setError("error");
    } finally {
      setLoading(false);
    }
  };

  const fetchMoreProducts = async () => {
    setLoading(true);
    try {
      const productsData = await getProducts(skip, 8);
      const newProducts = productsData?.products || [];
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      setSkip((prevSkip) => prevSkip + 8);
    } catch (err) {
      setError("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialProducts();
  }, []); 
  return (
    <section className={styles["best-seller-wrap"]}>
      <div>
        <Typography fontSize={"1.4rem"} textAlign={"center"} variant="h2">
          Featured Products
        </Typography>
        <Typography
          fontSize={"1.8rem"}
          margin={"1rem"}
          textAlign={"center"}
          variant="h3"
        >
          BEST SELLER PRODUCTS
        </Typography>
        <Typography fontSize={"1rem"} textAlign={"center"} variant="body1">
          Problems trying to resolve the conflict between
        </Typography>
      </div>
      {products && <ProductList products={products}/>}
      <div className={styles["button"]}>
        <Button
          loading={loading}
          variant="outlined"
          text="LOAD MORE PRODUCTS"
          onClick={fetchMoreProducts}
        />
      </div>
    </section>
  );
};
