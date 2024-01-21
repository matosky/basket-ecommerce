import Image from "next/image";
import styles from "./hero.module.scss";
import { Typography } from "@mui/material";

const heroData = [
  {
    subtitle: "5 Items",
    title: "FURNITURE",
    action: "Read More",
  },
  {
    subtitle: "5 Items",
    title: "FURNITURE",
    action: "Read More",
  },
  {
    subtitle: "5 Items",
    title: "FURNITURE",
    action: "Read More",
  },
  {
    subtitle: "5 Items",
    title: "FURNITURE",
    action: "Read More",
  },
];

export const Hero = () => {
  return (
    <section className={styles["hero-container"]}>
      <div className={styles["hero-content"]}>
        {heroData.map((info, i) => (
          <div className={`${styles["box"]} ${styles[`box${i + 1}`]}`}>
            <div className={styles['content']}>
              <Typography fontSize={"14px"}  variant="h6">
                5 Items
              </Typography>
              <Typography
                fontSize={"24px"}
                variant="h2"
              >
                FURNITURE
              </Typography>
              <Typography fontSize={"1rem"}  variant="h6">
                Read More
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
