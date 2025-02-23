import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current route path

  return (
    <div className="d-flex justify-content-center mt-4">
      <nav
        className="nav nav-pills"
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%", // Makes the navbar match the content width
          maxWidth: "950px",

          borderRadius: "12px",
          backgroundColor: "#ffffff",
          padding: "0px",
          border: "1px solid #333",
          boxShadow: "0px 4px 10px rgba(185, 177, 177, 0.1)",
        }}
      >
        <NavLink
          to="/#"
          className="nav-link"
          style={{
            backgroundColor:
              location.pathname === "/" ? "lightGrey" : "transparent",
            color: "black",
            borderRadius: "8px",
            padding: "5px 20px",
            transition: "0.3s ease",
            textAlign: "center",
            flex: 1,
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          Overview
        </NavLink>
        {["Experience", "Projects", "Books"].map((item, index) => (
          <NavLink
            key={index}
            className="nav-link"
            to={`/${item.toLowerCase()}`}
            style={({ isActive }) => ({
              backgroundColor: isActive ? "lightGrey" : "transparent",
              color: "black",
              borderRadius: "8px",
              padding: "5px 20px",
              transition: "0.3s ease",
              textAlign: "center",
              flex: 1,
              textDecoration: "none",
              textTransform: "uppercase",
            })}
          >
            {item}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
