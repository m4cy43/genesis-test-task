import axios from "axios";

const URL = "core/preview-courses";

const getAll = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(URL, config);
  return res.data;
};

const getOne = async (uuid, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.get(URL + `/${uuid}`, config);
  return res.data;
};

const courseService = {
  getAll,
  getOne,
};

export default courseService;
