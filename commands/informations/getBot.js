const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'getbot',
    aliases: ['invite', 'add'],
    category: 'informations',

    execute(client, message) {

        const embed = new MessageEmbed();
        
        embed.setColor(client.config.embed.color);
        embed.setTitle('Invite Me !');
        embed.setThumbnail(client.user.avatarURL());
        embed.setDescription('Find my invitation link here');
        embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
        embed.addField("Link", `[Click here](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=268462304)`, true)
        embed.setTimestamp();
        embed.setFooter(client.config.embed.footer);

        message.channel.send(embed);
    },
};