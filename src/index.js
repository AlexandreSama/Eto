const EtoClient = require('./structures/EtoClient');
const Config = require('./util/config')

let client = new EtoClient({
    prefix: "?"
})

client.login(Config.TOKEN)