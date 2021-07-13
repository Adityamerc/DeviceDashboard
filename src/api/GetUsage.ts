import axios from "axios";

export const GetUsage = async (url: string) => {
  try {
    const data = await axios.get(url);
    return data.data;
  } catch (e) {}
};
