import http from "./httpService";
import { apiUrl } from "../config.json";

export function getMyCards() {
  return http.get(`${apiUrl}/cards/my-cards`);
}

export function createCard(card) {
  return http.post(`${apiUrl}/cards`, card);
}

const cardService = {
  createCard,
  getMyCards,
};

export default cardService;
