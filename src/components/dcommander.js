// this actually discord commands got lazy to write discord commands or whatever
// this is a working test example


const {
    staffId,
    messageToChannel
} = require("./discord");

server.events.registerCommand("players", {
    commandAlias: ["p"],
         // will execute with discord users only
    executeWith: "discord",
    forcePrefixTo: "!",
    // caseSensitive: true,
    execute: (p, args) => {
        const l = server.getAllPlayers().map(target => target.getName());
        messageToChannel(l.length < 1 ? `no one is playing` : `Player List: ${l};`, staffId);
    },
});
