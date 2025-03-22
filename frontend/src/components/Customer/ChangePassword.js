import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from '../../logo.svg';
function ChangePassword() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <form>
                            {/* New Password */}
                            <div className="mb-3">
                                <label htmlFor="newPassword" className="form-label">
                                    New Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="newPassword"
                                    placeholder="Enter new password"
                                    required
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmPassword"
                                    placeholder="Confirm new password"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="btn btn-primary">
                                Change Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;
