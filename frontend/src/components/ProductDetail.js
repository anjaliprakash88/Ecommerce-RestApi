import logo from '../logo.svg';
import {Link} from 'react-router-dom';
function ProductDetail() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <img src={logo} className="img-thumbnail" alt="Product" />
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
    </section>
  );
}
export default ProductDetail;