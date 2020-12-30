const { Discord, MessageEmbed } = require("discord.js");
module.exports={
    name: 'role_humans',
    category: 'mod:789590144650051604> moderation',
    run: async(bot,message,args)=>{
 if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Nice try, but you can't")
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have permissions.')
  const role = message.mentions.roles.first() 
    if (!role)  {
 return message.channel.send("Please mention a role");
    }else {
   message.channel.send(`Started changing roles for humans`)
   await message.guild.members.filter(m => !m.user.bot).forEach(member => member.addRole(role))
    setTimeout(()=>{
     message.channel.send("Finsihed changing roles for humans!")
    },10000)
  }
      }
};
