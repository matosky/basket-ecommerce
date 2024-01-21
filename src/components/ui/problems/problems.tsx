import { Typography } from "@mui/material";
import styles from "./problems.module.scss";
import { Button } from "@/components/common/button/button";

export const Problems = () => {
  return (
    <section className={styles["problems-wrap"]}>
      <div className={styles["content-box"]}>
        <Typography  variant="h6" component="h6">
          Designing Better Experience
        </Typography>
        <Typography  variant="h2" component="h2">
          Problems trying to resolve the conflict between
        </Typography>
        <Typography  variant="body1" component="p">
          Problems trying to resolve the conflict between reals of physical
        </Typography>
        <Typography  variant="h3" component="h3">
          $16.48
        </Typography>
        <Button variant="contained" text="ADD YOUR CALL TO ACTION" />
      </div>
    </section>
  );
};
