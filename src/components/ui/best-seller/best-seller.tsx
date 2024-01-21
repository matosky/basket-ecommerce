import React, { ReactNode, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import styles from "./best-seller.module.scss"; // Adjust the path based on your CSS module file
import { Button } from "@/components/common/button/button";
import { getProducts } from "@/network/products";
import { Product } from "@/components/common/product/product";
import { ProductList } from "@/components/common/product-list/product-list";
import { useRouter } from "next/router";

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

interface BestSellerProps {
  children: ReactNode;
  style: React.CSSProperties;
}
export const BestSeller = ({ children, style }: BestSellerProps) => {
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [skip, setSkip] = useState(0);
  const router = useRouter();
  const { asPath } = router;

  const isProductPage = asPath.includes("products");

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
  
      // Check if there are new products to add
      if (newProducts.length > 0) {
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
        setSkip((prevSkip) => prevSkip + 8);
      } else {
        // No more products to load, hide the button
        setSkip(0); // Reset skip to prevent unnecessary calls
      }
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
    <section
      className={styles["best-seller-wrap"]}
      style={{
        backgroundColor: isProductPage ? "#FAFAFA" : "#FFFFFF",
      }}
    >
      <div className={styles["heading-wrap"]} style={style}>
        {children}
      </div>
      {products && <ProductList products={products} />}
      {!asPath.includes("products") && products.length > 0 && (
        <div className={styles["button"]}>
          <Button
            loading={loading}
            variant="outlined"
            text="LOAD MORE PRODUCTS"
            onClick={fetchMoreProducts}
          />
        </div>
      )}
    </section>
  );
};
