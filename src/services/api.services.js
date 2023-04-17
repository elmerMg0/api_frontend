const APIURL = process.env.REACT_APP_API_URL;
const tokenLocal = JSON.parse(localStorage.getItem('user'));
let token = tokenLocal ? `Bearer ${tokenLocal.accessToken}`: ''

export const APISERVICE = {
  get: async (url, params = "") => {
    try {
      const response = await fetch(`${APIURL}${url}${params}`, {
        headers: {
          Authorization: token,
        },
      });
      const data = await response.json();
      data.status = response.status;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  post: async (body, url, params = "") => {
    try {
      const response = await fetch(`${APIURL + url + params}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: token
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      data.status = response.status;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  postWithImage: async (body, url, params = "") => {
    try {
      const response = await fetch(`${APIURL}${url}${params}`, {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: body,
      });
      const data = await response.json();
      data.status = response.status;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (url, params) => {
    try {
      const response = await fetch(`${APIURL}${url}${params}`, {
        method: "DELETE",
        headers: {
          Authorization: token
        }
      });
      const data = await response.json();
      data.status = response.status;
      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
