import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import Sidebar from "./Sidebar";
function AddAddress() {
    return (
        <div className="container mt-4">
            <div className="row">
                {/* Sidebar Column */}
                <div className="col-md-3 col-12 mb-2">
                    <Sidebar />  {/* Sidebar should display here */}
                </div>

                {/* Form Column */}
                <div className="col-md-9 col-12 mb-2">
                    <div className="card p-4">
                        <h4 className="mb-3">Add New Address</h4>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                    Address
                                </label>
                                <textarea className="form-control" id="address"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddAddress;