const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    let kickedUser = message.guild.member(
        message.mentions.users.first() || message.guild.member.get(args[0])
    );
    if (!kickedUser) {
        return message.channel.send("l'utilisateur n'existe pas !");
    }
    let kickReason = args.join(' ').slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous n'avez pas les permissions pour le faire !");
    }

    if (kickedUser.hasPermission("MANAGE_MESSAGES")) {
        return message.channel('Vous ne pouvez kicker cette personne !');
    }

    let kickEmbed = new Discord.RichEmbed()
        .setDescription("Kicks")
        .setColor('#dc143c')
        .addField("Utilisateur kické", `${kickedUser} (ID: ${kickedUser.id})`)
        .addField("Utilisateur ayant kické", `${message.author} (ID: ${message.author.id})`)
        .addField("Channel", message.channel)
        .addField("Raison", kickReason);

    let kickChannel = message.guild.channels.find(`name`, "reports");
    if (!kickChannel) {
        return message.channel.send("Canal 'Reports' introuvable. Veuillez créer le canal");
    }

    message.guild.member(kickedUser).kick(kickReason);
    kickChannel.send(kickEmbed);
};

module.exports.help = {
    name: 'kick'
};




