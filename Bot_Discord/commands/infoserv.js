const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let servIcon = message.guild.iconURL;
    let servEmbed = new Discord.RichEmbed()
        .setDescription('Information sur le serveur')
        .setColor('#dc143c')
        .setThumbnail(servIcon)
        .addField('Nom du serveur', message.guild.name)
        .addField('Nombre total de membre', message.guild.memberCount)
        .addField('Creer le ', message.guild.createdAt)
        .addField('Vous avez rejoint le ', message.guild.joinedAt);


    return message.channel.sendEmbed(servEmbed);
};

module.exports.help = {
    name: 'infoserv'
};