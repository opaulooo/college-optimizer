const utils = require('../utils/funcoes')
const db = require('../data/database')

async function getMaterias() {
    return new Promise(async (res, rej) => {
        var materias;

        let query = `SELECT * FROM MATERIAS WHERE Deletado = false;`;

        await utils.getData(query).then((response) => {
            materias = response;
        }).catch((err) => {
            console.log(err);
        })

        res(materias)
    })
}

async function postMateria(materia) {
    return new Promise(async (res, rej) => {

        let data = (new Date().getTime());


        let addMateria = {
            materia: materia.materia,
            periodo: materia.periodo,
            descricao: materia.descricao,
            quantidadeaulas: materia.quantidadeaulas,
            quantidadefaltas: materia.quantidadefaltas, 
            dataCriacao: data,
            dataUltimaAtualizacao: data,
            dataDeletado: null,
            deletado: false,
        }

        query = `
                    INSERT INTO MATERIAS(${Object.keys(addMateria).join(",")})
                    values(${'?'.repeat(Object.keys(addMateria).length).split('').join(',')})
                `;

        params = Object.values(addMateria);
        try {
            db.run(query, params);
            res({
                ok: true
            });
        } catch (err) {
            console.log(err);
            res({
                ok: false
            });
        }
    });
}

async function putMateria(materia) {
    return new Promise(async (res, rej) => {

        let data = (new Date().getTime());
        query = `
                    UPDATE MATERIAS SET
                    materia = '${materia.materia}',
                    periodo = '${materia.periodo}',
                    descricao = '${materia.descricao}',
                    quantidadeaulas=${materia.quantidadeaulas},
                    quantidadefaltas=${materia.quantidadeaulas},
                    dataUltimaAtualizacao = ${data}
                    WHERE ID = '${materia.id}'
                `;

        try {
            db.run(query);
            res({
                ok: true
            });
        } catch (err) {
            console.log(err);
            res({
                ok: false
            });
        }
    });
}


async function putFrequencia(materia) {
    return new Promise(async (res, rej) => {

        let data = (new Date().getTime());
        query = `
                    UPDATE MATERIAS SET
                    quantidadeaulas=${materia.quantidadeaulas},
                    quantidadefaltas=${materia.quantidadeaulas},
                    dataUltimaAtualizacao = ${data}
                    WHERE ID = ${materia.ID}
                `;

        try {
            db.run(query);
            res({
                ok: true
            });
        } catch (err) {
            console.log(err);
            res({
                ok: false
            });
        }
    });
}

async function deleteMateria(id) {
    return new Promise(async (res, rej) => {

        let data = (new Date().getTime());
        query = `
                    UPDATE MATERIAS SET
                    dataDeletado = ${data},
                    deletado = true
                    WHERE ID = ${id}
                `;

        try {
            db.run(query);
            res({
                ok: true
            });
        } catch (err) {
            console.log(err);
            res({
                ok: false
            });
        }
    });
}


module.exports = {
    async get(req, res) {
        var materias;
        await getMaterias().then(async (response) => {
            materias = response;
            res.send(materias)
        }).catch((err) => {
            // console.log(err)
            res.send(err)
        })
    },

    async post(req, res) {
        var materia = req.body;
        await postMateria(materia).then(async (response) => {
            if (response.ok) {

                console.log("Materia Adicionada com Sucesso!")

                res({
                    ok: true,
                    response: "Materia Adicionada com Sucesso!"
                });
            } else {
                res.json({
                    ok: true,
                    error: err
                });
            }
        }).catch((err) => {
            // console.log(err)
            res.json({
                ok: true,
                error: err
            });
        })
    },

    async update(req, res) {
        var materia = req.body;
        await putMateria(materia).then(async (response) => {
            if (response.ok) {

                console.log("Materia Atualizada com Sucesso!")
                res.json({
                    ok: true,
                    response: "Materia Atualizada com Sucesso!"
                });
            } else {
                res.json({
                    ok: true,
                    error: err
                });
            }
        }).catch((err) => {
            // console.log(err)
            res.json({
                ok: true,
                error: err
            });
        })

    },

    async updatefrequencia(req, res) {
        var frequencia = req.body;
        await putFrequencia(frequencia).then(async (response) => {
            if (response.ok) {

                console.log("Frequencia Atualizada com Sucesso!")
                res.json({
                    ok: true,
                    response: "Frequencia Atualizada com Sucesso!"
                });
            } else {
                res.json({
                    ok: true,
                    error: err
                });
            }
        }).catch((err) => {
            // console.log(err)
            res.json({
                ok: true,
                error: err
            });
        })

    },


    async delete(req, res) {

        var id = req.params.id;
        await deleteMateria(id).then(async (response) => {
            if (response.ok) {

                console.log("Materia Deletada com Sucesso!")

                res.json({
                    ok: true,
                    response: "Materia Deletada com Sucesso!"
                });
            } else {
                res.json({
                    ok: true,
                    error: err
                });
            }
        }).catch((err) => {
            // console.log(err)
            res.json({
                ok: true,
                error: err
            });
        })
    },
}