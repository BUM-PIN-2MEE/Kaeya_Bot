const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Project is running!');
})

app.get("/", (req, res) => {
  res.send('Hello world!');
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["Guilds", "GuildMessages", "MessageContent"]});

client.on("messageCreate" , message => {
  if (message.content === "Hey kaeya") {
    message.channel.send("Hey Hubby😘");
  }

  if (message.content === "How are u") {
    message.channel.send("Im fine, thanks for asking!");
  }

  if (message.content === "How is your day going") {
    message.channel.send("Going pretty well how about you?");
  }

  if (message.content === "😘") {
    message.channel.send("Hey stop your making me blush");
  }
  
  if (message.content === "Gimme a kiss kaeyass") {
    message.channel.send("chu~");
  }

  if (message.content === ":") {
    message.channel.send("Cmon kaeyass talk to me u wont talk to your own wife?");
  }

  if (message.content === "⚰️") {
    message.channel.send("take me with you please");
  }

  if (message.content === "Why is kaeyass so silent today?") {
    message.channel.send("Yeah i think so too why is she so silent");
  }
});

client.login(process.env.token);