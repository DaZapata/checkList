const { mostrarMenu, pause } = require('./helpers/mensajes');

require('colors');
console.clear();

const main = async() => {
    console.log('Hola Mundo');

    mostrarMenu();

    let opt = '';
    do {
        opt = await mostrarMenu();
        console.log({opt});
        
        if(opt !== '0') await pause();

    } while (opt !== '0');

    pause();

}

main();