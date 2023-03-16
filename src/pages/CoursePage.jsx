import React from "react";
import authService from "../services/authService";
import courseService from "../services/courseService";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import "../css/course.css";
import LessonPreview from "../components/LessonPreview";

const Video = ({ title, videoLink }) => {
  return (
    <div className="lessons">
      <p>
        <b>{title}</b>
      </p>
      <video className="le-video" controls preload="auto" data-setup="{}">
        <source src={videoLink} type="application/x-mpegURL" />
      </video>
    </div>
  );
};

function CoursePage() {
  const { uuid } = useParams();
  const [data, setData] = useState(0);
  const [video, setVideo] = useState("");
  const addVideo = (title, link) => {
    setVideo(<Video title={title} videoLink={link} />);
  };

  useEffect(() => {
    authService
      .getToken()
      .then((token) => courseService.getOne(uuid, token.token))
      .then((res) => setData(res));
  }, []);

  if (data == 0) {
    return <Spinner />;
  }
  return (
    <div className="course-box">
      <h3>{data.title}</h3>
      <h4># {data.tags.join(", ")}</h4>
      <div className="descr">
        <div className="preview-box">
          <img
            className="course-img-preview"
            src={`${data.previewImageLink}/cover.webp`}
            alt="course preview"
          ></img>
          <video controls preload="auto" data-setup="{}">
            <source src={data.lessons[0].link} type="application/x-mpegURL" />
          </video>
        </div>
        <div className="text-descr">
          <p>
            <b>Status:</b> {data.status}
          </p>
          <p>
            <b>Rating:</b> {data.rating}
          </p>
          <p>
            <b>Duration:</b> {data.duration}
          </p>
          <p>
            <b>Description:</b> {data.description}
          </p>
          <div className="lessons">
            {data.lessons.map((el) => (
              <>
                <LessonPreview
                  data={el}
                  origin={data.previewImageLink}
                  func={() => {
                    addVideo(el.title, el.link);
                  }}
                />
              </>
            ))}
          </div>
          <div className="lesson-video">{video}</div>
        </div>
      </div>
    </div>
  );
}

export default CoursePage;
