const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const endpoint = "https://random-d.uk/api/random";

module.exports = {
    name: 'duck',
    aliases: [],
    category: 'fun',

    execute(client, message) {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {

                const embed = new MessageEmbed();

                embed.setColor(client.config.embed.color);
                embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
                embed.setImage(data.url);
                embed.setTimestamp();
                embed.setFooter(client.config.embed.footer);
        
                message.channel.send(embed);

            });

    },
};