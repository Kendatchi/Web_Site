const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let reportUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!reportUser) {
        return message.channel.send("L'utilisateur n'existe pas !");
    }

    let reportReason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
        .setDescription("Reports")
        .setColor('#dc143c')
        .addField("Utilisateur reporté", `${reportUser} (ID: ${reportUser.id})`)
        .addField("Utilisateur ayant reporté", `${message.author} (ID: ${message.author.id})`)
        .addField("Channel", message.channel)
        .addField("Raison", reportReason);

    let reportChannel = message.guild.channels.find(`name`, "reports");
    if (!reportChannel) {
        return message.channel.send("Canal 'Reports' introuvable. Veuillez créer le canal");
    }

    message.delete();
    reportChannel.send(reportChannel);
};

module.exports.help = {
    name: 'report'
};