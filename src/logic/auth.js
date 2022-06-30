import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH_AUTH = process.env.VUE_APP_BACKEND_URL_LOCAL + '/auth/';

export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },

  getUserLogged() {
    return Cookies.get("userLogged");
  },

  loginAdmin( email, password ) {
    const user = { email, password };
    return axios.post(ENDPOINT_PATH_AUTH + "login", user);
  },

  deleteUserLogged() {
    Cookies.remove('userLogged');
  },

  setUserRol(role) {
    Cookies.set("RoleUser", role);
  },

  getUserRol() {
    return Cookies.get("RoleUser");
  },

  deleteUserRol() {
    Cookies.remove('RoleUser');
  }
};