const { MessageEmbed } = require('discord.js');

module.exports = async (client, guild) => {
    console.log('I got kicked from ' + guild.name)
    const guildDelete = new MessageEmbed()
        .setTitle("Server left !")
        .setThumbnail(guild.iconURL())
        .setDescription(`Unfortunately someone kicked me out on \`${guild.name}\`.\nBecause of you, I'm on ${client.guilds.cache.size} servers.`)
        .addField("**Server ID :**", '\`' + guild.id + '\`')
        .addField("**Number of Members :** ", '\`' + guild.memberCount + '\`')
        .addField("**Creator :** ", '\`' + guild.owner.user.tag + '\`')
        .setColor("RED")

    client.guilds.cache.get(client.config.data.guild).channels.cache.get(client.config.data.channelsid).send(guildDelete);
}