const { Telegraf, Markup } = require('telegraf');

// استبدل النص أدناه بالتوكن الخاص بك من BotFather
const bot = new Telegraf('9183629874:AAG3PAXPynfyXETP0wchGhtuyo-PeDHhUoU');

// ضع هنا رابط موقعك على GitHub Pages أو Vercel بعد ربطه (سنضع رابط مؤقت أو مباشر)
const webAppUrl = 'https://semoalking.github.io/usdt-mini-app/'; 

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
