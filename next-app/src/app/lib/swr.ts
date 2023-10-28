import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const GetDataWithSWR = (
  link: string = "https://jsonplaceholder.typicode.com/todos/1"
) => {
  const { data, error } = useSWR(link, fetcher);
  console.log("data", data);

  return { data, error, isLoading: !data && !error };
};
