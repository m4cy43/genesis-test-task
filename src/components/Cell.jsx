import React from "react";
import "../css/catalogue.css";
import { Link } from "react-router-dom";
function Cell({ course }) {
  return (
    <div className="course-cell">
      <Link className="react-link" to={`/${course.id}`}>
        <h5>Title: {course.title}</h5>
      </Link>
      <img
        className="img-preview"
        src={`${course.previewImageLink}/cover.webp`}
        alt="Image not found"
      />
      <p>
        <b>Lessons:</b> {course.lessonsCount}
      </p>
      <p>
        <b>Skills:</b>{" "}
        {course.meta.skills !== undefined
          ? course.meta.skills.join(", ")
          : "Skills are missing"}
      </p>
      <p>
        <b>Ratings:</b> {course.rating}
      </p>
    </div>
  );
}

export default Cell;
