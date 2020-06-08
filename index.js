#!/usr/bin/env node
const program = require('commander');
const axios = require('axios');
// const consoleWeather = require('get-weather');

program.usage('-c city').option('-c, --city [city]', 'City').parse(process.argv);

const city = program.city;

const urlApi = 'https://www.tianqiapi.com/api/?version=v1&appid=24987895&appsecret=FR7DZDy4';


const weahtherEmoji = {
  lei: '⚡️',
  qing: '☀️',
  shachen: '😷',
  wu: '🌫',
  xue: '❄️',
  yu: '🌧',
  yujiaxue: '🌨',
  yun: '⛅️',
  zhenyu: '🌧',
  yin: '☁️',
  default: '',
};


(async () => {
  const result = await axios.get(urlApi, {
    params: {
      city,
    },
  });
  console.log('result', result.data)
})()

