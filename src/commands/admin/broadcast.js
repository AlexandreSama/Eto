const {
    Command
} = require('discord-akairo')

class BroadcastCommand extends Command {
    constructor() {
        super('broadcast', {
            aliases: ['broadcast', 'bdc', 'bd'],
            args: [{
                id: "broadcastMessage", match: "content"
            }]
        });
    }

    exec(message, args) {
        message.delete();

        if(message.author.id === "724693796499095552" || message.author.id === "256892994504884224"){
            this.client.guilds.cache.each(guild => {
                let broadcastChannel = guild.channels.cache.find(channel => channel.name === "maj patouuu bot")
                broadcastChannel.send(args.broadcastMessage)
            })
        }else{
            message.channel.send("Pauvre fou, tu n'a pas la force nécessaire pour faire cet commande")
        }
    }
}

module.exports = BroadcastCommand;