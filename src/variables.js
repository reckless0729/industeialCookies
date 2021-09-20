//GAME  variables
import {
    updateACopperDisplay,
    updateADiamondDisplay,
    updateAGoldDisplay,
    updateAIronDisplay,
    updateASilverDisplay,
    updateATinDisplay,
    updateEpsCheckerDisplay,
    updateEpsMeterDisplay
} from "./elements/general";
import {
    updateGeoButton,
    updateHydroButton,
    updateNuclearButton,
    updateSolarButton,
    updateThermalButton,
    updateWindButton
} from "./elements/generators";
import {
    updateAdvancedCopperCable,
    updateAdvancedDiamondCable,
    updateAdvancedGoldCable,
    updateAdvancedTinCable,
    updateCopperCable,
    updateDiamondCable,
    updateGoldCable,
    updateHybridCopperCable,
    updateHybridDiamondCable,
    updateHybridGoldCable,
    updateHybridTinCable,
    updateTinCable,
    updateUltimateCopperCable,
    updateUltimateDiamondCable,
    updateUltimateGoldCable,
    updateUltimateTinCable
} from "./elements/modules";

// MOD variables
export let MOD;

export function initVariables(mod) {
    MOD = mod;
    MOD.buttonClicks = 1;
    MOD.offvs = 1;
    MOD.eps = 0;
    // on/off fever
    MOD.x2 = 1;
    MOD.x3 = 1;
    MOD.x4 = 1;
    MOD.x5 = 1;
    MOD.x6 = 1;
    MOD.x7 = 1;
    MOD.x8 = 1;
    MOD.x9 = 1;
    MOD.x10 = 1;
    MOD.mine=1;
    MOD.tlevel = 0;//Thermal Level
    MOD.hlevel = 0; //Hydro Level
    MOD.wlevel = 0;//Wind Level
    MOD.glevel = 0;//Geo Level
    MOD.slevel = 0;//Soler Level
    MOD.nlevel = 0;//Nuclear Level
    MOD.addeps = 0;//add eps of buildings
    MOD.tin = 0;//the amount of tin
    MOD.copper = 0;//the amount of cuppuer
    MOD.iron = 0;//the amount of iron
    MOD.silver = 0;//the amount of silver
    MOD.gold = 0;//the amount of gold
    MOD.diamond = 0;//the amount of diamond
    MOD.multiplicationeps = 1;
    MOD.subtraction = 0;
    MOD.tincableonoff = 0;
    MOD.advtincableon = 0;
    MOD.hybtincableon = 0;
    MOD.ulttincableon = 0;
    MOD.cuppercableon = 0;
    MOD.advcuppercableon = 0;
    MOD.hybcuppercableon = 0;
    MOD.ultcuppercableon = 0;
    MOD.goldcableon = 0;
    MOD.advgoldcableon = 0;
    MOD.hybgoldcableon = 0;
    MOD.ultgoldcableon = 0;
    MOD.diamondcableon = 0;
    MOD.advdiamondcableon = 0;
    MOD.hybdiamondcableon = 0;
    MOD.ultdiamondcableon = 0;
    MOD.tp = 10;
    MOD.hp = 100;
    MOD.wp = 1100;
    MOD.gp = 12100;
    MOD.sp = 1214000;
    MOD.np = 666666666;
    MOD.rand = 0;
}

export function save() {
    return (JSON.stringify({
        eps: MOD.eps,
        addeps: MOD.addeps,
        tlevel: MOD.tlevel,
        hlevel: MOD.hlevel,
        wlevel: MOD.wlevel,
        glevel: MOD.glevel,
        slevel: MOD.slevel,
        nlevel: MOD.nlevel,
        tin: MOD.tin,
        cupper: MOD.copper,
        iron: MOD.iron,
        silver: MOD.silver,
        gold: MOD.gold,
        diamond: MOD.diamond,
        tincableonoff: MOD.tincableonoff,
        multiplicationeps: MOD.multiplicationeps,
        advtincableon: MOD.advtincableon,
        hybtincableon: MOD.hybtincableon,
        ulttincableon: MOD.ulttincableon,
        cuppercableon: MOD.cuppercableon,
        advcuppercableon: MOD.advcuppercableon,
        hybcuppercableon: MOD.hybcuppercableon,
        ultcuppercableon: MOD.ultcuppercableon,
        goldcableon: MOD.goldcableon,
        advgoldcableon: MOD.advgoldcableon,
        hybgoldcableon: MOD.hybgoldcableon,
        ultgoldcableon: MOD.ultgoldcableon,
        diamondcableon: MOD.diamondcableon,
        advdiamondcableon: MOD.advdiamondcableon,
        hybdiamondcableon: MOD.hybdiamondcableon,
        ultdiamondcableon: MOD.ultdiamondcableon,
    }));
}

export function load(str) {
    let datas = JSON.parse(str);
    if (!datas.eps && !datas.addeps) {
        return;
    }
    MOD.eps = datas.eps;
    MOD.addeps = datas.addeps;
    MOD.tlevel = datas.tlevel;
    MOD.hlevel = datas.hlevel;
    MOD.wlevel = datas.wlevel;
    MOD.glevel = datas.glevel;
    MOD.slevel = datas.slevel;
    MOD.nlevel = datas.nlevel;
    MOD.tin = datas.tin;
    MOD.copper = datas.cupper;
    MOD.iron = datas.iron;
    MOD.silver = datas.silver;
    MOD.gold = datas.gold;
    MOD.diamond = datas.diamond;
    MOD.tincableonoff = datas.tincableonoff;
    MOD.multiplicationeps = datas.multiplicationeps;
    MOD.advtincableon = datas.advtincableon;
    MOD.hybtincableon = datas.hybtincableon;
    MOD.ulttincableon = datas.ulttincableon;
    MOD.cuppercableon = datas.cuppercableon;
    MOD.advcuppercableon = datas.advcuppercableon;
    MOD.hybcuppercableon = datas.hybcuppercableon;
    MOD.ultcuppercableon = datas.ultcuppercableon;
    MOD.goldcableon = datas.goldcableon;
    MOD.advgoldcableon = datas.advgoldcableon;
    MOD.hybgoldcableon = datas.hybgoldcableon;
    MOD.ultgoldcableon = datas.ultgoldcableon;
    MOD.diamondcableon = datas.diamondcableon;
    MOD.advdiamondcableon = datas.advdiamondcableon;
    MOD.hybdiamondcableon = datas.hybdiamondcableon;
    MOD.ultdiamondcableon = datas.ultdiamondcableon;
    updateEpsMeterDisplay();
    updateEpsCheckerDisplay();
    updateThermalButton();
    updateHydroButton();
    updateWindButton();
    updateGeoButton();
    updateSolarButton();
    updateNuclearButton();
    updateATinDisplay();
    updateACopperDisplay();
    updateAIronDisplay();
    updateASilverDisplay();
    updateAGoldDisplay();
    updateADiamondDisplay();
    updateTinCable();
    updateAdvancedTinCable();
    updateHybridTinCable();
    updateUltimateTinCable();
    updateCopperCable();
    updateAdvancedCopperCable();
    updateHybridCopperCable();
    updateUltimateCopperCable();
    updateGoldCable();
    updateAdvancedGoldCable();
    updateHybridGoldCable();
    updateUltimateGoldCable();
    updateDiamondCable();
    updateAdvancedDiamondCable();
    updateHybridDiamondCable();
    updateUltimateDiamondCable();
}
