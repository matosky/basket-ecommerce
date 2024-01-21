import { Box, Grid, Typography } from "@mui/material";
import styles from "./product-description.module.scss";
import Image from "next/image";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ProductDescription = () => {
  return (
    <section className={styles["product-desc-wrap"]}>
       <div className={styles['container']}>
       <div className={styles["tabs-wrap"]}>
        <div className={styles["tabs"]}>
          <span>Description</span>
          <span>Additional Information</span>
          <span>
            Additional Information<small>(0)</small>
          </span>
        </div>
      </div>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={6}>
          <Typography component={"h5"} variant="h5">
            the quick fox jumps over{" "}
          </Typography>
          <Typography className={styles["para-text"]} component={"p"}>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
          <Box className={styles["fixed-line-wrap"]}>
            <span className={styles["fixed-line"]} />
            <Typography className={styles["para-text"]} component={"p"}>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </Typography>
          </Box>
          <Typography className={styles["para-text"]} component={"p"}>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Image
            src="/images/product-desc.svg"
            width={100}
            height={100}
            alt="desc"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
      </Grid>
       </div>
    </section>
  );
};
