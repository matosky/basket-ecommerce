import {
  Button,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import styles from "./best-services.module.scss";
import { Card } from "@/components/common/card/card";
import Image from "next/image";

const bestServiceData = [
  {
    img: "images/best-service/icon1.svg",
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },
  {
    img: "images/best-service/icon2.svg",
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    img: "images/best-service/icon3.svg",
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];
export const BestServices = () => {
  return (
    <section className={styles["best-services-wrap"]}>
      <div>
        <Typography textAlign={"center"} variant="subtitle1">
          Featured Products
        </Typography>
        <Typography margin={'1rem'} textAlign={"center"} variant="h4">
          THE BEST SERVICES
        </Typography>
        <Typography textAlign={"center"} variant="body1">
          Problems trying to resolve the conflict between
        </Typography>
      </div>
      <div className={styles["items"]}>
        {bestServiceData.map((info, i) => (
          <Card
            key={i}
          >
            <CardActionArea
               className={styles['card']}
                  sx={{
                    width: "250px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
            >
               <Image src={info.img} width={72} height={72} alt="display" />
              <CardContent>
                <Typography gutterBottom variant="h5" textAlign={'center'} component="div">
                  {info.title}
                </Typography>
                <Typography variant="body2" textAlign={'center'} color="text.secondary">
                  {info.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </section>
  );
};
