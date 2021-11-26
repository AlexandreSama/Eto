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
            .setLabel('Accepter')
            .setStyle('SUCCESS'),
    
            new Discord.MessageButton()
            .setCustomId('suggestion_deny')
            .setLabel('Refuser')
            .setStyle('DANGER')
    
        );
    
        if (Config.SUGGESTION.toggle = true) {
    
            if (args.suggestion) {
    
                let suggestionEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${message.author.username} a suggérer`, message.author.displayAvatarURL())
                    .setDescription(`\`\`\`${args.suggestion}\`\`\``)
                    .setFooter("Requis Perm Administrateur pour accepter/refuser")
                    .setTimestamp()
                    
    
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
    
                return message.channel.send("❌ Tu ne peut pas ne rien suggérer !")
    
            }
    
        } else {
    
            return message.channel.send("❌ Les suggestions ne sont pas activés")
    
        }


    }
}

module.exports = SuggestionCommand;