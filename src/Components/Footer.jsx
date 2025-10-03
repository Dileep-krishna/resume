import React from "react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4 mt-5">
      <div className="container text-center">
        <h5 className="mb-3">Resume Builder</h5>
        <p className="mb-2">
          Helping professionals worldwide create standout resumes and land jobs faster.
        </p>
        <div className="d-flex justify-content-center gap-3 mb-3">
          <a href="/privacy" className="text-white text-decoration-none">
            Privacy Policy
          </a>
          <a href="/terms" className="text-white text-decoration-none">
            Terms of Service
          </a>
          <a href="/contact" className="text-white text-decoration-none">
            Contact Us
          </a>
        </div>
        <small>
          &copy; {new Date().getFullYear()} Rbuilder. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
