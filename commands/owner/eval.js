module.exports = {
    name: 'eval',
    aliases: [],
    category: 'owner',

    async execute(client, message) {
        if (!client.config.app.owner.includes(message.author.id)) return message.reply("You are not allowed to do that.");
        const args = message.content.split(" ").slice(1);
        function clean(text) {
            if (typeof(text) === "string" && client.config.app.token)
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
            }
        
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