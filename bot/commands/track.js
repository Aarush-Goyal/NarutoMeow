const Discord = require("discord.js");
const axios = require("axios");
const { DOMAIN } = require("../config/config");

module.exports.run = async (client, message, args) => {
  // Call back response
  message.channel.send(
    `Tracking link ${args[0]} at target price of ${args[1]}`
  );

  // Post request to the api
  axios.post(`${DOMAIN}/api/v1/amzn`, {
    url: args[0],
    targetPrice: args[1],
    channelId: message.channel.id,
  });
  // .then((res) => console.log(res.data))
  // .catch((err) => console.log(err));
};

module.exports.help = {
  name: "track",
};
