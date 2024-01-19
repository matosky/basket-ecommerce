import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./featured-posts.module.scss";

export const FeaturedPosts = () => {
  return (
    <section className={styles["featured-wrap"]}>
      <div>
        <Typography textAlign={"center"} variant="subtitle1">
          Practice Advice
        </Typography>
        <Typography textAlign={"center"} variant="h4">
          FEATURED POSTS
        </Typography>
      </div>
      <div className={styles["items"]}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="subtitle1" component="div">
                Lizard
              </Typography>
              <Typography gutterBottom variant="h4" component="div">
                Lizard
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </div>
    </section>
  );
};
