import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <div className="list-group">
                    <Link to="/customer/dashboard" className="list-group-item list-group-item-action">
                        Dashborad
                    </Link>
                    <Link to="/customer/orders" className="list-group-item list-group-item-action">
                        orders
                    </Link>
                    <a href="#" className="list-group-item list-group-item-action">
                        Wishlist
                    </a>
                    <a href="#" className="list-group-item list-group-item-action disabled">
                        Profile
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">
                        Addresses
                    </a>
                    <a href="#" className="list-group-item list-group-item-action text-danger">
                        Logout
                    </a>
                </div>
    )
}

export default Sidebar