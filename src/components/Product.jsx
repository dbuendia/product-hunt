import arrowUp from "../images/icons/arrow-up.svg";

function Product({
  id,
  title,
  description,
  url,
  votes,
  submitterAvatarUrl,
  productImageUrl,
  onProductClick,
}) {
  return (
    <div className="product">
      <div className="product-image">
        <img src={productImageUrl}></img>
      </div>
      <div className="product-info">
        <div className="voting">
          <img
            src={arrowUp}
            alt="Arrow up"
            onClick={() => onProductClick(id)}
          />
          <span>{votes}</span>
        </div>
        <a href={url} className="product-title">
          {title}
        </a>
        <p>{description}</p>
        <div className="product-info-image-container">
          <span>Submitted by:</span>
          <img src={submitterAvatarUrl}></img>
        </div>
      </div>
    </div>
  );
}

export default Product;
