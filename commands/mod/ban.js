const { MessageEmbed } = require('discord.js');
const { sendEmbedError } = require("../../util/functions");

module.exports = {
    name: 'ban',
    aliases: ['banned'],
    category: 'mod',
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["BAN_MEMBERS"],

    async execute(client, message) {

		const target = message.mentions.members.first();
        const embed = new MessageEmbed();

		if(!target)
            return message.channel.send(sendEmbedError(client, "Please specify a user!"));

        if(target.id === message.author.id) 
            return message.channel.send(sendEmbedError(client, "You cannot ban yourself out "));

        if(target.roles.highest.position >= message.member.roles.highest.position)
            return message.channel.send(sendEmbedError(client, "You cannot ban this user out! Check role hierarchy"));

        if(!target.bannable)
            return message.channel.send(sendEmbedError(client, "Cannot ban this user out"));

		try {
            embed.setColor(client.config.embed.color);
            embed.setDescription("☑️ | " + target.user.username + " was successfully banned");
            embed.setTimestamp();
            embed.setFooter(client.config.embed.footer);

			await target.ban();

            message.channel.send(embed);
		} catch(e) {
            message.channel.send(sendEmbedError(client, "Cannot ban this user out"));
		}

    },
};