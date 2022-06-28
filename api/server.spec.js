const request = require('supertest')
const {
    app
} = require('./server')

describe('Teste API Rodando', () => {
    it('A API está rodando', async () => {
        const res = await request(app).get('/')

        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('message')
    })
})