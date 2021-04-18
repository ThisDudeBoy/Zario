const { MessageEmbed } = require('discord.js');
const { sendEmbedError } = require("../../util/functions");
const moment = require('moment');

module.exports = {
    name: 'userinfo',
    aliases: ['ui'],
    category: 'informations',

    execute(client, message) {
        
        const member = message.mentions.members.first();
        const embed = new MessageEmbed();

        if(!member) return message.channel.send(sendEmbedError(client, "Please specify a user!"));
        
        embed.setAuthor(member.user.username, member.user.avatarURL())
        embed.addField("Discord ID", member.user.id)
        embed.addField("Account created", moment(member.user.createdTimestamp).fromNow())
        embed.addField("Member of this server ", moment(member.joinedTimestamp).fromNow())
        embed.setFooter(client.config.embed.footer)
        embed.setColor(client.config.embed.color)

        message.channel.send(embed)
    },
};