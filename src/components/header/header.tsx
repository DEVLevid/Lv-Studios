import styles from "./styles.module.scss";
import { ShoppingCart, Search, User } from "lucide-react";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li>Woman</li>
          <li>Mens</li>
          <li>Bags</li>
        </ul>
      </nav>
      <div className={styles.settingsContainer}>
        <div className={styles.search}>
          <Search size={20} color="#000" />
        </div>

        <div className={styles.user}>
          <User size={20} color="#000" />
        </div>

        <div className={styles.cart}>
          <ShoppingCart size={20} color="#000" />
          <span className={styles.cartCount}>0</span>
        </div>
      </div>
    </header>
  );
}
