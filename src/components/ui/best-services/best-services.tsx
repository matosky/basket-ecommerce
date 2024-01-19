import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./best-services.module.scss";
import { Card } from "@/components/common/card/card";

export const BestServices = () => {
  return (
    <section className={styles["best-services-wrap"]}>
      <div>
        <Typography textAlign={"center"} variant="subtitle1">
          Featured Products
        </Typography>
        <Typography textAlign={"center"} variant="h4">
         THE BEST SERVICES
        </Typography>
        <Typography textAlign={"center"} variant="body1">
          Problems trying to resolve the conflict between
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
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </section>
  );
};
