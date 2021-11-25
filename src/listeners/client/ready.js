const {Listener} = require('discord-akairo');
const modmailClient = require('../../util/modMail')

class ReadyListener extends Listener{
    constructor(){
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec(){
        modmailClient.ready()
        console.log('Prêt a envoyer la sauce !');
    }
}

module.exports = ReadyListener