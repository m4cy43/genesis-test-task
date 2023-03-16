import axios from "axios";

const URL = "auth/anonymous?platform=subscriptions";

const getToken = async () => {
  const res = await axios.get(URL);
  return res.data;
};

const authService = {
  getToken,
};

export default authService;
