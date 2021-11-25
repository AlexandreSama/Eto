const EtoClient = require('./structures/EtoClient');
const Config = require('./util/config')

let client = new EtoClient({
    prefix: "?"
})

let botClient = client.user
module.exports = botClient;

client.login(Config.TOKEN)