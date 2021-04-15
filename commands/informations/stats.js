const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'stats',
    aliases: ['statistiques', 'statistique'],
    category: 'informations',

    execute(client, message) {
        const embed = new MessageEmbed();

        embed.setColor(client.config.embed.color);
        embed.setTitle(`${client.user.username}'s stats`);
        embed.addField('Guilds', client.guilds.cache.size, true)
        embed.addField('Users', message.guild.members.cache.filter(member => !member.user.bot).size, true)
        embed.addField('Channels', message.guild.channels.cache.filter((c) => c.type !== "category").size, true)
        embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
        embed.setTimestamp();
        embed.setFooter(client.config.embed.footer);

        message.channel.send(embed);
    },
};