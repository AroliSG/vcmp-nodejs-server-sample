// files
const account  = require ( "./components/account" );
const commands = require ( "./components/commands" );

// npm's
var geoip = require('geoip-lite');
const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', async msg => {
    server.sendClientMessageToAll ( "Aroly[#ffffff]: " + msg.content)
});

function onServerLoadScripts() {
   Vehicles: server.createVehicle (200, 1, 1009, 1003, 14.5, 1, 1, 1);
}

function onServerInitialise() {
}

function onServerUnloadScripts() {

}

function onServerShutdown() {

}

function onPlayerConnect(p) {
    server.sendClientMessageToAll (`${p.getName ()} [#ffffff]has joined the server from ${GetCountry (p.getIP ()).country} (${GetCountry (p.getIP ()).city})`);
    p.data.get = new account (p);
}


function onPlayerDisconnect(p, reason) {
    server.sendClientMessageToAll (`${p.getName ()} [#ffffff]has left the server.`);
}

function onPlayerCommand(p, message) {
    let args = message
        .slice(0)
        .trim()
        .split(/ +/g)
    , command = args.shift().toLowerCase();
    commands (p, command, args);
}

function onPlayerSpawn(p) {
}

function onPlayerRequestSpawn(p) {
    if (!p.data.get.Reg) {
        server.sendClientMessage(p, VCMP.Colors.toHex({r:255,g:0,b:0}), `You need to SignUp. Please use /signup password`);
        return false;
    }
    else if (!p.data.get.Log) {
        server.sendClientMessage(p, VCMP.Colors.toHex({r:255,g:0,b:0}), `You need to Log-In. Please use /login password`);
        return false;
    }
    else {
        // spawning
        return true;
    }
}

function onPlayerDeath(player, killer, reason, bodyPart) {

}


function onPlayerEnterVehicle(player, vehicle, slot) {

}


function onPlayerExitVehicle(player, vehicle) {

}


function onVehicleExplode(vehicle) {

}

function onPlayerCrashReport(player, crashLog) {

}


function onCheckPointExited(checkPoint, player) {

}


function onCheckPointEntered(checkPoint, player) {

}


function onPickupRespawn(pickup) {

}


function onPickupPicked(pickup, player) {

}


function onPickupPickAttempt(pickup, player) {
    return true;
}


function onObjectTouched(object, player) {

}


function onObjectShot(object, player, weaponId) {

}


function onVehicleRespawn(vehicle) {

}


function onVehicleUpdate(vehicle, updateType) {

}


function onPlayerSpectate(player, spectated) {

}


function onPlayerKeyBindUp(player, keyBindIndex) {

}


function onPlayerKeyBindDown(player, keyBindIndex) {

}


function onPlayerPrivateMessage(player, recipient, message) {

    return true;
}


function onPlayerMessage(player, message) {

}


function onPlayerAwayChange(player, isAway) {

}


function onPlayerEndTyping(player) {


}


function onPlayerBeginTyping(player) {


}


function onPlayerGameKeysChange(player, oldKeys, newKeys) {

}


function onPlayerCrouchChange(player, isCrouching) {

}


function onPlayerOnFireChange(player, isOnFire) {

}


function onPlayerActionChange(player, oldAction, newAction) {

}


function onPlayerStateChange(player, oldState, newState) {

}


function onPlayerNameChange(player, oldName, newName) {

}


function onPlayerRequestEnterVehicle(player, vehicle, slot) {

    return true;

}





function onPlayerRequestClass(player, classIndex) {

}

function onPlayerModuleList(player, list) {

}



function onClientScriptData(player, stream) {
 return 1;

    /*
        console.log(buff.readString());
        console.log(buff.readFloat());
        console.log(buff.readInt());
        console.log(buff.readByte());
    
        const stream = new VCMPStream();
        stream.writeString("lalaya");
        stream.writeFloat(5.9);
        stream.writeInt(51);
        stream.writeByte(3);
        stream.send(player);
        */

}




function onIncomingConnection(name, password, ip) {

    return name;
}




/*
    the following 5 events are very CPU and memory intensive, if you're not using them,
    comment them out or just remove them and the server will not process them,
    saving you alot of resources CPU/memory-wise and overall improving server performance
*/
/*
function onPlayerUpdate(player, updateType) {

}

function onPlayerMove(player, oldX, oldY, oldZ, newX, newY, newZ) {

}


function onPlayerHealthChange(player, lastHP, newHP) {

}

function onPlayerArmourChange(player, lastArmour, newArmour) {

}

function onPlayerWeaponChange(player, oldWep, newWep) {

}
*/

GetCountry = (ip) => {
    if (ip == "127.0.0.1" || ip == "localhost") return { country: "Neverland", city: "Rio Janeiro"};
    else {
        let country = geoip.lookup(ip);
        return country;
    }
}

client.login( 'token' );
