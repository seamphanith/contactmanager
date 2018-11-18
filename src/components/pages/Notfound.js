import React from "react";
import { Link } from "react-router-dom";
export default function Notfound() {
  return (
    <div>
      <h1 className="display-4">
        {" "}
        <span className="text danger"> 404 Page Not Found</span>
      </h1>
      <p className="lead">
        Sorry, that page you looking for is does not exist.
        <Link to="/" className="btn btn-block btn-primary display-4">
          Go to Home Page
        </Link>
      </p>
    </div>
  );
}
