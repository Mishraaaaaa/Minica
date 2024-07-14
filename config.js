const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="amitmishra301106@gmail.com"
global.location="Delhi,India."


global.mongodb= process.env.MONGODB_URI || "mongosh "mongodb+srv://cluster0.xdczdht.mongodb.net/" --apiVersion 1 --username amitmishra23 --password #Sam@98167"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Kolkata,India";
global.github=process.env.GITHUB|| "https://github.com/mishiamit";
global.gurl  =process.env.GURL  || "";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Monica" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "917018274372";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_17_07_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMjI3LFxuICAgICAgICA2MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDY5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDMwLFxuICAgICAgICA2NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY2LFxuICAgICAgICA4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODgsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICA0LFxuICAgICAgICA4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICA1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgNixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA4OSxcbiAgICAgICAgMixcbiAgICAgICAgMTUxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDksXG4gICAgICAgIDU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNCxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDMyLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICA3MSxcbiAgICAgICAgOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXVUh5VEZVQ3FTOVRsa0dXQkY4bXd2aC9XaStHVVR6Qk5xMTBxR25MZDU4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTU1NDc4NTM4MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkJGN0VDNzM5NEUxMkRDNTM4REU2QjM5RTBGRUY1RUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwOTU1ODU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NTU0Nzg1MzgyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RkNGNTJCMEJCMkVENzhDMUZEQzc2Rjk5RURCRTREOVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA5NTU4NTVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTE1KUlRWMGxUN2FFQlJkbmNyMFVXUVwiLFxuICBcInBob25lSWRcIjogXCJlNGQ2ZTUzZS1hYThhLTQwZGEtYmE0Zi04YjcwOTQ3ZWRiMjdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAyLFxuICAgICAgMTAsXG4gICAgICAxNDcsXG4gICAgICAyMDksXG4gICAgICAxMzIsXG4gICAgICAxMjIsXG4gICAgICAxOSxcbiAgICAgIDE4MyxcbiAgICAgIDIxNSxcbiAgICAgIDE0NyxcbiAgICAgIDc2LFxuICAgICAgMTUwLFxuICAgICAgMTA2LFxuICAgICAgMTk5LFxuICAgICAgMTcyLFxuICAgICAgMTg1LFxuICAgICAgMjMsXG4gICAgICAxMzAsXG4gICAgICA1MixcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAyMjQsXG4gICAgICAyNDgsXG4gICAgICA0MixcbiAgICAgIDE0MSxcbiAgICAgIDIwMyxcbiAgICAgIDczLFxuICAgICAgMTAzLFxuICAgICAgMTcsXG4gICAgICAxOSxcbiAgICAgIDkxLFxuICAgICAgODcsXG4gICAgICA1MSxcbiAgICAgIDIxOCxcbiAgICAgIDM2LFxuICAgICAgMjA5LFxuICAgICAgMTE1LFxuICAgICAgODEsXG4gICAgICAxMTIsXG4gICAgICA2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3UFlIQlA3M1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5NTU0Nzg1MzgyOjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2NTg0MjMwMTY5MDEwODoyNUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCItQm90XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSS9reWZRRkVNZm56clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFUW1CYk9EcDJhNU5QVk1TRmZINnE1M1QvYk9hblVoSi9NY3Z6V0UramdRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInB5bXhDSGhGWW5rRlQ5YkE4bWN4ejdScjMwNGJkZ1hvWGU0WnFnbDVKL1NFeE0wTzdqUlNrbHdQV3laMGRxeEdaWVBDSW1BVi9xTWIyVml1VUM3N0F3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInNVREVnbzBVTUhNbXFERlVkVy9jSUIrL3hMdUhtbWFGSVVVdjlSQVFjbWVmUmo0bWdjQks4YjBmNXpNaEVic2pTZlNhc0hJY3JmT1lmSUIvVE1pakRRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxOTU1NDc4NTM4MjoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDk1NTg1MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUlEWFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSURYLmpzb24iOiAie1wia2V5RGF0YVwiOlwianZ2d1pnTU5HcHpFcmVZTERwTFFrYUw2VmVseVl0cUtHdlJ2MFlSY2JVZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTg2NjU1NzU5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA5NTU4NTM1MzZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" Monica"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Monica",
  ownername:process.env.OWNER_NAME|| "Mishraaaaaa",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-None-XHgdqFmwh0SrfVOPo3xnT3BlbkFJlTYuiS3FyZPdfmBWNz8Y",
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
