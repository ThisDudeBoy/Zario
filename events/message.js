const { MessageEmbed } = require('discord.js');
const helper = require('../util/functions.js');

module.exports = async (client, message) => {
    if (!message.guild || message.author.bot) return;

    // When the client is mentioned
    if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
        const embed = new MessageEmbed()
        embed.setColor(client.config.embed.color)
        embed.setThumbnail(client.user.avatarURL())
        embed.setDescription(`My current prefix is \`${client.config.data.prefix}\`.\nUse \`${client.config.data.prefix}help\` for more help.\n\nSupport me on [Github](https://github.com/ThisDudeBoy/Zario).`)
        embed.setFooter(client.config.embed.footer)
        embed.setTimestamp();

        message.channel.send(embed);
    }

    if (!message.content.startsWith(client.config.data.prefix)) return;

    const args = message.content.slice((client.config.data.prefix).length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commandName.length < 1) return;

    const cmd = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (cmd) {
        if (cmd.botPermissions) {
            if(!message.guild.me.hasPermission(cmd.botPermissions)) {
                return message.channel.send(helper.sendEmbedError(client, "Sorry, I don't have `"+ cmd.botPermissions +"` permission"));
            }
        }
        if (cmd.memberPermissions) {
            if(!message.member.hasPermission(cmd.memberPermissions)) {
                return message.channel.send(helper.sendEmbedError(client, "You don't have `"+ cmd.memberPermissions +"` permission"));
            }
        }
        cmd.execute(client, message, args);
    } else {
        return;
    }
    
};