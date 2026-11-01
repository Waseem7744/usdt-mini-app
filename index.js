const { Telegraf, Markup } = require('telegraf');

// التوكن الخاص بك
const bot = new Telegraf('9183629874:AAG3PAXPynfyXETP0wchGhtuyo-PeDHhUoU');

// رابط موقعك الجديد على جيت هب
const webAppUrl = 'https://waseem7744.github.io/usdt-mini-app/'; 

bot.start((ctx) => {
    ctx.reply(
        'مرحباً بك في بوت مهام USDT! 💰\nاضغط على الزر بالأسفل لفتح التطبيق والبدء بجمع الأرباح:',
        Markup.inlineKeyboard([
            Markup.button.webApp('🚀 فتح تطبيق المهام', webAppUrl)
        ])
    );
});

bot.launch();
console.log('البوت يعمل بنجاح!');
