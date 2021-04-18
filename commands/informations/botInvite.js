const { MessageEmbed, TeamMember } = require('discord.js');

module.exports = {
    name: 'botinvite',
    aliases: [],
    category: 'informations',

    execute(client, message) {
        const user = message.mentions.users.first() || message.author;

        if(!user.bot){
            const userEmbed = new MessageEmbed();

            userEmbed.setColor(client.config.embed.color);
            userEmbed.setDescription('This user is not a bot.');
            return message.channel.send(userEmbed)
        }

        const embed = new MessageEmbed();
        
        embed.setColor(client.config.embed.color);
        embed.setTitle('✅ Name : \`' + user.username + '\`');
        embed.setThumbnail(user.avatarURL());
        embed.setDescription('ID : \`' + user.id + '\`');
        embed.addField("Admin Permissions", `[Click here](https://discord.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=8)`, true)
        embed.addField("Without Permissions", `[Click here](https://discord.com/oauth2/authorize?client_id=${user.id}&scope=bot)`, true)
        embed.setTimestamp();
        embed.setFooter(client.config.embed.footer);

        message.channel.send(embed);
    },
};