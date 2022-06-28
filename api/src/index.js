const {
    app,
    port
} = require('../server')

app.listen(port, () => {
    console.log('\n\nAPI na porta ' + port + '...\n');
});