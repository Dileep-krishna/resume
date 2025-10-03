import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const imgSrcs = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/women/65.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/83.jpg",
  ];

  const imgStyle = { width: "100px", height: "100px", borderRadius: "8px" };

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          width: "100%",
          overflow: "hidden",
          height: "100%",
          backgroundImage:
            "url('https://tse3.mm.bing.net/th/id/OIP.D2TJSDoOcji64e3e52lRYwHaEK?pid=Api&P=0&h=180')",
          backgroundSize: "cover",
          backgroundPosition: "top",
        }}
      >
        <div className="row mt-5">
          <div className="col-12 col-md-4"></div>
          <div className="col-12 col-md-4 border py-5 my-5 text-center">
            <h4>Designed to get Hired</h4>
            <p>Your Skill, Your Story, Your next job - all in one</p>
            <Link to="/resume">
              <button className="btn btn-primary">Make your Resume</button>
            </Link>
          </div>
          <div className="col-12 col-md-4"></div>
        </div>
      </section>

      {/* Tools Section */}
      <section>
        <h1 className="text-center p-5">Tools</h1>
        <div className="row align-items-center">
          <div className="col-12 col-md-6 p-5">
            <h4>Resume</h4>
            <p>Create unlimited new resumes and easily edit them afterwards</p>
            <h4>Cover Letter</h4>
            <p>Easily write professional cover letters</p>
            <h4>Jobs</h4>
            <p>Automatically receive new and relevant job postings</p>
            <h4>Application</h4>
            <p>
              Effortlessly manage and track your job applications in an organized
              manner
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              className="w-75 ms-5"
              src="https://tse3.mm.bing.net/th/id/OIP.2tmhpp-mzDTRA1zNcoipuAAAAA?pid=Api&P=0&h=180"
              alt="tools"
            />
          </div>
        </div>
      </section>

      {/* Testimony Section */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Testimony</h2>
        <div className="row">
          {/* Left Text Column */}
          <div className="col-md-6">
            <h5 className="fw-bold text-primary">
              Trusted by professionals worldwide.
            </h5>
            <p>
              At LiveCareer, we don’t just help you create résumés — we help you
              land the job. Whether you’re a seasoned professional or just
              starting out, our tools are designed to get results.
            </p>
            <p>
              In fact, users who used LiveCareer reported getting hired an average
              of 48 days faster.
            </p>
            <p>
              Join thousands of job-seekers who’ve fast-tracked their careers with
              a résumé that truly stands out.
            </p>
          </div>

          {/* Right Image Grid */}
          <div className="col-md-6">
            <div className="row">
              {[1, 2, 3].map((row) => (
                <div
                  key={row}
                  className="d-flex justify-content-around mb-3 flex-wrap"
                >
                  {imgSrcs.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Profile ${index}`}
                      style={imgStyle}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
