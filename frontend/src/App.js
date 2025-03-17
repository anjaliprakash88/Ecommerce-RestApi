import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container">
          <a className="navbar-brand" href="#">Python Market Place</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Categories</a>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>


      <main className="mt-4">
      <div className="container">
      <h3 className="mb-4">Latest products<a href="#" className="float-end btn btn-dark">View all products<i class="fa-solid fa-arrow-right-long"></i></a></h3>
      <div className="row">
      {/* Product box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Product title</h4>
            <h5 className="card-title text-muted">Price: Rs 500</h5>
       </div>
       <div className="card-footer">
       <button title="add to cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
       <button title="add to wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart"></i></button>
       </div>
      </div>
      </div>
      {/* Product box */}
      {/* Product box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Product title</h4>
            <h5 className="card-title text-muted">Price: Rs 500</h5>
       </div>
       <div className="card-footer">
       <button title="add to cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
       <button title="add to wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart"></i></button>
       </div>
      </div>
      </div>
      {/* Product box */}
      {/* Product box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Product title</h4>
            <h5 className="card-title text-muted">Price: Rs 500</h5>
       </div>
       <div className="card-footer">
       <button title="add to cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
       <button title="add to wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart"></i></button>
       </div>
      </div>
      </div>
      {/* Product box */}
      {/* Product box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Product title</h4>
            <h5 className="card-title text-muted">Price: Rs 500</h5>
       </div>
       <div className="card-footer">
       <button title="add to cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
       <button title="add to wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart"></i></button>
       </div>
      </div>
      </div>
      {/* Product box */}
      {/* Product box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Product title</h4>
            <h5 className="card-title text-muted">Price: Rs 500</h5>
       </div>
       <div className="card-footer">
       <button title="add to cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
       <button title="add to wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart"></i></button>
       </div>
      </div>
      </div>
      {/* Product box */}
      {/* Product box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Product title</h4>
            <h5 className="card-title text-muted">Price: Rs 500</h5>
       </div>
       <div className="card-footer">
       <button title="add to cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
       <button title="add to wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart"></i></button>
       </div>
      </div>
      </div>
      {/* Product box */}
      {/* Product box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Product title</h4>
            <h5 className="card-title text-muted">Price: Rs 500</h5>
       </div>
       <div className="card-footer">
       <button title="add to cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
       <button title="add to wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart"></i></button>
       </div>
      </div>
      </div>
      {/* Product box */}
      {/* Product box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Product title</h4>
            <h5 className="card-title text-muted">Price: Rs 500</h5>
       </div>
       <div className="card-footer">
       <button title="add to cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
       <button title="add to wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart"></i></button>
       </div>
      </div>
      </div>
      {/* Product box */}

      </div>
      </div>
      </main>
      </>
      
  );
}

export default App;
