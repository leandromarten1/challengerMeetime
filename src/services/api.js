import axios from 'axios';

const URL = 'https://api.meetime.com.br/v2/';
const TOKEN = 'O15ifmIcwdsWOQt1WzZVYNNIXZNXM2XX';

export const api = axios.create({
  baseURL: URL,
  headers: {
    Accept: 'application/json',
    Authorization: TOKEN,
  },
});

export const createLead = async (endpoint, name, email, phone) => {
  const { data, status } = await axios.post(
    `${URL}prospections/cadence/${endpoint}`,
    { name, email, phones: [{ phone }] },
    {
      headers: {
        Accept: 'application/json',
        Authorization: TOKEN,
      },
    },
  );
  console.log(data, status);
};
