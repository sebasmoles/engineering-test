import axios from "./config";

export const searchPeopleByName = async (params) => {
  const { data, status } = await axios
    .get("/people/name-suggestions", { params })
    .catch((e) => e.response);
  return { data, status };
};
