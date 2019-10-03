const Discord = require('discord.js');
const client = new Discord.Client();

  client.on('ready', () => {
  console.log('╚[════════════════════════════════════]╝')
});
client.on('ready', () => {
      let ReBeL = ["كل خرا يا دراميكس","يلا سوي ريسيت للحساب","Fuck You Dramex","Dramex = Noob ez","Speed again reset my credits L ez Dramex"]
      setInterval(() => {
      client.channels.get(process.env.ROOM_ID).send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
      },2000);
});

const prefix = '-';

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.BOT_TOKEN);
