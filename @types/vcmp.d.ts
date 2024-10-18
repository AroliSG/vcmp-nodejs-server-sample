// index.d.ts

/**
 * Global server object for VC:MP Node.js
 * @global
 */

declare const VCMP: VCMP;
declare const ServerConfigOptionString;
declare const ExplosionConfigOptionString;
declare const WeaponConfigDataString;
declare const WeaponConfigNameString;

type WeaponConfigNameString =
    | 'UNARMED'
    | 'BRASSKNUCKLES'
    | 'SCREWDRIVER'
    | 'GOLFCLUB'
    | 'NIGHTSTICK'
    | 'KNIFE'
    | 'BASEBALLBAT'
    | 'HAMMER'
    | 'MEATCLEAVER'
    | 'MACHETE'
    | 'KATANA'
    | 'CHAINSAW'
    | 'GRENADE'
    | 'REMOTE'
    | 'TEARGAS'
    | 'MOLOTOV'
    | 'ROCKET'
    | 'COLT45'
    | 'PYTHON'
    | 'SHOTGUN'
    | 'SPAS12'
    | 'STUBBY'
    | 'TEC9'
    | 'UZI'
    | 'INGRAM'
    | 'MP5'
    | 'M4'
    | 'RUGER'
    | 'SNIPER'
    | 'LASERSCOPE'
    | 'ROCKETLAUNCHER'
    | 'FLAMETHROWER'
    | 'M60'
    | 'MINIGUN'
    | 'BOMB'
    | 'CAMERA';



type WeaponConfigDataString =
    | 'Unused'
    | 'FireType'
    | 'Range'
    | 'FiringRate'
    | 'Reload'
    | 'ClipSize'
    | 'Damage'
    | 'Speed'
    | 'Radius'
    | 'LifeSpan'
    | 'Spread'
    | 'FireOffsetX'
    | 'FireOffsetY'
    | 'FireOffsetZ'
    | 'AnimGroup'
    | 'AnimLoopStart'
    | 'AnimLoopEnd'
    | 'AnimFirePos'
    | 'AnimTwoLoopStart'
    | 'AnimTwoLoopEnd'
    | 'AnimTwoFirePos'
    | 'AnimBreakoutPos'
    | 'ModelId'
    | 'ModelTwoId'
    | 'Flags'
    | 'WeaponSlot';



type ServerConfigOptionString =
  | 'SyncFrameLimiter'
  | 'FrameLimiter'
  | 'TaxiBoostJump'
  | 'DriveOnWater'
  | 'FastSwitch'
  | 'FriendlyFire'
  | 'DisableDriveby'
  | 'PerfectHandling'
  | 'FlyingCars'
  | 'JumpSwitch'
  | 'ShowMarkers'
  | 'ShowOnlyTeamMarkers'
  | 'StuntBike'
  | 'ShootInAir'
  | 'ShowNameTags'
  | 'AutoJoinMessages'
  | 'AutoDeathMessages'
  | 'ChatTags'
  | 'UseClasses'
  | 'Wallglitch'
  | 'DisableBackfaceCulling'
  | 'DisableHeliBladeDamage'
  | 'DisableCrouch';


type ExplosionConfigOptionString =
    | 'CameraShakeOnly'
    | 'MolotovLike'
    | 'SmallExplosion'
    | 'VehicleExplosion'
    | 'LargerExplosion'
    | 'MassiveExplosion'
    | 'TinyExplosion'
    | 'DimExplosion'
    | 'BrightExplosion'
    | 'GasPumpExplosion'
    | 'BeyondEleven';


interface ExplosionTypes {
    CameraShakeOnly: 0;
    MolotovLike: 1;
    SmallExplosion: 2;
    VehicleExplosion: 3 | 4 | 5;
    LargerExplosion: 6;
    MassiveExplosion: 7;
    TinyExplosion: 8;
    DimExplosion: 9;
    BrightExplosion: 10;
    GasPumpExplosion: 11;
    BeyondEleven: 12;
};


interface WeaponData {
    Unused: number;
    FireType: number;
    Range: number;
    FiringRate: number;
    Reload: number;
    ClipSize: number;
    Damage: number;
    Speed: number;
    Radius: number;
    LifeSpan: number;
    Spread: number;
    FireOffsetX: number;
    FireOffsetY: number;
    FireOffsetZ: number;
    AnimGroup: number;
    AnimLoopStart: number;
    AnimLoopEnd: number;
    AnimFirePos: number;
    AnimTwoLoopStart: number;
    AnimTwoLoopEnd: number;
    AnimTwoFirePos: number;
    AnimBreakoutPos: number;
    ModelId: number;
    ModelTwoId: number;
    Flags: number;
    WeaponSlot: number;
}

interface PlayerOption {
    Controllable: number;
    CanDriveby: number;
    WhiteScanlines: number;
    GreenScanlines: number;
    Widescreen: number;
    ShowMarkers: number;
    CanAttack: number;
    HasMarker: number;
    ChatTagsEnabled: number;
    DrunkEffects: number;
}

interface PlayerImmunity {
    BulletProof: number;
    FireProof: number;
    ExplosionProof: number;
    CollisionProof: number;
    MeleeProof: number;
    CannotFall: number;
    NoCriticals: number;
}

interface ServerOption {
    SyncFrameLimiter: number;
    FrameLimiter: number;
    TaxiBoostJump: number;
    DriveOnWater: number;
    FastSwitch: number;
    FriendlyFire: number;
    DisableDriveby: number;
    PerfectHandling: number;
    FlyingCars: number;
    JumpSwitch: number;
    ShowMarkers: number;
    ShowOnlyTeamMarkers: number;
    StuntBike: number;
    ShootInAir: number;
    ShowNameTags: number;
    AutoJoinMessages: number;
    AutoDeathMessages: number;
    ChatTags: number;
    UseClasses: number;
    Wallglitch: number;
    DisableBackfaceCulling: number;
    DisableHeliBladeDamage: number;
    DisableCrouch: number;
}

interface VehicleHandlingRule {
    None: number;
    Mass: number;
    DimensionsX: number;
    DimensionsY: number;
    DimensionsZ: number;
    CentreOfMassX: number;
    CentreOfMassY: number;
    CentreOfMassZ: number;
    PercentSubmerged: number;
    TractionMultiplier: number;
    TractionLoss: number;
    TractionBias: number;
    NumberOfGears: number;
    MaxSpeed: number;
    Acceleration: number;
    DriveType: number;
    EngineType: number;
    BrakeDeceleration: number;
    BrakeBias: number;
    SteeringLock: number;
    SuspensionForceLevel: number;
    SuspensionDampening: number;
    SeatOffset: number;
    DamageMultiplier: number;
    SuspensionUpperLimit: number;
    SuspensionLowerLimit: number;
    SuspensionBias: number;
    SuspensionAntiDive: number;
    Flags: number;
    LightsFront: number;
    LightsRear: number;
    SuperiorGrip: number;
    FlyingMode: number;
    DriveOnWater: number;
}

interface VehicleOption {
    DoorsLocked: number;
    Alarm: number;
    Lights: number;
    RadioLocked: number;
    Ghost: number;
    Siren: number;
    SingleUse: number;
    EngineDisabled: number;
    BootOpen: number;
    BonnetOpen: number;
}

interface DoorStatus {
    Undamaged: number;
    Damaged: number;
    Flapping: number;
    Detached: number;
}

interface Door {
    FrontLeft: number;
    FrontRight: number;
    RearLeft: number;
    RearRight: number;
    Bonnet: number;
    Boot: number;
}

interface PanelStatus {
    Undamaged: number;
    Damaged: number;
    Detached: number;
}

interface Panel {
    LeftWing: number;
    RightWing: number;
    FrontBumper: number;
    RearBumper: number;
    Windscreen: number;
}

interface TyreStatus {
    Undamaged: number;
    Flat: number;
    Detached: number;
}

interface Tyre {
    LeftFront: number;
    LeftRear: number;
    RightFront: number;
    RightRear: number;
}

// Colors conversion functions
interface ColorFunctions {
    toRGB: (num: number) => { r: number; g: number; b: number; a: number };
    toHex: (rgbObj: { r: number; g: number; b: number; a: number }) => number;
    hexToInteger: (hex: number) => number;
}

// Main VCMP Type Definition
interface VCMP {
    Weapon: {
        UNARMED: number;
        BRASSKNUCKLES: number;
        SCREWDRIVER: number;
        GOLFCLUB: number;
        NIGHTSTICK: number;
        KNIFE: number;
        BASEBALLBAT: number;
        HAMMER: number;
        MEATCLEAVER: number;
        MACHETE: number;
        KATANA: number;
        CHAINSAW: number;
        GRENADE: number;
        REMOTE: number;
        TEARGAS: number;
        MOLOTOV: number;
        ROCKET: number;
        COLT45: number;
        PYTHON: number;
        SHOTGUN: number;
        SPAS12: number;
        STUBBY: number;
        TEC9: number;
        UZI: number;
        INGRAM: number;
        MP5: number;
        M4: number;
        RUGER: number;
        SNIPER: number;
        LASERSCOPE: number;
        ROCKETLAUNCHER: number;
        FLAMETHROWER: number;
        M60: number;
        MINIGUN: number;
        BOMB: number;
        CAMERA: number;
        Data: WeaponData;
    };
    Player: {
        Option: PlayerOption;
        Immunity: PlayerImmunity;
    };
    Server: {
        Option: ServerOption;
    };
    Vehicle: {
        HandlingRule: VehicleHandlingRule;
        Option: VehicleOption;
        DoorStatus: DoorStatus;
        Door: Door;
        PanelStatus: PanelStatus;
        Panel: Panel;
        TyreStatus: TyreStatus;
        Tyre: Tyre;
        [key: string]: number | undefined;
    };
    Colors: ColorFunctions;
    [key: string]: any;
}


