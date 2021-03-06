const express = require("express");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User, validate, validateCards } = require("../models/user");
const { Card } = require("../models/card");
const auth = require("../middleware/auth");
const router = express.Router();

// get the user object from DB with the userId of the "requester"
// from the User get the "cards" array
// if we are adding a card
// check that it does not already exist in the array
// if false
// add to array and save
// if true
// send back respose that there was an error - "card already exists in wishlist"
// if we are removing a card
// check that it exists in the array
// if false
// send back respose that there was an error - "card does not exist"
// if true
// remove from array and save

/* router.get("/cards", auth, async (req, res) => {
  if (!req.user.biz) return res.status(401).send("Access denied.");
  let user = await User.findById(req.user._id);
  const card = await Card.find({ bizNumber: req.params.bizNumber });

  res.send(user.cards);
}); */

const getCards = async (cardsArray) => {
  const cards = await Card.find({ bizNumber: { $in: cardsArray } });
  return cards;
};
// * Get all card details of the wishlist cards (to render in myCards page).
router.get("/cards", auth, async (req, res) => {
  if (!req.query.numbers) res.status(400).send("Missing numbers data");

  let data = {};
  data.cards = req.query.numbers.split(",");

  const cards = await getCards(data.cards);
  res.send(cards);
});

// * Update users wish-list cards.
router.patch("/cards", auth, async (req, res) => {
  const { error } = validateCards(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const cards = await getCards(req.body.cards);
  if (cards.length != req.body.cards.length)
    res.status(400).send("The cards numbers donesn't match");

  let user = await User.findById(req.user._id);
  user.cards = req.body.cards;
  user = await user.save();
  res.send(user);
});

// * Get current user document.
router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id).select("-password");
  res.send(user);
});

// * Create new user.
router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already registered.");

  user = new User(
    _.pick(req.body, ["name", "email", "password", "biz", "cards"])
  );
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  res.send(_.pick(user, ["_id", "name", "email"]));
});

module.exports = router;
