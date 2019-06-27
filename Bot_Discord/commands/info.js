const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setDescription('Information sur le bot')
        .setColor('#dc143c')
        .setThumbnail(botIcon)
        .addField('Nom du bot', bot.user.username)
        .addField('Créer le', bot.user.createdAt)
        .addField('Commandes', '-------------------------')
        .addField('!info', 'Commandes disponible pour le bot Discord')
        .addField('!infoserv', 'Renvoie des information sur le serveur')
        .addField('!report', 'Report un joueur')
        .addField('!kick', 'Kick un joueur')
        .addField('!ban', 'Ban un joueur');

    return message.channel.send(embed);
};

module.exports.help = {
    name: 'info'
};