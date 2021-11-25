const {
    Command
} = require('discord-akairo')
const Config = require('../../util/config')
const Discord = require('discord.js');

class SuggestionCommand extends Command {
    constructor() {
        super('suggestion', {
            aliases: ['suggestion', 'suggest'],
            args: [{
                id: "suggestion", match: "content"
            }]
        });
    }

    async exec(message, args) {
        
        const suggestionsButtonRow = new Discord.MessageActionRow().addComponents(

            new Discord.MessageButton()
            .setCustomId('suggestion_accept')
            .setLabel('Accept')
            .setStyle('SUCCESS'),
    
            new Discord.MessageButton()
            .setCustomId('suggestion_deny')
            .setLabel('Deny')
            .setStyle('DANGER')
    
        );
    
        if (Config.SUGGESTION.toggle = true) {
    
            if (args.suggestion) {
    
                let suggestionEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.username}'s suggested`, message.author.displayAvatarURL())
                    .setDescription(`\`\`\`${args.suggestion}\`\`\``)
    
                try {
                    let suggestionMessage = await message.channel.send({
                        embeds: [suggestionEmbed],
                        components: [
                            suggestionsButtonRow
                        ]
                    })
    
                    await suggestionMessage.react('👍')
                    await suggestionMessage.react('👎')
    
                } catch (err) {
                    return console.log(err)
                }
    
            } else {
    
                return message.channel.send("❌ You can't suggest nothing")
    
            }
    
        } else {
    
            return message.channel.send("❌ Suggestions are not enabled")
    
        }


    }
}

module.exports = SuggestionCommand;