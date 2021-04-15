const { MessageEmbed } = require('discord.js');

module.exports = async (client, guild) => {
    console.log('New server ' + guild.name)
    const guildCreate = new MessageEmbed()
        .setTitle("New server !")
        .setDescription(`Thanks for adding me on \`${guild.name}\`.\nThanks to you, I'm on ${client.guilds.cache.size} servers.`)
        .setThumbnail(guild.iconURL())
        .addField("**Server ID :**", '\`' + guild.id + '\`')
        .addField("**Number of Members :** ", '\`' + guild.memberCount + '\`')
        .addField("**Creator :** ", '\`' + guild.owner.user.tag + '\`')
        .setColor("GREEN")

        client.guilds.cache.get(client.config.data.guild).channels.cache.get(client.config.data.channelsid).send(guildCreate);
}