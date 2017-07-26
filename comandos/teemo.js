const Discord = require("discord.js")
exports.run = (bot, message, args) => {
    let parts = message.content.split(' ');
    let argsJunto = message.content.split(" ").slice(1).join(' ')
    if (argsJunto.length !== 0) {
            message.channel.bulkDelete(1);
            message.channel.sendMessage(`https://teemo.gg/player/resume/br/${argsJunto}/`);
        } else {
            message.channel.sendMessage('A sintaxe do comando está incorreta. Sintaxe correta: `' + parts[0] + ' zerinho6`').then(message => {
                            	setTimeout(() => {message.delete()}, 5000)
                            })
        }
}
