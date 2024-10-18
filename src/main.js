




require("./components/commands");
require("./components/dcommander");

const {
    staffId,
    messageToChannel
} = require("./components/discord");

const account  = require ( "./components/account" );
/*

    Server Events

*/

server.events.on("LoadScripts", function() {
    server.setOption([
        'AutoJoinMessages',
        'AutoDeathMessages',
    ], false);

        // disabling crouch
    server.setOption('DisableCrouch', true);
    server.createVehicle (200, 1, -293.0143127441406,-597.059326171875,12.852800369262695, 1, 1, 1);

    setTimeout(() => {
            // need to wait for discord client to initialize before sending messages
        messageToChannel(`${server.getServerName()} scripts loaded! :arrows_clockwise:`, staffId);
    }, 2000);
});

server.events.on("UnloadScripts", function() {
});

server.events.on("Init", function() {
});

server.events.on("Shutdown", function() {
});

/*

            Server Events

*/

/*

            Player Events

*/


// Function to fetch URL content


server.events.on("Incoming", function(name, password, ip) {
});

server.events.on("Connected", function(p) {
    p.data.get = new account(p);

    server.sendClientMessageToAll (`${p.getName()} [#ffffff]has joined the server.`);
    messageToChannel (`${p.getName()} has joined the server :earth_americas:`, staffId);
});

server.events.on("Disconnected", function(p, reason) {
    p.data.get.save();
    server.sendClientMessageToAll (`${p.getName ()} [#ffffff]has left the server.`);
    messageToChannel (`${p.getName ()} has left the server :baby_bottle:`, staffId);
});

    // ----------------------------------------------------------------

server.events.on("Kill", function(p, killer, reason, bp) {
    killer.data.get.Kills++;
    p.data.get.Deaths++;

    server.sendClientMessageToAll(`${p.getName()} was killed by ${killer.getName()}.`);
    messageToChannel (`${p.getName ()} got killed by ${killer.getName ()} :crossed_swords:`, staffId);
});

server.events.on("Death", function(p, reason) {
    p.data.get.Deaths++;

    server.sendClientMessageToAll(`${p.getName()} die.`);
    messageToChannel (`${p.getName ()} die :skull_crossbones:`, staffId);
});

    // ----------------------------------------------------------------

server.events.on("PrivateMessage", function(p, recipient, message) {
});

server.events.on("Message", function(p, message) {
    messageToChannel (`${p.getName ()}: ${message}`, staffId);
    return server.sendClientMessageToAll(`${p.getName ()}: ${message}`);
});

    // this event wont be triggered at least that forceCommandEvent is enabled
    // if you only want to run this event, do not create commands within the command handler, (forceCommandEvent) has to be enabled
server.events.on("Command", function(p, command, msg) {
});

    // ----------------------------------------------------------------

server.events.on("Spawn", function(p) {
});

server.events.on("RequestSpawn", function(p) {
    if (!p.data.get.Reg) {
        server.sendClientMessage(p,`You need to SignUp. Please use /signup password`);
        return false;
    }
    else if (!p.data.get.Log) {
        server.sendClientMessage(p, `You need to Log-In. Please use /login password`);
        return false;
    }
    else {
        // spawning
        return true;
    }
});

server.events.on("RequestClass", function(p, classIndex) {
    return 1;
});

    // ----------------------------------------------------------------

server.events.on("EnterVehicle", function(p, vehicle, slot) {
});

server.events.on("RequestEnterVehicle", function(p, vehicle, slot) {
});

server.events.on("ExitVehicle", function(p, vehicle) {
});

    // ----------------------------------------------------------------

server.events.on("KeyUp", function(p, key) {
});

server.events.on("KeyDown", function(p, key) {
});

server.events.on("KeyChanges", function(p, newKey, oldKey) {
});

    // ----------------------------------------------------------------

server.events.on("EndTyping", function(p) {
});

server.events.on("BeginTyping", function(p) {
});

    // ----------------------------------------------------------------

server.events.on("Spectate", function(p, target) {
});

server.events.on("AFKChanges", function(p, afk) {
});

    // ----------------------------------------------------------------

server.events.on("isCrouching", function(p, isCrouching) {
});

server.events.on("isOnFire", function(p, isOnFire) {
});

server.events.on("isOnAction", function(p, oldAction, newAction) {
});

server.events.on("StateChanges", function(p, oldState, newState) {
});

server.events.on("NameChanges", function(p, oldName, newName) {
});

    // ----------------------------------------------------------------

server.events.on("ModuleList", function(p, moduleList) {
});

server.events.on("CrashReport", function(p, logs) {
});

/*

            Player Events

*/


/*

            CheckPoints Events

*/
server.events.on("CheckPointExited", function(c, p) {
});

server.events.on("CheckPointEntered", function(c, p) {
});

/*

            CheckPoints Events

*/


/*

            Pickups Events

*/

server.events.on("PickupRespawn", function(pickup) {
});
server.events.on("PickupCollected", function(pickup, p) {
});
server.events.on("PickupAttempted", function(pickup, p) {
});

/*

            Pickup Events

*/


/*

            Object Events

*/

server.events.on("ObjTouched", function(obj, p) {
});
server.events.on("ObjShot", function(obj, p, weaponId) {
});

/*

            Object Events

*/


/*

            Vehicle Events

*/

server.events.on("VehicleExplode", function(vehicle) {
});
server.events.on("VehicleRespawn", function(vehicle) {
});


/*

            Vehicle Events

*/


/*

            Script Data Events

*/

server.events.on("ScriptData", function(p, bytes) {
});


/*
function onPlayerUpdate(p, updateType) {
    console.time('onPlayerUpdate');
    

    console.log(p.getName(), updateType)
    // Original logic goes here.
    
    console.timeEnd('onPlayerUpdate');
}


let intervalUpdate = function(p, updateType) {
    console.time('setIntervalUpdate');
    console.log(p.getName(), updateType)
    // Simulate the same logic as onPlayerUpdate.
    
    console.timeEnd('setIntervalUpdate');
};

let intervalId = setInterval(() => {
    const player = server.getPlayer(0);
    if (player)
    intervalUpdate(player, player.getState());
}, 1000);  // Adjust the interval to match the intended update rate
*/




/*
    not included within the handler
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

function onVehicleUpdate(v, u) {return handler.registerEvent("VehicleUpdate", v, u);}

*/
/*
const GetCountry = (ip) => {
    if (ip == "127.0.0.1" || ip == "localhost") return { country: "Neverland", city: "Rio Janeiro"};
    else {
        let country = geoip.lookup(ip);
        return country;
    }
}*/
//client.login( 'token' );
