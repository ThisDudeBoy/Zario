const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const endpoint = "https://some-random-api.ml/img/koala";

module.exports = {
    name: 'koala',
    aliases: [],
    category: 'fun',

    execute(client, message) {
        fetch(endpoint)
            .then(response => response.json())
            .then(data => {

                const embed = new MessageEmbed();

                embed.setColor(client.config.embed.color);
                embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
                embed.setImage(data.link);
                embed.setTimestamp();
                embed.setFooter(client.config.embed.footer);
        
                message.channel.send(embed);

            });

    },
};