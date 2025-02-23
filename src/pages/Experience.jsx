import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Experience = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="row w-75">
        {/* Main Content */}
        <div className="col-md-12">
          <h3 className="fw-bold">Dialógus Platform Egyesület</h3>
          <p className="text-muted">Nov 2024 - Present | Budapest, Hungary</p>

          <h5 className="fw-semibold">Web Developer Intern</h5>
          <p>
            As a Web Developer Intern at Dialógus Platform Egyesület, I am
            responsible for ensuring the organization's website remains
            well-maintained, up-to-date, and optimized for performance. I
            actively contribute to the development and implementation of new
            features that enhance functionality and user experience. By
            analyzing performance metrics and optimizing key aspects of the
            website, I successfully improved its efficiency by 10%, reducing
            load times and improving responsiveness.
          </p>
          <p>
            I troubleshoot and resolve technical issues, ensuring seamless user
            interaction across different devices and browsers. Collaborating
            with stakeholders, I align the website's functionality with the
            organization’s goals, ensuring it serves as an effective platform
            for outreach and engagement.
          </p>
          <p></p>
          <ul>
            <li>
              Ensured the website remained consistently updated and
              well-maintained, implementing regular checks for broken links,
              outdated content, and security vulnerabilities.
            </li>
            <li>
              Developed and integrated new features to enhance user experience
              and improve functionality, including interactive components and
              optimized page layouts.
            </li>
          </ul>

          <div className="d-flex flex-column align-items-start">
            <h5 className="fw-semibold mt-4">Google Developers Group | ELTE</h5>

            <div className="d-flex flex-wrap align-items-center">
              {/* Brief description */}
              <p className="ms-3">
                As the Technical Team Lead at Google Developer Group (GDG) ELTE,
                I lead a team of developers in organizing and executing coding
                competitions, hackathons, and technical workshops that have
                engaged over 100 students.
              </p>
            </div>
            <ul className="mt-3">
              <li>
                Actively collaborated with industry professionals and university
                faculty to bring new opportunities for students, including guest
                lectures, networking events, and internship programs.
              </li>
              <li>
                Designed and implemented challenges for coding competitions,
                ensuring a balance of difficulty levels and covering diverse
                algorithmic concepts.
              </li>
            </ul>
            <div className="mt-3">
              <h6>Event Highlights</h6>
              <div className="d-flex flex-wrap">
                {/* Example event photo 1 */}
                <div className="me-4 mb-4">
                  <img
                    src={img2}
                    alt="Event 1"
                    className="img-fluid rounded shadow-lg"
                    style={{
                      width: "430px", // Increase width
                      height: "300px", // Increase height
                      objectFit: "cover",
                      transition: "transform 0.3s ease", // Smooth transition for hover effect
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </div>

                {/* Example event photo 2 */}
                <div className="me-4 mb-4">
                  <img
                    src={img1}
                    alt="Event 2"
                    className="img-fluid rounded shadow-lg"
                    style={{
                      width: "450px", // Increase width
                      height: "300px", // Increase height
                      objectFit: "cover",
                      transition: "transform 0.3s ease", // Smooth transition for hover effect
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </div>

                {/* Example event photo 3 */}
                <div className="me-4 mb-4">
                  <img
                    src={img3}
                    alt="Event 3"
                    className="img-fluid rounded shadow-lg"
                    style={{
                      width: "950px", // Increase width
                      height: "400px", // Increase height
                      objectFit: "cover",
                      transition: "transform 0.3s ease", // Smooth transition for hover effect
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.transform = "scale(1.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.transform = "scale(1)")
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
