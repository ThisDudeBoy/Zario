const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'members',
    aliases: [],
    category: 'informations',

    execute(client, message) {
        const guild = message.guild;
        const membersInfo = new MessageEmbed();

        membersInfo.setColor(client.config.embed.color);
        membersInfo.setThumbnail(guild.iconURL());
        membersInfo.setTitle(guild.name);
        membersInfo.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
        membersInfo.setDescription(`Total : \`` + guild.members.cache.size +`\`\nHumans : \`` +  guild.members.cache.filter(member => !member.user.bot).size + `\`\nBots : \`` +  guild.members.cache.filter(member => member.user.bot).size + `\`\n\nOnline : \`` + guild.members.cache.filter(m => m.presence.status === 'online').size + `\`\nIdle : \`` + guild.members.cache.filter(m => m.presence.status === 'idl').size + `\`\nDo No Disturb :\`` + guild.members.cache.filter(m => m.presence.status === 'dnd').size + `\`\nOffline :\`` + guild.members.cache.filter(m => m.presence.status === 'offline').size + `\``, true)
        membersInfo.setTimestamp();
        membersInfo.setFooter(client.config.embed.footer);

        message.channel.send(membersInfo);
    },
};