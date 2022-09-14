import Product from "./Product.jsx";

function ProductContainer({ onProductClick, updatedProducts }) {
  return (
    <div className="product-container">
      {updatedProducts.map((product) => {
        return (
          <Product
            id={product.id}
            onProductClick={onProductClick}
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
