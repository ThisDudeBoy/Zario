module.exports = {
    name: 'uptime',
    aliases: [],
    category: 'client',

    execute(client, message) {
        const calculUptime = require("pretty-ms");
        return message.channel.send(`**${client.user.username} has been online for : **\`${calculUptime(client.uptime)}\``);
    },
};