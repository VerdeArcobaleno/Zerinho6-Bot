const Discord = require("discord.js")
exports.run = (bot, message, args) => {
var giphy = require( 'giphy' )('a4cf068bc86a4a939ecb883414318a2c');
giphy.search({
    q: message.content.split(" ").slice(1).join("+"),
    limit: 1
}, (err, result) => {
    if(err) console.error(err);
    else message.reply(result.data[0].images.original.url);
    console.log(result.data[0].images.original.url);
});
        }