const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = {
    name: 'serverinfo',
    aliases: ['servinfo', "serveurinfo"],
    category: 'informations',

    execute(client, message) {
        
        const guild = message.guild;
        const serverInformations = new MessageEmbed();

        serverInformations.setDescription(guild.name)
        serverInformations.setThumbnail(guild.iconURL());
        serverInformations.setTimestamp()
        serverInformations.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
        serverInformations.addField("Owner :", guild.owner.user.tag, false)
        serverInformations.addField("Name of the guild :", guild.name, false)
        serverInformations.addField("Number of members :", guild.members.cache.filter(member => !member.user.bot).size, false)
        serverInformations.addField("Number of boosts :", guild.premiumSubscriptionCount, false)
        serverInformations.addField("Number of lounges :", message.guild.channels.cache.filter((c) => c.type === "text" || c.type === "voice").size, false)
        serverInformations.addField("Server region :", guild.region, false)
        serverInformations.addField("Verification level :", guild.verificationLevel, false)
        serverInformations.addField("Guild ID :", guild.id, false)
        serverInformations.addField("Creation date :", moment(guild.createdAt), false)
        serverInformations.setFooter(client.config.embed.footer)
        serverInformations.setColor(client.config.embed.color);

        message.channel.send(serverInformations)
    },
};