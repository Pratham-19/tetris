const { Telegraf } = require('telegraf')

const bot = new Telegraf('7493813813:AAH-pvMAvknmKBj0f52skMRWl3bdukzlAuw')

bot.start((ctx) =>
    ctx.reply('Ready to Play', {
        reply_markup: {
            inline_keyboard: [[{ text: '🎮 Game', web_app: { url: 'https://t3cvqsnzuefio5cydnwor45gb4.srv.us/' } }]],
        },
    }),
)

bot.launch()
