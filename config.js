const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="bayemuwavictor209@gmail.com"
global.location="Ogun,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://wa.me/+2348118459271/?text=Hey";
global.website=process.env.GURL || "https://wa.me/+2348118459271/?text=Hey" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348118459271";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "true,2348118459271";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348118459271";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_51_12_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDgxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDkzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzksXG4gICAgICAgIDMzLFxuICAgICAgICA5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDQwLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDUxLFxuICAgICAgICA2NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNixcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzIsXG4gICAgICAgIDAsXG4gICAgICAgIDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjM4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODksXG4gICAgICAgIDE1OCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0LFxuICAgICAgICA3MixcbiAgICAgICAgNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDMxLFxuICAgICAgICAzOCxcbiAgICAgICAgMSxcbiAgICAgICAgNzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYUGNxck5wQWNiRXhRYnBFR2ZyVFFRQ0d3TDFad1FsT2c5eFJIT2NnbGxzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI0d3hVMjNJaFMyeTZ1TFBYRVhweEdBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjc5NjFmZjAyLTg1NjYtNDE5MS05MTYzLTIzOWU2N2MxMTJmNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICA5MyxcbiAgICAgIDIzMyxcbiAgICAgIDI0NyxcbiAgICAgIDEzNyxcbiAgICAgIDMxLFxuICAgICAgMjUxLFxuICAgICAgNjksXG4gICAgICA0MyxcbiAgICAgIDE5MixcbiAgICAgIDEwMyxcbiAgICAgIDExNSxcbiAgICAgIDM1LFxuICAgICAgMTQyLFxuICAgICAgMTgyLFxuICAgICAgMTM2LFxuICAgICAgMTUsXG4gICAgICAyNDYsXG4gICAgICAxMjMsXG4gICAgICAyMzlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTMsXG4gICAgICAxMzcsXG4gICAgICAxNTcsXG4gICAgICAyMDYsXG4gICAgICAxMTYsXG4gICAgICAxODAsXG4gICAgICAxMzksXG4gICAgICA2MixcbiAgICAgIDIwMixcbiAgICAgIDIyNixcbiAgICAgIDE5MCxcbiAgICAgIDEyNSxcbiAgICAgIDE1MyxcbiAgICAgIDIxNSxcbiAgICAgIDY2LFxuICAgICAgMTU2LFxuICAgICAgMjI5LFxuICAgICAgNTMsXG4gICAgICAxNzksXG4gICAgICAxMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTFRCVldRUTNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMTg0NTkyNzE6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjMxMTQxNzAwODE0OTE6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkNxODU4SEVOU0RocnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqa09lN3pndC9Zd2pUZHNyWjg2TllKOGFENWZLT1NsbDNBTmJEekpXa2hzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhuWEF0alJBWm03dHFPOHdvMkZzTENvZWFGTWR3U3REellNRUtuT1pCYVVyZ2U1SUJPTHFwRjZmOUZFN1Z6eFFzRXhhU2I2LzdQenJLVkxaNmpndUJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkVrdVpIcENwb044WnJDa1FKUXRRc2FDT3hnMW9rSkU4bjl0QjhVbE1meUtHK3FJM2lXQ2VBWTYxOHlsNVY4NUJaMEhqKzk0OW1rb2hVSmVmeTZjaGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMTg0NTkyNzE6MzZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ0NDM0ODBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "1", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "God's Son",
  packname: process.env.PACK_NAME || "༄✞︎𝑮𝑶𝑫'𝑺 𝑺𝑶𝑵✞︎༄",
  botname : process.env.BOT_NAME  || "God's Son",
  ownername:process.env.OWNER_NAME|| "God's Son",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "༄✞︎𝑮𝑶𝑫'𝑺 𝑺𝑶𝑵✞︎༄"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
