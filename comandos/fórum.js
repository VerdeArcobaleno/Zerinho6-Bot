const Discord = require("discord.js")
exports.run = (bot, message, args) => {
        let argsJunto = message.content.split(" ").slice(1).join(' ')
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
        .setColor(message.member.highestRole.color)
        .setTimestamp()
            .setTitle('Caso o nome tenha espaço no lugar do espaço use %20 como no exemplo:**Video%20Game**.\nCaso o nome tenha espaço o icone n vai aparecer.')
        .setDescription(`https://boards.br.leagueoflegends.com/pt/player/br/${argsJunto}`)
        .setThumbnail(`https://avatar.leagueoflegends.com/br/${argsJunto}.png`)
            message.channel.send({embed});






}