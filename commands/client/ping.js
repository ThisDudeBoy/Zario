module.exports = {
    name: 'ping',
    aliases: ['pong'],
    category: 'client',

    execute(client, message) {
        return message.channel.send(`The bot's ping is ${message.createdTimestamp - Date.now()}ms, discord's api ping is ${Math.round(client.ws.ping)}`);
    },
};