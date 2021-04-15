const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const endpoint = "https://meme-api.herokuapp.com/gimme";

module.exports = {
    name: 'meme',
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
                embed.setDescription(data.title);
                embed.setTimestamp();
                embed.setFooter(client.config.embed.footer);
        
                message.channel.send(embed);

            });

    },
};