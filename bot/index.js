// config imports
const { TOKEN, PREFIX, MAIN_CHANNEL_ID, DOMAIN } = require("./config/config");

// module imports
const fs = require("fs");
const io = require("socket.io-client");

const socket = io(DOMAIN); // socket

// Discord
const Discord = require("discord.js");

const client = new Discord.Client(); // client

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);

  let jsfile = files.filter((f) => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});

client.on("ready", () => {
  console.log(
    `${client.user.username} is online on ${client.guilds.cache.size} servers!`
  );
  // client.channels.cache.get(`${MAIN_CHANNEL_ID}`).send("Meow!");
  client.user.setActivity("My Code", { type: "PLAYING" });
});

//Command Manager
client.on("message", async (message) => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = PREFIX;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  //Check for prefix
  if (!cmd.startsWith(PREFIX)) return;

  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(client, message, args);
});

socket.on("price_under", (data) => {
  client.channels.cache
    .get(data.channelId)
    .send(
      `The product ${data.prodLink} is available at the price of ${data.currentPrice} which is lower than the target price of ${data.targetPrice}`
    );
});
client.login(TOKEN);
