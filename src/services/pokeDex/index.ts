import http from 'configs/http';

export const getPokeDex = async (url: string) => {
  const response = await http
    .get(url)
    .then((response) => response.data)
    .then((error) => console.log(error));
  return response;
};
