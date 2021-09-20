import {CENTER_AREA} from "./utils";
import {MOD} from "../variables";
import {l} from "../utils";

//buttons
export let buttonTinCable;
export let buttonAdvancedTinCable;
export let buttonHybridTinCable;
export let buttonUltimateTinCable;

export let buttonCopperCable;
export let buttonAdvancedCopperCable;
export let buttonHybridCopperCable;
export let buttonUltimateCopperCable;

export let buttonGoldCable;
export let buttonAdvancedGoldCable;
export let buttonHybridGoldCable;
export let buttonUltimateGoldCable;

export let buttonDiamondCable;
export let buttonAdvancedDiamondCable;
export let buttonHybridDiamondCable;
export let buttonUltimateDiamondCable;

//hovers
export let hoverTinCable;
export let hoverAdvancedTinCable;
export let hoverHybridTinCable;
export let hoverUltimateTinCable;

export let hoverCopperCable;
export let hoverAdvancedCopperCable;
export let hoverHybridCopperCable;
export let hoverUltimateCopperCable;

export let hoverGoldCable;
export let hoverAdvancedGoldCable;
export let hoverHybridGoldCable;
export let hoverUltimateGoldCable;

export let hoverDiamondCable;
export let hoverAdvancedDiamondCable;
export let hoverHybridDiamondCable;
export let hoverUltimateDiamondCable;

export function initModuleElements() {
    addModuleButtons();
    addModuleHovers();
}

export function updateTinCable() {
    if (MOD.tincableonoff === 0) {
        buttonTinCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/tincable.png" width ="35px" height ="40px">';
    } else {
        buttonTinCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrtincable.png" width ="35px" height ="40px">';
    }
}

export function updateAdvancedTinCable() {
    if (MOD.advtincableon === 0) {
        buttonAdvancedTinCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/advancedtincable.png" width ="35px" height ="40px">';
    } else {
        buttonAdvancedTinCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alradvancedtincable.png" width ="35px" height ="40px">';
    }
}

export function updateHybridTinCable() {
    if (MOD.hybtincableon === 0) {
        buttonHybridTinCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/hybridtincable.png" width ="35px" height ="40px">';
    } else {
        buttonHybridTinCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrhybridtincable.png" width ="35px" height ="40px">';
    }
}

export function updateUltimateTinCable() {
    if (MOD.ulttincableon === 0) {
        buttonUltimateTinCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/ultimatetincable.png" width ="35px" height ="40px">';
    } else {
        buttonUltimateTinCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrultimatetincable.png" width ="35px" height ="40px">';
    }
}

export function updateCopperCable() {
    if (MOD.cuppercableon === 0) {
        buttonCopperCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/cuppercable.png" width ="35px" height ="40px">';
    } else {
        buttonCopperCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrcuppercable.png" width ="35px" height ="40px">';
    }
}

export function updateAdvancedCopperCable() {
    if (MOD.advcuppercableon === 0) {
        buttonAdvancedCopperCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/advancedcuppercable.png" width ="35px" height ="40px">';
    } else {
        buttonAdvancedCopperCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alradvancedcuppercable.png" width ="35px" height ="40px">';
    }
}

export function updateHybridCopperCable() {
    if (MOD.hybcuppercableon === 0) {
        buttonHybridCopperCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/hybridcuppercable.png" width ="35px" height ="40px">';
    } else {
        buttonHybridCopperCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrhybridcuppercable.png" width ="35px" height ="40px">';
    }
}

export function updateUltimateCopperCable() {
    if (MOD.ultcuppercableon === 0) {
        buttonUltimateCopperCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/ultimatecuppercable.png" width ="35px" height ="40px">';
    } else {
        buttonUltimateCopperCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrultimatecuppercable.png" width ="35px" height ="40px">';
    }
}

export function updateGoldCable() {
    if (MOD.goldcableon === 0) {
        buttonGoldCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/goldcable.png" width ="35px" height ="40px">';
    } else {
        buttonGoldCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrgoldcable.png" width ="35px" height ="40px">';
    }
}

export function updateAdvancedGoldCable() {
    if (MOD.advgoldcableon === 0) {
        buttonAdvancedGoldCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/advancedgoldcable.png" width ="35px" height ="40px">';
    } else {
        buttonAdvancedGoldCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alradvancedgoldcable.png" width ="35px" height ="40px">';
    }
}

export function updateHybridGoldCable() {
    if (MOD.hybgoldcableon === 0) {
        buttonHybridGoldCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/hybridgoldcable.png" width ="35px" height ="40px">';
    } else {
        buttonHybridGoldCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrhybridgoldcable.png" width ="35px" height ="40px">';
    }
}

export function updateUltimateGoldCable() {
    if (MOD.ultgoldcableon === 0) {
        buttonUltimateGoldCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/ultimategoldcable.png" width ="35px" height ="40px">';
    } else {
        buttonUltimateGoldCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrultimategoldcable.png" width ="35px" height ="40px">';
    }
}

export function updateDiamondCable() {
    if (MOD.diamondcableon === 0) {
        buttonDiamondCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/diamondcable.png" width ="35px" height ="40px">';
    } else {
        buttonDiamondCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrdiamondcable.png" width ="35px" height ="40px">';
    }
}

export function updateAdvancedDiamondCable() {
    if (MOD.advdiamondcableon === 0) {
        buttonAdvancedDiamondCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/advanceddiamondcable.png" width ="35px" height ="40px">';
    } else {
        buttonAdvancedDiamondCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alradvanceddiamondcable.png" width ="35px" height ="40px">';
    }
}

export function updateHybridDiamondCable() {
    if (MOD.hybdiamondcableon === 0) {
        buttonHybridDiamondCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/hybriddiamondcable.png" width ="35px" height ="40px">';
    } else {
        buttonHybridDiamondCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrhybriddiamondcable.png" width ="35px" height ="40px">';
    }
}

export function updateUltimateDiamondCable() {
    if (MOD.ultdiamondcableon === 0) {
        buttonUltimateDiamondCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/ultimatediamondcable.png" width ="35px" height ="40px">';
    } else {
        buttonUltimateDiamondCable.innerHTML = '<img src ="../mods/local/industrialCookies/image/alrultimatediamondcable.png" width ="35px" height ="40px">';
    }
}

function addModuleButtons() {
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:100px;left:0px;display:none;" class="smallFancyButton" id="tinca"></a>');
    buttonTinCable = l('tinca');
    updateTinCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:100px;left:60px;display:none;" class="smallFancyButton" id="advtinca"></a>');
    buttonAdvancedTinCable = l('advtinca');
    updateAdvancedTinCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:100px;left:120px;display:none;" class="smallFancyButton" id="hybtinca"></a>');
    buttonHybridTinCable = l('hybtinca');
    updateHybridTinCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:100px;left:180px;display:none;" class="smallFancyButton" id="ulttinca"></a>');
    buttonUltimateTinCable = l('ulttinca');
    updateUltimateTinCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:170px;left:0px;display:none;" class="smallFancyButton" id="cupperca"></a>');
    buttonCopperCable = l('cupperca');
    updateCopperCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:170px;left:60px;display:none;" class="smallFancyButton" id="advcupperca"></a>');
    buttonAdvancedCopperCable = l('advcupperca');
    updateAdvancedCopperCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:170px;left:120px;display:none;" class="smallFancyButton" id="hybcupperca"></a>');
    buttonHybridCopperCable = l('hybcupperca');
    updateHybridCopperCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:170px;left:180px;display:none;" class="smallFancyButton" id="ultcupperca"></a>');
    buttonUltimateCopperCable = l('ultcupperca');
    updateUltimateCopperCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:240px;left:0px;display:none;" class="smallFancyButton" id="goldca"></a>');
    buttonGoldCable = l('goldca');
    updateGoldCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:240px;left:60px;display:none;" class="smallFancyButton" id="advgoldca"></a>');
    buttonAdvancedGoldCable = l('advgoldca');
    updateAdvancedGoldCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:240px;left:120px;display:none;" class="smallFancyButton" id="hybgoldca"></a>');
    buttonHybridGoldCable = l('hybgoldca');
    updateHybridGoldCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:240px;left:180px;display:none;" class="smallFancyButton" id="ultgoldca"></a>');
    buttonUltimateGoldCable = l('ultgoldca');
    updateUltimateGoldCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:310px;left:0px;display:none;" class="smallFancyButton" id="diamondca"></a>');
    buttonDiamondCable = l('diamondca');
    updateDiamondCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:310px;left:60px;display:none;" class="smallFancyButton" id="advdiamondca"></a>');
    buttonAdvancedDiamondCable = l('advdiamondca');
    updateAdvancedDiamondCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:310px;left:120px;display:none;" class="smallFancyButton" id="hybdiamondca"></a>');
    buttonHybridDiamondCable = l('hybdiamondca');
    updateHybridDiamondCable();
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:310px;left:180px;display:none;" class="smallFancyButton" id="ultdiamondca"></a>');
    buttonUltimateDiamondCable = l('ultdiamondca');
    updateUltimateDiamondCable();
}

function addModuleHovers() {
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:100px;left:55px;display:none;width:125px;" class="smallFancyButton" id="continca"></a>');
    hoverTinCable = l('continca');
    hoverTinCable.innerHTML = '錫の導線　　　　　　費用：錫50個　　　　効果：発電E2倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:100px;left:115px;display:none;width:170px;" class="smallFancyButton" id="conadvtinca"></a>');
    hoverAdvancedTinCable = l('conadvtinca');
    hoverAdvancedTinCable.innerHTML = '改良型錫の導線　　　　　　　費用：錫500個、鉄30個　　　　　　　　　　　　効果：発電E2倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:100px;left:175px;display:none;width:135px;" class="smallFancyButton" id="conhybtinca"></a>');
    hoverHybridTinCable = l('conhybtinca');
    hoverHybridTinCable.innerHTML = '　発展型錫の導線　　　　費用：錫5,000個、銀100個、ダイヤ5個　　　　　　　効果：発電E3倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:100px;left:235px;display:none;width:138px;" class="smallFancyButton" id="conulttinca"></a>');
    hoverUltimateTinCable = l('conulttinca');
    hoverUltimateTinCable.innerHTML = '　究極型錫の導線　　　　費用：錫5万個、銀1,000個、ダイヤ100個　　　　　　　　効果：発電E4倍';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:170px;left:55px;display:none;width:125px;" class="smallFancyButton" id="concupperca"></a>');
    hoverCopperCable = l('concupperca');
    hoverCopperCable.innerHTML = '銅の導線　　　　　　費用：銅50個　　　　効果：発電E2倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:170px;left:115px;display:none;width:170px;" class="smallFancyButton" id="conadvcupperca"></a>');
    hoverAdvancedCopperCable = l('conadvcupperca');
    hoverAdvancedCopperCable.innerHTML = '改良型銅の導線　　　　　　　費用：銅500個、鉄30個　　　　　　　　　　　　　効果：発電E2倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:170px;left:175px;display:none;width:135px;" class="smallFancyButton" id="conhybcupperca"></a>');
    hoverHybridCopperCable = l('conhybcupperca');
    hoverHybridCopperCable.innerHTML = '発展型銅の導線　　　　費用：銅5,000個、金100個、ダイヤ5個　　効果：発電E3倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:170px;left:235px;display:none;width:138px;" class="smallFancyButton" id="conultcupperca"></a>');
    hoverUltimateCopperCable = l('conultcupperca');
    hoverUltimateCopperCable.innerHTML = '究極型銅の導線　　　　費用：銅5万個、金1,000個、ダイヤ100個　　　効果：発電E4倍';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:240px;left:55px;display:none;width:125px;" class="smallFancyButton" id="congoldca"></a>');
    hoverGoldCable = l('congoldca');
    hoverGoldCable.innerHTML = '金の導線　　　　　　　　　　　費用：金50個、銅100個　　　　　　　　　効果：発電E2倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:240px;left:115px;display:none;width:138px;" class="smallFancyButton" id="conadvgoldca"></a>');
    hoverAdvancedGoldCable = l('conadvgoldca');
    hoverAdvancedGoldCable.innerHTML = '改良型金の導線　　　　　　　　　　　　　　　費用：金250個、銅500個、鉄150個　　　　　効果：発電E2倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:240px;left:175px;display:none;width:135px;" class="smallFancyButton" id="conhybgoldca"></a>');
    hoverHybridGoldCable = l('conhybgoldca');
    hoverHybridGoldCable.innerHTML = '発展型金の導線　　　　　　　　　　　　費用：金1,000個、銅5,000個、鉄1,500個　　　　　　　　　　　効果：発電E3倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:240px;left:235px;display:none;width:138px;" class="smallFancyButton" id="conultgoldca"></a>');
    hoverUltimateGoldCable = l('conultgoldca');
    hoverUltimateGoldCable.innerHTML = '究極型金の導線　　　　費用：金5,000個、銅5万個、鉄1,5000個　　　効果：発電E4倍';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:310px;left:55px;display:none;width:100px;" class="smallFancyButton" id="condiamondca"></a>');
    hoverDiamondCable = l('condiamondca');
    hoverDiamondCable.innerHTML = 'ダイヤの導線　　　　　　　　　費用：ダイヤ25個　　　　　　　効果：発電E2倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:310px;left:115px;display:none;width:152px;" class="smallFancyButton" id="conadvdiamondca"></a>');
    hoverAdvancedDiamondCable = l('conadvdiamondca');
    hoverAdvancedDiamondCable.innerHTML = '改良型ダイヤの導線　　　　　　　　　　　　費用：ダイヤ100個、銅1,000個、銀500個　　　効果：発電E2倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:310px;left:175px;display:none;width:148px;" class="smallFancyButton" id="conhybdiamondca"></a>');
    hoverHybridDiamondCable = l('conhybdiamondca');
    hoverHybridDiamondCable.innerHTML = '発展型ダイヤの導線　　　　　　　　　費用：ダイヤ500個、銅1万個、銀1,500個、　　　　効果：発電E3倍';
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:310px;left:235px;display:none;width:138px;" class="smallFancyButton" id="conultdiamondca"></a>');
    hoverUltimateDiamondCable = l('conultdiamondca');
    hoverUltimateDiamondCable.innerHTML = '究極型ダイヤの導線　　　　　　　　　　費用：ダイヤ1,000個、銅10万個、銀1.5万個　　　　　　　　　　　効果：発電E4倍';
}