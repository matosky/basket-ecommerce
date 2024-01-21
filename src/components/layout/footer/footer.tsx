import React from "react";
import map from "../../../assets/map.svg";
import styles from "./footer.module.scss";
import { Typography } from "@mui/material";
import { Input } from "@/components/common/input/input";
import { Button } from "@/components/common/button/button";
import { useRouter } from "next/router";
import Image from "next/image";
import faceIcon from "../../../assets/svg/icons/ft-social-fb.svg";
import instaIcon from "../../../assets/svg/icons/ft-social-insta.svg";
import twitIcon from "../../../assets/svg/icons/ft-social-twit.svg";

const links = [
  {
    label: "About Us",
    url: "/",
    // icon: faHome,
  },
  {
    label: "Carrier",
    url: "/",
    // icon: faInfoCircle,
  },
  {
    label: "We are hiring",
    url: "/",
    // icon: faEnvelope,
  },
  {
    label: "Blog",
    url: "/",
  },
];

const features = [
  {
    label: "Business Marketing",
    url: "/",
    // icon: faHome,
  },
  {
    label: "User Analytic",
    url: "/",
    // icon: faInfoCircle,
  },
  {
    label: "Live Chat",
    url: "/",
    // icon: faEnvelope,
  },
  {
    label: "Unlimited Support",
    url: "/",
  },
];

const resouces = [
  {
    label: "IOS & Android",
    url: "/",
    // icon: faHome,
  },
  {
    label: "Watch a Demo",
    url: "/",
    // icon: faInfoCircle,
  },
  {
    label: "Customers",
    url: "/",
    // icon: faEnvelope,
  },
  {
    label: "API",
    url: "/",
  },
];

interface Link {
  label: string;
  url: string;
}

interface Ilinks {
  title: string;
  links: Link[];
}

function Links({ links, title }: Ilinks) {
  return (
    <ul>
      <h5>{title}</h5>
      {links.map((link, index) => (
        <li key={index}>{link.label}</li>
      ))}
    </ul>
  );
}

export const Footer = () => {
  const router = useRouter();
  const { asPath } = router;
  const isProductPage = asPath.includes("products");

  return (
    <footer
      className={`${styles["footer-wrap"]} ${
        isProductPage ? styles["product-page-footer"] : ""
      }`}
    >
      <div
        className={styles["top"]}
        style={{
          backgroundColor: isProductPage ? "#FFFFFF" : "#FAFAFA",
          borderBottom: isProductPage ? "1px solid #E6E6E6" : "",
        }}
      >
        <div className={styles["logo"]}>
          <h3>Bandage</h3>
        </div>
        <div className={styles["socials"]}>
          <Image
            className={styles["ft-icons"]}
            src={faceIcon}
            width={30}
            height={30}
            alt="icon"
          />
          <Image
            className={styles["ft-icons"]}
            src={instaIcon}
            width={30}
            height={30}
            alt="icon"
          />
          <Image
            className={styles["ft-icons"]}
            src={twitIcon}
            width={30}
            height={30}
            alt="icon"
          />
        </div>
      </div>

      <div className={styles["bottom"]}>
        <div className={styles["inner-row"]}>
          <div className={styles["column"]}>
            <Links title="Company Info" links={links} />
          </div>
          <div className={styles["column"]}>
            <Links title="Legal" links={links} />
          </div>
          <div className={styles["column"]}>
            <Links title="Features" links={features} />
          </div>
          <div className={styles["column"]}>
            <Links title="Resources" links={resouces} />
          </div>
        </div>
        <div className={styles["subscribe"]}>
          <h5>Get In Touch</h5>
          <div className={styles["input"]}>
            <input type="text" className="input" placeholder="Email" />
            <div className={styles["button"]}>
              <button>Search</button>
            </div>
          </div>
          <p>Lore imp sum dolor Amit</p>
        </div>
      </div>
      <div className={styles["rights"]}>
        <Typography variant="body1">
          Made With Love By Finland All Right Reserved
        </Typography>
      </div>
    </footer>
  );
};
