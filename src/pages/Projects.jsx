import React from "react";

const Projects = () => {
  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="row w-75">
        {/* Main Content */}
        <div className="col-md-12">
          <h3 className="fw-bold">Rick and Morthy Single-Page app</h3>
          <p className="text-muted">Jan 2025 - Feb 2025</p>

          <p>
            Developed a single-page React app that fetches and displays
            character data from the Rick and Morty API. This app allows users to
            search for characters by name and view detailed character
            information. Pagination is also implemented to navigate through
            large datasets.
          </p>
          <h5 className="fw-bold">Features: </h5>
          <ul>
            <li>
              <strong>Search Bar:</strong> Allows users to search for characters
              by name.
            </li>
            <li>
              <strong>Pagination:</strong> Displays characters with pagination
              to navigate through the results.
            </li>
            <li>
              <strong>Responsive UI:</strong>
              The app is fully responsive and adjusts to different screen sizes.
            </li>
            <li>
              <strong>Character Details:</strong>
              Clicking on a character’s name leads to their detailed information
              page.
            </li>
          </ul>
          <h5 className="fw-bold">Technologies used: </h5>
          <p>React, Bootstrap, React Router, Rick and Morty API, CSS. </p>

          <a href="https://rick-and-morthy-single-page-app.vercel.app/">
            {" "}
            Visit website
          </a>
          <hr />

          <h3 className="fw-bold">Note-Taking Web Application</h3>
          <p className="text-muted">Sep 2024 - Nov 2024</p>

          <p>
            This project is a full-stack web application for taking, organizing,
            and managing notes. Users can create, edit, and delete notes, as
            well as organize them by categories or tags. The application
            provides a clean and intuitive interface, making it easy to manage
            large volumes of notes.
          </p>
          <h5 className="fw-bold">Features: </h5>
          <ul>
            <li>
              Create & Edit Notes: Users can create new notes and edit existing
              ones with a rich-text editor.
            </li>
            <li>
              Organize Notes: Organize notes by categories or tags for easy
              access.
            </li>
            <li>
              Search Functionality: Quickly search through notes by keywords or
              tags.
            </li>
            <li>
              User Authentication: Secure login and registration for
              personalized note management.
            </li>
          </ul>
          <h5 className="fw-bold">Technologies used: </h5>
          <p>React, CSS, Django, PostgreSQL, Git & GitHub </p>

          <a href="https://github.com/Muslim04/Note-Web-App-django-react-">
            Visit GitHub Repo
          </a>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Projects;
