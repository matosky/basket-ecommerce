// pages/items/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  BestSeller,
  ProductResponse,
} from "@/components/ui/best-seller/best-seller";
import { ProductList } from "@/components/common/product-list/product-list";
import { Box, Typography } from "@mui/material";
import { getProducts } from "@/network/products";
import { ProductDescription } from "@/components/ui/product-description/product-description";
import { AddToCart } from "@/components/ui/add-to-cart/add-to-cart";
import { BaseLayout } from "@/components/layout/base-layout";
import { Brands } from "@/components/ui/brands/ brands";

const ItemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [products, setProducts] = useState<ProductResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [skip, setSkip] = useState(0);

  const fetchInitialProducts = async () => {
    try {
      const productsData = await getProducts(skip, 8);
      const initialProducts = productsData?.products || [];
      setProducts(initialProducts);
    } catch (err) {
      setError("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialProducts();
  }, []);

  // Parse id into a number before using it for comparison
  const singleProduct = products?.find(
    (p) => p.id === parseInt(id as string, 10)
  );

  return (
    <div>
      {singleProduct && <AddToCart product={singleProduct} />}
      <ProductDescription />
      <BestSeller
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography component={'h3'} variant="h3">BEST SELLER PRODUCTS</Typography>
      </BestSeller>
      <Brands />
    </div>
  );
};

export default ItemPage;
