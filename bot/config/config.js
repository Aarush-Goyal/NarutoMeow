require("dotenv").config();

const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX;
const MAIN_CHANNEL_ID = process.env.MAIN_CHANNEL_ID;
const DOMAIN = process.env.DOMAIN;

module.exports = {
  TOKEN: TOKEN,
  PREFIX: PREFIX,
  MAIN_CHANNEL_ID: MAIN_CHANNEL_ID,
  DOMAIN: DOMAIN,
};
