import router from "@/router";
import axios from "axios";

const AUTH_URL = import.meta.env.VITE_AUTH_URL;
const API_URL = import.meta.env.VITE_API_URL;
const BASE = import.meta.env.VITE_BASE;
let token = localStorage.getItem("admin_token") || "";

axios.interceptors.response.use(
  (response) => {
    if (response.data.status === 701) {
      // ElMessage.error("请登录");
      localStorage.clear();
      sessionStorage.clear();
      router.replace(`${BASE}`);
      token = "";
    } else if (response.data.status !== 200 && response.data.msg !== "OK") {
      // ElMessage.error(response.data.msg);
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const request = {
  get(path: string, params?: object, otherUrl?: boolean, otherPath?: string) {
    return new Promise(async function (resolve, reject) {
      try {
        const response = await axios({
          method: "get",
          url: otherPath
            ? otherPath
            : otherUrl
            ? AUTH_URL + path
            : API_URL + path,
          params: params,
          headers: {
            token: token,
            locale: "zh-CN",
            timeNow: new Date().getTime(),
          },
        });
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  },
  post(path: string, params?: object) {
    return new Promise(async function (resolve, reject) {
      try {
        const response = await axios({
          method: "post",
          url: API_URL + path,
          data: params,
          headers: {
            token: token,
            locale: "zh-CN",
            timeNow: new Date().getTime(),
          },
        });
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  },
  patch(path: string, params?: object) {
    return new Promise(async function (resolve, reject) {
      try {
        const response = await axios({
          method: "patch",
          url: API_URL + path,
          data: params,
          headers: {
            token: token,
            locale: "zh-CN",
            timeNow: new Date().getTime(),
          },
        });
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  },
  delete(path: string, params?: object) {
    return new Promise(async function (resolve, reject) {
      try {
        const response = await axios({
          method: "delete",
          url: API_URL + path,
          data: params,
          headers: {
            token: token,
            locale: "zh-CN",
            timeNow: new Date().getTime(),
          },
        });
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    });
  },
};

export default {
  request,
  setToken: (_token: string) => {
    localStorage.setItem("admin_token", _token);
    token = _token;
  },
  API_URL,
  AUTH_URL,
};
