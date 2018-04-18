import apisauce from "apisauce";

const create = (baseURL = "https://opentdb.com/api.php") => {
  const api = apisauce.create({
    baseURL,

    headers: {
      "Cache-Control": "no-cache"
    },

    timeout: 10000
  });

  const getRoot = () => api.get("");
  const getQuestions = params => api.get("", params);

  return {
    getQuestions
  };
};

export default {
  create
};
