const {
    Command
} = require('discord-akairo')
const Discord = require('discord.js');

class ListeStaffCommand extends Command {
    constructor() {
        super('listestaff', {
            aliases: ['liste', "staff", 'ls']
        });
    }
       
    exec(message) {

         message.delete()

        let lien =  new Discord.MessageEmbed()
        .setColor('#0FFF00')
        .setTitle(`Liste Des Membres Du Staff `)
        .setURL('https://discord.gg/BpPWaQq')
        .setAuthor('Patouuu', 'https://zupimages.net/up/21/49/h8q2.png')
        .setDescription('```Ci-joint se trouvent la liste des officiel des membres de notre grande équipe PhénixMG (titre blueu = le discord.)```')
        .addFields(
            { name: '💻 `Développeur Patouuu-Bot`', value: '>>> ```๖̶ζ͜͡Patoûûû༻#8321\n𝒜𝓁𝑒𝓍λ𝓃𝒹𝓇𝑒#6167```' },
            { name: '\u200B', value: '\u200B' },
            { name: '👑 `Administrateur Discord`', value: '>>> ```๖̶ζ͜͡Patoûûû༻#8321\n𝒜𝓁𝑒𝓍λ𝓃𝒹𝓇𝑒#6167\nBillGaytte#7073```', inline: true },
            { name: '🛡️ `Responsable Discord`', value: '>>> ```Alexander#4353``` ', inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: '📢 `Community Manager`', value: '>>> ```***SOON***``` ', inline: true },
            { name: '⚔️ `Staff Discord`', value: '>>> ```cyril59310#9010\n𣝔[√σรร ησƈŧïş天#6718``` ', inline: true },
            { name: '\u200B', value: '\u200B' },
            { name: '🚸 `Animateur(trices)`', value: '>>> ```🤍🧸💸ƇƖҽɱ💸🧸🖤#9578``` ', inline: true },
            { name: '✍️ `Rédacteur(trices)`', value: '>>> ```***SOON***``` ', inline: true }, 
            { name: '\u200B', value: '\u200B' },
            { name: '💰 `Donateur(trice)`', value: '>>> ```***PAS ENCORE DE DON***``` ', inline: true },
        )
        .setTimestamp() 
        .setFooter(`Commande by Phénix Team's | Tout droit reservée © 2020-2022`, 'https://zupimages.net/up/21/49/h8q2.png')
        
        message.channel.send({embeds: [lien]})
    }
}

module.exports = ListeStaffCommand;