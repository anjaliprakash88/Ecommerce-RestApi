import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import Sidebar from "./Sidebar";

function Profile() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3 col-12 mb-2">
                    <Sidebar />
                </div>
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <form>
                            {/* First Name */}
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="Enter first name"
                                />
                            </div>

                            {/* Last Name */}
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Enter last name"
                                />
                            </div>

                            {/* Username */}
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Enter username"
                                />
                            </div>

                            {/* Email */}
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email"
                                    aria-describedby="emailHelp"
                                />

                            </div>

                            {/* Password */}
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter password"
                                />
                            </div>

                            {/* Profile Image Upload */}
                            <div className="mb-3">
                                <label htmlFor="profileImage" className="form-label">
                                    Profile Image
                                </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="profileImage"
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

export default Profile;
