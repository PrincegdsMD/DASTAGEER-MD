/* 
* Created By Shyro
* MIT Licence
* Copyright: 2023 - 2024
* Thanks For Slemek And XYZ Team
* Wea Bot || Airi Multidevice
* Note: Jangan Memperjual Belikan Source Code Ini Kepada Orang Yang Tidak Bertanggung Jawab!
* Contact Support: +6281998885279
*/

const NeoApi = require("@neoxr/wb");
const fs = require("fs");
const Airii = new NeoApi();

global.owner = [
  ["6287735348548"],
]; 

global.numberbot = "6283832090680";
global.nameowner = "SHYRO",
global.nomorown = "6287735348548";
global.APIs = {
 tofu: 'https://apis-awesome-tofu.koyeb.app'
}
global.APIKeys = {}
global.namebot = "Airi BETA";
global.version = "1.2";
global.wm = "The Simple WhatsApp Bot"
global.packname = "WhatsApp Bot With Baileys";
global.author = `Airi BETA v1.2`;
global.sky = "https://0x0.st/XBm6.jpg"
global.Func = Airii.Function;
global.Miaw = fs.readFileSync(`./package.json`)
global.Beton = require('./function/funcbeton.js')
/*====================
     OTHER ( Danger Zone )
=======================*/
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update AiriSystem.js");
  delete require.cache[file];
  require(file);
});

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}