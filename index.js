#!/usr/bin/env node
const program = require('commander');
const axios = require('axios');
const chalk = require('chalk');
const pkg = require('./package.json')
// const consoleWeather = require('get-weather');

program.version(pkg.version).usage('-c city').option('-c, --city [city]', 'City').parse(process.argv);

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
  if (result.status !== 200) {
    const message = result.data ? result.data.message : '请求出错'
    throw new Error(message);
  }
  const { data } = result;

  console.log("\n")
  console.log(chalk.bgGreen(`Weather fetched on ${data.update_time}`));
  console.log("\n")
  data.data.forEach((item, index) => {
    const { wea_img, day, tem, humidity, air, win_speed, wea } = item;
    if (index === 0) {
      console.log(`${data.city} ${weahtherEmoji[wea_img]} ${day}  🌡️ ${tem}  💧 ${humidity}  💨 ${air}  🌬 ${win_speed} ${wea}`)
      console.log("===================================================")
    } else {
      console.log(`${data.city} ${weahtherEmoji[wea_img]} ${day}  🌡️ ${tem}  🌬 ${win_speed} ${wea}`)
    }
  })
  console.log("\n")
})()


