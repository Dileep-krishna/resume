import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Link } from "react-router-dom";   // <-- Import Link

function ResumeGenerator() {
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center">Create a job winning Resume in minutes</h1>

        <div className="row mt-5 justify-content-center">
          {/* Step 1 */}
          <div className="col-12 col-md-5 mb-4">
            <div className="shadow rounded p-5 text-center h-100">
              <h1>Add your information</h1>
              <p>Add pre-written examples to each section</p>
              <h4>Step 1</h4>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-12 col-md-5 mb-4">
            <div className="shadow rounded p-5 text-center h-100">
              <FaFileDownload className="fs-1 mb-2 text-success" />
              <h1>Download your resume</h1>
              <p>Download and start applying</p>
              <h4>Step 2</h4>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-5">
          <Link to="/form">
            <button className="btn btn-primary">LET'S START</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ResumeGenerator;
