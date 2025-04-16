import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ProductList from "@/components/product/list/productList";
import WellcomePage from "@/components/wellcome/wellcomePage";

import { mockProducts } from "@/data/products";

export default function Home() {
  return (
    <main>
      <Header />
      <WellcomePage />
      <ProductList products={mockProducts} />
      <Footer />
    </main>
  );
}
