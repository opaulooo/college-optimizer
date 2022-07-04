const utils = require('../utils/funcoes')
const db = require('../data/database')

async function getTarefas() {
    return new Promise(async (res, rej) => {
        var tarefas;

        let query = `SELECT * FROM TAREFAS WHERE Deletado = false;`;

        await utils.getData(query).then((response) => {
            tarefas = response;
        }).catch((err) => {
            console.log(err);
        })

        res(tarefas)
    })
}

async function postTarefa(tarefa) {
    return new Promise(async (res, rej) => {

        let data = (new Date().getTime());
        let addTarefa = {
            titulo: tarefa.titulo,
            descricao: tarefa.descricao,
            materia: tarefa.materia,
            dataInicio: tarefa.dataInicio,
            dataFim: tarefa.dataFim,
            concluido: tarefa.concluido,
            notificar: tarefa.notificar,
            dataCriacao: data,
            dataUltimaAtualizacao: data,
            dataDeletado: null,
            deletado: false,
        }

        query = `
                    INSERT INTO TAREFAS(${Object.keys(addTarefa).join(",")})
                    values(${'?'.repeat(Object.keys(addTarefa).length).split('').join(',')})
                `;

        params = Object.values(addTarefa);

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

async function putTarefa(tarefa) {
    return new Promise(async (res, rej) => {
        let data = (new Date().getTime());

        query = `
                    UPDATE TAREFAS SET
                    titulo = '${tarefa.titulo}',
                    descricao = '${tarefa.descricao}',
                    materia = '${tarefa.materia}',
                    dataInicio= '${tarefa.dataInicio}',
                    dataFim= '${tarefa.dataFim}',
                    concluido= ${tarefa.concluido},
                    notificar= ${tarefa.notificar},
                    dataUltimaAtualizacao = ${data}
                    WHERE ID = '${tarefa.ID}'
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

async function deleteTarefa(id) {
    return new Promise(async (res, rej) => {

        let data = (new Date().getTime());
        query = `
                    UPDATE TAREFAS SET
                    dataDeletado = ${data},
                    deletado = true
                    WHERE ID = '${id}'
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
        var tarefas;
        await getTarefas().then(async (response) => {
            tarefas = response;
            res.send(tarefas)
        }).catch((err) => {
            // console.log(err)
            res.send(err)
        })
    },

    async post(req, res) {
        var tarefa = req.body;
        await postTarefa(tarefa).then(async (response) => {
            if (response.ok) {

                console.log("Tarefa Adicionada com Sucesso!")

                res({
                    ok: true,
                    response: "Tarefa Adicionada com Sucesso!"
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
        var tarefa = req.body;
        await putTarefa(tarefa).then(async (response) => {
            if (response.ok) {

                console.log("Tarefa Atualizada com Sucesso!")
                res.json({
                    ok: true,
                    response: "Tarefa Atualizada com Sucesso!"
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
        await deleteTarefa(id).then(async (response) => {
            if (response.ok) {

                console.log("Tarefa Deletada com Sucesso!")

                res.json({
                    ok: true,
                    response: "Tarefa Deletada com Sucesso!"
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