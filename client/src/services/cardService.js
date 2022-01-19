import http from "./httpService";

export function getWishlist() {
  //get all users wishlist cards with their details (to render in myCards).
  const cards = localStorage.getItem("wishlist");
  return http.get(`/users/cards/?numbers=${cards}`);
}

export function searchCard(bizCardNum) {
  return http.get(`/cards/search-card/${bizCardNum}`);
}

export function deleteCard(cardId) {
  return http.delete(`/cards/${cardId}`);
}

export function getCard(cardId) {
  return http.get(`/cards/${cardId}`);
}

export function editCard(card) {
  const cardId = card._id;
  delete card._id; //in the backend is waiting validation and it uses for updating and creating new card. New card is not have any id card before creation so i can not send now id in the payload.
  return http.put(`/cards/${cardId}`, card);
}

export function getMyCards() {
  return http.get("/cards/my-cards");
}

export function createCard(card) {
  return http.post("/cards", card);
}
export function get() {
  return http.get("/cards");
}

const cardService = {
  createCard,
  getMyCards,
  editCard,
  getCard,
  deleteCard,
  searchCard,
  getWishlist,
  get,
};

export default cardService;
