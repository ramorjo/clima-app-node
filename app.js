const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtner el clima',
        demand: true
    }
}).argv;

/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log);


clima.getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(console.log);*/


const getInfo = async(dir) => {

    try {
        const Infolugar = await lugar.getLugarLatLng(dir);
        const Infoclima = await clima.getClima(Infolugar.lat, Infolugar.lng);
        return (`El clima de ${Infolugar.direccion} es de ${Infoclima}`);
    } catch (error) {
        return (`No se pudo determinar el clima para ${dir}`);

    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);