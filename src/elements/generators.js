import {CENTER_AREA} from "./utils";
import {l} from "../utils";
import {MOD} from "../variables";

// Buttons
export let buttonCClicker;
export let buttonStoreClicker;
export let buttonWClicker;
export let buttonAClicker;
export let buttonGClicker;
export let buttonSClicker;
export let buttonUClicker;

// Images
export let imageYuuClicker;
export let imageFunesClicker;
export let imageWaterClicker;
export let imageWindClicker;
export let imageGeoClicker;
export let imageSolarClicker;
export let imageNuclearClicker;

// Hovers
export let hoverCrank;
export let hoverThermal;
export let hoverHydro;
export let hoverWind;
export let hoverGeo;
export let hoverSolar;
export let hoverUran;

export function initGeneratorElements() {
    addGeneratorButtons();
    addGeneratorImages();
    addGeneratorHovers();
}

export function updateThermalButton() {
    buttonStoreClicker.innerHTML = 'Thermal|' + Beautify(MOD.tlevel);//Thermal power generator
}

export function updateHydroButton() {
    buttonWClicker.innerHTML = 'Hydro|' + Beautify(MOD.hlevel);//Hydroelectric generator
}

export function updateWindButton() {
    buttonAClicker.innerHTML = 'Wind|' + Beautify(MOD.wlevel);//Wind power generator
}

export function updateGeoButton() {
    buttonGClicker.innerHTML = 'Geo|' + Beautify(MOD.glevel);//Geothermal generator
}

export function updateSolarButton() {
    buttonSClicker.innerHTML = 'Soler|' + Beautify(MOD.slevel);//SolerPanel
}

export function updateNuclearButton() {
    buttonUClicker.innerHTML = 'Nuclear|' + Beautify(MOD.nlevel);//NuclearPowerPlant
}

export function updateThermalHover() {
    hoverThermal.innerHTML = '　　火力発電機:　　　1施設ごとに１(E/s):　購入費用:' + Beautify(MOD.tp) + 'E';
}

export function updateHydroHover() {
    hoverHydro.innerHTML = '　　水力発電機:　　　1施設ごとに10(E/s):　購入費用:' + Beautify(MOD.hp) + 'E';
}

export function updateWindHover() {
    hoverWind.innerHTML = '　　風力発電機:　　　　　1施設ごとに100(E/s):　　購入費用:' + Beautify(MOD.wp) + 'E';
}

export function updateGeoHover() {
    hoverGeo.innerHTML = '　　地熱発電機:　　　　　1施設ごとに900(E/s):　　購入費用:' + Beautify(MOD.gp) + 'E';
}

export function updateSolarHover() {
    hoverSolar.innerHTML = '　　太陽光発電:　　　　　　　　　　　　　　1施設ごとに50,000(E/s):　　　　　　　　　購入費用:' + Beautify(MOD.sp) + 'E';
}

export function updateUranHover() {
    hoverUran.innerHTML = '　　核融合炉:　　　　　　　　　　　　　　　1施設ごとに13,333,320(E/s):　　　　　　　　　購入費用:' + Beautify(MOD.np) + 'E';
}

function addGeneratorButtons() {
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:34px;position:absolute;top:100px;left:35px;display:none;" class="smallFancyButton" id="CClicker"></a>');
    buttonCClicker = l('CClicker');
    buttonCClicker.innerHTML = 'Crank';
    //Thermal power generator
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:34px;position:absolute;top:165px;left:35px;display:none;" class="smallFancyButton" id="storeClicker"></a>');
    buttonStoreClicker = l('storeClicker');
    updateThermalButton();    //Hydroelectric generator
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:34px;position:absolute;top:230px;left:35px;display:none;" class="smallFancyButton" id="WClicker"></a>');
    buttonWClicker = l('WClicker');
    updateHydroButton();    //Wind power generator
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:34px;position:absolute;top:295px;left:35px;display:none;" class="smallFancyButton" id="AClicker"></a>');
    buttonAClicker = l('AClicker');
    updateWindButton();    //Geothermal generator
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:34px;position:absolute;top:360px;left:35px;display:none;" class="smallFancyButton" id="GClicker"></a>');
    buttonGClicker = l('GClicker');
    updateGeoButton();    //SolerPanel
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:34px;position:absolute;top:425px;left:35px;display:none;" class="smallFancyButton" id="SClicker"></a>');
    buttonSClicker = l('SClicker');
    updateSolarButton();    //NuclearPowerPlant
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:34px;position:absolute;top:490px;left:35px;display:none;" class="smallFancyButton" id="UClicker"></a>');
    buttonUClicker = l('UClicker');    updateNuclearButton();}

function addGeneratorImages() {
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:60px;position:absolute;top:88px;left:-182px;display:none;" class="particle" id="yuuClicker"></a>');
    imageYuuClicker = l('yuuClicker');
    imageYuuClicker.innerHTML = '<img src ="../mods/local/industrialCookies/image/WoodenCrank.png" width ="35px" height ="40px">';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:60px;position:absolute;top:153px;left:-182px;display:none;" class="particle" id="funesClicker"></a>');
    imageFunesClicker = l('funesClicker');
    imageFunesClicker.innerHTML = '<img src ="../mods/local/industrialCookies/image/funes.png" width ="35px" height ="40px">';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:60px;position:absolute;top:218px;left:-182px;display:none;" class="particle" id="waterClicker"></a>');
    imageWaterClicker = l('waterClicker');
    imageWaterClicker.innerHTML = '<img src ="../mods/local/industrialCookies/image/waterpower.png" width ="35px" height ="40px">';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:60px;position:absolute;top:283px;left:-182px;display:none;" class="particle" id="windClicker"></a>');
    imageWindClicker = l('windClicker');
    imageWindClicker.innerHTML = '<img src ="../mods/local/industrialCookies/image/windpower.png" width ="35px" height ="40px">';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:60px;position:absolute;top:348px;left:-182px;display:none;" class="particle" id="geoClicker"></a>');
    imageGeoClicker = l('geoClicker');
    imageGeoClicker.innerHTML = '<img src ="../mods/local/industrialCookies/image/geo.png" width ="35px" height ="40px">';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:60px;position:absolute;top:413px;left:-182px;display:none;" class="particle" id="solerClicker"></a>');
    imageSolarClicker = l('solerClicker');
    imageSolarClicker.innerHTML = '<img src ="../mods/local/industrialCookies/image/soler.png" width ="35px" height ="40px">';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:60px;position:absolute;top:478px;left:-182px;display:none;" class="particle" id="nuclearClicker"></a>');
    imageNuclearClicker = l('nuclearClicker');
    imageNuclearClicker.innerHTML = '<img src ="../mods/local/industrialCookies/image/nuclear.png" width ="35px" height ="40px">';
}

function addGeneratorHovers() {
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:100px;left:155px;display:none;width:125px;" class="smallFancyButton" id="crank"></a>');
    hoverCrank = l('crank');
    hoverCrank.innerHTML = '　手回し発電機　　　1クリックごとに1(E)獲得できます。';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:163px;left:225px;display:none;width:125px;" class="smallFancyButton" id="thermal"></a>');
    hoverThermal = l('thermal');
    updateThermalHover();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:230px;left:190px;display:none;width:125px;" class="smallFancyButton" id="hydro"></a>');
    hoverHydro = l('hydro');
    updateHydroHover();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:295px;left:180px;display:none;width:150px;" class="smallFancyButton" id="wind"></a>');
    hoverWind = l('wind');
    updateWindHover();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:358px;left:168px;display:none;width:150px;" class="smallFancyButton" id="geo"></a>');
    hoverGeo = l('geo');
    updateGeoHover();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:11px;position:absolute;top:425px;left:205px;display:none;width:238px;" class="smallFancyButton" id="soler"></a>');
    hoverSolar = l('soler');
    updateSolarHover();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:485px;left:270px;display:none;width:270px;" class="smallFancyButton" id="uran"></a>');
    hoverUran = l('uran');
    updateUranHover();
}