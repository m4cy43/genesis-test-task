import React from "react";

function LessonPreview({ data, origin, func }) {
  return (
    <div className="lesson-box">
      {data.status == "locked" ? (
        <h5>🔒</h5>
      ) : (
        <>
          <p>
            <b>{data.title}</b>
          </p>
          <img
            className="img-preview"
            src={`${origin}/${data.order}.webp`}
            alt="preview. click for video"
            onClick={() => {
              func();
            }}
          ></img>
          <p>
            <b>Duration:</b>
            {data.duration}
          </p>
        </>
      )}
    </div>
  );
}
export default LessonPreview;
