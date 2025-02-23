import React from "react";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="container px-0" style={{ maxWidth: "950px" }}>
      <div className="d-flex justify-content-between align-items-center mt-5 mb-5 w-100">
        <h1 className="mb-0 d-flex align-items-center">
          {/* Profile image */}
          <img
            src={profile}
            alt="Profile"
            className="rounded-circle border border-4 border-primary me-3"
            style={{
              width: "130px",
              height: "130px",
              objectFit: "cover",
            }}
          />
          <span>Muslim</span>{" "}
          <span className="text-secondary ms-1">Abdyvapov</span>
        </h1>
        <p className="mb-0 text-muted">
          <a
            href="mailto:m.abdyvapov.engineer@gmail.com"
            className="text-muted text-decoration-none"
          >
            m.abdyvapov.engineer@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
