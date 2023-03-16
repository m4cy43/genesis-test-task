import React from "react";
import authService from "../services/authService";
import courseService from "../services/courseService";
import { useEffect } from "react";
import { useState } from "react";
import Cell from "../components/Cell";
import Spinner from "../components/Spinner";
import "../css/catalogue.css";

function Catalogue() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    authService
      .getToken()
      .then((token) => courseService.getAll(token.token))
      .then((res) => setData(res.courses));
  }, []);

  if (data.length == 0) {
    return <Spinner />;
  }

  const dec = (num) => {
    if (num > 1) {
      return --num;
    }
    return num;
  };

  const inc = (num) => {
    if (num < Math.ceil(data.length / 10)) {
      return ++num;
    }
    return num;
  };

  return (
    <div className="all-courses">
      <div className="pagination">
        <div className="but-box">
          <button className="pag-button" onClick={() => setPage(dec(page))}>
            {"⬅"}
          </button>
          <h5>{page}</h5>
          <button className="pag-button" onClick={() => setPage(inc(page))}>
            {"➡"}
          </button>
        </div>
      </div>
      <div className="cell-container">
        {data.slice(page * 10 - 10, page * 10).map((el) => (
          <Cell course={el} />
        ))}
      </div>
    </div>
  );
}

export default Catalogue;
