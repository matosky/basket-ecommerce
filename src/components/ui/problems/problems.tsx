import { Typography } from "@mui/material";
import styles from "./problems.module.scss";
import { Button } from "@/components/common/button/button";

export const Problems = () => {
  return (
    <section className={styles["problems-wrap"]}>
      <div className={styles["content-box"]}>
        <Typography gutterBottom variant="h4" component="div">
          Designing Better Experience
        </Typography>
        <Typography gutterBottom variant="h2" component="div">
          Problems trying to resolve the conflict between
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          Problems trying to resolve the conflict between reals of physical
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          $16.48
        </Typography>
        <Button variant="contained" text="ADD YOUR CALL TO ACTION" />
      </div>
    </section>
  );
};
