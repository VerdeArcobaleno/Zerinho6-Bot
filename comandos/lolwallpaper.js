const Discord = require("discord.js")
exports.run = (bot, message, args) => {
let argsJunto = message.content.split(" ").slice(1).join(' ')
    if (argsJunto.length !== 0) {
        let embed = new Discord.RichEmbed()
        .setDescription("**Essas imagens são do site oficial do League Of Legends e podem estar desatualizadas, escreva o nome do campeão totalmente igual e com letras minusculas, caso o nome tenha espaço escreva tudo junto, exemplo: ze.lolwallpaper jarvaniv**")
     .setImage(`https://lolstatic-a.akamaihd.net/game-info/1.1.9/images/champion/backdrop/bg-${argsJunto}.jpg`)
               .setTimestamp()
               .setColor(message.member.highestRole.color)
        .setAuthor(message.author.username, message.author.avatarURL)
                  .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiTi87X9vnv4BCmADsyd20r9wGbelgMejJZ3ivj6KrhoG3hPWC")
                              message.channel.send({embed});
    } else {
        message.reply("Você esqueceu de botar de qual campeão devo procurar o wallpaper")
    }
}