import http from 'configs/http';

export const getPokeDex = async (url: string) => {
  const response = await http.get(url);
  return response.data;
};
