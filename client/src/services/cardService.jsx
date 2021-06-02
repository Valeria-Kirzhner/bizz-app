import http from "./httpService";
import { apiUrl } from "../config.json";

export function createCard(card) {
  return http.post(`${apiUrl}/cards`, card);
}

const cardService = {
  createCard,
};

export default cardService;
