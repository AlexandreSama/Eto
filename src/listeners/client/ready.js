const {Listener} = require('discord-akairo');
const mysql = require('mysql2');
const config = require('../../util/config')

class ReadyListener extends Listener{
    constructor(){
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec(){

        console.log('Sarah est la meilleure !');

        const connection = mysql.createConnection({
            host: config.mysqlAuth.host,
            user: config.mysqlAuth.user
        });
        
        let guilds = this.client.guilds.cache.map(guild => guild.id)

        connection.query('SHOW DATABASES', function(err, results) {

            if(err){

                console.log("Erreur lors de la connection a la base de données OU il n'existe aucune base de données !")
                console.log(err)

            }

            if(results){

                console.log('ok ?')

                guilds.forEach((guild) => {

                    if(results.includes(guild) == true){

                        console.log('La base de données du serveur ' + guild + " est bien en place !")

                    }else{

                        console.log('Besoin de crée une base de données')

                        connection.query(`CREATE DATABASE ${guild}`, function(err, results) {

                            if(err){

                                console.log(err)

                            }

                            if(results){

                                console.log('OK !')

                            }

                        })

                    }

                })

            }

        })

    }
}

module.exports = ReadyListener