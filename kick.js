const mineflayer = require('mineflayer');

const botArgs = {
    host: '', // Server ip goes here
    port: '',
    username: "", // Username to be kicked
    version: '1.20.4' 
};

let bot = mineflayer.createBot(botArgs);

bot.on('error', (err) => {
    console.log('Error occurred:', err);
    bot.end();
});

bot.on('login', () => {
    let botSocket = bot._client.socket;
    console.log(`Logged in to ${botSocket.server ? botSocket.server : botSocket._host}`);
});

bot.on('end', () => {
    console.log('Disconnected');
});

function kick() {
    if (bot && bot._client) {
        bot._client.end('ez');
    }
}

// kick in 500ms, increase delay if you're having issues
setTimeout(kick, 500);
