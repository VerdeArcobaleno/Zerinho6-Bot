const Discord = require("discord.js");
const bot = new Discord.Client();
var moment = require('moment');
moment().format();
moment.locale('pt-BR');
console.log(moment.locale());
const fs = require("fs")
const config = require("./config.json")
let points = JSON.parse(fs.readFileSync("database/points.json", "utf8"));



// Código
bot.on('ready', () => {
    console.log('Oi zerinho...')
});

function desligar() {
    process.exit()
}


bot.on('ready', ready => {
    bot.user.setGame('Por ela')
})

fs.readdir("./eventos/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./eventos/${file}`);
    let eventName = file.split(".")[0];
    // super-secret recipe to call events with all their proper arguments *after* the `client` var.
    bot.on(eventName, (...args) => eventFunction.run(bot, ...args));
  });
});

bot.on('message', message => {
    if (message.author.bot) return;
    let comando = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1)
    let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'));
    if (message.channel.type === 'dm') {
      if (!config.prefixes.some(a => message.content.startsWith(a))) return;
      let command = comando.slice(config.prefixes[config.prefixes.findIndex(a => message.content.startsWith(a))].length)
      try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err)
  }
    } else {
      if(database[message.guild.id] !== undefined) {
        if(database[message.guild.id].prefix !== "none") {
          if(database[message.guild.id].prefix !== undefined && database[message.guild.id].prefix !== null) {
            if(!message.content.startsWith(database[message.guild.id].prefix)) {
              if (!config.prefix.some(a => message.content.startsWith(a))) return;
      let command = comando.slice(config.prefixes[config.prefixes.findIndex(a => message.content.startsWith(a))].length)
      try {let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err)
  }}
          if(message.content.startsWith(database[message.guild.id].prefix)) {
          let command = comando.slice(database[message.guild.id].prefix.length)
          try {let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err)
  } }
        } else {
          if (!config.prefixes.some(a => message.content.startsWith(a))) return;
      let command = comando.slice(config.prefixes[config.prefixes.findIndex(a => message.content.startsWith(a))].length)
      try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err)
  }
        }
      } else {
        if (!config.prefixes.some(a => message.content.startsWith(a))) return;
      let command = comando.slice(config.prefixes[config.prefixes.findIndex(a => message.content.startsWith(a))].length)
      try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    console.error(err)
  }
      }
    } else {
      if (!config.prefixes.some(a => message.content.startsWith(a))) return;
      let command = comando.slice(config.prefixes[config.prefixes.findIndex(a => message.content.startsWith(a))].length)
      try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(bot, message, args);
    } catch (err) {
      console.error(err)
    }}

}})

prefix = "ze."
bot.on("message", message => {
  if (message.author.bot) return;

  if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
    level: 0
  };
  let userData = points[message.author.id];
  userData.points++;

  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    // Level up!
    userData.level = curLevel;
    message.reply(`Você upou para o level **${curLevel}**! Continue  assim!`)
  }
  if (message.content.startsWith(prefix + "level")) {
    let embed = new Discord.RichEmbed()
          .setColor(message.member.highestRole.color)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`\nVocê esta atualmente no level ${userData.level}, com ${userData.points} pontos.`)
    .setFooter("Zerinho Bot Criado por Zerinho6", "https://cdn.discordapp.com/avatars/334389038528069634/5112cf97f2d90bf849e1f34edc9cee77.png?size=2048.L")
    .setTimestamp()
      message.channel.send({embed});
  }
  if (message.content.startsWith(prefix + "profile")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(message.member.highestRole.color)
    .setDescription(`\nVocê esta atualmente no level ${userData.level}, com ${userData.points} pontos.`)
    .setFooter("Zerinho Bot Criado por Zerinho6", "https://cdn.discordapp.com/avatars/334389038528069634/5112cf97f2d90bf849e1f34edc9cee77.png?size=2048.")
    .setTimestamp()
      .setThumbnail(message.author.avatarURL)
      message.channel.send({embed});
  }
  fs.writeFile("database/points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
});
bot.login(config.token);