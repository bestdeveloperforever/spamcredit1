const Discord = require('discord.js');
const client = new Discord.Client();

  
client.on('ready', () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
  setInterval(() => {
client.channels.get("507997196373721096").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},500);
});





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login("NTA4MzMyMDcxMjY2Mjg3NjI2.DsEK-g.YMqPsKyede-gojkLG0AdhxBq_JY");
