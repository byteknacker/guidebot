exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const serverID = message.guild.id;
  const serverCollection = client.guilds.get(serverID);
  console.log(serverCollection.members);

  serverCollection.members.forEach(member => console.log(`Username: ${member.user.username}, User ID: ${member.user.id}`));

  message.channel.send("The list of all members in this server has been sent to your console.");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: "Administrator"
};

exports.help = {
  name: "listmembers",
  category: "Users",
  description: "List all members by their Discord username, regardless of roles and status, within the Discord server where this command is run.",
  usage: "stats"
};
