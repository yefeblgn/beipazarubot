const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

var prefix = process.env.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Bot Dosyalari Korunuyor`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Koruma Calisiyor.`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Sunucu Aktif!`);
  console.log("Beipazaru botu aktif!");
  
};