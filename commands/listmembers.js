exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  message.channel.send("Test");
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
