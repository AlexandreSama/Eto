const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class RecrutementCommand extends Command {
    constructor() {
        super('recrutement', {
            aliases: ['recrutement', "rc"]
        });
    }
       
    exec(message) {

         message.delete()

        let lien =  new Discord.MessageEmbed()
        .setColor('F000FF')
        .setTitle(`Recrutement Staff`)
        .setAuthor('Patouuu', 'https://zupimages.net/up/21/49/h8q2.png')
        .setDescription('**Plan à suivre pour postuler en tant que modérateur discord**: \n\n- Votre âge :\n- Quand avez-vous rejoint la team phenix ?\n- Expériance de modération :\n- Pensez-vous connaître le fonctionnement du serveur :\n- Pourquoi vous et pas un autre :\n- Quels sont vos qualités, vos défauts. Êtes-vous autonome? :\n- Le principe de hiérarchie vous dérange t-il (avoir des supérieurs) :\n- Vos ambitions sur le serveur :\n- Donnez un point positif et négatif de notre communauté :\n- Vos horaires de connexion:\n\n***Faire un ticket pour drop votre candidature***\n\n**Recrutement GMOD:**\n\nLien forum : https://phenixrp.hosterfy.fr/')
        .setImage('https://cdn.discordapp.com/attachments/744282914296037388/914588418477019156/recrutement.gif')
        .setTimestamp() 
        .setFooter(`Commande by Phénix Team's | Tout droit reservée © 2020-2022`, 'https://zupimages.net/up/21/49/h8q2.png')
        
        message.channel.send({embeds: [lien]})
    }
}

module.exports = RecrutementCommand;