const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeUlr = encodeURI(dir);
    console.log(encodeUlr);

    const instance = axios.create({
        baseURL: `http://api.weatherstack.com/current?access_key=0128ebc3adadca73623ad260fe8871b2&query=${encodeUlr}`
    });

    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultado para ${dir}`);
    }

    const data = resp.data.location;
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}