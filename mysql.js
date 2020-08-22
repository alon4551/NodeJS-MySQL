const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yeruham@3341'
});
const execute = (Command) => {
    return new Promise(function(resolve, reject) {
        connection.query(Command, (err, rows) => {
            if (rows === undefined) {
                reject(err.message);
            } else {
                resolve(rows);
            }
        })
    })
}

module.exports = {
    execute,

}