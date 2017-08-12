const Discord = require("discord.js");
const fs = require("fs");
var translate = require('google-translate-api');
var moment = require("moment")
const config = require("../config.json")
exports.run = (bot, message, args) => {
if (message.content.includes('config.token')) {
            message.channel.sendMessage('Raio protetor... Protegi meu token de ser exibido!');
        } else {
            var code = message.content.split(' ').slice(1).join(' ')
            try {
                message.channel.sendMessage(eval(code));
            } catch (err) {
                let embed = new Discord.RichEmbed()
                .setColor(0xFFFF00)
                .setAuthor('Mensagem de erro', message.author.avatarURL)
                  .setDescription(err)
                  message.channel.send({embed});
            }}
            console.log(message.content)
        }
