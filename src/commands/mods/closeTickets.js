const {
    Command
} = require('discord-akairo')
const modmailClient = require('../../util/modMail')

class CloseTicketCommand extends Command {
    constructor() {
        super('closeTicket', {
            aliases: ['close']
        });
    }

    exec(message) {
        console.log('ici ?')
        const reason = message.content || "Pas de raison"

        modmailClient.deleteMail({channel: message.channel.id, reason})
    }
}

module.exports = CloseTicketCommand;