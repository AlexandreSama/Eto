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
                console.log('test')

                guilds.forEach((guild) => {

                    if(results.includes(guild) == true){

                        console.log('La base de données du serveur ' + guild + " est bien en place !")

                    }else{

                        connection.query('CREATE DATABASE' + "`" + guild + "`", function(err, results) {

                            if(err){
                                connection.query('USE ' + '`' + guild + '`', function(err, results){
                                    if(err){
                                        console.log('Impossible d\'utiliser cet BDD, vérifier qu\'elle existe avec son identifiant : ' + guild)
                                    }
                                    if(results){
                                        connection.query('SELECT ticketCategory FROM settings', function(err, results){
                                            if(err){
                                                console.log('La BDD ne contiens pas de settings, contacter Alexandre au plus vite ! Je vais essayer de forcer la création de cet table !')
                                                connection.query(`CREATE TABLE settings (id INT PRIMARY KEY NOT NULL, ticketCategory VARCHAR(255))`, function(err, results){
                                                    if(err){
                                                        console.log('Impossible ! Il est trop fort pour moi.. contacter Alexandre avec cet erreur, qu\'il puisse nous aider : ')
                                                        console.log(err)
                                                    }
                                                    if(results){
                                                        console.log('J\'ai réussi a forcer la création, trop forte !')
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                            if(results){

                                connection.query("USE " + '`' + guild + '`', function(err, results){
                                    if(err){
                                        console.log('Impossible d\'utiliser cet BDD, vérifier qu\'elle existe avec son identifiant : ' + guild)
                                    }
                                    if(results){
                                        connection.query('SELECT ticketCategory FROM settings', function(err, results){
                                            if(err){
                                                console.log('La BDD ne contiens pas de settings, contacter Alexandre au plus vite ! Je vais essayer de forcer la création de cet table !')
                                                connection.query(`CREATE TABLE settings (id INT PRIMARY KEY NOT NULL, ticketCategory VARCHAR(255))`, function(err, results){
                                                    if(err){
                                                        console.log('Impossible ! Il est trop fort pour moi.. contacter Alexandre avec cet erreur, qu\'il puisse nous aider : ')
                                                        console.log(err)
                                                    }
                                                    if(results){
                                                        console.log('J\'ai réussi a forcer la création de la table pour la BDD : ' + guild + ', trop forte !')
                                                    }
                                                })
                                            }
                                            if(results){
                                                console.log('La BDD est parfaitement en place !')
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
}

module.exports = ReadyListener