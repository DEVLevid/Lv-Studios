import styles from "./styles.module.scss";

export default function WellcomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.model}>
        <div className={styles.modelImage}>
          <p>Womans wear</p>
          <img src="modelo1.png" alt="modelo1" />
        </div>
        <div className={styles.modelImage}>
          <p>Mens Wear</p>
          <img src="modelo2.png" alt="modelo2" />
        </div>
      </div>
      <h1 className={styles.wellcomeMessage}>Lv Studios</h1>
    </div>
  );
}
