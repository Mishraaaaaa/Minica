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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_25_07_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNCxcbiAgICAgICAgMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICAyOCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIzLFxuICAgICAgICA5NixcbiAgICAgICAgNDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICA3MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDg4LFxuICAgICAgICA4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgMjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDMyLFxuICAgICAgICA5NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgyLFxuICAgICAgICA0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4LFxuICAgICAgICAxNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM2LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTczLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjM5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE1LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVOU042bmMwMXA4RjFvTGxXUmluOXU0eUxVSlhnMjNURHIzbjdZQ2tnS1k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NTU0Nzg1MzgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwN0Y3MDc4OTkzRTQ2RUIyQUYwOUYxODdGNjVEQzIzNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA0MDkxMzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOG5BaWVOMkRSbGludzJTYVBuMDBoUVwiLFxuICBcInBob25lSWRcIjogXCJiMGFmMmY4Yy0xYjhmLTQzMzMtOGUxMy1lOTdhYTU3MjM3ZmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM3LFxuICAgICAgNSxcbiAgICAgIDgxLFxuICAgICAgMTkxLFxuICAgICAgODMsXG4gICAgICAxMDUsXG4gICAgICAxNjAsXG4gICAgICAzMyxcbiAgICAgIDExOCxcbiAgICAgIDEyOCxcbiAgICAgIDcsXG4gICAgICA0NyxcbiAgICAgIDI4LFxuICAgICAgMTkzLFxuICAgICAgMzcsXG4gICAgICAyMzMsXG4gICAgICAxNzksXG4gICAgICAxODQsXG4gICAgICA0NyxcbiAgICAgIDk1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYzLFxuICAgICAgMTUzLFxuICAgICAgMTE2LFxuICAgICAgMTExLFxuICAgICAgMTI0LFxuICAgICAgMjE3LFxuICAgICAgMTkxLFxuICAgICAgMTg4LFxuICAgICAgNjYsXG4gICAgICAxOTEsXG4gICAgICAxNjcsXG4gICAgICAyMTksXG4gICAgICAxOTAsXG4gICAgICAzMCxcbiAgICAgIDU5LFxuICAgICAgMTQ4LFxuICAgICAgMTk1LFxuICAgICAgMjUzLFxuICAgICAgMTAwLFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBCQTZEVlE4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTk1NTQ3ODUzODI6MjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjY1ODQyMzAxNjkwMTA4OjIyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIi1Cb3RcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJN2t5ZlFGRUo2NHJiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkVRbUJiT0RwMmE1TlBWTVNGZkg2cTUzVC9iT2FuVWhKL01jdnpXRStqZ1E9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiek5XTEpNMks3cFhTNUNtQWtZTEdvclFEdStCTFhCS29zd2t2MGlqRDdBcmFOV1gvanFNYmsrTTh4M25JaFFKNUQrQ0EvS0lGaVQzUnFIRVc3OFZOQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTkNFOUZZWmNkWkdWTnd1K1dWbk9aMTR6dmpZTFZPVWRrTURycnJHN3YxQnZhZWhBb2pnYlNjcmMxbWNLemNkMnA3TFNLZ3RTQlN6T3FZQUU2eGVnaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTE5NTU0Nzg1MzgyOjIyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDA5MTI0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTjJMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOMkwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJEeUpTU3J0NGNvZGxLcTJPSU1rcUJzTHdxZWs4ZjFNc1Z4ZU0yN1BMamFjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODY2NTU3NTIsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDM1NDQwOTE0MlwifSIKfQ=="  // PUT your SESSION_ID 


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
