import useSWR from "swr";
import { GetUsage } from "./GetUsage";

export const useGetUsage = () => {
  const { data, error } = useSWR(
    `https://api.mocklets.com/mock68182/screentime`,
    GetUsage,
    { refreshInterval: 36 * 100 * 1000 }
  );

  return error ? `Error occured ${error}` : !data ? "Fetching..." : data;
};
