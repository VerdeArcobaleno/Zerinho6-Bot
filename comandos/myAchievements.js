const Discord = require("discord.js");
var moment = require('moment');
const fs = require("fs")
const embed = new Discord.RichEmbed()
const HelpEmbed = new Discord.RichEmbed()
exports.run = (bot, message, args) => {
    if (message.author.id !== '13429288917703065', '280123124555448331') {
     message.channel.send('Caso não apareça significa que você não é um VIP do bot')
     }
    if (message.author.id === '134292889177030657') {
        let embed = new Discord.RichEmbed()
       .setTitle("Link para o servidor do bot")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xFFFF00)
  .setDescription('Para saber o significado de cada Conquista')
  .setFooter("Zerinho Bot Criado por SMix, editado por Zerinho", "https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048.")
  .setImage("https://images-ext-2.discordapp.net/external/SkK1PV-hVcC8amzZhRbOasplg4AoJubEV1w7BtWIcXw/https/i.imgur.com/95ipSEX.png?width=76&height=55")
  .setThumbnail("https://media.giphy.com/media/b93seREe8UPfi/giphy.gif")
  .setTimestamp()
  .setURL("https://discord.gg/c7TQA7K")
  .addField("Conquistas","👑,🎩,👓,⭐,💳,🔯")
  .addField("Profile Vip", "Cartão Vip:**Habilitado**", true);

  message.channel.send({embed});
    } else {
        if (message.author.id === '280123124555448331') {
            let embed = new Discord.RichEmbed()
        embed.setDescription(message.author.username + ' \n**Conquistas**= 🔯,🎩,💩\n**\nCartão Vip:**_Desabilitado_')
.setThumbnail("https://68.media.tumblr.com/476d7c22e93dfdc0102fe14fe3bc20d3/tumblr_inline_ocnpr51vD71qgck7s_400.gif")
message.channel.send({ embed });
        }
    }  
    {if (message.author.id ==='274292270503559169') { 
         let embed = new Discord.RichEmbed()
        .setTitle("Link para o servidor do bot")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xFFFF00)
  .setDescription("Para saber o significado de cada Conquista")
  .setFooter("Zerinho Bot Criado por SMix, editado por Zerinho", "https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048.")
  .setImage("https://images-ext-2.discordapp.net/external/SkK1PV-hVcC8amzZhRbOasplg4AoJubEV1w7BtWIcXw/https/i.imgur.com/95ipSEX.png?width=76&height=55")
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setURL("https://discord.gg/c7TQA7K")
  .addField("Conquistas",":credit_card:,:six_pointed_star:,:eyeglasses:")
  .addField("Profile Vip", "Cartão Vip:**Habilitado**", true);

  message.channel.send({embed});
        }
    }
     if (message.author.id === '98517638455504896') {
          let embed = new Discord.RichEmbed()
        .setTitle("Link para o servidor do bot")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xFFFF00)
  .setDescription("Para saber o significado de cada Conquista")
  .setFooter("Zerinho Bot Criado por SMix, editado por Zerinho", "https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048.")
  .setImage("https://images-ext-2.discordapp.net/external/SkK1PV-hVcC8amzZhRbOasplg4AoJubEV1w7BtWIcXw/https/i.imgur.com/95ipSEX.png?width=76&height=55")
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setURL("https://discord.gg/c7TQA7K")
  .addField("Conquistas",":🎬,💳,🔯")
  .addField("Profile Vip", "Cartão Vip:**Habilitado**", true);

  message.channel.send({embed});
     }
     if (message.author.id === '138045253604081664') {
          let embed = new Discord.RichEmbed()
         .setTitle("Link para o servidor do bot")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xFFFF00)
  .setDescription("Para saber o significado de cada Conquista")
  .setFooter("Zerinho Bot Criado por SMix, editado por Zerinho", "https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048.")
  .setImage("https://images-ext-2.discordapp.net/external/SkK1PV-hVcC8amzZhRbOasplg4AoJubEV1w7BtWIcXw/https/i.imgur.com/95ipSEX.png?width=76&height=55")
  .setThumbnail("https://img.buzzfeed.com/buzzfeed-static/static/2016-09/22/10/asset/buzzfeed-prod-web12/anigif_sub-buzz-26131-1474553043-2.gif")
  .setTimestamp()
  .setURL("https://discord.gg/c7TQA7K")
  .addField("Conquistas","🔯,👯,💳")
  .addField("Profile Vip", "Cartão Vip:**Habilitado**", true);
     
  message.channel.send({embed});
     }
     if (message.author.id === '277931584806715403') {
        let embed = new Discord.RichEmbed()
        .setTitle("Link para o servidor do bot")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xFFFF00)
  .setDescription("Para saber o significado de cada Conquista")
  .setFooter("Zerinho Bot Criado por SMix, editado por Zerinho", "https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048.")
  .setImage("https://images-ext-2.discordapp.net/external/SkK1PV-hVcC8amzZhRbOasplg4AoJubEV1w7BtWIcXw/https/i.imgur.com/95ipSEX.png?width=76&height=55")
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setURL("https://discord.gg/c7TQA7K")
  .addField("Conquistas",":credit_card:,:eyeglasses:,:six_pointed_star:")
  .addField("Profile Vip", "Cartão Vip:**Habilitado**", true);

  message.channel.send({embed});
     }
     if (message.author.id === '185948682980425728') {
        let embed = new Discord.RichEmbed()
        .setTitle("Link para o servidor do bot")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xFFFF00)
  .setDescription("Para saber o significado de cada Conquista")
  .setFooter("Zerinho Bot Criado por SMix, editado por Zerinho", "https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048.")
  .setImage("https://images-ext-2.discordapp.net/external/SkK1PV-hVcC8amzZhRbOasplg4AoJubEV1w7BtWIcXw/https/i.imgur.com/95ipSEX.png?width=76&height=55")
  .setThumbnail(message.author.avatarURL)
  .setTimestamp()
  .setURL("https://discord.gg/c7TQA7K")
  .addField("Conquistas",":credit_card:,:eyeglasses:,:six_pointed_star:,:tophat:")
  .addField("Profile Vip", "Cartão Vip:**Habilitado**", true);
     
  message.channel.send({embed});
     }
     if (message.author.id === '295298578174181378') {
          let embed = new Discord.RichEmbed()
        .setTitle("Link para o servidor do bot")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xFFFF00)
  .setDescription("Para saber o significado de cada Conquista")
  .setFooter("Zerinho Bot Criado por SMix, editado por Zerinho", "https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048.")
  .setImage("https://images-ext-2.discordapp.net/external/SkK1PV-hVcC8amzZhRbOasplg4AoJubEV1w7BtWIcXw/https/i.imgur.com/95ipSEX.png?width=76&height=55")
  .setThumbnail("http://bestanimations.com/Animals/Mammals/Cats/cats/cute-kitty-animated-gif-25.gif")
  .setTimestamp()
  .setURL("https://discord.gg/c7TQA7K")
  .addField("Conquistas",":credit_card:,:six_pointed_star:,🌺")
  .addField("Profile Vip", "Cartão Vip:**Habilitado**", true);

  message.channel.send({embed});
     }
     if (message.author.id === '264758030963441664') {
          let embed = new Discord.RichEmbed()
        .setTitle("Link para o servidor do bot")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xFFFF00)
  .setDescription("Para saber o significado de cada Conquista")
  .setFooter("Zerinho Bot Criado por SMix, editado por Zerinho", "https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048.")
  .setImage("https://images-ext-2.discordapp.net/external/SkK1PV-hVcC8amzZhRbOasplg4AoJubEV1w7BtWIcXw/https/i.imgur.com/95ipSEX.png?width=76&height=55")
  .setThumbnail("https://media.giphy.com/media/wyBcwFyH2FpO8/giphy.gif")
  .setTimestamp()
  .setURL("https://discord.gg/c7TQA7K")
  .addField("Conquistas",":six_pointed_star:,:eyeglasses:,:credit_card:")
  .addField("Profile Vip", "Cartão Vip:**Habilitado**", true);
     
  message.channel.send({embed}); 
     }
     if (message.author.id === '205319106608627722') {
          let embed = new Discord.RichEmbed()
        .setTitle("Link para o servidor do bot")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xFFFF00)
  .setDescription("Para saber o significado de cada Conquista")
  .setFooter("Zerinho Bot Criado por SMix, editado por Zerinho", "https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048.")
  .setImage("https://images-ext-2.discordapp.net/external/SkK1PV-hVcC8amzZhRbOasplg4AoJubEV1w7BtWIcXw/https/i.imgur.com/95ipSEX.png?width=76&height=55")
  .setThumbnail("http://media.gq.com/photos/56a81ae5edbf81cd2d06cb4a/master/w_800/S-Dusk.gif")
  .setTimestamp()
  .setURL("https://discord.gg/c7TQA7K")
  .addField("Conquistas",":credit_card:,:crown:,:star:,:six_pointed_star:")
  .addField("Profile Vip", "Cartão Vip:**Habilitado**", true);
     
  message.channel.send({embed});  
     }
     if (message.author.id === '256940675109486593') {
          let embed = new Discord.RichEmbed()
         .setTitle("Link para o servidor do bot")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xFFFF00)
  .setDescription("Para saber o significado de cada Conquista")
  .setFooter("Zerinho Bot Criado por SMix, editado por Zerinho", "https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048.")
  .setImage("https://images-ext-2.discordapp.net/external/SkK1PV-hVcC8amzZhRbOasplg4AoJubEV1w7BtWIcXw/https/i.imgur.com/95ipSEX.png?width=76&height=55")
  .setThumbnail("https://68.media.tumblr.com/c9a7f099fbd05bf7d5b101961a23d1ca/tumblr_niusahk8141qjyuh6o1_500.gif")
  .setTimestamp()
  .setURL("https://discord.gg/c7TQA7K")
  .addField("Conquistas",":credit_card:,:eyeglasses:,:six_pointed_star:")
  .addField("Profile Vip", "Cartão Vip:**Habilitado**", true);
     
  message.channel.send({embed});
     }
     if (message.author.id === '271630744315625472') {
         let embed = new Discord.RichEmbed()
       .setTitle("Link para o servidor do bot")
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xFFFF00)
  .setDescription("Para saber o significado de cada Conquista")
  .setFooter("Zerinho Bot Criado por SMix, editado por Zerinho", "https://cdn.discordapp.com/avatars/332968532096843776/9b19c13f6ce4cf2133c4f0229d3ba8e2.png?size=2048.")
  .setImage("https://images-ext-2.discordapp.net/external/SkK1PV-hVcC8amzZhRbOasplg4AoJubEV1w7BtWIcXw/https/i.imgur.com/95ipSEX.png?width=76&height=55")
  .setThumbnail("https://68.media.tumblr.com/5eb4991ea1fab6724c2b8c0d178ac838/tumblr_njtzahYD7W1thzka2o1_500.gif")
  .setTimestamp()
  .setURL("https://discord.gg/c7TQA7K")
  .addField("Conquistas",":credit_card:,:six_pointed_star:")
  .addField("Profile Vip", "Cartão Vip:**Habilitado**", true);  

  message.channel.send({embed});
     }
     }