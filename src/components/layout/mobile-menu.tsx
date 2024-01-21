import Image from "next/image";
import styles from "./mobile-menu.module.scss";
import cartIcon from "../../assets/svg/icons/cart-link.svg";
import searchIcon from "../../assets/svg/icons/search.svg";
import wishIcon from "../../assets/svg/icons/wish.svg";
import userIcon from "../../assets/svg/icons/user.svg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/store/slices/root-reducer";
import { links } from "./header/header-data";
import { useEffect, useState } from "react";
import { CartModal } from "@/components/common/modals/cart-modal/cart-modal";
import { WishListModal } from "@/components/common/modals/wish-list-modal/wish-list-modal";

export const MobileMenu = () => {
    const router = useRouter();
    const { asPath } = router;
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const wishItems = useSelector((state: RootState) => state.wishlist.items);

    // Initialize isClient state to false
    const [isClient, setIsClient] = useState(false);
    const [isCartPopupOpen, setIsCartPopupOpen] = useState(false);
    const [isWishPopupOpen, setIsWishPopupOpen] = useState(false);

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
        <nav
            className={`${styles["mobile-wrap"]} ${asPath.includes("products") ? styles["product-page-header"] : ""
                }`}
        >
            <ul className={styles["links"]}>
                {links.map((l, i) => (
                    <li key={i}>
                        <span>{l.label}</span>
                        {/* {i === 1 && <span>icon</span>} */}
                    </li>
                ))}
            </ul>
            <div className={styles["actions"]}>
                <div className={styles["account"]}>
                    <Image src={userIcon} width={30} height={30} alt="icon" />
                    <span>Login / Register</span>
                </div>
                <div className={styles["icon"]}>
                    <Image src={searchIcon} width={30} height={30} alt="icon" />
                </div>

                {/*Note.... Isclient helps prevent hydration error from nextjs server rendering */}
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
        </nav>
    );
};
