const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=0f3c01bdf39d497ccf3c08bc34f2566d&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}