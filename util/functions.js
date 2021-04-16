const { MessageEmbed } = require('discord.js');

module.exports = {

    // Generate random number between min and max
	randomNumber(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	},

	sendEmbedError(client, message) {
		const embed = new MessageEmbed();
        embed.setColor(client.config.embed.color);
        embed.setDescription("❌ | " + message);
		return embed;
	},

};