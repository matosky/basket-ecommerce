import React, { useState } from "react";
import { Grid, Typography, Button, Box, IconButton } from "@mui/material";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import styles from "./add-to-cart.module.scss";
import { Rating } from "@/components/common/rating/rating";
import whiteCart from "../../../assets/svg/icons/white-cart.svg";
import eye from "../../../assets/svg/icons/eye.svg";
import whiteWish from "../../../assets/svg/icons/white-wish.svg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Image from "next/image";
import { addToCart } from "@/store/slices/cart-slice";
import { useDispatch } from "react-redux";
import { CartItem, WishListItem } from "@/types/types";
import { addToWishlist } from "@/store/slices/wish-list-slice";
import { Snackbar, SnackbarContent } from "@mui/material";

export interface ProductResponse {
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

export const AddToCart = ({ product }: ProductResponse) => {
  const { images, title, description, price, stock, thumbnail } = product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [isCartItem, setIsCartIem] = useState(false);
  const [isWishItem, setIsWishItem] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      thumbnail: product.thumbnail,
      title: product.title,
      quantity: 1,
      price: product.price,
    };

    dispatch(addToCart(cartItem));
    setSnackbarMessage("Added to cart successfully");
    setSnackbarOpen(true);
  };

  const handleAddToWishList = () => {
    const wishListItem: WishListItem = {
      id: product.id,
      thumbnail: product.thumbnail,
      title: product.title,
    };
    dispatch(addToWishlist(wishListItem));
    setSnackbarMessage("Added to wishlist successfully");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  return (
    <section className={styles["add-to-cart-wrap"]}>
      <div className={styles["container"]}>
        <div className={styles["custom-grid"]}>
          <div className={styles["item-showcase"]}>
            <Box>
              <FaChevronLeft
                className={styles["switch-icon1"]}
                onClick={handlePrevImage}
              />
              <div className={styles["showcase-img-wrap"]}>
                <img src={images[currentImageIndex]} alt="Product Image" />
              </div>
              <FaChevronRight
                className={styles["switch-icon2"]}
                onClick={handleNextImage}
              />
            </Box>
            <div className={styles["thumbnail-wrap"]}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`Product View ${index + 1}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles["info-section"]}>
            <div>
              <Typography variant="h4" gutterBottom>
                {title}
              </Typography>
              <Box
                margin={"1rem 0"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <Rating />
                <span>10 Reviews</span>
              </Box>
              <Typography variant="h3" gutterBottom>
                ${price}
              </Typography>

              <Typography
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                variant="body1"
                paragraph
              >
                Availability :{" "}
                <h6 style={{ color: "#23A6F0", marginLeft: "10px" }}>
                  {stock}
                </h6>
              </Typography>
            </div>
            <Box className={styles["add-to-cart-footer"]}>
              <div className={styles["colors"]}>
                {[1, 2, 3, 4].map((c) => (
                  <span key={c}></span>
                ))}
              </div>
              <div className={styles["actions"]}>
                <Button variant="contained" color="primary" size="large">
                  Select options
                </Button>
                <div className={styles["action-icons"]}>
                  <div
                    onClick={() => handleAddToWishList()}
                    className={styles["icon-wrap"]}
                  >
                    <Image src={whiteWish} width={30} height={30} alt="icon" />
                  </div>
                  <div
                    onClick={() => handleAddToCart()}
                    className={styles["icon-wrap"]}
                  >
                    <Image src={whiteCart} width={30} height={30} alt="icon" />
                  </div>
                  <div className={styles["icon-wrap"]}>
                    <Image src={eye} width={30} height={30} alt="icon" />
                  </div>
                </div>
              </div>
            </Box>
          </div>
        </div>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // Set anchorOrigin for bottom right
        >
          <SnackbarContent
            message={snackbarMessage}
            action={
              <Button
                color="inherit"
                size="small"
                onClick={handleSnackbarClose}
              >
                Close
              </Button>
            }
          />
        </Snackbar>
      </div>
    </section>
  );
};
