import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function AddressList() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/customer/add-addresses" className="btn btn-outline-success mb-4 float-end">
                                <i className="fa fa-plus-circle"></i> Add Address
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <i className="fa fa-check-circle text-success mb-2"></i>
                                    <h6>123, NYK, Punjab, India</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <h6>
                                        <button className="badge bg-secondary mb-2">Mark Default</button>
                                        <br /> 123, NYK, Punjab, India
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <h6>
                                        <button className="badge bg-secondary mb-2">Mark Default</button>
                                        <br /> 123, NYK, Punjab, India
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <h6>
                                        <button className="badge bg-secondary mb-2">Mark Default</button>
                                        <br /> 123, NYK, Punjab, India
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <h6>
                                        <button className="badge bg-secondary mb-2">Mark Default</button>
                                        <br /> 123, NYK, Punjab, India
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-4 mb-4">
                            <div className="card">
                                <div className="card-body text-muted">
                                    <h6>
                                        <button className="badge bg-secondary mb-2">Mark Default</button>
                                        <br /> 123, NYK, Punjab, India
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div> {/* Closing div for the row */}
                </div>
            </div>
        </div>
    );
}

export default AddressList;
