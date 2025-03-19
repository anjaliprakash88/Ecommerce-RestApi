import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import SingleProduct from './SingleProduct';
function ProductDetail() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
        <div id="productThumbnailSlider" className="carousel carousel-dark carousel-fade" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#productThumbnailSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={logo} className="image-thumbnail mb-5" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={logo} className="image-thumbnail mb-5" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={logo} className="image-thumbnail mb-5" alt="..." />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#productThumbnailSlider" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="col-8">
          <h3>Product Title</h3>
          <p>Product description goes here...</p>
          <h5 className="card-title">Price:Rs.500</h5>
          <p className="mt-3">
             <Link title="demo" target="_blank" className='btn btn-dark'>
              <i className="fa-solid fa-cart-plus"></i> Demo
              </Link>

             <button title="Add to Cart" className='btn btn-primary ms-1'>
              <i className="fa-solid fa-cart-plus"></i> Add to Cart
              </button>
              <button title="Buy now" className='btn btn-success ms-1'>
              <i className="fa-solid fa-bag-shopping"></i> Buy now
              </button>

              <button title="Add to Wishlist" className='btn btn-danger ms-1'>
              <i className="fa fa-heart"></i> Wishlist
              </button>
          </p>
          <div className="producttags mt-4">
            <h5>Tags</h5>
            <p>
               <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
               <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
               <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
               <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
               <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
               <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
               <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
               <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
               <Link to="#" className="badge bg-secondary text-white me-1">python</Link>
            </p>
          </div>
        </div>
      </div>
      {/* Related Products */}
      <h3 className='mt-5 mb-3'>Related Products</h3>
      <div id="relatedProductsSlider" className="carousel carousel-dark slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#relatedProductsSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className='row mb-5'>
              <SingleProduct  title="Django Project 1" />
              <SingleProduct  title="Django Project 1" />
              <SingleProduct  title="Django Project 1" />
              <SingleProduct  title="Django Project 1" />
            </div>
          </div>
          <div className="carousel-item">
            <div className='row mb-5'>
              <SingleProduct  title="Django Project 1" />
              <SingleProduct  title="Django Project 1" />
              <SingleProduct  title="Django Project 1" />
              <SingleProduct  title="Django Project 1" />
            </div>
          </div>
          <div className="carousel-item">
            <div className='row mb-5'>
              <SingleProduct  title="Django Project 1" />
              <SingleProduct  title="Django Project 1" />
              <SingleProduct  title="Django Project 1" />
              <SingleProduct  title="Django Project 1" />
            </div>
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#relatedProductsSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
      {/* End Related Products */}

    </section>
  );
}
export default ProductDetail;