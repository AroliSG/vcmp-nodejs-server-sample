const loki = require('lokijs');

// Initialize LokiJS database and create an "accounts" collection
const db = new loki('accounts.db', {
    autosave: true,
    autosaveInterval: 4000, // Save every 4 seconds
    autoload: true,
    autoloadCallback: databaseInitialize
});

let accounts;

function databaseInitialize() {
    accounts = db.getCollection('accounts');
    if (!accounts) {
        accounts = db.addCollection('accounts', { unique: ['nickname'] });
    }
}


class Account {
    constructor(p) {
        this.nickname = p.getName();
        this.HeadShots = 0;
        this.Kills = 0;
        this.Deaths = 0;
        this.TopSpree = 0;
        this.Bank = 0;
        this.Level = 0;
        this.Reg = false;
        this.Log = false;
        this.attempts = 0;

        const account = accounts.findOne({ nickname: this.nickname });
        if (!account) {
            server.sendClientMessage(p, 'You need to proceed to Sign-Up.');
        } else {
            if (p.getUID() === account.uid && p.getIP() === account.ip) {
                server.sendClientMessage(p, 'Welcome back to serverName!.');
                this.Reg = true;
                this.Log = true;
                this.declarePlayerData(account);
                p.setMoney(account.money);
            } else {
                server.sendClientMessage(p, 'You are registered, please proceed to Log-In.');
                this.Reg = true;
            }
        }
    }

    save() {
        db.saveDatabase((err) => {
            if (err) {
                console.error('Failed to save database:', err);
            } else {
                console.log('Database saved successfully.');
            }
        });
    }

    declarePlayerData(account) {
        this.HeadShots  = account.headshots;
        this.Kills      = account.kills;
        this.Deaths     = account.deaths;
        this.TopSpree   = account.topspree;
        this.Bank       = account.bank;
        this.Level      = account.level;
    }

    makeLogin(p, hashing, password) {
        const account = accounts.findOne({ nickname: this.nickname });
        if (account) {
            if (hashing.verify(password, account.password)) {
                this.Log = true;
                this.declarePlayerData(account);
                p.setMoney(account.money);
                server.sendClientMessage(p, 'You have been logged in successfully.');
            } else {
                this.attempts++;
                server.sendClientMessage(p, `Password incorrect. Attempt ${this.attempts}/3.`);
                if (this.attempts >= 3) {
                    p.kick();
                    server.sendClientMessageToAll(`${p.getName()} was kicked for too many failed login attempts.`);
                }
            }
        } else {
            server.sendClientMessage(p, 'Account not registered.');
        }
    }

    makeSignup(p, data) {
        const accountExists = accounts.findOne({ nickname: this.nickname });
        if (accountExists) {
            server.sendClientMessage(p, 'Account already exists.');
            return;
        }

        // Create a new account and insert it into the database
        const query = {
            nickname: this.nickname,
            password: data.password,
            headshots: 0,
            kills: 0,
            deaths: 0,
            topspree: 0,
            money: 10000,
            bank: 0,
            level: 0,
            uid: p.getUID(),
            uid2: p.getUID2(),
            ip: p.getIP()
        };

        accounts.insert(query);
        this.declarePlayerData(query);
        this.save();

        this.Reg = true;
        this.Log = true;

        p.setMoney(10000);
        server.sendClientMessage(p, 'Your account has been created successfully.');
    }

    makeSave(p) {
        const account = accounts.findOne({ nickname: this.nickname });
        if (account) {
            account.headshots = this.HeadShots;
            account.kills = this.Kills;
            account.deaths = this.Deaths;
            account.topspree = this.TopSpree;
            account.money = p.getMoney();
            account.bank = this.Bank;
            account.level = this.Level;
            account.uid = p.getUniqueId();
            account.uid2 = p.getUID2();
            account.ip = p.getIP();

            accounts.update(account);
            this.save();
            console.log('Account data saved successfully.');
        }
    }
}

module.exports = Account;
