import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles["hero-container"]}>
      <div className={styles["hero-content"]}>
        <div className={styles["box1"]}>box1</div>
        <div className={styles["box2"]}>
          <div className={styles["inner-top"]}></div>
          <div className={styles["inner-bottom"]}>
            <div className={styles["box3"]}>box3</div>
            <div className={styles["box4"]}>box4</div>
          </div>
        </div>
      </div>
    </section>
  );
};
