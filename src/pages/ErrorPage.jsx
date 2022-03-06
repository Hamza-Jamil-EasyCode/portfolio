import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error_page">
      {/* <h1>404 page not found</h1> */}
      <h1>Welcome Here ... !</h1>
      <Link to="/" className="btn btn-primary border">
        Go to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
