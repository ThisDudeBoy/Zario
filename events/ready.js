module.exports = (client) => {
    console.log(`${client.user.username} is connected to the WebSocket`);

    client.user.setActivity(client.config.data.activity, { type: client.config.data.type})
    setInterval (function () {
        client.user.setActivity(client.config.data.activity);
    }, 3600 * 1000); 
};