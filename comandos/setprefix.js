const Discord = require("discord.js");
const fs = require("fs");
let database = JSON.parse(fs.readFileSync('./database/serversconfig.json', 'utf8'));

exports.run = (bot, message, args) => {
	let argsJunto = message.content.split(' ').slice(1).join(' ')
	if(message.channel.type === 'dm') {
		message.channel.sendMessage('Você só pode executar este comando num servidor...')
	} else {
	if(message.member.hasPermission('MANAGE_MESSAGES')) {
		if(args.length < 1) {
			message.channel.sendMessage('Você não deu argumentos. Veja o uso correto usando o comando de ajuda...')
		} else {
			if(args[0] === 'delete') {
				if(!database[message.guild.id]) database[message.guild.id] = {
					prefix: "none"
				}
				database[message.guild.id].prefix = "none"
				setTimeout(() => {fs.writeFile('./database/serversconfig.json', JSON.stringify(database), (err) => {
    			if (err) console.error(err)
  				})}, 1000)
  				message.channel.sendMessage('O prefix foi removido...')
			} else {
				if(!database[message.guild.id]) database[message.guild.id] = {
					prefix: "none"
				}
				database[message.guild.id].prefix = args.join(' ')
				setTimeout(() => {fs.writeFile('./database/serversconfig.json', JSON.stringify(database), (err) => {
    			if (err) console.error(err)
  				})}, 1000)
  				message.channel.sendMessage('O prefix deste server foi configurado para `' + args.join(' ') + '`...')
			}
		}
	} else {
		message.channel.sendMessage('Você não tem permissão para executar esse comando...')
	}
}}