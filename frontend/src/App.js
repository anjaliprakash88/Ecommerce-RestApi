import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {
  return (
  <>
     <Header/>

      <main className="mt-4">
      <div className="container">
      {/* LATEST PRODUCTS */}
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
       {/* END LATEST PRODUCTS */}

       {/* Popular Categories */}
      <h3 className="mb-4">Popular Categories<a href="#" className="float-end btn btn-dark">View all categories<i class="fa-solid fa-arrow-right-long"></i></a></h3>
      <div className="row">
      {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Category title</h4>
       </div>
       <div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
      {/* end category box */}

     {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Category title</h4>
       </div>
       <div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
    {/* end category box */}
     {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Category title</h4>

       </div>
<div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
     {/* end category box */}
      {/* category box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Category title</h4>

       </div>
<div className="card-footer">
       product downloads: 2356
       </div>
      </div>
      </div>
     {/* end category box */}
      </div>
       {/* END LATEST CATEGORY */}





 {/* POPULAR PRODUCTS */}
      <h3 className="mb-4">Popular products<a href="#" className="float-end btn btn-dark">View all products<i class="fa-solid fa-arrow-right-long"></i></a></h3>
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
      </div>
       {/* END POPULAR PRODUCTS */}



         {/* Popular SELLER */}
      <h3 className="mb-4">Popular Sellers<a href="#" className="float-end btn btn-dark">View all Sellers<i class="fa-solid fa-arrow-right-long"></i></a></h3>
      <div className="row">
      {/* seller box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Seller Name</h4>
       </div>
       <div className="card-footer">
      Categories:<a href="#">Python</a>, <a href="#">Php</a>
       </div>
      </div>
      </div>
      {/* end seller box */}

     {/* seller box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Seller Name</h4>
       </div>
       <div className="card-footer">
      Categories:<a href="#">Javascript</a>, <a href="#">vue.js</a>
       </div>
      </div>
      </div>
    {/* end seller box */}
     {/* seller box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Seller Name</h4>

       </div>
<div className="card-footer">
      Categories:<a href="#">react.js</a>, <a href="#">angular.js</a>
       </div>
      </div>
      </div>
     {/* end seller box */}
      {/* seller box */}
      <div className="col-12 col-md-3 mb-4">
      <div className="card">
          <img src={logo} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title">Seller Name</h4>

       </div>
<div className="card-footer">
       Categories:<a href="#">wordpress</a>, <a href="#">shopify</a>
       </div>
      </div>
      </div>
     {/* end seller box */}
      </div>
       {/* END LATEST SELLER */}




      </div>
      </main>
      </>
      
  );
}

export default App;
