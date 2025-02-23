import React from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Overview = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="row w-75">
        {/* Sidebar */}
        <div className="col-md-4">
          <h3 className="fw-bold">
            <a href="https://www.elte.hu/en/" style={{ color: "black" }}>
              ELTE
            </a>
          </h3>
          <p>2022-2026 | Budapest, Hungary</p>
          <p>Bachelors in Computer Science</p>
          <ul className="list-unstyled">
            <li>OOP</li>
            <li>Distributed Systems</li>
            <li>Operating Systems</li>
            <li>Database Systems</li>
          </ul>

          {/* Links Section */}
          <h5 className="fw-bold mt-4">Links</h5>
          <table>
            <tbody>
              <tr>
                <td className="text-secondary d-flex align-items-center">
                  <FaLinkedin className="me-2" size={20} />
                  LinkedIn
                </td>
                <td>
                  <a
                    href="https://www.linkedin.com/in/muslimabdyvapov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Muslim Abdyvapov
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-secondary d-flex align-items-center">
                  <FaGithub className="me-2" size={20} />
                  GitHub
                </td>
                <td>
                  <a
                    href="https://github.com/Muslim04"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Muslim04
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-secondary d-flex align-items-center">
                  <FaCode className="me-2" size={20} />
                  Codeforces:
                </td>
                <td>
                  <a
                    href="https://codeforces.com/profile/KG0417"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    KG0417
                  </a>
                </td>
              </tr>
              <tr>
                <td className="text-secondary d-flex align-items-center">
                  <SiLeetcode className="me-2" size={20} />
                  LeetCode
                </td>
                <td>
                  <a
                    href="https://leetcode.com/u/Abdyvapov/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Abdyvapov
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Awards Section */}
          <h5 className="fw-bold mt-4">Awards</h5>
          <ul className="list-unstyled">
            <li>National Republic Math Olympiad: Silver Medal</li>
            <li>MAA AMC: Gold Medal</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-8">
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
          <p></p>
          <p>
            I troubleshoot and resolve technical issues, ensuring seamless user
            interaction across different devices and browsers. Collaborating
            with stakeholders, I align the website's functionality with the
            organization’s goals, ensuring it serves as an effective platform
            for outreach and engagement.
          </p>

          <a href="https://dialogusplatform.hu/" className="text-primary">
            Visit website
          </a>

          <h5 className="fw-semibold mt-4">Google Developers Group | ELTE</h5>
          <p>
            As the Technical Team Lead at GDG ELTE, I organize coding
            competitions, hackathons, and workshops for over 100 students. I
            design programming challenges, mentor participants, and streamline
            event management. My work helps foster a collaborative environment
            where students can enhance their technical skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
