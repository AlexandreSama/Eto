const {Listener} = require('discord-akairo');
const modmailClient = require('../../util/modMail')

class messageCreateListener extends Listener{
    constructor(){
        super('messageCreate', {
            emitter: 'client',
            event: 'messageCreate'
        });
    }

    exec(message){
        console.log('?')
        modmailClient.modmailListener(message)
    }
}

module.exports = messageCreateListener