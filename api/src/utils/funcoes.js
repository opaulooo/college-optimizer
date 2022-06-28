const db = require("../../database");

module.exports = {
    async getDatas(query) {
        return new Promise((resolve, reject) => {
            var retorno = [];
            db.all(query, [], (err, rows) => {
                if (err) {
                    reject(err);
                }
                if (rows && rows.length > 0) {
                    rows.forEach((row) => {
                        retorno.push(row);
                    });

                    resolve(retorno);
                } else {
                    resolve([]);
                }
            });
        });
    }
}