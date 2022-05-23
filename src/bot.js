// require("dotenv").config();

// const { Client, WebhookClient } = require('discord.js');
// const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"],
// partials: ['MESSAGE', 'REACTION']});
  
// const webhookClient = new WebhookClient(
//     process.env.WEBHOOK_ID,
//     process.env.WEBHOOK_TOKEN,
//   );
// const PREFIX = "$";

// //using the ready event
// client.on('ready', () => {
//     console.log(`${client.user.tag} has logged in.`);
// });
// client.on('message', async(message) =>{
//     if (message.author.bot) return;
//     if (message.content.startsWith(PREFIX)) {
//         const [CMD_NAME, ...args] = message.content
//           .trim()
//           .substring(PREFIX.length)
//           .split(/\s+/);
//           if (CMD_NAME === 'kick') {
//               if (!message.member.hasPermission('KICK_MEMBERS'))
//               return message.reply('You do not have permissions to use that command');
//             if (args.length === 0)
//               return message.reply('Please provide an ID');
//             const member = message.guild.members.cache.get(args[0]);
//             if (member) {
//               member
//                 .kick()
//                 .then((member) => message.channel.send(`${member} was kicked.`))
//                 .catch((err) => message.channel.send('I cannot kick that user :('));
//             } else {
//               message.channel.send('That member was not found');
//             }
//           } else if (CMD_NAME === 'ban') {
//             if (!message.member.hasPermission('BAN_MEMBERS'))
//               return message.reply("You do not have permissions to use that command");
//             if (args.length === 0) return message.reply("Please provide an ID");
//             try {
//               const user = await message.guild.members.ban(args[0]);
//               message.channel.send('User was banned successfully');
//             } catch (err) {
//               console.log(err);
//               message.channel.send('An error occured. Either I do not have permissions or the user was not found');
//             }
//           } else if (CMD_NAME === 'announce') {
//             console.log(args);
//             const msg = args.join(' ');
//             console.log(msg);
//             webhookClient.send(msg);
//           }
//         }
// });

// client.on('messageReactionAdd', (reaction, user) => {
//     // console.log("hello")
//     const { name } = reaction.emoji;
//     const member = reaction.message.guild.members.cache.get(user.id);
//     if (reaction.message.id === '978006511571836938') {
//       switch (name) {
//         case '🍎':
//           member.roles.add('978008758183673887');
//           break;
//         case '🍌':
//           member.roles.add('978008944419164201');
//           break;
//         case '🍇':
//           member.roles.add('978009028720472164');
//           break;
//         case '🍑':
//           member.roles.add('978009140389617684');
//           break;
//       }
//     }
//   });

//   client.on('messageReactionRemove', (reaction, user) => {
    
//     const { name } = reaction.emoji;
//     const member = reaction.message.guild.members.cache.get(user.id);
//     if (reaction.message.id === '978006511571836938') {
//       switch (name) {
//         case '🍎':
//           member.roles.remove('978008758183673887');
//           break;
//         case '🍌':
//           member.roles.remove('978008944419164201');
//           break;
//         case '🍇':
//           member.roles.remove('978009028720472164');
//           break;
//         case '🍑':
//           member.roles.remove('978009140389617684');
//           break;
//       }
//     }
//   });
  

// client.login(process.env.DISCORDJS_BOT_TOKEN);


require("dotenv").config();

const { Client, WebhookClient } = require('discord.js');

const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"],
  partials: ['MESSAGE', 'REACTION']
});

const webhookClient = new WebhookClient({
  id:process.env.WEBHOOK_ID,
  token:process.env.WEBHOOK_TOKEN,
});

const PREFIX = "$";

client.on('ready', () => {
  console.log(`${client.user.tag} has logged in.`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = message.content
      .trim()
      .substring(PREFIX.length)
      .split(/\s+/);
    if (CMD_NAME === 'kick') {
      if (!message.member.permissions.has('KICK_MEMBERS'))
        return message.reply('You do not have permissions to use that command');
      if (args.length === 0)
        return message.reply('Please provide an ID');
      const member = message.guild.members.cache.get(args[0]);
      if (member) {
        member
          .kick()
          .then((member) => message.channel.send(`${member} was kicked.`))
          .catch((err) => message.channel.send('I cannot kick that user :('));
      } else {
        message.channel.send('That member was not found');
      }
    } else if (CMD_NAME === 'ban') {
      if (!message.member.permissions.has('BAN_MEMBERS'))
        return message.reply("You do not have permissions to use that command");
      if (args.length === 0) return message.reply("Please provide an ID");
      try {
        const user = await message.guild.members.ban(args[0]);
        message.channel.send('User was banned successfully');
      } catch (err) {
        console.log(err);
        message.channel.send('An error occured. Either I do not have permissions or the user was not found');
      }
    } else if (CMD_NAME === 'announce') {
      console.log(args);
      const msg = args.join(' ');
      console.log(msg);
      webhookClient.send(msg);
    }
  }
});

client.on('messageReactionAdd', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '') {
    switch (name) {
      case '🍎':
        member.roles.add('978008758183673887');
        break;
      case '🍌':
        member.roles.add('978008944419164201');
        break;
      case '🍇':
        member.roles.add('978009028720472164');
        break;
      case '🍑':
        member.roles.add('978009140389617684');
        break;
    }
  }
});

client.on('messageReactionRemove', (reaction, user) => {
  const { name } = reaction.emoji;
  const member = reaction.message.guild.members.cache.get(user.id);
  if (reaction.message.id === '') {
    switch (name) {
      case '🍎':
        member.roles.remove('978008758183673887');
        break;
      case '🍌':
        member.roles.remove('978008944419164201');
        break;
      case '🍇':
        member.roles.remove('978009028720472164');
        break;
      case '🍑':
        member.roles.remove('978009140389617684');
        break;
    }
  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);