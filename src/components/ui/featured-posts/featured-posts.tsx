import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./featured-posts.module.scss";
import Link from "next/link";
import arrowIcon from "../../../assets/svg/icons/ft-arrrow.svg";
import comIcon from "../../../assets/svg/icons/ft-comment.svg";
import timeIcon from "../../../assets/svg/icons/ft-time.svg";
import Image from "next/image";
import { featuredData } from "./featured-data";


export const FeaturedPosts = () => {
  return (
    <section className={styles["featured-wrap"]}>
      <div>
        <Typography component={'h3'} textAlign={"center"} variant="subtitle1">
          Practice Advice
        </Typography>
        <Typography component={'h4'} textAlign={"center"} variant="h4">
          FEATURED POSTS
        </Typography>
      </div>
      <div className={styles["items"]}>
        {featuredData.map((ft, i) => (
          <Card key={i} className={styles["display-card"]}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={ft.img}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  width={"80%"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  // alignItems={"center"}
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                >
                  <Link style={{color: "#8EC2F2"}}  href={"/"}>Google</Link>
                  <Link style={{color: "#737373"}} href={"/"}>Trending</Link>
                  <Link style={{color: "#737373"}} href={"/"}>New</Link>
                </Typography>
                <Typography width={'100%'} gutterBottom variant="h4" textAlign={'left'} component="h4">
                  {ft.title}
                </Typography>
                <Typography variant="body1" component={'p'} color="text.secondary">
                  {ft.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={styles["card-ft"]}>
              <Box
                width={"100%"}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  component={"small"}
                  gap={'4px'}
                >
                  <Image src={timeIcon} width={30} height={30} alt="icon" />
                  <span>{ft.date}</span>
                </Typography>
                <Typography
                  display={"flex"}
                  gap={'4px'}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  component={"small"}
                >
                  <Image src={comIcon} width={30} height={30} alt="icon" />
                  <span>{ft.comments}</span>
                </Typography>
              </Box>
              <Box
                margin={"2rem 0"}
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"flex-start"}
              >
                <Button size="small" color="primary">
                  Learn More
                  <Image src={arrowIcon} width={30} height={30} alt="icon" />
                </Button>
              </Box>
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
  );
};
