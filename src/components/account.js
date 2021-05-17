const db = require('better-sqlite3')('database.db');
class account {
    HeadShots       = 0;
    Kills           = 0;
    Deaths          = 0;
    KillingSpree    = 0;
    TopSpree        = 0;
    Bank            = 0;
    Level           = 0;

    Reg             = false;
    Log             = false;

    attempts        = 0;
    Owner           = "LBR.AroliS^";

    constructor (p) {
       
        const q =  db.prepare('SELECT * FROM account WHERE nickname = ?').get(p.getName ());
        if (q == undefined) {
            server.sendClientMessage(p, p.getColour(), `You need to proceed to Sign-Up.`);
        }
        else {
            if (p.getUniqueId () == q.uid && p.getIP () == q.ip) {
                server.sendClientMessage(p, p.getColour(), `welcome back to serverName!.`);
                this.Reg = true;
                this.Log = true;
            }
            else {
                server.sendClientMessage(p, p.getColour(), `You're registered, please proceed to Log-In.`);
                this.Reg = true;
            }
        }
    }

    makeLogin = function (p, hashing, password) {
        const q = db.prepare('SELECT * FROM account WHERE nickname = ?').get(p.getName ());
        if (q) {
           if (hashing.verify(password, row.password)) {
                this.Log = true;
                
                this.HeadShots       = q.headshots;
                this.Kills           = q.kills;
                this.Deaths          = q.deaths;
                this.KillingSpree    = q.killingspree;
                this.TopSpree        = q.topspree;
                this.Bank            = q.bank;
                this.Level           = q.level;    

                p.setMoney (q.money);            
                server.sendClientMessage(p, VCMP.Colors.toHex({r:0,g:153,b:0}), `You have been logged-in into your account sucessfully.`);
           }
           else {
                server.sendClientMessage(p, VCMP.Colors.toHex({r:255,g:0,b:0}), `password given was not correct. ${this.attempts+1}/3`);
                this.attempts++;
                if (this.attempts == 3) {
                    p.kick ();
                    server.sendClientMessageToAll (`${p.getName ()} was kicked by nodejs bot, reason: e.e`);
                }
           }
        }
        else {
            server.sendClientMessage(p, p.getColour(), `looks like your account is bugged. Contact a developer.`);
        }
    }

    makeSignup = function (p, data) {
        const Id = db.prepare('SELECT * FROM account').all().length; // auto increment
        
        let q = db.prepare('INSERT INTO account (id, nickname, password, headshots, kills, deaths, topspree, money, bank, level, uid, uid2, ip) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)');
        q.run (Id,p.getName (), data.password, 0, 0, 0, 0, 10000, 0, 0, p.getUniqueId (), 0, p.getIP ());

        this.Reg = true;
        this.Log = true;
        
        this.HeadShots       = 0;
        this.Kills           = 0;
        this.Deaths          = 0;
        this.KillingSpree    = 0;
        this.TopSpree        = 0;
        this.Bank            = 0;
        this.Level           = 0;     
        p.setMoney (10000);

        server.sendClientMessage(p, p.getColour(), `Your account was created, Enjoy this wonderful js server`);
    }
}


   // table creation
   db.exec ("CREATE TABLE account (id integer, nickname text, password txt, headshots integer, kills integer, deaths integer, topspree integer, money integer, bank integer, level integer, uid bigint, uid2 text, ip text)");


module.exports = account;
