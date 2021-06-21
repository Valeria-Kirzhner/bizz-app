import http from "./httpService";
import jwtDecode from "jwt-decode";

export function addWishlistServer(bizNumber) {
  let card = [bizNumber];
  return http.patch("/users/cards/", card);
}

const tokenKey = "token";

export function getJwt() {
  //use for sending the token through the headers in httpService.js
  return localStorage.getItem(tokenKey);
}

export function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem("userInfo");
  localStorage.removeItem("wishlist");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export async function login(email, password) {
  const { data } = await http.post("/auth", { email, password });

  localStorage.setItem(tokenKey, data.token);
  localStorage.setItem("wishlist", JSON.stringify(data.wishlist));
  localStorage.setItem("userName", JSON.parse(data.userName));
  localStorage.setItem("userInfo", JSON.stringify(getCurrentUser()));
}

const userService = {
  login,
  getCurrentUser,
  logout,
  getJwt,
  addWishlistServer,
};
export default userService;
