import useSWR, { SWRConfiguration, SWRResponse } from "swr";

export default function useFetch<Data = unknown, Error = unknown>(
  SWRkey: any,
  fetcher: (key: any) => Promise<Data>,
  options: SWRConfiguration<Data, Error>
): SWRResponse<Data, Error> {
  const state = useSWR(SWRkey, fetcher, {
    onError: (error) => {
      console.log(error);
    },
    revalidateOnFocus: false,
    ...options,
  });

  return { ...state };
}
