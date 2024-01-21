import Image from "next/image";
import { Banner } from "./banner";
import styles from "./header.module.scss";
import cartIcon from "../../../assets/svg/icons/cart.svg";
import searchIcon from "../../../assets/svg/icons/search.svg";
import wishIcon from "../../../assets/svg/icons/wish.svg";
import userIcon from "../../../assets/svg/icons/user.svg";
import menuIcon from "../../../assets/svg/icons/menu-icon.svg";
import searchMob from "../../../assets/svg/icons/search-mobile.svg";
import cartLink from "../../../assets/svg/icons/cart-link.svg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/store/slices/root-reducer";
import { links } from "./header-data";
import { useEffect, useState } from "react";
import { CartModal } from "@/components/common/modals/cart-modal/cart-modal";
import { WishListModal } from "@/components/common/modals/wish-list-modal/wish-list-modal";
import { useMediaQuery } from "react-responsive";
import { Box } from "@mui/material";
import { MobileMenu } from "../mobile-menu";

export const Header = () => {
  const router = useRouter();
  const { asPath } = router;
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const wishItems = useSelector((state: RootState) => state.wishlist.items);
  const isMobile = useMediaQuery({ maxWidth: "1410px" });
  // Initialize isClient state to false
  const [isClient, setIsClient] = useState(false);
  const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
  const [isWishPopupOpen, setIsWishPopupOpen] = useState(false);
  const [mobileMenu, setIsMobileMenu] = useState(false);
   
  const isProductPage = asPath.includes("products");

  const handleMobileMenu = ()=>{
    setIsMobileMenu((prev)=>!prev)
  }

  const handleOpenCartPopup = () => {
    setIsCartPopupOpen(true);
  };
  const handleCloseCartPopup = () => {
    setIsCartPopupOpen(false);
  };

  const handleOpenWishPopup = () => {
    setIsWishPopupOpen(true);
  };
  const handleCloseWishPopup = () => {
    setIsWishPopupOpen(false);
  };

  // Use useEffect to set isClient to true after the initial render
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header
      className={`${styles["header-wrap"]} ${
        asPath.includes("products") ? styles["product-page-header"] : ""
      }`}
    >
      <div className={styles["menu"]}>
        <div className={styles["left"]}>
          <Link href="/">
            <div className={styles["logo"]}>Bandage</div>
          </Link>
        </div>
        <div className={styles["right"]}>
          {!isMobile && (
            <ul className={styles["links"]}>
              {links.map((l, i) => (
                <li key={i}>
                  <span>{l.label}</span>
                  {i === 1 && <span>icon</span>}
                </li>
              ))}
            </ul>
          )}
          {isMobile && (
            <Box sx={{ display: "flex" }}>
              {/* {!isProductPage && ( */}
                <Box sx={{ display: "flex", gap: "10px", marginRight: "20px" }}>
                  <Image
                    className={styles["mobile-header-icons"]}
                    src={searchMob}
                    width={30}
                    height={30}
                    alt="icon"
                  />
                    {isClient && (
                    <div>
                      <Image
                        onClick={() => handleOpenWishPopup()}
                        className={styles["mobile-header-icons"]}
                        src={wishIcon}
                        width={30}
                        height={30}
                        alt="icon"
                      />
                      {wishItems && <span>{wishItems.length}</span>}
                    </div>
                  )}
                  {isClient && (
                    <div>
                      <Image
                        onClick={() => handleOpenCartPopup()}
                        className={styles["mobile-header-icons"]}
                        src={cartLink}
                        width={30}
                        height={30}
                        alt="icon"
                      />
                      {cartItems && <span>{cartItems.length}</span>}
                    </div>
                  )}
                </Box>
              {/* )} */}
              <Image
               onClick={()=>handleMobileMenu()}
                className={styles["mobile-header-icons"]}
                src={menuIcon}
                width={30}
                height={30}
                alt="icon"
              />
            </Box>
          )}
          {!isMobile && (
            <div className={styles["actions"]}>
              <div className={styles["account"]}>
                <Image src={userIcon} width={30} height={30} alt="icon" />
                <span>Login / Register</span>
              </div>
              <div className={styles["icon"]}>
                <Image src={searchIcon} width={30} height={30} alt="icon" />
              </div>
              {isClient && (
                <>
                  <div
                    onClick={() => handleOpenCartPopup()}
                    className={styles["icon"]}
                  >
                    <Image src={cartIcon} width={30} height={30} alt="icon" />
                    {cartItems && <span>{cartItems.length}</span>}
                  </div>
                  <div
                    onClick={() => handleOpenWishPopup()}
                    className={styles["icon"]}
                  >
                    <Image src={wishIcon} width={30} height={30} alt="icon" />
                    {wishItems && <span>{wishItems.length}</span>}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
      {mobileMenu && <MobileMenu />}
      <CartModal open={isCartPopupOpen} onClose={handleCloseCartPopup} />
      <WishListModal open={isWishPopupOpen} onClose={handleCloseWishPopup} />
    </header>
  );
};
