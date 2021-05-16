const hashing = require('password-hash');
const db = require('better-sqlite3')('database.db');
var commands = (p, command, args) => {
    switch (command) {
        case "signup": {
            if (!p.data.get.Reg) {
                if (args [0] !== undefined && args[0].length >= 4) {
                    p.data.get.makeSignup (p, {password: hashing.generate (args [0])});
                }
                else server.sendClientMessage(p, VCMP.Colors.toHex({r:255,g:0,b:0}), `password do not meet the requirements. 4 parameters as minimun.`);
            }
            else server.sendClientMessage(p, VCMP.Colors.toHex({r:0,g:153,b:0}), `You're registered.`);
        }
        break;

        case "login": {
            if (p.data.get.Reg) {
                if (!p.data.get.Log) {
                    if (args [0] !== undefined) {
                        const row =  db.prepare('SELECT * FROM account WHERE nickname = ?').get(p.getName ());
                        p.data.get.makeLogin (p, hashing.verify(args [0], row.password));
                    }
                    else server.sendClientMessage(p, VCMP.Colors.toHex({r:255,g:0,b:0}), `please, provide a password to LogIn.`);
                }
                else server.sendClientMessage(p, VCMP.Colors.toHex({r:0,g:153,b:0}), `You're logged-in.`);
            }
            else server.sendClientMessage(p, VCMP.Colors.toHex({r:255,g:0,b:0}), `You're not registered, please proceed to Sign-Up.`);
        }
        break;
    }
}

module.exports = commands;