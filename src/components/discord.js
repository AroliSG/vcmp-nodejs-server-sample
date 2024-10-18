
const staffId   = "1077377900107546784";
const echoId    = "";

const { Client, GatewayIntentBits } = require('discord.js');
const client                        = new Client({ intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ]
});

client.on('ready', () => {
  console.log(`Discord: Bot ${client.user.tag} has started!`);
});

client.on("messageCreate", msg => {
    if (msg.author.id === client.user.id) return;
    if (msg.channel.id !== staffId) return 1;

    let args    = msg.content
        .slice(0)
        .trim()
        .split(/ +/g),
    prefix      = args[0].charAt(0),
    cmdName     = args.shift().slice(1);

        // triggering commands
        // single prefix
    if (prefix === "!") server.events.triggerCommand([cmdName, null, args, prefix, "discord"]);
});


const messageToChannel = (msg, ch) => {
    if (!client.isReady()) return 0;

    const guild     = client.guilds.cache.find(guild => guild.id === "746317026196193341")
    const channel   = guild.channels.cache.find(channel => channel.id === ch);
    if (channel === undefined) console.log(ch + " channel not found.");
    channel.isTextBased() && channel.send(msg);
}

    // Discord bot login token
client.login("discord bot token");

module.exports = {
    client,
    messageToChannel,
    staffId,
    echoId
};

// discord events https://gist.github.com/koad/316b265a91d933fd1b62dddfcc3ff584