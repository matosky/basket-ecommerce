import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import styles from "./about-us.module.scss";
import { Rating } from "@/components/common/rating/rating";
import { Typography } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const AboutUs = () => {
  return (
    <section className={styles['about-wrap']}>
        <div className={styles["testimonial"]}>
          <Typography gutterBottom variant="h4" component="div">
            Lizard
          </Typography>

          <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </Stack>
          <Rating />
          <Typography gutterBottom variant="body1" component="div">
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Regina Milner
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Designer
          </Typography>
        </div>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Item>1</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>2</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>3</Item>
          </Grid>
          <Grid item xs={6}>
            <Item>4</Item>
          </Grid>
        </Grid>
    </section>
  );
};
