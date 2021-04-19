const { memory } = require('console');
const discord = require('discord.js');

const client = new discord.Client();

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.setMaxListeners(100);


client.once('ready', () => {
    console.log('Bot je online !');
    client.user.setActivity("!help");  
});

client.login('TOKEN');
 

const prefix = "!";
client.on("message", (message) =>

{  
  if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + "help")) 
      message.channel.send('`!napad {nápad}` - odešle váš nápad do <#anketa chanel>' + '\n' + '`!anketa {anketa}` - oděšle anketu') 
              
}); 


client.on("message", (message) => {

  if (!message.content.startsWith(prefix + 'anketa')) return;

  args = message.content.slice(prefix.length).trim().split(' ')
  command = args.shift().toLowerCase()
  text = args.join(' ');
 
    if (command === 'anketa') {
    if (!text.length) {
       return message.channel.send('napiš příkaz v tomto formátu a zkus znovu:\n !anketa {anketa}');
   
     }else
 
      channel = client.channels.cache.get('kanál');
      channel.send(`@everyone **ANKETA**: ${text}`).then(e => e.react('✅').then (e.react('❌')))
}});

client.on("message", (message) => {

            if (!message.content.startsWith(prefix + 'napad')) return;

            args = message.content.slice(prefix.length).trim().split(' ')
            command = args.shift().toLowerCase()
            text = args.join(' ');
           
              if (command === 'napad') {
              if (!text.length) {
                 return message.channel.send('napiš příkaz v tomto formátu a zkus znovu:\n !napad {tvůj nápad}');
             
               }else
           
                channel = client.channels.cache.get('kanál');
                channel.send(`**${message.author.username}**: ${text}`).then(e => e.react('✅').then (e.react('❌')))
}})
