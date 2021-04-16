const { MessageEmbed } = require('discord.js');

module.exports = async (client, message) => {
    if (!message.guild || message.author.bot) return;
    const embedPrefix = new MessageEmbed()
    .setColor(client.config.embed.color)
    .setThumbnail(client.user.avatarURL())
    .setDescription(`My current prefix is \`${client.config.data.prefix}\`.\nUse \`${client.config.data.prefix}help\` for more help.\n\nSupport me on [Github](https://github.com/ThisDudeBoy/Zario).`)
    .setFooter(client.config.embed.footer)
    .setTimestamp();

    if(message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) return message.channel.send(embedPrefix);

    if (!message.content.startsWith(client.config.data.prefix)) return;

    const args = message.content.slice((client.config.data.prefix).length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (commandName.length < 1) return;

    const cmd = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    
    if (cmd) {
        cmd.execute(client, message, args);
        console.log(`${message.author.username} (${message.author.id}) executed (${cmd.name})`);
    } else {
        return;
    }
    
};