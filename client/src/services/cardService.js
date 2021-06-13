import http from "./httpService";
import { apiUrl } from "../config.json";

export function getWishlist() {
  return http.get(`${apiUrl}/users/cards/`);
}

export function searchCard(bizCardNum) {
  return http.get(`${apiUrl}/cards/search-card/${bizCardNum}`);
}

export function deleteCard(cardId) {
  return http.delete(`${apiUrl}/cards/${cardId}`);
}

export function getCard(cardId) {
  return http.get(`${apiUrl}/cards/${cardId}`);
}

export function editCard(card) {
  const cardId = card._id;
  delete card._id; //in the backend is waiting validation and it uses for updating and creating new card. New card is not have any id card before creation so i can not send now id in the payload.
  return http.put(`${apiUrl}/cards/${cardId}`, card);
}

export function getMyCards() {
  return http.get(`${apiUrl}/cards/my-cards`);
}

export function createCard(card) {
  return http.post(`${apiUrl}/cards`, card);
}

const cardService = {
  createCard,
  getMyCards,
  editCard,
  getCard,
  deleteCard,
  searchCard,
};

export default cardService;
