import { products } from "../data/products.js";
import Product from "../components/Product.jsx";

function ProductContainer() {
  return (
    <div className="product-container">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            title={product.title}
            description={product.description}
            url={product.url}
            votes={product.votes}
            submitterAvatarUrl={product.submitterAvatarUrl}
            productImageUrl={product.productImageUrl}
          ></Product>
        );
      })}
    </div>
  );
}

export default ProductContainer;
