const Discord = require("discord.js");
const bot = new Discord.Client();
var moment = require('moment');
moment().format();
moment.locale('pt-BR');
console.log(moment.locale());
const fs = require("fs")
const config = require("./config.json")
const filter = ze => ze.content == 'Sim'
const lag = a => a.content == 'lago aqui lago ai?'
let points = JSON.parse(fs.readFileSync("database/points.json", "utf8"));



// Código
bot.on('ready', () => {
    console.log('Oi zerinho...')
});

function desligar() {
    process.exit()
}


bot.on('ready', ready => {
    bot.user.setGame('ze.help for help')
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
test = "."
bot.on('message', message => {
  if (message.content.startsWith(test + "setTitle ex:")) {
    let embed = new Discord.RichEmbed()
           .setTitle("Exemplo de setTitle")
            message.channel.send({embed});
  }
})
bot.on('message', message => {
  if (message.content.startsWith(test + "setAuthor ex:")) {
    let embed = new Discord.RichEmbed()
           .setAuthor(message.author.username, message.author.avatarURL)
            message.channel.send({embed});
  }
})
bot.on('message', message => {
  if (message.content.startsWith(test + "setAuthor + setTitle ex:")) {
    let embed = new Discord.RichEmbed()
           .setAuthor(message.author.username, message.author.avatarURL)
           .setTitle("Exemplo de setTitle")
            message.channel.send({embed});
  }
})
bot.on('message', message => {
  if (message.content.startsWith(prefix + "lel")) {
    if (message.guild.member(bot.user).highestRole.position > message.guild.member(message.mentions.users.first()).highestRole.position) {
							message.guild.member(message.mentions.users.first()).kick(message.guild.member())

}}});
bot.on('message', message => {
  if (message.content.startsWith(prefix + "try")) {
    message.react('✔')
    message.reply('funcionou?'); {
    message.channel.awaitMessages(filter, {max:1, time:10000, errors:['time']}).then(collected => message.channel.sendMessage(': D'))
    }
  }
})

bot.on('message', message => {
  if (message.content.startsWith("EOQ")){
     message.channel.awaitMessages(lag, {max:1, time:10000, errors:['time']}).then(collected => message.channel.sendMessage('Lagou'))

}})
bot.on('message', message => {
  if (message.content.startsWith(prefix + "github")) {
    message.reply('https://github.com/zerinho6/Zerinho6-Bot/tree/master')
  }
})
bot.on('message', message => {
  if (message.content.startsWith(prefix + "Love me")) {
    message.react('❤')
  }
})
bot.on('message', message => {
  if (message.content.startsWith(prefix + "love me")) {
    message.react('❤')
  }
})
bot.on('message', message => {
  if (message.content.startsWith("notice me")) {
    message.reply('I notice you.')
  }
})
bot.on('message', message => {
  if (message.content.startsWith("Notice me")) {
    message.reply('I notice you.')
  }
})
bot.on('message', message => {
  if (message.content.startsWith("zerinho bot")) {
    message.reply('Oi')
  }
})
bot.on('message', message => {
  if (message.content.startsWith(prefix + "test")) {
  let test = fs.readFileSync('./work.js', 'utf8')
  message.reply(test)
}})
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
  if (message.guild.id === '207609115671920642') {
    console.log('nada')
  }
  else if (message.author.bot) return;

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
    if (message.author.id === '274292270503559169') {
      let embed = new Discord.RichEmbed()
      .setColor(message.member.highestRole.color)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`Você upou para o level **${curLevel}**! Continue  assim!\n**Hinako Special Edition**`)
      .setTimestamp()
      .setThumbnail(message.author.avatarURL)
      message.channel.send({embed});
    } else if (message.guild.id === '207609115671920642') {
      console.log(':/')
    }
   else {
    message.reply('Você upou para de level! Use ``ze.level`` para verificar seus pontos')
  }}
  if (message.content.startsWith(prefix + "level")) {
    if (message.author.id === '274292270503559169') {
       let embed = new Discord.RichEmbed()
      .setColor(message.member.highestRole.color)
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`\nVocê esta atualmente no level ${userData.level}, com ${userData.points} pontos.\n**Hinako Special Edition**`)
      .setTimestamp()
      .setThumbnail(message.author.avatarURL)
      message.channel.send({embed});
    } else{
   let embed = new Discord.RichEmbed()
          .setColor(message.member.highestRole.color)
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`\nVocê esta atualmente no level ${userData.level}, com ${userData.points} pontos.`)
    .setFooter("Zerinho Bot Criado por Zerinho6", "https://cdn.discordapp.com/avatars/334389038528069634/5112cf97f2d90bf849e1f34edc9cee77.png?size=2048.L")
    .setTimestamp()
      message.channel.send({embed});
  }}
  if (message.content.startsWith(prefix + "avatar")) {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    if (message.mentions.users.first() !== undefined){
      message.reply(message.mentions.users.first().avatarURL)
    } else {
      if (message.content === 'ze.avatar server') {
        message.reply(message.guild.iconURL)
      }
    }
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
  if (message.content.startsWith(prefix + "sayd")) {
     let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
           if (argsJunto.length !== 0) {
            message.channel.send(`${argsJunto}`);
            message.delete(true);
        } else {
            message.channel.send('Você esqueceu de botar oq eu devo falar').then(message => {
                            })
        }
  }
  fs.writeFile("database/points.json", JSON.stringify(points), (err) => {
    if (err) console.error(err)
  });
});
bot.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('mods', 'log_chat');
  if (!channel) return;
channel.sendMessage(`${member}, entrou no servidor`);
});
bot.login(config.token);
