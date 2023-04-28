import { products } from "../utils/products";

export default function Product() {
  return (
    <div className="container productContainer container-xm marginTop2Rem">
      <div className="d-flex gap-2">
        <div className="rounded">
          <i className="fa fa-shopping-basket product"> </i>
        </div>
        <b>Products</b>
      </div>
      <h4 className="mt-2">
        <b>Explore Our products</b>
      </h4>
      <div className="row justify-content-start d-flex">
        {products.map((product) => (
          <div className="col-xl-3 col-lg-4 py-3 col-sm-6 col-12 mb--30">
            <a
              href="/"
              className="card border-0 text-decoration-none text-black"
              key={product.id}
            >
              <div className="w-100 prodBg">
                <img
                  src={product.image}
                  alt="loading"
                  className="w-100 prodBg"
                />
              </div>
              <div className="card-body py-2 bg-white">
                <div className="product-rating py-2">
                  <span className="icon ratingColor">
                    {Array.from({ length: product.stars }, (_, i) => (
                      <i className="fas fa-star" key={i} />
                    ))}
                  </span>
                  <span className="rating-number">({product.ratings})</span>
                </div>
                <h5 className="title py-2">
                  <small className="greyish">{product.title}</small>
                </h5>
                <div className="product-price-variant gap5">
                  <span className="price current-price smallBoldF">
                    {product.price}
                  </span>
                  <span className="price old-price priceLine">
                    {product.oldPrice}
                  </span>
                </div>
                <div className="d-flex flex-row justify-content-start align-items-center gap-2 mt-1">
                  <a
                    href="/"
                    className="cursor-pointer text-decoration-none fa fa-eye eyeicon"
                  />
                  <a
                    href="/"
                    className="cursor-pointer text-decoration-none fa fa-shopping-basket eyeicon darkBlue"
                  />
                  <a
                    href="/"
                    className="cursor-pointer text-decoration-none fa fa-heart eyeicon red"
                  />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center py-5">
        <button className="btn btn-outline-primary btn-lg">
          {" "}
          <i className="fa fa-shop" /> View all Products
        </button>
      </div>
      <hr />
    </div>
  );
}
