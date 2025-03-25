import {Link} from 'react-router-dom';

function Sidebar(){
    return(
        <div className="list-group">
                    <Link to="/seller/dashboard" className="list-group-item list-group-item-action">
                        Dashborad
                    </Link>
                    <a href="/seller/products" className="list-group-item list-group-item-action">
                        Products
                    </a>
                    <Link to="/seller/orders" className="list-group-item list-group-item-action">
                        orders
                    </Link>
                    <a href="/seller/products" className="list-group-item list-group-item-action">
                        Products
                    </a>
                    <a href="/seller/profile" className="list-group-item list-group-item-action">
                        Customers
                    </a>
                    <a href="/seller/changepassword" className="list-group-item list-group-item-action">
                        Reports
                    </a>
                    <a href="#" className="list-group-item list-group-item-action text-danger">
                        Logout
                    </a>
                </div>
    )
}

export default Sidebar