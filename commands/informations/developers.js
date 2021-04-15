const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'developers.js',
    aliases: ['dev'],
    category: 'informations',

    execute(client, message) {

        const embed = new MessageEmbed();
        
        embed.setColor(client.config.embed.color);
        embed.setThumbnail(client.user.avatarURL());
        embed.setDescription('**__Zario Team__** :');
        embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
        embed.addField("Creator", `[ThisDudeBoy](https://github.com/ThisDudeBoy) & [WaDixix](https://github.com/WaDixix)`, false)
        embed.addField("Developers Bot :", `[ThisDudeBoy](https://github.com/ThisDudeBoy) & [WaDixix](https://github.com/WaDixix)`, false)
        embed.setTimestamp();
        embed.setFooter(client.config.embed.footer);

        message.channel.send(embed);
    },
};