module.exports = {
    name: 'support-server',
    aliases: ['support'],
    category: 'informations',

    execute(client, message) {
       return message.channel.send("**__Support server__** : \n" + client.config.data.guildSupport);
    },
};