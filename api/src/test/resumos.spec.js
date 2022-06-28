const request = require('supertest')
const {
    app
} = require('../../server')

describe('Teste POST Calcular Comissao', () => {
    it('Rota POST de calcular comissao está rodando', async () => {
        const res = await request(app).post('/api/calcula-comissao')
            .send([{
                    "vendedor": 1,
                    "data": "2022-03-01",
                    "valor": 500.34
                }
            ])

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('college')
    })
})