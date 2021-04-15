module.exports = async (client, message, guild) => {
    if (!message.guild || message.author.bot) return;

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