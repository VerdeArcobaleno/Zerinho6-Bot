const Discord = require("discord.js")
var moment = require('moment');
const fs = require("fs")
const embed = new Discord.RichEmbed()
.setColor(0x00AE86)
const HelpEmbed = new Discord.RichEmbed()
moment.locale('pt-BR');
new Discord.RichEmbed();
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    	   if (argsJunto.length !== 0) {
            message.channel.bulkDelete(1);
            embed.setAuthor(message.author.username + '\n');
            embed.setDescription('' + `${argsJunto}` + '\n**\nCriado por Zerinho6**');
            message.channel.send({ embed });
        } else {
            message.channel.sendMessage('A sintaxe do comando está incorreta. Sintaxe correta: `' + parts[0] + ' Sou legal!`')
        }
        }