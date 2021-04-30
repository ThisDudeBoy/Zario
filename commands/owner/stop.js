const { sendEmbedError } = require("../../util/functions");

module.exports = {
    name: 'stop',
    aliases: [],
    category: 'owner',

    async execute(client, message) {
        if (!client.config.app.owner.includes(message.author.id)) return message.reply("You are not allowed to do that.");
        
        try {
            message.channel.send(sendEmbedError(client, "Shutting down.")).then(() => {
                    client.destroy();
              });
        } catch (err) {
            message.channel.send(`\`ERROR\``);
        }
    },
}