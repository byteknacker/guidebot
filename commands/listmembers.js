const json2csv = require("json2csv").parse;
const fs = require("fs");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
  const serverID = message.guild.id;
  const serverCollection = client.guilds.get(serverID);

  let memberList = [];
  serverCollection.members.forEach(member => memberList.push({"Username": member.user.username, "User ID": member.user.id}));

  // Create csv file from the list of members
  const csvFields = ["Username", "User ID"];
  const opts = { csvFields };
  let csv = json2csv(memberList, opts);
  fs.writeFile("hide/listmembers.csv", csv, function(err) {
    if (err) throw err;
    console.log("CSV file saved");
  });

  // Send results to console and save csv file.
  serverCollection.members.forEach(member => console.log(`Username: ${member.user.username}, User ID: ${member.user.id}`));
  message.author.send("The list of all members in this server has been sent to your console and saved as a csv file.");
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
