import styles from "./banner.module.scss";
import phoneIcon from "../../../assets/svg/icons/phone.svg";
import msg from "../../../assets/svg/icons/msg.svg";
import insta from "../../../assets/svg/icons/insta.svg";
import yout from "../../../assets/svg/icons/yout.svg";
import twitter from "../../../assets/svg/icons/twitter.svg";
import face from "../../../assets/svg/icons/face.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export const Banner = () => {
  const router = useRouter();
  const { asPath } = router;
  const isProductPage = asPath.includes("products");
  return (
    <div
      className={
        isProductPage
          ? `${styles["product-banner-wrap"]}`
          : `${styles["home-page-banner-wrap"]}`
      }
    >
      {!isProductPage && (
        <div className={styles["home-container"]}>
          <div className={styles["home-left"]}>
            <div>
              <Image src={phoneIcon} width={30} height={30} alt="icon" />
              <span>(225) 555-0118</span>
            </div>
            <div>
              <Image src={msg} width={30} height={30} alt="icon" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div className={styles["home-center"]}>
            <span>Follow Us and get a chance to win 80% off</span>
          </div>
          <div className={styles["home-right"]}>
            <div className={styles["home-socials"]}>
              <span>Follow Us :</span>
              <Image
                className={styles["home-icon"]}
                src={insta}
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                className={styles["home-icon"]}
                src={yout}
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                className={styles["home-icon"]}
                src={face}
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                className={styles["home-icon"]}
                src={twitter}
                width={30}
                height={30}
                alt="icon"
              />
            </div>
          </div>
        </div>
      )}

      {isProductPage && (
        <div className={styles["container"]}>
          <div className={styles["left"]}>
            <div>
              <Image src={phoneIcon} width={30} height={30} alt="icon" />
              <span>(225) 555-0118</span>
            </div>
            <div>
              <Image src={msg} width={30} height={30} alt="icon" />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>
          <div className={styles["center"]}>
            <h6>Follow Us and get a chance to win 80% off</h6>
          </div>
          <div className={styles["right"]}>
            <div className={styles["socials"]}>
              <span>Follow Us :</span>
              <Image
                className={styles["icon"]}
                src={insta}
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                className={styles["icon"]}
                src={yout}
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                className={styles["icon"]}
                src={face}
                width={30}
                height={30}
                alt="icon"
              />
              <Image
                className={styles["icon"]}
                src={twitter}
                width={30}
                height={30}
                alt="icon"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
