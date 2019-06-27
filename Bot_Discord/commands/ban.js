const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let bandUser = message.guild.member(
        message.mentions.users.first() || message.guild.member.get(args[0])
    );
    if (!bandUser) {
        return message.channel.send("l'utilisateur n'existe pas !");
    }
    let banReason = args.join(' ').slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous n'avez pas les permissions pour le faire !");
    }

    if (bandUser.hasPermission("MANAGE_MESSAGES")) {
        return message.channel('Vous ne pouvez ban cette personne !');
    }

    let banEmbed = new Discord.RichEmbed()
        .setDescription("Ban")
        .setColor('#dc143c')
        .addField("Utilisateur ban", `${bandUser} (ID: ${bandUser.id})`)
        .addField("Utilisateur ayant ban", `${message.author} (ID: ${message.author.id})`)
        .addField("Channel", message.channel)
        .addField("Raison", banReason);

    let banChannel = message.guild.channels.find(`name`, "ban");
    if (!banChannel) {
        return message.channel.send("Canal 'Ban' introuvable. Veuillez créer le canal");
    }

    message.guild.member(bandUser).ban(banReason);
    banChannel.send(banEmbed);
};

module.exports.help = {
    name: 'ban'
};