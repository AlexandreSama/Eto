const {ModMailClient} = require('reconlx')
const client = require('../index')

const modmailClient = new ModMailClient({
    client,
    guildId: '866045871879749694',
    category: '913192200182046780',
    modmailRole: '866047807983321108',
    transcriptChannel: '913193214608048138',
    mongooseConnectionString: 'mongodb+srv://Eto:alexandre123Sa@eto.xugnr.mongodb.net/test'
})

module.exports = modmailClient;