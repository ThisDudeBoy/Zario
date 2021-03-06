const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: [],
    category: 'informations',

    execute(client, message) {
        const user = message.mentions.users.first() || message.author;
        const embed = new MessageEmbed();

        embed.setColor(client.config.embed.color);
        embed.setDescription('Avatar of **' + user.username + '** ');
        embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
        embed.setImage(user.avatarURL({ dynamic: true }))
        embed.setTimestamp();
        embed.setFooter(client.config.embed.footer);

        message.channel.send(embed);
    },
};