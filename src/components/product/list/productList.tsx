import ProductCard from "../card/productCard";
import { ProductListProps } from "./productListTypes";
import styles from "./styles.module.scss";

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
