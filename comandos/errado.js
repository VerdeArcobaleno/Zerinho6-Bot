var Jimp = require("jimp")
const Discord = require("discord.js");


exports.run = (bot, message, args) => {
	if(message.content.split(' ').slice(1).join(' ').length < 1) {
		message.channel.sendMessage('Você não escreveu nada...')
	} else {
		if(message.content.split(' ').slice(1).join(' ').length > 33) {
			message.channel.sendMessage('Você ultrapassou o limite de 33 caracteres...')
		} else {
			if(message.guild.member(bot.user).hasPermission('ATTACH_FILES')) {
				var authorMessage = message
                    let argsJunto = message.content.split(" ").slice(1).join(' ')
				message.channel.sendMessage(':clock12: | Aguarde...').then(message => {
			Jimp.read(`http://i.imgur.com/9jY5T9I.png`, function (err, image) {
			if (err) message.channel.sendMessage('Ocorreu um erro ao criar a imagem...')
			Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
			image.print(font, 10, 50, argsJunto, 300)
			var aguardeMessage = message
			image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
			message.channel.sendFile(buffer, 'imagem.png', ':frame_photo: | <@' + authorMessage.author.id + '>').then(message => {
				aguardeMessage.delete()
			})
			})
			})
			})})
			} else {
				message.channel.sendMessage('Eu não tenho a permissão necessária para fazer isso...')
			}
		}

}
}