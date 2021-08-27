module.exports.helpEmbed = function(client, message, Discord) {
  var embed = new Discord.RichEmbed()
    .setTitle("Amari Bot")
    .setDescription("List of commands for ClandFast Bot.")
    .setColor(0x00AE86)
    .setThumbnail(client.user.displayAvatarURL)
    .addField("Commands", `**:?leaderboard**
**+rank**
**+rank** \`\`@User\`\`
**+help**
**+help** \`\`COMMAND\`\`
**+invite**
**+rlevel** \`\`add/remove rolename\`\`
**+bug** \`\`bug information\`\`
**+blacklist** \`\`add/remove rolename\`\`
**+support** \`\`need help? join now!\`\`` ,true)
    .setFooter("© ClandFast", `${client.user.displayAvatarURL}`)
    message.channel.send({embed: embed});
}