const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;

    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe:'Es el número hasta donde se va a multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;

    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe:'Muestra la tabla en consola'
    })
    .check((argv, options) => {
        if (isNaN(argv.l)) {
            throw 'La lista tiene que ser un boolean';
        }
        return true;
    })
    .argv;


module.exports = argv;
