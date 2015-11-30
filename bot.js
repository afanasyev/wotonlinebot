var TelegramBot = require('node-telegram-bot-api');

var bot = new TelegramBot(process.env.TIMES, {polling: true});
// bot.setWebHook(domain+':'+port+'/bot'+token);
bot.on('message', function (msg) {
    console.log(msg);
});
