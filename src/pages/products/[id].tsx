// pages/items/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  ProductResponse,
} from "@/components/ui/best-seller/best-seller";
import { ProductList } from "@/components/common/product-list/product-list";
import { Typography } from "@mui/material";
import { getProducts } from "@/network/products";

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
  return (
    <div style={{width:'100%', padding: '4rem 20rem'}}>
      <div>
        <Typography
          fontSize={"1.8rem"}
          variant="h3"
          fontWeight={'700'}
        >
          BEST SELLER PRODUCTS
        </Typography>
      </div>
      {products && <ProductList products={products} />}
    </div>
  );
};

export default ItemPage;
