const { MessageEmbed } = require('discord.js');
const { sendEmbedError } = require("../../util/functions");

module.exports = {
    name: 'clear',
    aliases: ['purge'],
    category: 'mod',
    memberPermissions: ["MANAGE_MESSAGES"],
    botPermissions: ["MANAGE_MESSAGES"],

    async execute(client, message, args) {

        const amount = args[0];
        const embed = new MessageEmbed();
        let totalDeleted = 0;
        let index = 1;

        if (amount > 0) {

            // Delete current message
            await message.delete();

            let loop = Math.floor(amount / 99);

            while (index <= loop) {
                try {
                    await message.channel.messages.fetch({limit:99}).then(async number => {
                        await message.channel.bulkDelete(number);
                        totalDeleted = totalDeleted + number.size;
                    });
                } catch(e) {
                    break;
                }
                index++
            }

            console.log(loop);

            embed.setColor(client.config.embed.color);
            embed.setDescription("☑️ | " + totalDeleted + " messages deleted");
            embed.setTimestamp();
            embed.setFooter(client.config.embed.footer);
    
            await message.channel.send(embed).then((m) => {
                m.delete({
                    timeout: 5000
                });
            });

        } else {
            message.channel.send(sendEmbedError(client, "You must specify a number of messages to delete!"));
        }

    },
};