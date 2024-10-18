const {
    staffId,
    messageToChannel
} = require("./discord");

const hashing = require('password-hash');

server.events.registerCommandPrefixes([".", "!", ";"], {
    disableCmdTextOutput: true,
    commandDelayInSecs: 500, // 500 ms timeout
    commandNotFoundCallback: (p, prefix, cmdName) => {
            // for discord commands
        if (p === null) return messageToChannel(`Command not found. Type "${prefix}help" for a list of commands.`, staffId);

            // for vcmp commands
        return server.sendClientMessage(p, `Command not found. Type "${prefix}help" for a list of commands.`);
    },

    commandDelayCallback: (p, delay, prefix, cmdName) => {
            // for discord commands
        if (p === null) return messageToChannel(`Anti-Spam: Command is delayed for.`, staffId);

            // for vcmp commands
        return server.sendClientMessage(p, 'Anti-Spam: Command is delayed for ' + delay);
    }
});

server.events.registerCommand("register", {
    commandAlias: ["reg", "signup"],
    executeWith: "vcmp",
        // will force this command to works only with this prefix
    forcePrefixTo: "/",
    caseSensitive: true,
    execute: (p, args) => {
        if (!p.data.get.Reg) {
            if (args[0]&& args[0].length >= 4) {
                p.data.get.makeSignup (p, {password: hashing.generate (args [0])});
            }
            else server.sendClientMessage(p, `password do not meet the requirements. 4 parameters as minimum.`);
        }
        else server.sendClientMessage(p, `You're registered.`);
    },
});

server.events.registerCommand("login", {
    commandAlias: ["log", "signin"],
    executeWith: "vcmp",
        // will force this command to works only with this prefix
    forcePrefixTo: "/",
    caseSensitive: true,
    execute: (p, args) => {
        if (p.data.get.Reg) {
            if (!p.data.get.Log) {
                if (args[0]) {
                    p.data.get.makeLogin (p, hashing, args [0]);
                }
                else server.sendClientMessage(p, `please, provide a password to LogIn.`);
            }
            else server.sendClientMessage(p, `You're logged-in.`);
        }
        else server.sendClientMessage(p, `You're not registered, please proceed to Sign-Up.`);
    },
});

    // cross command support
    // command not finished yet but you got the idea
server.events.registerCommand("fps", {
    commandAlias: ["ping"],
        // avoid using this when cross command
    // executeWith: "vcmp",
    execute: (p, args) => {
        let target = server.getPlayer(args[0]);
        if (args.length === 0) {
                // if discord
            if (p === null) return messageToChannel(`Please enter provide a player.`, staffId);
            target = p;
        }
            // avoid discord user to trigger this command
        server.sendClientMessage(p, target.getName() + `'s fps: ` + target.getFPS());
        server.sendClientMessage(p, target.getName() + `'s Ping: ` + target.getPing());
    },
});

server.events.registerCommand("stats", {
    commandAlias: ["stat", "info"],
    executeWith: "vcmp",
    execute: (p, args) => {
        const {
            HeadShots,
            Kills,
            Deaths,
            TopSpree
        } = p.data.get;
            // avoid discord user to trigger this command
        if (!p) return;

        server.sendClientMessage(p,
        `Your statistics
        > HeadShots: ${HeadShots},
        > Kills: ${Kills},
        > Deaths: ${Deaths},
        > TopSpree: ${TopSpree}`.trim());
    },
});

    // test command execution
server.events.registerCommand("teleport", {
    commandAlias: ["goto"],
    executeWith: "vcmp",
    execute: (p, args) => {
        const pos = p.getPosition();
        p.setPosition(-285.0143127441406,-597.059326171875,12.852800369262695);
        server.sendClientMessage(p, `Teleported to: X: ${pos.x} & Y: ${pos.y} `);
    },
});

