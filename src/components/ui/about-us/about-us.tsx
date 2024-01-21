import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styles from "./about-us.module.scss";
import { Rating } from "@/components/common/rating/rating";
import { Link, Typography } from "@mui/material";
import { galleryData } from "./about-us-data";
import Image from "next/image";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const AboutUs = () => {
  return (
    <section className={styles["about-wrap"]}>
     <div className={styles['container']}>
     <div className={styles["testimonial"]}>
        <Typography gutterBottom variant="h3">
          What they say about us
        </Typography>

        <Stack direction="row" spacing={6}>
          <Avatar
            alt="Remy Sharp"
            src={galleryData[4].img}
            sx={{ width: 100, height: 100 }}
          />
        </Stack>
        <Rating />
        <Typography gutterBottom variant="body1" component="p">
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </Typography>
        <Link
          component="a"
          underline="hover"
          color="inherit"
          variant="h5"
          gutterBottom
        >
          Regina Milner
        </Link>
        <Typography gutterBottom variant="h6" component="div">
          Designer
        </Typography>
      </div>
      <Grid className={styles['grid']} >
        {galleryData.map((pc, i) => (
          <Grid className={styles['item']}  key={i}>
            <Item sx={{ width: "100%", height: "100%" }}>
              <Image
                src={pc.img}
                width={100}
                height={100}
                alt="about"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
     </div>
    </section>
  );
};
