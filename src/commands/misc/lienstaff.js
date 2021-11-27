const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class LienStaffCommand extends Command {
    constructor() {
        super('lienstaff', {
            aliases: ['lienStaff', "lstaff"]
        });
    }
       
    exec(message) {

         message.delete()

        let lien =  new Discord.MessageEmbed()
        .setColor('#00FFB2')
        .setTitle(`Liens utiles Staff`)
        .setAuthor(message.author.username, message.author.displayAvatarURL({dynamic : true})) 
        .setDescription('Suivis point staffing [ici](https://docs.google.com/spreadsheets/d/1U3pqUOU3Q6KPn2gTeEzMZTmfFl2_iwoZgWoEvkU8448/edit?usp=sharing).\n Lien demande de ban [ici](https://docs.google.com/spreadsheets/d/18nubdvEoslLaVFnhqPpBKZxH2OaboVkuS5aAzL-O_bk/edit?usp=sharing). \n Lien tableau des sanctions [ici](https://docs.google.com/spreadsheets/d/1BspOHvDxtI4i1z3KWaeOJeHl_wYM2GGBxbiM9qhOqRI/edit?usp=sharing). \n Lien report bug (serveur) [ici](https://docs.google.com/spreadsheets/d/1paFfcFIEqWnLNzd0_oRpEnNNGMUT0wecLYDG6tmLce8/edit?usp=sharing).')
        .setTimestamp() 
        .setFooter(`Commande by Phénix Team's | Tout droit reservée © 2020-2022`)
        
        message.channel.send({embeds: [lien]})
    }
}

module.exports = LienStaffCommand;