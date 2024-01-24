// pages/items/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  BestSeller,
  ProductResponse,
} from "@/components/ui/best-seller/best-seller";
import { ProductList } from "@/components/common/product-list/product-list";
import { Box, Typography } from "@mui/material";
import { getProduct, getProducts } from "@/network/products";
import { ProductDescription } from "@/components/ui/product-description/product-description";
import { AddToCart } from "@/components/ui/add-to-cart/add-to-cart";
import { BaseLayout } from "@/components/layout/base-layout";
import { Brands } from "@/components/ui/brands/ brands";

const ItemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<ProductResponse>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [skip, setSkip] = useState(0);
  console.log({ id });

  const fetchInitialProduct = async () => {
    setLoading(true);
    try {
      const product = await getProduct(id as string);
      setProduct(product);
    } catch (err) {
      setError("error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialProduct();
  }, [id]);

  return (
    <div>
      {loading ? (
        <Box
          sx={{
            width: "100%",
            height: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Loading...</h1>
        </Box>
      ) : (
        product && <AddToCart product={product} />
      )}
      <ProductDescription />
      <BestSeller
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Typography component={"h3"} variant="h3">
          BEST SELLER PRODUCTS
        </Typography>
      </BestSeller>
      <Brands />
    </div>
  );
};

export default ItemPage;
