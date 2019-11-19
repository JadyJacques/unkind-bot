const TelegramBot = require('node-telegram-bot-api');
const { Random, nodeCrypto } = require('random-js');
const crypto = require('crypto');

require('dotenv-flow').config()

const random = new Random(nodeCrypto);

const token = process.env.TELEGRAM_TOKEN;

const rudeSpeech = [
  'Qual o teu problema',
  'Teu cu',
  'Merda',
  'Você é limitado?',
  'ta fazendo titica',
]

const bot = new TelegramBot(token, { polling: true })

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  let randomMessage = rudeSpeech[random.integer(0, rudeSpeech.length - 1)]
  if (random.bool(0.50))
    bot.sendMessage(chatId, randomMessage);
});
