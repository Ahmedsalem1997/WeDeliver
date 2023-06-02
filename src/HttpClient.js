import axios from "axios";

const excute = (options) => {
  let request = axios(options);

  return new Promise((resolve, reject) => {
    return request
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return reject(err);
      });
  });
};

export const GET = async (endpoint, params) => {
  const options = {
    url: endpoint,
    method: "GET",
    redirect: "follow",
    withCredentials: false,
    params,
  };

  return await excute(options);
};

export const POST = async (endpoint, data) => {
  const options = {
    url: endpoint,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  return await excute(options);
};
