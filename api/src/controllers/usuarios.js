// const utils = require('../utils/funcoes')
const db = require('../data/database')

async function getUsuarios() {
    return new Promise(async (res, rej) => {
        var usuarios;

        let query = `SELECT * FROM USUARIOS WHERE Deletado = false;`;

        await utils.getData(query).then((response) => {
            usuarios = response;
        }).catch((err) => {
            console.log(err);
        })

        res(usuarios)
    })
}
async function getUsuariosbyId(id) {
    return new Promise(async (res, rej) => {
        var usuarios;

                let query = `SELECT * FROM USUARIOS WHERE id=${id} end Deletado = false;`;

        await utils.getData(query).then((response) => {
            usuarios = response;
        }).catch((err) => {
            console.log(err);
        })

        res(usuarios)
    })
}

async function postUsuarios(usuario) {
    return new Promise(async (res, rej) => {

        let data = (new Date().getTime());
        let addUsuario = {
            email: usuario.email,
            senha: usuario.senha,
            nome: usuario.nome,
            dataCriacao: data,
            dataUltimaAtualizacao: data,
            dataDeletado: null,
            deletado: false,
        }

        query = `
                    INSERT INTO USUARIOS(${Object.keys(addUsuario).join(",")})
                    values(${'?'.repeat(Object.keys(addUsuario).length).split('').join(',')})
                `;

        params = Object.values(addUsuario);

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



async function deleteUsuario(usuario) {
    return new Promise(async (res, rej) => {

        let data = (new Date().getTime());
        query = `
                    UPDATE USUARIOS SET
                    dataDeletado = ${data},
                    deletado = true
                    WHERE ID = '${usuario.id}'
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
        var usuarios;
        await getUsuarios().then(async (response) => {
            usuarios = response;
            res.send(usuarios)
        }).catch((err) => {
            // console.log(err)
            res.send(err)
        })
    },

    async getbyid(req, res) {
        var usuarios;
        var id = req.params.id;
        await getUsuariosbyId(id).then(async (response) => {
            usuarios = response;
            res.send(usuarios)
        }).catch((err) => {
            // console.log(err)
            res.send(err)
        })
    },


    async post(req, res) {
        var usuario = req.body;
        await postUsuarios(usuario).then(async (response) => {
            if (response.ok) {
                
                console.log("Usuario Adicionado com Sucesso!")

                res({
                    ok: true,
                    response: "Usuario Adicionado com Sucesso!"
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

        var usuario = req.body;
        await deleteUsuario(usuario).then(async (response) => {
            if (response.ok) {

                console.log("Usuario Deletado com Sucesso!")

                res.json({
                    ok: true,
                    response: "Usuario Deletado com Sucesso!"
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