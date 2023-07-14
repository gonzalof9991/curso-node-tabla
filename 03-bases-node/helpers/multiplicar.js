const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5, hasta = 10, listar = false) => {
    return new Promise((resolve, reject) => {
        try {
            let salida = '';
            for (let i = 1; i <= hasta ; i++) {
                salida += `${base} x ${i} = ${base * i}\n`;
            }
            if (listar) {
                console.log('===================='.rainbow);
                console.log(`   Tabla del: ${base}`.cyan);
                console.log('===================='.rainbow)
                console.log(salida.yellow);
            }
            fs.writeFileSync(`files/tabla-${base}.txt`, salida);
            resolve(`tabla-${base}.txt`);
        }catch (e) {
            reject(e);
        }
    });

}

module.exports = {
    crearArchivo
}
