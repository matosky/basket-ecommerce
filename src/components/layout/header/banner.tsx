import styles from "./banner.module.scss";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
export const Banner = () => {
  return (
    <div className={styles["banner-wrap"]}>
      <div>
        <div>
          <span>Icon</span>
          <span>(225) 555-0118</span>
        </div>
        <div>
          <span>Icon</span>
          <span>michelle.rivera@example.com</span>
        </div>
      </div>
      <div>
        <span>Follow Us and get a chance to win 80% off</span>
      </div>
      <div>
        <span>Follow Us :</span>
        <div className={styles["socials"]}>
            <InstagramIcon className={styles["icon"]} />
            <YouTubeIcon className={styles["icon"]}  />
            <FacebookRoundedIcon className={styles["icon"]}  />
            <TwitterIcon className={styles["icon"]}  />
        </div>
      </div>
    </div>
  );
};
