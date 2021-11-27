const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class LienUtileCommand extends Command {
    constructor() {
        super('liens', {
            aliases: ['liens', "l"]
        });
    }
       
    exec(message) {

         message.delete()

        let lien =  new Discord.MessageEmbed()
        .setColor('#0FFF00')
        .setTitle(`Liens utiles`)
        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic : true})) 
        .setDescription('Lien du Forum [ici](https://phenixrp.hosterfy.fr/forums).\n Lien de la boutique [ici](https://phenixrp.hosterfy.fr/boutique/). \n Lien collection DarkRP [ici](http://steamcommunity.com/sharedfiles/filedetails/?id=2558973581). \n Lien du discord officiel [ici](https://discord.gg/BpPWaQq).')
        .setTimestamp() 
        .setFooter(`Commande by Phénix Team's | Tout droit reservée © 2020-2022`)
        
        message.channel.send({embeds: [lien]})
    }
}

module.exports = LienUtileCommand;