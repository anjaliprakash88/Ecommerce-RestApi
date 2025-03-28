import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import SingleProduct from './SingleProduct';

 function Home(){
 const products=[
 {
 'title':'Product 1',
 'price':100
 },
 {
 'title':'Product 2',
 'price':200
 },
 {
 'title':'Product 3',
 'price':300
 },
 {
 'title':'Product 4',
 'price':400
 },
 ]
return(

<main className="mt-4">
      <div className="container">
      {/* LATEST PRODUCTS */}
      <h3 className="mb-4">Latest products<Link to="/products" className="float-end btn btn-dark">View all products<i class="fa-solid fa-arrow-right-long"></i></Link></h3>
      <div className="row mb-4">
      {
        products.map((product)=><SingleProduct product={product} />)
    }
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

       {/* Rating and Reviews */}
       <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-5">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
            <div className="carousel-item">
              <figure className="text-center">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption className="blockquote-footer">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <cite title="Source Title">Customer Name</cite>
                </figcaption>
              </figure>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
       {/* End */}




      </div>
      </main>
        )
}

export default Home;