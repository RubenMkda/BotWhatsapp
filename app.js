/*
 * Bot Whatsapp (personal project) v.0.1
 * Bot that send messages automatized, This is for personal use (for now)
 * i'll keep working in this bot to that funcional
 *
 * Made for: Ruben Alejandro Moncada Gomez
 * Instragram: '@rubenMkda'
 * Facebook: https://www.facebook.com/ruben.moncada.547/
 * Discord: RubenMkda#8840
 *
 *
 *        Library:
 *      Documentation: https://docs.wwebjs.dev/
 *      Web: https://wwebjs.dev/guide/
 */

const { Client, MessageMedia } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

// Use the saved values
const client = new Client({});

/*    Time for send the message

  We are use setTimeOut for now, i want to create a bucle for send the message at specific hour
*/

// 4 hours
Time = 14400000;

// 10 seconds more
TimeX = Time + 10000;

// 4 hours more
Time2 = Time + Time;

// 10 seconds more
Time3 = Time2 + 10000;

// QR Generation (this "QR" eventually will be ejecuted when the have not session)
client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

// Bot whatsapp is working
client.on("ready", () => {
  console.log("Bot listo");

  /*Searching chats and sending message autometed*/

  // Group 1  "Sólo compras y ventas"

  client.getChats().then((chats) => {
    const Group1 = chats.find((chat) => chat.name === "Sólo compras y ventas");
    setTimeout(() => {
      sendMedia(Group1.id._serialized, "Caja_dura.jpeg");
    }, Time);
  });

  client.getChats().then((chats) => {
    const Group2 = chats.find((chat) => chat.name === "Sólo compras y ventas");
    setTimeout(() => {
      sendMessage(
        Group2.id._serialized,
        "*CIGARROS IBIZA (CAJA DURA)* 🚬🚬\n\n _Caja de ibiza en 1$ (5bs)_ 💱💱\n\n _Se lleva hasta el porton de la manzana_ 🍎🍎"
      );
    }, TimeX);
  });

  client.getChats().then((chats) => {
    const Group1 = chats.find((chat) => chat.name === "Sólo compras y ventas");
    setTimeout(() => {
      sendMedia(Group1.id._serialized, "Cigarros.jpeg");
    }, Time2);
  });

  client.getChats().then((chats) => {
    const Group1 = chats.find((chat) => chat.name === "Sólo compras y ventas");
    setTimeout(() => {
      sendMessage(
        Group1.id._serialized,
        "*CIGARROS IBIZA* 🚬🚬\n\n _Caja de ibiza en 7bs_ 💸💸\n\n _Se lleva hasta el porton de la manzana_ 👺👺"
      );
    }, Time3);
  });

  /**Group 2  "Grupo ventas colina y mas" */

  client.getChats().then((chats) => {
    const Group1 = chats.find(
      (chat) => chat.name === "Grupo ventas colina y mas"
    );
    setTimeout(() => {
      sendMedia(Group1.id._serialized, "Caja_dura.jpeg");
    }, Time);
  });

  client.getChats().then((chats) => {
    const Group2 = chats.find(
      (chat) => chat.name === "Grupo ventas colina y mas"
    );
    setTimeout(() => {
      sendMessage(
        Group2.id._serialized,
        "*CIGARROS IBIZA (CAJA DURA)* 🚬🚬\n\n _Caja de ibiza en 1$ (5bs)_ 💱💱\n\n _Se lleva hasta el porton de la manzana_ 🍎🍎"
      );
    }, TimeX);
  });

  client.getChats().then((chats) => {
    const Group1 = chats.find(
      (chat) => chat.name === "Grupo ventas colina y mas"
    );
    setTimeout(() => {
      sendMedia(Group1.id._serialized, "Cigarros.jpeg");
    }, Time2);
  });

  client.getChats().then((chats) => {
    const Group1 = chats.find(
      (chat) => chat.name === "Grupo ventas colina y mas"
    );
    setTimeout(() => {
      sendMessage(
        Group1.id._serialized,
        "*CIGARROS IBIZA* 🚬🚬\n\n _Caja de ibiza en 7bs_ 💸💸\n\n _Se lleva hasta el porton de la manzana_ 👺👺"
      );
    }, Time3);
  });

  // Group 3 "VENTAS COMPRAS y CAMBIOS"

  client.getChats().then((chats) => {
    const Group1 = chats.find(
      (chat) => chat.name === "VENTAS COMPRAS y CAMBIOS"
    );
    setTimeout(() => {
      sendMedia(Group1.id._serialized, "Caja_dura.jpeg");
    }, Time);
  });

  client.getChats().then((chats) => {
    const Group2 = chats.find(
      (chat) => chat.name === "VENTAS COMPRAS y CAMBIOS"
    );
    setTimeout(() => {
      sendMessage(
        Group2.id._serialized,
        "*CIGARROS IBIZA (CAJA DURA)* 🚬🚬\n\n _Caja de ibiza en 1$ (5bs)_ 💱💱\n\n _Se lleva hasta el porton de la manzana_ 🍎🍎"
      );
    }, TimeX);
  });

  client.getChats().then((chats) => {
    const Group1 = chats.find(
      (chat) => chat.name === "VENTAS COMPRAS y CAMBIOS"
    );
    setTimeout(() => {
      sendMedia(Group1.id._serialized, "Cigarros.jpeg");
    }, Time2);
  });

  client.getChats().then((chats) => {
    const Group1 = chats.find(
      (chat) => chat.name === "VENTAS COMPRAS y CAMBIOS"
    );
    setTimeout(() => {
      sendMessage(
        Group1.id._serialized,
        "*CIGARROS IBIZA* 🚬🚬\n\n _Caja de ibiza en 7bs_ 💸💸\n\n _Se lleva hasta el porton de la manzana_ 👺👺"
      );
    }, Time3);
  });

  /*REMENBER! this is a project for send ad in my whatsapp, you can use array for search function
  
  Example: 
  
    const TheGroup = chats.find(
      (chat) => chat.name === [0]
    );

    this search the first chat in your whatsapp*/
});

client.initialize();

const sendMedia = (env, file) => {
  const mediaFile = MessageMedia.fromFilePath(`./Imag/${file}`);
  client.sendMessage(env, mediaFile);
};

const sendMessage = (env, message) => {
  client.sendMessage(env, message);
};

// Codes for renue

// client.getChats().then((chats) => {
//   const Group2 = chats.find(
//     (chat) => chat.name === "Grupo ventas colina y mas"
//   );
//   setTimeout(() => {
//     sendMedia(Group2.id._serialized, "Pepsi.png");
//   }, Time);
// });
