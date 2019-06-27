const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let muteUser = message.guild.member(
        message.mentions.users.first() || message.guild.member.get(args[0])
    );
    if (!muteUser) {
        return message.channel.send("l'utilisateur n'existe pas !");
    }

    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous n'avez pas les permissions pour le faire !");
    }

    if (muteUser.hasPermission("MANAGE_MESSAGES")) {
        return message.channel('Vous ne pouvez mute cette personne !');
    }

    let muteRole = message.guild.roles.find(`name`, 'muted');

    //Création du rôle
    try {
        muteRole = await message.guild.createRole({
            name: 'muted',
            color: '#000',
            permissions: []
        });
        message.guild.channels.forEach(async (channel, id) => {
            await channel.overwritePermissions(muteRole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
            });
        });
    } catch (e) {
        console.log(e.stack);
    }
};

module.exports.help = {
    name: 'mute'
};




