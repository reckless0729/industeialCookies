import {CENTER_AREA, LEFT_BEAM} from "./utils";
import {l} from "../utils";
import {MOD} from "../variables";

//displays
export let displayEpsChecker;
export let displayEpsMeter;
export let displayATin;
export let displayACopper;
export let displayAIron;
export let displayASilver;
export let displayAGold;
export let displayADiamond;

export let displayConfX2;
export let displayConfX3;
export let displayConfX4;
export let displayConfX5;
export let displayConfX6;
export let displayConfX7;
export let displayConfX8;
export let displayConfX9;
export let displayConfX10;

//buttons
export let buttonStartClicker;
export let buttonReset;
export let buttonOff;

export let buttonBuildings;
export let buttonFeatures;
export let buttonModules;

//hovers
export let hoverRcon;

export function initGeneralElements() {
    addDisplays();
    addClickerBoostDisplay();

    addTabs();

    addGeneralButtons();
    addGeneralHovers();
}

export function updateEpsMeterDisplay() {
    displayEpsMeter.innerHTML = Beautify(Math.floor(MOD.eps)) + 'E';
}

export function updateStartClickerButton() {
    buttonStartClicker.innerHTML = 'Change';
}

export function updateEpsCheckerDisplay() {
    displayEpsChecker.innerHTML = Beautify(MOD.addeps * MOD.multiplicationeps * 20 - MOD.subtraction * 20) + '(E/s)';
}

export function updateATinDisplay() {
    displayATin.innerHTML = '錫：' + Beautify(MOD.tin) + '個';
}

export function updateACopperDisplay() {
    displayACopper.innerHTML = '銅：' + Beautify(MOD.copper) + '個';
}

export function updateAIronDisplay() {
    displayAIron.innerHTML = '鉄：' + Beautify(MOD.iron) + '個';
}

export function updateASilverDisplay() {
    displayASilver.innerHTML = '銀：' + Beautify(MOD.silver) + '個';
}

export function updateAGoldDisplay() {
    displayAGold.innerHTML = '金：' + Beautify(MOD.gold) + '個';
}

export function updateADiamondDisplay() {
    displayADiamond.innerHTML = 'ダイヤ：' + Beautify(MOD.diamond) + '個';
}

export function updateOffButtonDisplay() {
    buttonOff.innerHTML = 'on/off';
}

function addDisplays() {
    //Energy per second
    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;bottom:72px;left:-330px;display:none;width:250px;" class="particle title" id="epschecker"></a>');
    displayEpsChecker = l('epschecker');
    updateEpsCheckerDisplay();

    //Energy
    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;bottom:37px;left:-330px;display:none;width:250px;" class="particle title" id="EPSMeter"></a>');
    displayEpsMeter = l('EPSMeter');
    updateEpsMeterDisplay();

    //Ores
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:15px;position:absolute;top:100px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="atin"></a>');
    displayATin = l('atin');
    updateATinDisplay();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:15px;position:absolute;top:140px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="acupper"></a>');
    displayACopper = l('acupper');
    updateACopperDisplay();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:15px;position:absolute;top:180px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="airon"></a>');
    displayAIron = l('airon');
    updateAIronDisplay();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:15px;position:absolute;top:220px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="asilver"></a>');
    displayASilver = l('asilver');
    updateASilverDisplay();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:15px;position:absolute;top:260px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="agold"></a>');
    displayAGold = l('agold');
    updateAGoldDisplay();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:15px;position:absolute;top:300px;left:320px;display:none;width:250px;height:30px;" class="particle title" id="adiamond"></a>');
    displayADiamond = l('adiamond');
    updateADiamondDisplay();
}

function addClickerBoostDisplay() {
    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:0px;right:375px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx2"></a>');
    displayConfX2 = l('confx2');
    displayConfX2.innerHTML = 'x2';

    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:0px;right:345px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx3"></a>');
    displayConfX3 = l('confx3');
    displayConfX3.innerHTML = 'x3';

    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:0px;right:315px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx4"></a>');
    displayConfX4 = l('confx4');
    displayConfX4.innerHTML = 'x4';

    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:0px;right:285px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx5"></a>');
    displayConfX5 = l('confx5');
    displayConfX5.innerHTML = 'x5';

    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:0px;right:255px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx6"></a>');
    displayConfX6 = l('confx6');
    displayConfX6.innerHTML = 'x6';

    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:0px;right:225px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx7"></a>');
    displayConfX7 = l('confx7');
    displayConfX7.innerHTML = 'x7';

    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:0px;right:195px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx8"></a>');
    displayConfX8 = l('confx8');
    displayConfX8.innerHTML = 'x8';

    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:0px;right:175px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx9"></a>');
    displayConfX9 = l('confx9');
    displayConfX9.innerHTML = 'x9';

    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:0px;right:145px;display:none;width:125px;width:5px;" class="smallFancyButton" id="confx10"></a>');
    displayConfX10 = l('confx10');
    displayConfX10.innerHTML = 'x10';
}

function addTabs() {
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:23px;position:absolute;top:50px;left:0px;display:none;" class="smallFancyButton" id="buildings"></a>');
    buttonBuildings = l('buildings');
    buttonBuildings.innerHTML = 'generator';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:23px;position:absolute;top:50px;left:140px;display:none;" class="smallFancyButton" id="features"></a>');
    buttonFeatures = l('features');
    buttonFeatures.innerHTML = 'feature';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:23px;position:absolute;top:50px;left:280px;display:none;" class="smallFancyButton" id="modules"></a>');
    buttonModules = l('modules');
    buttonModules.innerHTML = 'module';
}

function addGeneralButtons() {
    //ChangeButton
    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;bottom:2px;right:5px;display:block;" class="smallFancyButton" id="startClicker"></a>');
    buttonStartClicker = l('startClicker');
    updateStartClickerButton();

    //ResetButton
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:150px;right:0px;display:none;" class="smallFancyButton" id="reset"></a>');
    buttonReset = l('reset');
    buttonReset.innerHTML = 'RESET';

    //OnOffButton
    LEFT_BEAM.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;bottom:2px;right:100px;display:none;" class="smallFancyButton" id="off"></a>');
    buttonOff = l('off');
    updateOffButtonDisplay()
}

function addGeneralHovers() {
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:50px;left:375px;display:none;width:125px;" class="smallFancyButton" id="rcon"></a>');
    hoverRcon = l('rcon');
    hoverRcon.innerHTML = 'このボタンを押すと、MODで追加された施設レベルやE,E/sを全て０にします。不具合が起きたときに使ってください。';
}
