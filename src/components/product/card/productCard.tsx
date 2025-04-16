import { ProductCardProps } from "./productCardTypes";
import { ShoppingCart, Plus } from "lucide-react";
import styles from "./styles.module.scss";

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productDetails}>
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <div className={styles.buy}>
          <p className="product-price">{product.price}</p>
          <div className={styles.btnContainer}>
            <ShoppingCart size={18} color="#000" />
            <Plus size={18} color="#000" />
          </div>
        </div>
      </div>
    </div>
  );
}
