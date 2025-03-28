// Packages
import {Link} from 'react-router-dom';
// Assets


import logo from '../logo.svg';

function SingleProduct(props) {
    const product = props.product || {};
    return(
        <div className="col-12 col-md-3 mb-4">
            <div className="card">
                <Link to={`/product/${product?.title || "default-title"}/123`}>
                    <img src={logo} className="card-img-top" alt={product?.title || "Product"} />
                </Link>
                <div className="card-body">
                <h5 className="card-title"><Link to={`/product/${product?.title || "default-title"}/123`}>{product?.title || "No Title"}</Link></h5 >
                <h5 className="card-title text-muted">{product?.price !== undefined ? `$${product.price}` : "Price not available"}</h5>
                </div>
                <div className="card-footer">
                    <button title="add to cart" className="btn btn-success btn-sm"><i class="fa-solid fa-cart-plus"></i></button>
                    <button title="add to wishlist" className="btn btn-danger btn-sm ms-2"><i class="fa fa-heart"></i></button>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct;