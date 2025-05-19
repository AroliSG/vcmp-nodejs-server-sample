// index.d.ts

/**
 * Global server object for VC:MP Node.js
 * @global
 */
declare const server: Server;


type serverPickupTypes = {
  id: number;
  delete: () => void;
  isStreamedForPlayer: (player: ServerPlayerTypes) => boolean;
  setWorld: (worldId: number) => void;
  getWorld: () => number;
  setAlpha: (alpha: number) => void;
  getAlpha: () => number;
  setAutomatic: (auto: boolean) => void;
  isAutomatic: () => boolean;
  setAutomaticTimer: (timer: number) => void;
  getAutomaticTimer: () => number;
  refresh: () => void;
  setPosition: ( x: number, y: number, z: number ) => void;
  getPosition: () => { x: number, y: number, z: number };
  setOption: (setting: number, value: value) => void;
  getModel: () => number;
  getQuantity: () => number;
  isValid: () => boolean;
  getId: () => number;
  data: Record<string, any> = {};
}

type serverCheckPointTypes = {
  id: number;
  delete: () => void;
  isStreamedForPlayer: (player: ServerPlayerTypes) => boolean;
  setWorld: (worldId: number) => void;
  getWorld: () => number;
  setColour: (color: string) => void;
  getColour: () => {r:number; g:number; b:number, a:number;};
  isValid: () => boolean;
  setPosition: ( x: number, y: number, z: number ) => void;
  getPosition: () => { x: number, y: number, z: number };
  setRadius: (radius: number) => void;
  getRadius: () => number;
  getOwner: () => ServerPlayerTypes;
  getId: () => number;
  data: Record<string, any> = {};
}

type serverObjectTypes = {
  /*  id: 0;
    delete: [Function: delete];
    setShotReportEnabled: [Function: setShotReportEnabled];
    isShotReportEnabled: [Function: isShotReportEnabled];
    isTouchedReportEnabled: [Function: isTouchedReportEnabled];
    isStreamedForPlayer: [Function: isStreamedForPlayer];
    setTouchedReportEnabled: [Function: setTouchedReportEnabled];
    moveBy: [Function: moveBy];
    setAlpha: [Function: setAlpha];
    getAlpha: [Function: getAlpha];
    getPosition: [Function: getPosition];
    rotateByEuler: [Function: rotateByEuler];
    getRotation: [Function: getRotation];
    moveTo: [Function: moveTo];
    setWorld: [Function: setWorld];
    setPosition: [Function: setPosition];
    getModel: [Function: getModel];
    getWorld: [Function: getWorld];
    rotateToEuler: [Function: rotateToEuler];
    rotateBy: [Function: rotateBy];
    rotateTo: [Function: rotateTo];
    getRotationEuler: [Function: getRotationEuler];
    getId: [Function: getId];
    attachData: [Function: attachData];
    print: [Function: print];
    data: {}*/
}

type serverVehicleTypes = {
  /*  id: 1;
    getTyreStatus: [Function: getTyreStatus];
    getDoorStatus: [Function: getDoorStatus];
    getPanelStatus: [Function: getPanelStatus];
    setDoorStatus: [Function: setDoorStatus];
    setTyreStatus: [Function: setTyreStatus];
    setPanelStatus: [Function: setPanelStatus];
    delete: [Function: delete];
    setSpawnRotationEuler: [Function: setSpawnRotationEuler];
    isStreamedForPlayer: [Function: isStreamedForPlayer];
    getSpawnRotationEuler: [Function: getSpawnRotationEuler];
    getTurrentRotation: [Function: getTurrentRotation];
    handlingRuleExists: [Function: handlingRuleExists];
    resetHandlingRule: [Function: resetHandlingRule];
    setIdleRespawnTimeout: [Function: setIdleRespawnTimeout];
    getIdleRespawnTimeout: [Function: getIdleRespawnTimeout];
    getSyncController: [Function: getSyncController];
    getSyncReason: [Function: getSyncReason];
    setWorld: [Function: setWorld];
    getWorld: [Function: getWorld];
    getModel: [Function: getModel];
    getOccupant: [Function: getOccupant];
    respawn: [Function: respawn];
    setImmunities: [Function: setImmunities];
    setHealth: [Function: setHealth];
    getTurnSpeed: [Function: getTurnSpeed];
    setImmunityFlags: [Function: setImmunityFlags];
    getRotation: [Function: getRotation];
    getOption: [Function: getOption];
    setRotationEuler: [Function: setRotationEuler];
    setLightsData: [Function: setLightsData];
    setTaxiLight: [Function: setTaxiLight];
    setPosition: [Function: setPosition];
    getRotationEuler: [Function: getRotationEuler];
    getSpawnPosition: [Function: getSpawnPosition];
    getHealth: [Function: getHealth];
    getTaxiLight: [Function: getTaxiLight];
    setRadio: [Function: setRadio];
    setHandlingRule: [Function: setHandlingRule];
    resetHandling: [Function: resetHandling];
    getPosition: [Function: getPosition];
    getRadio: [Function: getRadio];
    getImmunityFlags: [Function: getImmunityFlags];
    setSpeed: [Function: setSpeed];
    getImmunities: [Function: getImmunities];
    isWrecked: [Function: isWrecked];
    detonate: [Function: detonate];
    setTurnSpeed: [Function: setTurnSpeed];
    setSpawnRotation: [Function: setSpawnRotation];
    getSpawnRotation: [Function: getSpawnRotation];
    setColours: [Function: setColours];
    getLightsData: [Function: getLightsData];
    getHandlingRule: [Function: getHandlingRule];
    setRotation: [Function: setRotation];
    getSpeed: [Function: getSpeed];
    setOption: [Function: setOption];
    setSpawnPosition: [Function: setSpawnPosition];
    getColours: [Function: getColours];
    getId: [Function: getId];
    isValid: [Function: isValid];
    attachData: [Function: attachData];
    print: [Function: print];
    data: {};*/
}

type serverWeaponFiledType = {
  FieldFireType: 1;
  FieldRange:	2;
  FieldFiringRate: 3;
  FieldReload: 4;
  FieldClipSize: 5;
  FieldDamage: 6;
  FieldSpeed:	7;
  FieldRadius: 8;
  FieldLifespan: 9;
  FieldSpread: 10;
  FieldFireOffsetX:	11;
  FieldFireOffsetY:	12;
  FieldFireOffsetZ:	13;
  FieldAnimGroup:	14;
  FieldAnimLoopStart:	15;
  FieldAnimLoopEnd:	16;
  FieldAnimFirePos:	17;
  FieldAnimTwoLoopStart: 18;
  FieldAnimTwoLoopEnd: 19;

  FieldAnimTwoFirePos: 20;
  FieldAnimBreakoutPos:	21;
  FieldModelId:	22;
  FieldModelTwoId: 23;
  FieldFlags:	24;
  FieldWeaponSlot: 25;
}

type serverVehicleRulesTypes = {
  Mass: 1;
  DimensionsX: 2;
  DimensionsY: 3;
  DimensionsZ: 4;
  CentreOfMassX: 5;
  CentreOfMassY: 6;
  CentreOfMassZ: 7;
  PercentSubmerged: 8;
  TractionMultiplier: 9;
  TractionLoss: 10;
  TractionBias: 11;
  NumberOfGears: 12;
  MaxSpeed: 13;
  Acceleration: 14;
  DriveType: 15;
  EngineType: 16;
  BrakeDeceleration: 17;
  BrakeBias: 18;
  SteeringLock: 19;
  SuspensionForceLevel: 20;
  SuspensionDampening: 21;
  SeatOffset: 22;
  DamageMultiplier: 23;
  SuspensionUpperLimit: 24;
  SuspensionLowerLimit: 25;
  SuspensionBias: 26;
  SuspensionAntiDive: 27;
  Flags: 28;
  LightsFront: 29;
  LightsRear: 30;
  SuperiorGrip: 31;
  FlyingMode: 32;
  DriveOnWater: 33;
}

type serverAnnounceTypes = {
  "~b~":  "blue text";
  "~g~":  "hot pink text (default)";
  "~h~":	"white text";
  "~l~":	"forces text to default color and ignores set colors";
  "~o~":	"pink text";
  "~p~":	"purple text";
  "~q~":	"plum pink text";
  "~r~":	"hot pink text";
  "~t~":	"green text";
  "~w~":	"gray text";
  "~x~":	"light blue text";
  "~y~":  "yellow text";
}
  // to integrate
// getPositionInfront
// getColourHex
// panCameraSmoothly
// set3DArrowForPlayer

interface ServerPlayerTypes {
  isAdmin: () => boolean;
  setAdmin: (isAdmin: boolean) => void;
  getIP: () => string;
  kick: () => void;
  ban: () => void;
  isSpawned: () => boolean;
  isStreamedForPlayer: (player: ServerPlayerTypes) => boolean;
  getUniqueId: () => string;
  setWorld: (worldId: number) => void;
  getPositionInfront: (x: number, y: number, z: number) => { x: number, y: number, z: number };
  getWorld: () => number;
  setSecondaryWorld: (worldId: number) => void;
  getSecondaryWorld: () => number;
  getUniqueWorld: () => number;
  isCompatibleWithWorld: (worldId: number) => boolean;
  getState: () => number;
  getName: () => string;
  setName: (name: string) => boolean;
  setTeam: (teamId: number) => void;
  getTeam: () => number;
  setSkin: (skinId: number) => void;
  getSkin: () => number;
  setColour: (colour: { r: number, g: number, b: number }|string) => void;
  getColour: () => { r: number, g: number, b: number };
  forceSpawn: () => void;
  forceSelect: () => void;
  giveMoney: (amount: number) => void;
  setMoney: (amount: number) => void;

  getMoney: () => number;
  setScore: (score: number) => void;
  getScore: () => number;
  getPing: () => number;
  isTyping: () => boolean;
  getFPS: () => number;
  getUID: () => string;
  getUID2: () => string;
  setHealth: (health: number) => void;
  getHealth: () => number;
  setArmour: (armour: number) => void;
  getArmour: () => number;
  setImmunities: (immunity: number) => void;
  setImmunityFlags: (flags: number) => void;
  getImmunities: () => number;
  getImmunityFlags: () => number;
  getPosition: () => { x: number, y: number, z: number };
  setPosition: ( x: number, y: number, z: number ) => void;
  getSpeed: () => { x: number, y: number, z: number };
  setSpeed: ( x: number, y: number, z: number ) => void;
  addSpeed: ( x: number, y: number, z: number ) => void;
  setHeading: (heading: number) => void;
  getHeading: () => number;
  setAlpha: ( alpha: number, fadeTime: number ) => void;
  getAlpha: () => number;
  isOnFire: () => boolean;
  isCrouching: () => boolean;
  getAction: () => number;
  getGameKeys: () => number;
  getAimPosition: () => { x: number, y: number, z: number };
  getAimDirection: () => { x: number, y: number, z: number };
  putInVehicle: ( vehicle: serverVehicleTypes, slot: number, makeRoom: boolean, warp: boolean) => boolean;
  removeFromVehicle: () => boolean;
  getInVehicleStatus: () => number;
  getInVehicleSlot: () => number;
  getVehicle: () => serverVehicleTypes;
  setOption: ( settingId: number, value: boolean) => void;
  getOption: ( settingId: number) => boolean;
  giveWeapon: ( weaponId: number,  ammo: number ) => void;
  setWeapon: ( weaponId: number,  ammo: number ) => void;
  requestModuleList: () => void;
  getWeapon: () => number;
  getWeaponAmmo: () => number;
  setWeaponSlot: ( slot: number) => void;
  getWeaponSlot: () => number;
  getWeaponAtSlot: ( slot: number) => number;
  getAmmoAtSlot: ( slot: number ) => number;
  removeWeapon: ( weaponId: number ) => void;
  removeAllWeapons: () => void;
  setCameraPosition: (posX: number, posY: number, posZ: number, lookX: number, lookY: number, lookZ: number) => void;
  panCameraSmoothly: (posX: number, posY: number, posZ: number, transitionMs: number) => void;
  set3DArrowForPlayer: (playerId: number, hasArrow: boolean) => void;
  has3DArrowForPlayer: (playerId: number) => boolean;
  getDrunkHandling: () => number;
  setDrunkHandling: (level: number) => void;
  kill: () => void;
  restoreCamera: () => void;
  isCameraLocked: () => boolean;
  setAnimation: ( groupId: number, animationId: number ) => void;
  setWantedLevel: ( wantedLevel: number ) => void;
  getWantedLevel: () => number;
  getStandingOnVehicle: () => serverVehicleTypes;
  getStandingOnObject: () => serverObjectTypes;
  isAway: () => boolean;
  getSpectateTarget: () => ServerPlayerTypes;
  setSpectateTarget: ( target: ServerPlayerTypes) => void;
  getPlayerClass: () => number;
  redirectToServer: ( address: string, port: number, nick: string, serverPassword: string, userPassword: string) => void;
  getId : () => number;
  isValid : () => boolean;
    /**
   * this is global object to be able to access data from one function to another
   */
  data: Record<string, any> = {};
  print: () => Console;
}


type ServerEventsNames =
  | "RequestSpawn"
  | "Spawn"
  | "Command"
  | "Death"
  | "createCommand"
  | "Init"
  | "LoadScripts"
  | "UnloadScripts"
  | "Shutdown"
  | "Connected"
  | "Message"
  | "Kill"
  | "EnterVehicle"
  | "RequestEnterVehicle"
  | "ExitVehicle"
  | "CrashReport"
  | "KeyUp"
  | "KeyDown"
  | "BeginTyping"
  | "EndTyping"
  | "PrivateMessage"
  | "Spectate"
  | "AFKChanges"
  | "KeyChanges"
  | "isCrouching"
  | "isOnFire"
  | "isOnAction"
  | "StateChanges"
  | "NameChanges"
  | "RequestClass"
  | "ModuleList"
  | "CheckPointEntered"
  | "CheckPointExited"
  | "PickupRespawn"
  | "PickupCollected"
  | "PickupAttempted"
  | "ObjTouched"
  | "ObjShot"
  | "VehicleRespawn"
  | "VehicleExplode"
  | "Incoming"
  | "ScriptData"
  | "Disconnected";

interface ServerEventParams {
    Init: [];
    LoadScripts: [string];
    UnloadScripts: [string];
    Shutdown: [];
    Spawn: [ServerPlayerTypes];
    Death: [ServerPlayerTypes, number];
    Kill: [ServerPlayerTypes, ServerPlayerTypes, number, number];
    RequestSpawn: [ServerPlayerTypes];
    Connected: [ServerPlayerTypes];
    Disconnected: [ServerPlayerTypes];
    createCommand: [ServerPlayerTypes, string];
    Message: [ServerPlayerTypes, string];
    Command: [ServerPlayerTypes, string, string];
    EnterVehicle: [ServerPlayerTypes, serverVehicleTypes, number];
    RequestEnterVehicle: [ServerPlayerTypes, serverVehicleTypes, number];
    ExitVehicle: [ServerPlayerTypes, serverVehicleTypes];
    CrashReport: [ServerPlayerTypes, string];
    KeyDown: [ServerPlayerTypes, number];
    KeyUp: [ServerPlayerTypes, number];
    EndTyping: [ServerPlayerTypes];
    BeginTyping: [ServerPlayerTypes];
    PrivateMessage: [ServerPlayerTypes, ServerPlayerTypes, string];
    Spectate: [ServerPlayerTypes, ServerPlayerTypes];
    AFKChanges: [ServerPlayerTypes, boolean];
    isCrouching: [ServerPlayerTypes, boolean];
    isOnFire: [ServerPlayerTypes, boolean];
    isOnAction: [ServerPlayerTypes, number, number];
    StateChanges: [ServerPlayerTypes, number, number];
    NameChanges: [ServerPlayerTypes, string, string];
    KeyChanges: [ServerPlayerTypes, number, number];
    RequestClass: [ServerPlayerTypes, string];
    ModuleList: [ServerPlayerTypes, string];
    CheckPointEntered: [serverCheckPointTypes, ServerPlayerTypes];
    CheckPointExited: [serverCheckPointTypes, ServerPlayerTypes];
    PickupRespawn: [serverPickupTypes];
    PickupCollected: [serverPickupTypes, ServerPlayerTypes];
    PickupAttempted: [serverPickupTypes, ServerPlayerTypes];
    ObjShot: [serverObjectTypes, ServerPlayerTypes, number];
    ObjTouched: [serverObjectTypes, ServerPlayerTypes];
    VehicleExplode: [serverVehicleTypes];
    VehicleRespawn: [serverVehicleTypes];
    Incoming: [string, string, string];
    ScriptData: [ServerPlayerTypes, string|number]
}

type CoordBlipInfo = {
  index: number;
  worldId: number;
  position: {x: number, y: number, z: number};
  scale: number;
  colour: {r: number, g: number, b: number};
  spriteId: number;
}

interface Server {
    // reload server new scripts
  reload: () => void;
  events: {
    triggerCommand: (arr: Record<any> = []) => void;
    registerCommand: (
      name: string,
        options: {
            /**
             * helps you to make sure this command only fires in a single endpoint.
             */
          executeWith?: string;
          forcePrefixTo?: string;
          caseSensitive?: boolean;
          commandAlias?: string[];
            /**
            * @commandEvent
            * force default command to be called if no command are registered within the handler
            */
          forceCommandEvent?: boolean;
          execute: (p: ServerPlayerTypes, msg: string) => void;
        }
    ) => void;
    registerCommandPrefixes: (prefixes: string[], options: {
      disableCmdTextOutput?: boolean;
      commandNotFoundCallback?: (p: ServerPlayerTypes, prefix: string, cmdName:string) => void;
      commandDelayCallback?: (p: ServerPlayerTypes, delay: number, prefix:string, cmdName:string) => void;
      commandDelayInSecs?: number;
    }) => void;

    on: <K extends ServerEventsNames>(
      name: K,
      callback: (...args: ServerEventParams[K]) => void
    ) => void;
  };

  sendClientMessage: ( recipient: ServerPlayerTypes, message: string) => void;
  sendClientMessageToAll: (message: string) => void;
  sendGameMessage: ( recipient: ServerPlayerTypes, type: serverAnnounceTypes, message: string) => void;
  sendGameMessageToAll: ( type: serverAnnounceTypes, message: string) => void;

  getServerVersion: () => number;
  getServerPort: () => number;
  setServerName: (name: string) => void;
  getServerName: () => string;
  setPlayerLimit: (playerLimit: number) => void;
  getPlayerLimit: () => number;
  setServerPassword: (playerLimit: number) => void;
  getServerPassword: () => string;
  setGameModeText: ( gameMode: string) => void;
  getGameModeText: () => string;
  shutdownServer: () => void;
  setWorldBounds: (maxX: number, minX: number, maxY: number, minY: number) => void;
  getWorldBounds: () => {maxX: number, minX: number, maxY: number, minY: number};
  setWastedSettings: (deathTimeMillis: number, fadeTimeMillis: number, fadeInSpeed: number, fadeOutSpeed: number, fadeColourHex:string|number, corpseFadeStart: number, corpseFadeDuration: number) => void;
  getWastedSettings: () => {deathTimeMillis: number, fadeTimeMillis: number, fadeInSpeed: number, fadeOutSpeed: number, fadeColourHex: string|number, corpseFadeStart: number, corpseFadeDuration: number};
  setTimeRate: (timeRate: number) => void;
  getTimeRate: () => number;
  setHour: (hour: number) => void;
  getHour: () => number;
  setMinute: (minute: number) => void;
  getMinute: () => number;
  setWeather: (weather: number) => void;
  getWeather: () => number;
  setGravity: (gravity: number) => void;
  getGravity: () => number;
  setGameSpeed: (gameSpeed: number) => void;
  getGameSpeed: () => number;
  setWaterLevel: (waterLevel: number) => void;
  getWaterLevel: () => number;
  setAltitudeLimit: (altitudeLimit: number) => void;
  getAltitudeLimit: () => number;
  setKillCommandDelay: (delayMillis: number) => void;
  getKillCommandDelay: () => number;
  setVehiclesForcedRespawnAltitude: (height: number) => void;
  getVehiclesForcedRespawnAltitude: () => number;
  setOption: (setting: ServerConfigOptionString | number | ServerConfigOptionString[], value: boolean) => void;
  getOption: (setting: ServerConfigOptionString|number) => boolean;
  createExplosion: (worldId: number, type: ExplosionConfigOptionString|number, x:number, y:number, z:number, responsiblePlayer: ServerPlayerTypes|number, atGroundLevel: boolean) => void;
  playSound: (worldId: number, soundId: number, x: number, y: number, z: number) => void;
  hideMapObject: (modelId: number, x: number, y: number, z: number) => void;
  showMapObject: (modelId: number, x: number, y: number, z: number) => void;
  showAllMapObjects: () => void;
  setWeaponDataValue: (weaponId: WeaponConfigNameString|number, field: WeaponConfigDataString|number,  value: number) => void;
  getWeaponDataValue: (weaponId: WeaponConfigNameString|number, field: WeaponConfigDataString|number) => number;
  resetWeaponDataValue: (weaponId: WeaponConfigNameString|number, field: WeaponConfigDataString|number) => void;
  isWeaponDataValueModified: (weaponId: WeaponConfigNameString|number, field: WeaponConfigDataString|number) => boolean;
  resetWeaponData: (weaponId: WeaponConfigNameString|number) => void;
  resetAllWeaponData: () => void;
  setFallTimer: (ms: number) => void;
  getFallTimer: () => number;
  getUnusedKeybindSlot: () => number;
  getKeyBind: (keyBindId: number) => number;
  registerKeyBind: (keyBindId: number, onRelease: boolean, keyOne: number, keyTwo: number, keyThree: number) => boolean;
  removeKeyBind: (keyBindId: number) => number;
  removeAllKeyBinds: () => void;
  createCoordBlip: (index: number, worldId: number, x: number, y: number, z: number, scale: number, colourHex: string|number, spriteId: number) => number;
  destroyCoordBlip: (index: number) => void;
  getCoordBlipInfo: (index: number) => CoordBlipInfo;
  addRadioStream: (radioId: number, name: string, url: string, isListed: boolean) => void;
  removeRadioStream: (radioId: number) => void;
  addPlayerClass: (teamId: number, colourHex:string|number, modelId: number, x:number, y:number, z:number, angle:number, weaponOne:number, weaponOneAmmo:number, weaponTwo:number, weaponTwoAmmo:number, weaponThree:number, weaponThreeAmmo:number) => number;
  setSpawnScreenPlayerPos: (x: number, y: number, z: number) => void;
  setSpawnScreenCameraPos: (x: number, y: number, z: number) => void;
  setSpawnScreenCameraLookAt: (x: number, y: number, z: number) => void;
  banAddress: (ip: string) => void;
  unbanAddress: (ip: string) => void;
  isAddressBanned: (ip: string) => boolean;
  getPlayer: (name: number) => ServerPlayerTypes;
  findPlayer: (name: string) => ServerPlayerTypes;
  lookupPlayer: (name: string|number) => ServerPlayerTypes;
  getAllPlayers: () => ServerPlayerTypes[];
  createVehicle: (modelId: number, worldId:number, x:number, y:number, z:number, angle:number, mainColour:number, secondaryColour:number) => serverVehicleTypes;
  getVehicle: (modelId: number) => serverVehicleTypes;
  resetAllVehicleHandlings: () => void;
  /*

  boolean handlingRuleExists(int modelId, HandlingRule rule);

  boolean handlingRuleExists(int modelId, int ruleIndex);

  void setHandlingRule(int modelId, HandlingRule rule, double value);

  void setHandlingRule(int modelId, int ruleIndex, double value);

  double getHandlingRule(int modelId, HandlingRule rule);

  double getHandlingRule(int modelId, int ruleIndex);

  void resetHandlingRule(int modelId, HandlingRule rule);

  void resetHandlingRule(int modelId, int ruleIndex);

  void resetHandling(int modelId);

  Pickup getPickup(int index);

  Pickup createPickup(int modelId, int worldId, int quantity, Vector position, int alpha, boolean automatic);

  Pickup createPickup(int modelId, int worldId, int quantity, float x, float y, float z, int alpha, boolean automatic);

  GameObject getObject(int index);

  GameObject createObject(int modelId, int worldId, Vector position, int alpha);

  GameObject createObject(int modelId, int worldId, float x, float y, float z, int alpha);

  CheckPoint getCheckPoint(int index);

  CheckPoint createCheckPoint(Player player, int worldId, boolean isSphere, Vector position, Colour colour, float radius);

  CheckPoint createCheckPoint(Player player, int worldId, boolean isSphere, float x, float y, float z, int r, int g, int b, int a, float radius);*/
}
