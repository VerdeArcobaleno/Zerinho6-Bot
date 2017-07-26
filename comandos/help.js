const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
const fs = require("fs")
let comandos = JSON.parse(fs.readFileSync('./comandos.json', 'utf8'))
let config = JSON.parse(fs.readFileSync('./config.json', 'utf8'))
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ');
    if(argsJunto < 1) {
    const HelpEmbed = new Discord.RichEmbed()
    HelpEmbed.setAuthor('Solicitado por ' + message.author.username, message.author.avatarURL);

    let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'))
    if (message.channel.type !== 'dm') {
        if(database[message.guild.id]) {
            if(database[message.guild.id].prefix) {
                if(database[message.guild.id].prefix !== "none") {
                    var Prefixes = '`' + config.prefixes.join('`, `') + '`, `' + database[message.guild.id].prefix + '`'
                } else {
                    var Prefixes = '`' + config.prefixes.join('`, `') + '`'
                }
            } else {
                var Prefixes = '`' + config.prefixes.join('`, `') + '`'
            }
        } else {
            var Prefixes = '`' + config.prefixes.join('`, `') + '`'
        }
    } else {
        var Prefixes = '`' + config.prefixes.join('`, `') + '`'
    }
    HelpEmbed.addField('Comandos', '`' + Object.keys(comandos).join('` `') + '`\n\n**Prefixes:** ' + Prefixes + '\n\nPara ver mais sobre um comando, execute `ze.help (comando)`.\n**Exemplo:** `ze.help poll`')
    HelpEmbed.setFooter('Zerinho Bot criado por SMix e editado por Zerinho6.', ' https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048');
    if(message.channel.type === 'dm') {
        message.channel.sendEmbed(HelpEmbed)
    } else {
        if(message.member.highestRole.color !== undefined) {
            HelpEmbed.setColor(message.member.highestRole.color)
            if(message.guild.member(bot.user).hasPermission('EMBED_LINKS')) {
                message.channel.sendEmbed(HelpEmbed)
            } else {
                message.author.sendEmbed(HelpEmbed);
                message.channel.sendMessage(':warning: | Eu não tenho a permissão `EMBED_LINKS` neste servidor. O resultado foi enviado por privado...');
            }
        }
    }
} else {
    if(Object.keys(comandos).some(a => a === args[0])) {
        const HelpEmbed = new Discord.RichEmbed()
        HelpEmbed.setAuthor('Solicitado por ' + message.author.username, message.author.avatarURL);
        HelpEmbed.setTitle('z.' + Object.keys(comandos)[Object.keys(comandos).findIndex(a => a === args[0])])
        HelpEmbed.setDescription(comandos[args[0]].description + '\n\n**Uso: **' + comandos[args[0]].usage)
        if(message.channel.type === 'dm') {
        message.channel.sendEmbed(HelpEmbed)
    } else {
        if(message.member.highestRole.color !== undefined) {
            HelpEmbed.setColor(message.member.highestRole.color)
            if(message.guild.member(bot.user).hasPermission('EMBED_LINKS')) {
                message.channel.sendEmbed(HelpEmbed)
            } else {
                message.author.sendEmbed(HelpEmbed);
                message.channel.sendMessage(':warning: | Eu não tenho a permissão `EMBED_LINKS` neste servidor. O resultado foi enviado por privado...');
            }
        }
    }
    } else {
        message.channel.sendMessage('Você não escreveu um comando correto...')
    }
}}
