import {addEvents} from "./events";
import {initGeneratorElements} from "./elements/generators";
import {initModuleElements,} from "./elements/modules";
import {initVariables} from "./variables";
import {initGeneralElements} from "./elements/general";
import {initFeatureElements} from "./elements/features";
import {epsTimer} from "./timers";


export function init() {
    document.getElementsByName("Game.cookies");
    document.getElementsByName("Game.recalculateGains");
    document.getElementsByName("Game.cookiesPs");
    Game.Notify(`INDUSTRIAL COOKIES LOADED!`, `Welcome to my world`, [31, 9]);
    //const cursol = document.getElementById("product0");
    //cursol.addEventListener("click",function(){
    //const rand = Math.floor(Math.random() * 100)
    //Game.Notify(rand,'',0,2);
    //});

    initVariables(this);

    initGeneralElements();
    initGeneratorElements();
    initFeatureElements();
    initModuleElements();

    addEvents();

    epsTimer();
}