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
                    <a href="/customer/wishlist" className="list-group-item list-group-item-action">
                        Wishlist
                    </a>
                    <a href="/customer/profile" className="list-group-item list-group-item-action">
                        Profile
                    </a>
                    <a href="/customer/changepassword" className="list-group-item list-group-item-action">
                        Change Password
                    </a>
                    <a href="/customer/addresses" className="list-group-item list-group-item-action">
                        Addresses
                    </a>
                    <a href="#" className="list-group-item list-group-item-action text-danger">
                        Logout
                    </a>
                </div>
    )
}

export default Sidebar