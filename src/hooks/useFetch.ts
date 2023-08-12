import useSWR, { SWRConfiguration, SWRResponse } from 'swr';

export default function useFetch<Data = unknown, Error = unknown>(
  SWRkey: any,
  SWRfetcher: (key: any) => Promise<Data>,
  options?: SWRConfiguration<Data, Error>,
): SWRResponse<Data, Error> {
  const state = useSWR(SWRkey, SWRfetcher, {
    onError: (error) => {
      console.log(error);
    },
    revalidateOnFocus: false,
    ...options,
  });

  return { ...state };
}
