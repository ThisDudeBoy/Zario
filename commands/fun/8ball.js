const { randomNumber, sendEmbedError } = require('../../util/functions.js');
const { MessageEmbed } = require('discord.js');

var response = [
    'Yes',
    'No',
    'Without a doubt',
    'Impossible',
    'No opinion',
    'For sure',
    'It\'s no',
    'One chance out of two',
    'Try later',
    'In my opinion yes',
    'It\'s off to a good start',
    'Do not dream',
    'Perhaps',
];

module.exports = {
    name: '8ball',
    aliases: [],
    category: 'fun',

    execute(client, message, args) {

        const random = randomNumber(0, response.length);
        const embed = new MessageEmbed();

        if (!args[0]) return message.channel.send(sendEmbedError(client, `Please specify a question like this \`${client.config.data.prefix}8ball [question]\``))

        embed.setTitle(`**Matter of ${message.author.tag}**`)
        embed.setColor(client.config.embed.color);
        embed.setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }));
        embed.addField(
            "**Question** : " +  args.join(" "),
            "**Reply** : " + response[random],
            true);
        embed.setTimestamp();
        embed.setFooter(client.config.embed.footer);

        message.channel.send(embed);
    },
};