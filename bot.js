const Discord = require('discord.js');
const client = new Discord.Client();

  
client.on('ready', () => {
      let ReBeL = ["هلا بلزين تراني بوت تبند اشيلك","هي انا بولعها كريديتس لوووووول","Hi Im Credits Agaaaaaaaaain"]
  setInterval(() => {
client.channels.get("483355188954923041").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},5000);
});





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.login("NTA4MzMyMDcxMjY2Mjg3NjI2.DsEK-g.YMqPsKyede-gojkLG0AdhxBq_JY");
