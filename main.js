const Discord = require('discord.js');
const client = new Discord.Client();
 
const botID = "";
const token = "";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 

 
client.on('message', msg => {
  splitcontent = msg.content.split(' ');
  if (splitcontent[0] == '-kick'){
  var member;
  try {
    member = msg.guild.member(msg.author);
  }
  catch(err) {
    console.log(err)
  }    
  if (member) {
        member
          .kick({
            reason: msg.content.replace('-kick'),
          })
          .then(() => {
            console.log(user.tag);
          })
          .catch(err => {
          });
      } 
    }

  if (splitcontent[0] == '-annoy'){
    var messagevars = msg.content.split(' ');
    var messagetext = ' ';
    for (var n = 3; n < messagevars.length; n++){
      messagetext = messagetext + messagevars[n] + ' ';
    }
    
    var spamcount = messagevars[2];
    var user = messagevars[1];
    if (spamcount < 2000 && (msg.mentions.members.first().id != 'ownerID2' || msg.mentions.members.first().id !='ownerID')){
    for (spamcount; spamcount > 0; spamcount--){
      msg.channel.send(`${user} ${spamcount} annoyances left: "${messagetext}"`);
    }
  }
  else if (msg.author.id == 'ownerID2' || msg.author.id == 'ownerID'){
    for (spamcount; spamcount > 0; spamcount--){
      msg.channel.send(`${user} ${spamcount} annoyances left: "${messagetext}"`);
  }
}
  }
  if (msg.author.id != botID){
    var string = msg.content.split(' ');
    var stringLength = string.length;      
    setTimeout(function(){
      for (var cd = stringLength; cd > 1; cd--){
        msg.channel.send("@everyone space sent AAAAH");
    }
   }, 500);
   
}
});
 
client.login(token);
