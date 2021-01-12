const db = require("quick.db")
const { prefix } = require("../../config.json")

module.exports = {
  name: "prefix",
  aliases: ["setprefix"],
  category: "moderation",
  usage: "prefix <new-prefix>",
  description: "Change the guild prefix",
  run: async (client, message, args) => {
    //PERMISSION
    if(!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send({embed: {color: 'RED', description: ":no_entry_sign: | You are not allowed or do not have permission to change prefix You need **MANAGE_GUILD** permission to use that command!"}})
    }
    
    if(!args[0]) {
      return message.channel.send({embed: {color: 'RED', description: "Please give the prefix that you want to set"}})
    } 
    
    if(args[1]) {
      return message.channel.send({embed: {color: 'RED', description: ":no_entry_sign: | You can not set prefix a double argument"}})
    }
    
    if(args[0].length > 8) {
      return message.channel.send({embed: {color: 'RED', description: ":no_entry_sign: | You can not send prefix more than 8 characters"}})
    }
    
    if(args.join("") === prefix) {
      db.delete(`prefix_${message.guild.id}`)
      return await message.channel.send({embed: {color: 'GREEN', description: "✅ | Reseted Prefix"}})
    }
    
    db.set(`prefix_${message.guild.id}`, args[0])
    await message.channel.send({embed: {color: 'GREEN', description: `Seted Bot Prefix to **${args[0]}**`}})
    
  }
}