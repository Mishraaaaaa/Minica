const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="amitmishra301106gmail.com"
global.location="Uttar Pradesh,  India."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mishiamit:#Sam@98167@bot.itubzes.mongodb.net/?retryWrites=true&w=majority&appName=Bot"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Kolkata/India";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Mishraaaaaa" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919554785382";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true,917018274372";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_53_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OCxcbiAgICAgICAgODIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAzMixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDYzLFxuICAgICAgICA1NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzcsXG4gICAgICAgIDgzLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDExMCxcbiAgICAgICAgODYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDgsXG4gICAgICAgIDQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAwLFxuICAgICAgICAyNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICA0OSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMwLFxuICAgICAgICA1MSxcbiAgICAgICAgMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDgzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODcsXG4gICAgICAgIDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzLFxuICAgICAgICAyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDYxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU3LFxuICAgICAgICAyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MixcbiAgICAgICAgMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic1ZVS1ZrREprR2NIMkNEaWpTT2o2d0dJTXRPaGpWKzJTcWNBTUNsMkdkTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk1NTQ3ODUzODJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRBNEFGNzA1OTAxOEU5M0QyODg4OURGNDUwOTcxNDg3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDQwMzU3OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTU1NDc4NTM4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkM5MUIxNjk3RUQ1N0I4QTEyQ0IzNDRFRkE1RDI2QkFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNDAzNTc5XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkNsZThHM2lQUnNHcVBZYm9ZUUl6NGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGZlYzc3NDgtYmI0Mi00Njg0LWJiZjAtMGU5ZGY2ZTczMmZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMCxcbiAgICAgIDE4MyxcbiAgICAgIDY1LFxuICAgICAgMTUyLFxuICAgICAgMTk5LFxuICAgICAgMjEsXG4gICAgICAyMzUsXG4gICAgICAyMDEsXG4gICAgICAyMjQsXG4gICAgICAxOTcsXG4gICAgICA1MixcbiAgICAgIDE4NCxcbiAgICAgIDUsXG4gICAgICAxODQsXG4gICAgICA3OSxcbiAgICAgIDE0NSxcbiAgICAgIDIwOCxcbiAgICAgIDk0LFxuICAgICAgNDEsXG4gICAgICAyNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjUsXG4gICAgICAxNTMsXG4gICAgICA4NyxcbiAgICAgIDI1NCxcbiAgICAgIDIzNyxcbiAgICAgIDIwOSxcbiAgICAgIDE2NyxcbiAgICAgIDUwLFxuICAgICAgMjA2LFxuICAgICAgMTIzLFxuICAgICAgOTEsXG4gICAgICA0MyxcbiAgICAgIDI3LFxuICAgICAgODgsXG4gICAgICA4MCxcbiAgICAgIDIzOSxcbiAgICAgIDEzMixcbiAgICAgIDE1NixcbiAgICAgIDIxOCxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZUN042WFJMXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk1NTQ3ODUzODI6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY1ODQyMzAxNjkwMTA4OjIxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIi1Cb3RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJM2t5ZlFGRVBTTXJiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVRbUJiT0RwMmE1TlBWTVNGZkg2cTUzVC9iT2FuVWhKL01jdnpXRStqZ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSitXaEZZTlR0dXdkZzJLK2FGOWFuVFhpL01LZ1U2cTBQeWhva3NQblltM2g1bW9pL0VIYUJHaU5KdHdxT0ZoU2xKRUhtNURVdDc4S053VTdpMVYxQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRDc5c1dmK21RTXZNSHVjZC9KZndkaWx3VUljUmhNd0hZL3JPRnFGQ0lQblptalNtRXlENG14bUJOdm5kTUQ0T3FLTzVOSTVqSE5BMjVlZlh5SDcramc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NTU0Nzg1MzgyOjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDAzNTc1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjJMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOMkwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEeUpTU3J0NGNvZGxLcTJPSU1rcUJzTHdxZWs4ZjFNc1Z4ZU0yN1BMamFjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODY2NTU3NTIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDM1NDQwOTE0MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Minica Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```Minica```", //*Minica*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Minica",
  ownername:process.env.OWNER_NAME|| "Mishraaaaaa",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
