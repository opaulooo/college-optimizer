const metas = require('../data/metas')
const getDatas = require('../utils/funcoes')


async function getResumos() {
    return new Promise(async (res, rej) => {
        var resumos;

        await getDatas().then((response)=>{
            console.log(response)
            resumos = response;
        })

        res(resumos)
    })
}


module.exports = {
    async get(req, res) {
        var resumos;
        await getResumos().then(async (response) => {
            resumos = response;
            res.send(resumos)
        }).catch((err) => {
            // console.log('\nHouve um erro ao retornar as comissões dos vendedores!\n')
            // console.log(err)
            res.send(err)
        })
    },
    async post(req, res) {
        var comissao = req.body;
        var comissoes = null;
        await calculaComissao(comissao).then(async (response1) => {
            await calculaBonus(response1).then(async (response2) => {

                comissoes = response2;

                // console.log('\nComissões dos vendedores retornadas com sucesso!\n')
                res.send({
                    comissoes
                })
            })

        }).catch((err) => {
            // console.log('\nHouve um erro ao retornar as comissões dos vendedores!\n')
            // console.log(err)
            res.send(err)
        })
    },
    async update(req, res) {
        var comissao = req.body;
        var comissoes = null;
        await calculaComissao(comissao).then(async (response1) => {
            await calculaBonus(response1).then(async (response2) => {

                comissoes = response2;

                // console.log('\nComissões dos vendedores retornadas com sucesso!\n')
                res.send({
                    comissoes
                })
            })

        }).catch((err) => {
            // console.log('\nHouve um erro ao retornar as comissões dos vendedores!\n')
            // console.log(err)
            res.send(err)
        })
    },
    async delete(req, res) {
        var comissao = req.body;

        await calculaComissao(comissao).then(async (response1) => {

        }).catch((err) => {
            // console.log('\nHouve um erro ao retornar as comissões dos vendedores!\n')
            // console.log(err)
            res.send(err)
        })
    },
}