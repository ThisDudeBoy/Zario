const { clean } = require('../../util/functions.js');

module.exports = {
    name: 'eval',
    aliases: [],
    category: 'owner',

    async execute(client, message, args) {
        if (!client.config.app.owner.includes(message.author.id)) return message.reply("You are not allowed to do that.");
        
        try {
            const code = args.join(" ");
            let codeEval = eval(code);
    
            if (typeof codeEval !== "string")
            codeEval = require("util").inspect(codeEval);
    
            message.channel.send(clean(codeEval), {
                code: "xl"
            });
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    },
}