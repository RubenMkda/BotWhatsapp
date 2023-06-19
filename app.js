const { Client, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({});

Time = 10000;

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.getChats().then((chats) => {
  const Group1 = chats.find((chat) => chat.name === "xxxx");
    setTimeout(() => {
      sendMedia(Group1.id._serialized, "xxxx.jpeg");
    }, Time);
  });

client.initialize();

const sendMedia = (env, file) => {
  const mediaFile = MessageMedia.fromFilePath(`./Imag/${file}`);
  client.sendMessage(env, mediaFile);
};

const sendMessage = (env, message) => {
  client.sendMessage(env, message);
};
