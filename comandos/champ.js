const Discord = require("discord.js")
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    if (argsJunto.length !== 0) {
        let embed = new Discord.RichEmbed()
        .setColor(message.member.highestRole.color)
        .setAuthor("Solicitado por " + message.author.username, message.author.avatarURL)
          .setTimestamp()
            .setDescription(`**Escreva o nome totalmente correto ate mesmo com letra maiuscula ou o link não vai funcionar, caso o nome tenha espaço escreva como no exemplo: ze.champ Tahm_Kench**\n[**\n${argsJunto}**](http://leagueoflegends.wikia.com/wiki/${argsJunto})`);
            message.channel.send({embed});
        } else {
            message.channel.sendMessage('A sintaxe do comando está incorreta. Sintaxe correta: `' + parts[0] + ' Ahri`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        }
}
