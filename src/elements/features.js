import {CENTER_AREA} from "./utils";
import {l} from "../utils";

//buttons
export let buttonCpsX2Id;
export let buttonCpsX3Id;
export let buttonCpsX4Id;
export let buttonCpsX5Id;
export let buttonCpsX6Id;
export let buttonCpsX7Id;
export let buttonCpsX8Id;
export let buttonCpsX9Id;
export let buttonCpsX10Id;

//hovers
export let hoverX2;
export let hoverX3;
export let hoverX4;
export let hoverX5;
export let hoverX6;
export let hoverX7;
export let hoverX8;
export let hoverX9;
export let hoverX10;

export function initFeatureElements() {
    addFeatureButtons();
    addFeatureHovers();
}

export function updateCpsX2Button() {
    buttonCpsX2Id.innerHTML = 'x2Fever';
}

export function updateCpsX3Button() {
    buttonCpsX3Id.innerHTML = 'x3Fever';
}

export function updateCpsX4Button() {
    buttonCpsX4Id.innerHTML = 'x4Fever';
}

export function updateCpsX5Button() {
    buttonCpsX5Id.innerHTML = 'x5Fever';
}

export function updateCpsX6Button() {
    buttonCpsX6Id.innerHTML = 'x6Fever';
}

export function updateCpsX7Button() {
    buttonCpsX7Id.innerHTML = 'x7Fever';
}

export function updateCpsX8Button() {
    buttonCpsX8Id.innerHTML = 'x8Fever';
}

export function updateCpsX9Button() {
    buttonCpsX9Id.innerHTML = 'x9Fever';
}

export function updateCpsX10Button() {
    buttonCpsX10Id.innerHTML = 'x10Fever';
}

function addFeatureButtons() {
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:100px;left:0px;display:none;" class="smallFancyButton" id="cpsx2id"></a>');
    buttonCpsX2Id = l('cpsx2id');
    updateCpsX2Button();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:150px;left:0px;display:none;" class="smallFancyButton" id="cpsx3id"></a>');
    buttonCpsX3Id = l('cpsx3id');
    updateCpsX3Button();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:200px;left:0px;display:none;" class="smallFancyButton" id="cpsx4id"></a>');
    buttonCpsX4Id = l('cpsx4id');
    updateCpsX4Button();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:250px;left:0px;display:none;" class="smallFancyButton" id="cpsx5id"></a>');
    buttonCpsX5Id = l('cpsx5id');
    updateCpsX5Button();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:300px;left:0px;display:none;" class="smallFancyButton" id="cpsx6id"></a>');
    buttonCpsX6Id = l('cpsx6id');
    updateCpsX6Button();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:350px;left:0px;display:none;" class="smallFancyButton" id="cpsx7id"></a>');
    buttonCpsX7Id = l('cpsx7id');
    updateCpsX7Button();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:400px;left:0px;display:none;" class="smallFancyButton" id="cpsx8id"></a>');
    buttonCpsX8Id = l('cpsx8id');
    updateCpsX8Button();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:450px;left:0px;display:none;" class="smallFancyButton" id="cpsx9id"></a>');
    buttonCpsX9Id = l('cpsx9id');
    updateCpsX9Button();

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:24px;position:absolute;top:500px;left:0px;display:none;" class="smallFancyButton" id="cpsx10id"></a>');
    buttonCpsX10Id = l('cpsx10id');
    updateCpsX10Button();
}

function addFeatureHovers() {
    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:100px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x2"></a>');
    hoverX2 = l('x2');
    hoverX2.innerHTML = '秒間200(E)を消費して、その間、Cpsをさらに２倍にします。';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:150px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x3"></a>');
    hoverX3 = l('x3');
    hoverX3.innerHTML = '秒間5,000(E)を消費して、その間、Cpsをさらに3倍にします。';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:200px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x4"></a>');
    hoverX4 = l('x4');
    hoverX4.innerHTML = '秒間444,444(E)を消費して、その間、Cpsをさらに4倍にします。';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:250px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x5"></a>');
    hoverX5 = l('x5');
    hoverX5.innerHTML = '秒間6,666,666(E)を消費して、その間、Cpsをさらに5倍にします。';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:300px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x6"></a>');
    hoverX6 = l('x6');
    hoverX6.innerHTML = '秒間666,666,666(E)を消費して、その間、Cpsをさらに6倍にします。';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:350px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x7"></a>');
    hoverX7 = l('x7');
    hoverX7.innerHTML = '秒間8,888,888,888(E)を消費して、その間、Cpsをさらに7倍にします。';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:400px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x8"></a>');
    hoverX8 = l('x8');
    hoverX8.innerHTML = '秒間100,000,000,000(E)を消費して、その間、Cpsをさらに8倍にします。';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:450px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x9"></a>');
    hoverX9 = l('x9');
    hoverX9.innerHTML = '秒間10,000,000,000,000(E)を消費して、その間、Cpsをさらに9倍にします。';

    CENTER_AREA.insertAdjacentHTML('beforeend', '<a style="font-size:12px;position:absolute;top:500px;left:121px;display:none;width:125px;" class="smallFancyButton" id="x10"></a>');
    hoverX10 = l('x10');
    hoverX10.innerHTML = '秒間10,000,000,000,000,000(E)を消費して、その間、Cpsをさらに10倍にします';
}