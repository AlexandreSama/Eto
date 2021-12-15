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
        .setTitle(`Recrutement Staff | Demande de partenariat`)
        .setAuthor('Patouuu', 'https://zupimages.net/up/21/49/h8q2.png')
        .setDescription('')
        .addFields(
            { name: '⚔️ `G-Form Recrutement Modérateur Discord`', value: '>>> Lien : [ici](https://docs.google.com/forms/d/e/1FAIpQLSdp3rrNu3Js9IwN-j-WWPfrdaMGLJ8-kw6F8gvMc25clUumYQ/viewform)\nContacter en cas de problèmes un **@Responsable Discord**' },
            { name: '\u200B', value: '\u200B' },
            { name: '📢 `G-Form Recrutement Community Manager`', value: '>>> Lien : [ici](https://docs.google.com/forms/d/e/1FAIpQLSdKrUUySkK3KKUltv-ypp8BAguK1bmmjyVCmkrIfVvohkPbKA/viewform)\nContacter en cas de problèmes un **@Responsable Pôle CM**', inline: true },
            { name: '🛡️ `G-Form Demande De Partenariat`', value: '>>> Lien : [ici](https://docs.google.com/forms/d/e/1FAIpQLSctxpfRkV7qm7GAteTSoKERgQlOhCefgBVeg1QO-FhzBVb8GA/viewform)\nContacter en cas de problèmes un **@Responsable Discord** ', inline: false },
            { name: '\u200B', value: '\u200B' },
            { name: '🚸 `G-Form Recrutement Animateur(trice)`', value: '>>> Lien : **SOON** ', inline: true },
            { name: '✍️  `G-Form Recrutement Rédacteur(trice)`', value: '>>> Lien : **SOON** ', inline: false },
            
        )
        .setImage('https://cdn.discordapp.com/attachments/744282914296037388/914588418477019156/recrutement.gif')
        .setTimestamp() 
        .setFooter(`Commande by Phénix Team's | Tout droit reservée © 2020-2022`, 'https://zupimages.net/up/21/49/h8q2.png')
        
        message.channel.send({embeds: [lien]})
    }
}

module.exports = RecrutementCommand;