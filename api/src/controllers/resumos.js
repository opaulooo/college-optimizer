const utils = require('../utils/funcoes')
const db = require('../data/database')

async function getResumos() {
    return new Promise(async (res, rej) => {
        var resumos;

        let query = `SELECT * FROM RESUMOS WHERE Deletado = false;`;

        await utils.getData(query).then((response) => {
            resumos = response;
        }).catch((err) => {
            console.log(err);
        })

        res(resumos)
    })
}

async function postResumo(resumo) {
    return new Promise(async (res, rej) => {

        let data = (new Date().getTime());
        let addResumo = {
            titulo: resumo.titulo,
            materia: resumo.materia,
            breveDescricao: resumo.breveDescricao,
            resumo: resumo.resumo,
            dataCriacao: data,
            dataUltimaAtualizacao: data,
            dataDeletado: null,
            deletado: false,
        }

        query = `
                    INSERT INTO RESUMOS(${Object.keys(addResumo).join(",")})
                    values(${'?'.repeat(Object.keys(addResumo).length).split('').join(',')})
                `;

        params = Object.values(addResumo);

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

async function putResumo(resumo) {
    return new Promise(async (res, rej) => {

        let data = (new Date().getTime());
        
        query = `
                    UPDATE RESUMOS SET
                    titulo = '${resumo.titulo}',
                    materia = '${resumo.titulo}',
                    breveDescricao = '${resumo.breveDescricao}',
                    resumo = '${resumo.resumo}',
                    dataUltimaAtualizacao = ${data}
                    WHERE ID = ${resumo.ID}
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

async function deleteResumo(id) {
    return new Promise(async (res, rej) => {

        let data = (new Date().getTime());
        query = `
                    UPDATE RESUMOS SET
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
        var resumos;
        await getResumos().then(async (response) => {
            resumos = response;
            res.send(resumos)
        }).catch((err) => {
            // console.log(err)
            res.send(err)
        })
    },

    async post(req, res) {
        var resumo = req.body;
        await postResumo(resumo).then(async (response) => {
            if (response.ok) {

                console.log("Resumo Adicionado com Sucesso!")

                res({
                    ok: true,
                    response: "Resumo Adicionado com Sucesso!"
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
        var resumo = req.body;
        await putResumo(resumo).then(async (response) => {
            if (response.ok) {

                console.log("Resumo Atualizado com Sucesso!")
                res.json({
                    ok: true,
                    response: "Resumo Atualizado com Sucesso!"
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
        await deleteResumo(id).then(async (response) => {
            if (response.ok) {

                console.log("Resumo Deletado com Sucesso!")

                res.json({
                    ok: true,
                    response: "Resumo Deletado com Sucesso!"
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