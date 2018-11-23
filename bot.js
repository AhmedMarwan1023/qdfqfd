client.user.setUsername(argresult).then
    message.channel.sendMessage(**${argresult}** : تم تغيير أسم البوت إلى)
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
      } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
  } else
if (message.content.startsWith(adminprefix + 'sett')) {
  client.user.setGame(argresult, "https://www.twitch.tv/xkilleryt%22);//حقوق دايموند كودزحقوق دايموند كودز
}
});
const Discord = require('discord.js');
const client = new Discord.Client();


const adminprefix = "-";
const devs = ['510478269045538839','510478269045538839'];
client.on('message', message => {
  var argresult = message.content.split(`).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
} else 
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(${argresult} : تم تغيير أسم البوت إلى`)
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
      } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
  } else
if (message.content.startsWith(adminprefix + 'sett')) {
  client
``
client.login(process.env.BOT_TOKEN);
