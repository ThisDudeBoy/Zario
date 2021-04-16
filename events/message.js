const { MessageEmbed } = require('discord.js');
const helper = require('../util/functions.js');

module.exports = async (client, message) => {
    if (!message.guild || message.author.bot) return;

    if (!message.content.startsWith(client.config.data.prefix)) return;

    const args = message.content.slice((client.config.data.prefix).length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commandName.length < 1) return;

    const cmd = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

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

    if (cmd) {
        cmd.execute(client, message, args);
        console.log(`${message.author.username} (${message.author.id}) executed (${cmd.name})`); 
    } else {
        return;
    }
    
};