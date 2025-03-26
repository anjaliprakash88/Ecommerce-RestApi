import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import SellerSidebar from "./SellerSidebar";

function AddProduct() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <SellerSidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <form>
                        <div className="mb-3">
                                <label htmlFor="Title" className="form-label">
                                    Category
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Title"
                                />
                            </div>
                            {/* First Name */}
                            <div className="mb-3">
                                <label htmlFor="Title" className="form-label">
                                    Title
                                </label>
                                <select className="form-control">
                                    <option>Python</option>
                                    <option>Php</option>
                                    <option>Javascript</option>
                                </select>
                            </div>

                            {/* Last Name */}
                            <div className="mb-3">
                                <label htmlFor="Price" className="form-label">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="Price"
                                />
                            </div>

                            {/* Username */}
                            <div className="mb-3">
                                <label htmlFor="Description" className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="Description"
                                    rows="3"
                                ></textarea>
                            </div>


                            {/* Profile Image Upload */}
                            <div className="mb-3">
                                <label htmlFor="productImage" className="form-label">
                                    Product Image
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="productImage"
                                    accept="image/*"
                                />
                            </div>

                            {/* Submit Button */}
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

export default AddProduct;
