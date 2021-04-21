const { MessageEmbed } = require('discord.js');
const { sendEmbedError } = require("../../util/functions");

module.exports = {
    name: 'kick',
    aliases: ['kicked'],
    category: 'mod',
    memberPermissions: ["KICK_MEMBERS"],
    botPermissions: ["KICK_MEMBERS"],

    async execute(client, message) {

		const target = message.mentions.members.first();
        const embed = new MessageEmbed();

		if(!target)
            return message.channel.send(sendEmbedError(client, "Please specify a user!"));

        if(target.id === message.author.id) 
            return message.channel.send(sendEmbedError(client, "You cannot kick yourself out "));

        if(target.roles.highest.position >= message.member.roles.highest.position)
            return message.channel.send(sendEmbedError(client, "You cannot kick this user out! Check role hierarchy"));

        if(!target.kickable)
            return message.channel.send(sendEmbedError(client, "Cannot kick this user out"));

		try {
            embed.setColor(client.config.embed.color);
            embed.setDescription("☑️ | " + target.user.username + " was successfully kicked");
            embed.setTimestamp();
            embed.setFooter(client.config.embed.footer);

			await target.kick();

            message.channel.send(embed);
		} catch(e) {
            message.channel.send(sendEmbedError(client, "Cannot kick this user out"));
		}

    },
};