import {MOD} from "./variables";
import {
    displayConfX10,
    displayConfX2,
    displayConfX3,
    displayConfX4,
    displayConfX5,
    displayConfX6,
    displayConfX7,
    displayConfX8,
    displayConfX9,
    updateEpsMeterDisplay
} from "./elements/general";
import {
    updateCpsX10Button,
    updateCpsX2Button,
    updateCpsX3Button,
    updateCpsX4Button,
    updateCpsX5Button,
    updateCpsX6Button,
    updateCpsX7Button,
    updateCpsX8Button,
    updateCpsX9Button
} from "./elements/features";

export let enpsTimer;
export let testTimer;

export let cps3Timer;
export let cps4Timer;
export let cps5Timer;
export let cps6Timer;
export let cps7Timer;
export let cps8Timer;
export let cps9Timer;
export let cps10Timer;

export function epsTimer() {
    enpsTimer = setInterval(function () {
        MOD.eps = MOD.eps + MOD.addeps * MOD.multiplicationeps - MOD.subtraction;
        updateEpsMeterDisplay();
    }, 50);
}

export function startTimer() {
    testTimer = setInterval(function () {
        MOD.eps -= 10;
        updateEpsMeterDisplay();
        if (MOD.eps < 200) {
            clearInterval(testTimer);
            Game.registerHook('cps', function (cps) {
                return cps / 2;
            });
            Game.recalculateGains = 1;
            MOD.x2 = 1;
            updateCpsX2Button();
            displayConfX2.style.display = "none";
        }
    }, 50);
}

export function stopTimer() {
    clearInterval(testTimer);
    displayConfX2.style.display = "none";
}

export function x3Timer() {
    cps3Timer = setInterval(function () {
        MOD.eps -= 250;
        updateEpsMeterDisplay();
        if (MOD.eps < 5000) {
            clearInterval(cps3Timer);
            Game.registerHook('cps', function (cps) {
                return cps / 3;
            });
            Game.recalculateGains = 1;
            MOD.x3 = 1;
            updateCpsX3Button();
            displayConfX3.style.display = "none";
        }
    }, 50);
}

export function stopx3Timer() {
    clearInterval(cps3Timer);
    displayConfX3.style.display = "none";
}

export function x4Timer() {
    let cps4Timer = setInterval(function () {
        MOD.eps -= 22222.2;
        updateEpsMeterDisplay();
        if (MOD.eps < 444444) {
            clearInterval(cps4Timer);
            Game.registerHook('cps', function (cps) {
                return cps / 4;
            });
            Game.recalculateGains = 1;
            MOD.x4 = 1;
            updateCpsX4Button();
            displayConfX4.style.display = "none";
        }
    }, 50);
}

export function stopx4Timer() {
    clearInterval(cps4Timer);
    displayConfX4.style.display = "none";
}

export function x5Timer() {
    cps5Timer = setInterval(function () {
        MOD.eps -= 333333.3;
        updateEpsMeterDisplay();
        if (MOD.eps < 6666666) {
            clearInterval(cps5Timer);
            Game.registerHook('cps', function (cps) {
                return cps / 5;
            });
            Game.recalculateGains = 1;
            MOD.x5 = 1;
            updateCpsX5Button();
            displayConfX5.style.display = "none";
        }
    }, 50);
}

export function stopx5Timer() {
    clearInterval(cps5Timer);
    displayConfX5.style.display = "none";
}

export function x6Timer() {
    cps6Timer = setInterval(function () {
        MOD.eps -= 33333333.3;
        updateEpsMeterDisplay();
        if (MOD.eps < 666666666) {
            clearInterval(cps6Timer);
            Game.registerHook('cps', function (cps) {
                return cps / 6;
            });
            Game.recalculateGains = 1;
            MOD.x6 = 1;
            updateCpsX6Button();
            displayConfX6.style.display = "none";
        }
    }, 50);
}

export function stopx6Timer() {
    clearInterval(cps6Timer);
    displayConfX6.style.display = "none";
}

export function x7Timer() {
    cps7Timer = setInterval(function () {
        MOD.eps -= 444444444.4;
        updateEpsMeterDisplay();
        if (MOD.eps < 8888888888) {
            clearInterval(cps7Timer);
            Game.registerHook('cps', function (cps) {
                return cps / 7;
            });
            Game.recalculateGains = 1;
            MOD.x7 = 1;
            updateCpsX7Button();
            displayConfX7.style.display = "none";
        }
    }, 50);
}

export function stopx7Timer() {
    clearInterval(cps7Timer);
    displayConfX7.style.display = "none";
}

export function x8Timer() {
    cps8Timer = setInterval(function () {
        MOD.eps -= 5000000000;
        updateEpsMeterDisplay();
        if (MOD.eps < 100000000000) {
            clearInterval(cps8Timer);
            Game.registerHook('cps', function (cps) {
                return cps / 8;
            });
            Game.recalculateGains = 1;
            MOD.x8 = 1;
            updateCpsX8Button();
            displayConfX8.style.display = "none";
        }
    }, 50);
}

export function stopx8Timer() {
    clearInterval(cps8Timer);
    displayConfX8.style.display = "none";
}

export function x9Timer() {
    cps9Timer = setInterval(function () {
        MOD.eps -= 5000000000000;
        updateEpsMeterDisplay();
        if (MOD.eps < 100000000000000) {
            clearInterval(cps9Timer);
            Game.registerHook('cps', function (cps) {
                return cps / 9;
            });
            Game.recalculateGains = 1;
            MOD.x9 = 1;
            updateCpsX9Button();
            displayConfX9.style.display = "none";
        }
    }, 50);
}

export function stopx9Timer() {
    clearInterval(cps9Timer);
    displayConfX9.style.display = "none";
}

export function x10Timer() {
    cps10Timer = setInterval(function () {
        MOD.eps -= 5000000000000000;
        updateEpsMeterDisplay();
        if (MOD.eps < 100000000000000000) {
            clearInterval(cps10Timer);
            Game.registerHook('cps', function (cps) {
                return cps / 10;
            });
            Game.recalculateGains = 1;
            MOD.x10 = 1;
            updateCpsX10Button();
            displayConfX10.style.display = "none";
        }
    }, 50);
}

export function stopx10Timer() {
    clearInterval(cps10Timer);
    displayConfX10.style.display = "none";
}