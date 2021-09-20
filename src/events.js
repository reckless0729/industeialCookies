import {MOD} from "./variables";
import {
    buttonBuildings,
    buttonFeatures,
    buttonModules,
    buttonOff,
    buttonReset,
    buttonStartClicker,
    displayACopper,
    displayADiamond,
    displayAGold,
    displayAIron,
    displayASilver,
    displayATin,
    displayConfX10,
    displayConfX2,
    displayConfX3,
    displayConfX4,
    displayConfX5,
    displayConfX6,
    displayConfX7,
    displayConfX8,
    displayConfX9,
    displayEpsChecker,
    displayEpsMeter,
    hoverRcon,
    updateACopperDisplay,
    updateADiamondDisplay,
    updateAGoldDisplay,
    updateAIronDisplay,
    updateASilverDisplay,
    updateATinDisplay,
    updateEpsCheckerDisplay,
    updateEpsMeterDisplay,
    updateOffButtonDisplay,
    updateStartClickerButton
} from "./elements/general";
import {
    buttonAClicker,
    buttonCClicker,
    buttonGClicker,
    buttonSClicker,
    buttonStoreClicker,
    buttonUClicker,
    buttonWClicker,
    hoverCrank,
    hoverGeo,
    hoverHydro,
    hoverSolar,
    hoverThermal,
    hoverUran,
    hoverWind,
    imageFunesClicker,
    imageGeoClicker,
    imageNuclearClicker,
    imageSolarClicker,
    imageWaterClicker,
    imageWindClicker,
    imageYuuClicker,
    updateGeoButton,
    updateGeoHover,
    updateHydroButton,
    updateNuclearButton,
    updateSolarButton,
    updateThermalButton,
    updateUranHover,
    updateWindButton,
    updateWindHover
} from "./elements/generators";
import {
    buttonAdvancedCopperCable,
    buttonAdvancedDiamondCable,
    buttonAdvancedGoldCable,
    buttonAdvancedTinCable,
    buttonCopperCable,
    buttonDiamondCable,
    buttonGoldCable,
    buttonHybridCopperCable,
    buttonHybridDiamondCable,
    buttonHybridGoldCable,
    buttonHybridTinCable,
    buttonTinCable,
    buttonUltimateCopperCable,
    buttonUltimateDiamondCable,
    buttonUltimateGoldCable,
    buttonUltimateTinCable,
    hoverAdvancedCopperCable,
    hoverAdvancedDiamondCable,
    hoverAdvancedGoldCable,
    hoverAdvancedTinCable,
    hoverCopperCable,
    hoverDiamondCable,
    hoverGoldCable,
    hoverHybridCopperCable,
    hoverHybridDiamondCable,
    hoverHybridGoldCable,
    hoverHybridTinCable,
    hoverTinCable,
    hoverUltimateCopperCable,
    hoverUltimateDiamondCable,
    hoverUltimateGoldCable,
    hoverUltimateTinCable,
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
import {
    startTimer,
    stopTimer,
    stopx10Timer,
    stopx3Timer,
    stopx4Timer,
    stopx5Timer,
    stopx6Timer,
    stopx7Timer,
    stopx8Timer,
    stopx9Timer,
    x10Timer,
    x3Timer,
    x4Timer,
    x5Timer,
    x6Timer,
    x7Timer,
    x8Timer,
    x9Timer
} from "./timers";
import {
    buttonCpsX10Id,
    buttonCpsX2Id,
    buttonCpsX3Id,
    buttonCpsX4Id,
    buttonCpsX5Id,
    buttonCpsX6Id,
    buttonCpsX7Id,
    buttonCpsX8Id,
    buttonCpsX9Id,
    hoverX10,
    hoverX2,
    hoverX3,
    hoverX4,
    hoverX5,
    hoverX6,
    hoverX7,
    hoverX8,
    hoverX9,
    updateCpsX2Button,
    updateCpsX3Button,
    updateCpsX4Button,
    updateCpsX5Button,
    updateCpsX6Button,
    updateCpsX7Button,
    updateCpsX8Button,
    updateCpsX9Button
} from "./elements/features";

export function addEvents() {
    AddEvent(buttonStartClicker, 'click', onStartClickerButtonClick);

    AddEvent(buttonOff, 'click', onOffButtonClick);

    AddEvent(buttonBuildings, 'click', onBuildingsButtonClick);

    AddEvent(buttonFeatures, 'click', onFeaturesButtonClick);

    AddEvent(buttonModules, 'click', onModulesButtonClick);

    AddEvent(buttonCClicker, 'click', onCClickerButtonClick);

    AddEvent(buttonReset, 'click', onResetButtonClick);

    AddEvent(buttonStoreClicker, 'click', onStoreClickerButtonClick);
    AddEvent(buttonWClicker, 'click', onWClickerButtonClick);
    AddEvent(buttonAClicker, 'click', onAClickerButtonClick);
    AddEvent(buttonGClicker, 'click', onGClickerButtonClick);

    AddEvent(buttonSClicker, 'click', onSClickerButtonClick);
    AddEvent(buttonUClicker, 'click', onUClickerButtonClick);
    AddEvent(buttonCpsX2Id, 'click', onCpsX2IdButtonClick);
    AddEvent(buttonCpsX3Id, 'click', onCpsX3IdButtonClick);
    AddEvent(buttonCpsX4Id, 'click', onCpsX4IdButtonClick);
    AddEvent(buttonCpsX5Id, 'click', onCpsX5IdButtonClick);
    AddEvent(buttonCpsX6Id, 'click', onCpsX6IdButtonClick);
    AddEvent(buttonCpsX7Id, 'click', onCpsX7IdButtonClick);
    AddEvent(buttonCpsX8Id, 'click', onCpsX8IdButtonClick);
    AddEvent(buttonCpsX9Id, 'click', onCpsX9IdButtonClick);
    AddEvent(buttonCpsX10Id, 'click', onCpsX10IdButtonClick);
    AddEvent(buttonTinCable, 'click', onTinCableButtonClick);
    AddEvent(buttonAdvancedTinCable, 'click', onAdvancedTinCableButtonClick);
    AddEvent(buttonHybridTinCable, 'click', onHybridTinCableButtonClick);
    AddEvent(buttonUltimateTinCable, 'click', onUltimateTinCableButtonClick);
    AddEvent(buttonCopperCable, 'click', onCopperCableButtonClick);
    AddEvent(buttonAdvancedCopperCable, 'click', onAdvancedCopperCableButtonClick);
    AddEvent(buttonHybridCopperCable, 'click', onHybridCopperCableButtonClick);
    AddEvent(buttonUltimateCopperCable, 'click', onUltimateCopperCableButtonClick);
    AddEvent(buttonGoldCable, 'click', onGoldCableButtonClick);
    AddEvent(buttonAdvancedGoldCable, 'click', onAdvancedGoldCableButtonClick);
    AddEvent(buttonHybridGoldCable, 'click', onHybridGoldCableButtonClick);
    AddEvent(buttonUltimateGoldCable, 'click', onUltimateGoldCableButtonClick);
    AddEvent(buttonDiamondCable, 'click', onDiamondCableButtonClick);
    AddEvent(buttonAdvancedDiamondCable, 'click', onAdvancedDiamondCableButtonClick);
    AddEvent(buttonHybridDiamondCable, 'click', onHybridDiamondCableButtonClick);
    AddEvent(buttonUltimateDiamondCable, 'click', onUltimateDiamondCableButtonClick);
    AddEvent(buttonCClicker, 'mouseover', function () {
        hoverCrank.style.display = 'block'
    });
    AddEvent(buttonCClicker, 'mouseleave', function () {
        hoverCrank.style.display = 'none'
    });
    AddEvent(buttonStoreClicker, 'mouseover', function () {
        hoverThermal.style.display = 'block'
    });
    AddEvent(buttonStoreClicker, 'mouseleave', function () {
        hoverThermal.style.display = 'none'
    });
    AddEvent(buttonWClicker, 'mouseover', function () {
        hoverHydro.style.display = 'block'
    });
    AddEvent(buttonWClicker, 'mouseleave', function () {
        hoverHydro.style.display = 'none'
    });
    AddEvent(buttonAClicker, 'mouseover', function () {
        hoverWind.style.display = 'block'
    });
    AddEvent(buttonAClicker, 'mouseleave', function () {
        hoverWind.style.display = 'none'
    });
    AddEvent(buttonGClicker, 'mouseover', function () {
        hoverGeo.style.display = 'block'
    });
    AddEvent(buttonGClicker, 'mouseleave', function () {
        hoverGeo.style.display = 'none'
    });
    AddEvent(buttonSClicker, 'mouseover', function () {
        hoverSolar.style.display = 'block'
    });
    AddEvent(buttonSClicker, 'mouseleave', function () {
        hoverSolar.style.display = 'none'
    });
    AddEvent(buttonUClicker, 'mouseover', function () {
        hoverUran.style.display = 'block'
    });
    AddEvent(buttonUClicker, 'mouseleave', function () {
        hoverUran.style.display = 'none'
    });
    AddEvent(buttonCpsX2Id, 'mouseover', function () {
        hoverX2.style.display = 'block'
    });
    AddEvent(buttonCpsX2Id, 'mouseleave', function () {
        hoverX2.style.display = 'none'
    });
    AddEvent(buttonCpsX3Id, 'mouseover', function () {
        hoverX3.style.display = 'block'
    });
    AddEvent(buttonCpsX3Id, 'mouseleave', function () {
        hoverX3.style.display = 'none'
    });
    AddEvent(buttonCpsX4Id, 'mouseover', function () {
        hoverX4.style.display = 'block'
    });
    AddEvent(buttonCpsX4Id, 'mouseleave', function () {
        hoverX4.style.display = 'none'
    });
    AddEvent(buttonCpsX5Id, 'mouseover', function () {
        hoverX5.style.display = 'block'
    });
    AddEvent(buttonCpsX5Id, 'mouseleave', function () {
        hoverX5.style.display = 'none'
    });
    AddEvent(buttonCpsX6Id, 'mouseover', function () {
        hoverX6.style.display = 'block'
    });
    AddEvent(buttonCpsX6Id, 'mouseleave', function () {
        hoverX6.style.display = 'none'
    });
    AddEvent(buttonCpsX7Id, 'mouseover', function () {
        hoverX7.style.display = 'block'
    });
    AddEvent(buttonCpsX7Id, 'mouseleave', function () {
        hoverX7.style.display = 'none'
    });
    AddEvent(buttonCpsX8Id, 'mouseover', function () {
        hoverX8.style.display = 'block'
    });
    AddEvent(buttonCpsX8Id, 'mouseleave', function () {
        hoverX8.style.display = 'none'
    });
    AddEvent(buttonCpsX9Id, 'mouseover', function () {
        hoverX9.style.display = 'block'
    });
    AddEvent(buttonCpsX9Id, 'mouseleave', function () {
        hoverX9.style.display = 'none'
    });
    AddEvent(buttonCpsX10Id, 'mouseover', function () {
        hoverX10.style.display = 'block'
    });
    AddEvent(buttonCpsX10Id, 'mouseleave', function () {
        hoverX10.style.display = 'none'
    });
    AddEvent(buttonReset, 'mouseover', function () {
        hoverRcon.style.display = 'block'
    });
    AddEvent(buttonReset, 'mouseleave', function () {
        hoverRcon.style.display = 'none'
    });
    AddEvent(buttonTinCable, 'mouseover', function () {
        hoverTinCable.style.display = 'block'
    });
    AddEvent(buttonTinCable, 'mouseleave', function () {
        hoverTinCable.style.display = 'none'
    });
    AddEvent(buttonAdvancedTinCable, 'mouseover', function () {
        hoverAdvancedTinCable.style.display = 'block'
    });
    AddEvent(buttonAdvancedTinCable, 'mouseleave', function () {
        hoverAdvancedTinCable.style.display = 'none'
    });
    AddEvent(buttonHybridTinCable, 'mouseover', function () {
        hoverHybridTinCable.style.display = 'block'
    });
    AddEvent(buttonHybridTinCable, 'mouseleave', function () {
        hoverHybridTinCable.style.display = 'none'
    });
    AddEvent(buttonUltimateTinCable, 'mouseover', function () {
        hoverUltimateTinCable.style.display = 'block'
    });
    AddEvent(buttonUltimateTinCable, 'mouseleave', function () {
        hoverUltimateTinCable.style.display = 'none'
    });
    AddEvent(buttonUltimateCopperCable, 'mouseover', function () {
        hoverCopperCable.style.display = 'block'
    });
    AddEvent(buttonUltimateCopperCable, 'mouseleave', function () {
        hoverCopperCable.style.display = 'none'
    });
    AddEvent(buttonAdvancedCopperCable, 'mouseover', function () {
        hoverAdvancedCopperCable.style.display = 'block'
    });
    AddEvent(buttonAdvancedCopperCable, 'mouseleave', function () {
        hoverAdvancedCopperCable.style.display = 'none'
    });
    AddEvent(buttonHybridCopperCable, 'mouseover', function () {
        hoverHybridCopperCable.style.display = 'block'
    });
    AddEvent(buttonHybridCopperCable, 'mouseleave', function () {
        hoverHybridCopperCable.style.display = 'none'
    });
    AddEvent(buttonUltimateCopperCable, 'mouseover', function () {
        hoverUltimateCopperCable.style.display = 'block'
    });
    AddEvent(buttonUltimateCopperCable, 'mouseleave', function () {
        hoverUltimateCopperCable.style.display = 'none'
    });
    AddEvent(buttonGoldCable, 'mouseover', function () {
        hoverGoldCable.style.display = 'block'
    });
    AddEvent(buttonGoldCable, 'mouseleave', function () {
        hoverGoldCable.style.display = 'none'
    });
    AddEvent(buttonAdvancedGoldCable, 'mouseover', function () {
        hoverAdvancedGoldCable.style.display = 'block'
    });
    AddEvent(buttonAdvancedGoldCable, 'mouseleave', function () {
        hoverAdvancedGoldCable.style.display = 'none'
    });
    AddEvent(buttonHybridGoldCable, 'mouseover', function () {
        hoverHybridGoldCable.style.display = 'block'
    });
    AddEvent(buttonHybridGoldCable, 'mouseleave', function () {
        hoverHybridGoldCable.style.display = 'none'
    });
    AddEvent(buttonUltimateGoldCable, 'mouseover', function () {
        hoverUltimateGoldCable.style.display = 'block'
    });
    AddEvent(buttonUltimateGoldCable, 'mouseleave', function () {
        hoverUltimateGoldCable.style.display = 'none'
    });
    AddEvent(buttonDiamondCable, 'mouseover', function () {
        hoverDiamondCable.style.display = 'block'
    });
    AddEvent(buttonDiamondCable, 'mouseleave', function () {
        hoverDiamondCable.style.display = 'none'
    });
    AddEvent(buttonAdvancedDiamondCable, 'mouseover', function () {
        hoverAdvancedDiamondCable.style.display = 'block'
    });
    AddEvent(buttonAdvancedDiamondCable, 'mouseleave', function () {
        hoverAdvancedDiamondCable.style.display = 'none'
    });
    AddEvent(buttonHybridDiamondCable, 'mouseover', function () {
        hoverHybridDiamondCable.style.display = 'block'
    });
    AddEvent(buttonHybridDiamondCable, 'mouseleave', function () {
        hoverHybridDiamondCable.style.display = 'none'
    });
    AddEvent(buttonUltimateDiamondCable, 'mouseover', function () {
        hoverUltimateDiamondCable.style.display = 'block'
    });
    AddEvent(buttonUltimateDiamondCable, 'mouseleave', function () {
        hoverUltimateDiamondCable.style.display = 'none'
    });
}

function onStartClickerButtonClick() {
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    MOD.buttonClicks += 1;
    updateStartClickerButton();
    if (MOD.buttonClicks % 2 === 0) {
        displayATin.style.display = "block";
        displayACopper.style.display = "block";
        displayAIron.style.display = "block";
        displayASilver.style.display = "block";
        displayAGold.style.display = "block";
        displayADiamond.style.display = "block";
        buttonBuildings.style.display = "block";
        buttonModules.style.display = "block";
        buttonFeatures.style.display = "block";
        displayEpsMeter.style.display = "block";
        buttonReset.style.display = "block";
        buttonCClicker.style.display = "block";
        buttonStoreClicker.style.display = "block";
        buttonWClicker.style.display = "block";
        buttonAClicker.style.display = "block";
        buttonGClicker.style.display = "block";
        buttonSClicker.style.display = "block";
        buttonUClicker.style.display = "block";
        displayEpsChecker.style.display = "block";
        buttonOff.style.display = "block";
        imageYuuClicker.style.display = "block";
        imageFunesClicker.style.display = "block";
        imageWaterClicker.style.display = "block";
        imageWindClicker.style.display = "block";
        imageGeoClicker.style.display = "block";
        imageSolarClicker.style.display = "block";
        imageNuclearClicker.style.display = "block";
    } else {
        buttonBuildings.style.display = "none";
        buttonFeatures.style.display = "none";
        buttonModules.style.display = "none";
        displayEpsMeter.style.display = "none";
        buttonReset.style.display = "none";
        buttonCClicker.style.display = "none";
        buttonStoreClicker.style.display = "none";
        buttonWClicker.style.display = "none";
        buttonAClicker.style.display = "none";
        buttonGClicker.style.display = "none";
        buttonSClicker.style.display = "none";
        buttonUClicker.style.display = "none";
        buttonCpsX2Id.style.display = "none";
        buttonCpsX3Id.style.display = "none";
        buttonCpsX4Id.style.display = "none";
        buttonCpsX5Id.style.display = "none";
        buttonCpsX6Id.style.display = "none";
        buttonCpsX7Id.style.display = "none";
        buttonCpsX8Id.style.display = "none";
        buttonCpsX9Id.style.display = "none";
        buttonCpsX10Id.style.display = "none";
        displayEpsChecker.style.display = "none";
        buttonOff.style.display = "none";
        imageYuuClicker.style.display = "none";
        imageFunesClicker.style.display = "none";
        imageWaterClicker.style.display = "none";
        imageWindClicker.style.display = "none";
        imageGeoClicker.style.display = "none";
        imageSolarClicker.style.display = "none";
        imageNuclearClicker.style.display = "none"
        displayATin.style.display = "none";
        displayACopper.style.display = "none";
        displayAIron.style.display = "none";
        displayASilver.style.display = "none";
        displayAGold.style.display = "none";
        displayADiamond.style.display = "none";
        buttonTinCable.style.display = "none";
        buttonAdvancedTinCable.style.display = "none";
        buttonHybridTinCable.style.display = "none";
        buttonUltimateTinCable.style.display = "none";
        buttonCopperCable.style.display = "none";
        buttonAdvancedCopperCable.style.display = "none";
        buttonHybridCopperCable.style.display = "none";
        buttonUltimateCopperCable.style.display = "none";
        buttonGoldCable.style.display = "none";
        buttonAdvancedGoldCable.style.display = "none";
        buttonHybridGoldCable.style.display = "none";
        buttonUltimateGoldCable.style.display = "none";
        buttonDiamondCable.style.display = "none";
        buttonAdvancedDiamondCable.style.display = "none";
        buttonHybridDiamondCable.style.display = "none";
        buttonUltimateDiamondCable.style.display = "none";
    }
}

function onOffButtonClick() {
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    MOD.offvs += 1;
    updateOffButtonDisplay();
    if (MOD.offvs % 2 === 0) {
        imageYuuClicker.style.display = "none";
        imageFunesClicker.style.display = "none";
        imageWaterClicker.style.display = "none";
        imageWindClicker.style.display = "none";
        imageGeoClicker.style.display = "none";
        imageSolarClicker.style.display = "none";
        imageNuclearClicker.style.display = "none";
    } else {
        imageYuuClicker.style.display = "block";
        imageFunesClicker.style.display = "block";
        imageWaterClicker.style.display = "block";
        imageWindClicker.style.display = "block";
        imageGeoClicker.style.display = "block";
        imageSolarClicker.style.display = "block";
        imageNuclearClicker.style.display = "block";
    }
}

function onBuildingsButtonClick() {
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    buttonCClicker.style.display = "block";
    buttonReset.style.display = "block";
    buttonStoreClicker.style.display = "block";
    buttonWClicker.style.display = "block";
    buttonAClicker.style.display = "block";
    buttonGClicker.style.display = "block";
    buttonSClicker.style.display = "block";
    buttonUClicker.style.display = "block";
    displayATin.style.display = "block";
    displayACopper.style.display = "block";
    displayAIron.style.display = "block";
    displayASilver.style.display = "block";
    displayAGold.style.display = "block";
    displayADiamond.style.display = "block";
    buttonCpsX2Id.style.display = "none";
    buttonCpsX3Id.style.display = "none";
    buttonCpsX4Id.style.display = "none";
    buttonCpsX5Id.style.display = "none";
    buttonCpsX6Id.style.display = "none";
    buttonCpsX7Id.style.display = "none";
    buttonCpsX8Id.style.display = "none";
    buttonCpsX9Id.style.display = "none";
    buttonCpsX10Id.style.display = "none";
    imageYuuClicker.style.display = "block";
    imageFunesClicker.style.display = "block";
    imageWaterClicker.style.display = "block";
    imageWindClicker.style.display = "block";
    imageGeoClicker.style.display = "block";
    imageSolarClicker.style.display = "block";
    imageNuclearClicker.style.display = "block";
    buttonTinCable.style.display = "none";
    buttonAdvancedTinCable.style.display = "none";
    buttonHybridTinCable.style.display = "none";
    buttonUltimateTinCable.style.display = "none";
    buttonCopperCable.style.display = "none";
    buttonAdvancedCopperCable.style.display = "none";
    buttonHybridCopperCable.style.display = "none";
    buttonUltimateCopperCable.style.display = "none";
    buttonGoldCable.style.display = "none";
    buttonAdvancedGoldCable.style.display = "none";
    buttonHybridGoldCable.style.display = "none";
    buttonUltimateGoldCable.style.display = "none";
    buttonDiamondCable.style.display = "none";
    buttonAdvancedDiamondCable.style.display = "none";
    buttonHybridDiamondCable.style.display = "none";
    buttonUltimateDiamondCable.style.display = "none";
}

function onFeaturesButtonClick() {
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    buttonCpsX2Id.style.display = "block";
    buttonReset.style.display = "none";
    buttonCpsX3Id.style.display = "block";
    buttonCpsX4Id.style.display = "block";
    buttonCpsX5Id.style.display = "block";
    buttonCpsX6Id.style.display = "block";
    buttonCpsX7Id.style.display = "block";
    buttonCpsX8Id.style.display = "block";
    buttonCpsX9Id.style.display = "block";
    buttonCpsX10Id.style.display = "block";
    buttonCClicker.style.display = "none";
    buttonStoreClicker.style.display = "none";
    buttonWClicker.style.display = "none";
    buttonAClicker.style.display = "none";
    buttonGClicker.style.display = "none";
    buttonSClicker.style.display = "none";
    buttonUClicker.style.display = "none";
    imageYuuClicker.style.display = "none";
    imageFunesClicker.style.display = "none";
    imageWaterClicker.style.display = "none";
    imageWindClicker.style.display = "none";
    imageGeoClicker.style.display = "none";
    imageSolarClicker.style.display = "none";
    imageNuclearClicker.style.display = "none";
    displayATin.style.display = "none";
    displayACopper.style.display = "none";
    displayAIron.style.display = "none";
    displayASilver.style.display = "none";
    displayAGold.style.display = "none";
    displayADiamond.style.display = "none";
    buttonTinCable.style.display = "none";
    buttonAdvancedTinCable.style.display = "none";
    buttonHybridTinCable.style.display = "none";
    buttonUltimateTinCable.style.display = "none";
    buttonCopperCable.style.display = "none";
    buttonAdvancedCopperCable.style.display = "none";
    buttonHybridCopperCable.style.display = "none";
    buttonUltimateCopperCable.style.display = "none";
    buttonGoldCable.style.display = "none";
    buttonAdvancedGoldCable.style.display = "none";
    buttonHybridGoldCable.style.display = "none";
    buttonUltimateGoldCable.style.display = "none";
    buttonDiamondCable.style.display = "none";
    buttonAdvancedDiamondCable.style.display = "none";
    buttonHybridDiamondCable.style.display = "none";
    buttonUltimateDiamondCable.style.display = "none";
}

function onModulesButtonClick() {
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    buttonCClicker.style.display = "none";
    buttonReset.style.display = "none";
    buttonStoreClicker.style.display = "none";
    buttonWClicker.style.display = "none";
    buttonAClicker.style.display = "none";
    buttonGClicker.style.display = "none";
    buttonSClicker.style.display = "none";
    buttonUClicker.style.display = "none";
    buttonCpsX2Id.style.display = "none";
    buttonCpsX3Id.style.display = "none";
    buttonCpsX4Id.style.display = "none";
    buttonCpsX5Id.style.display = "none";
    buttonCpsX6Id.style.display = "none";
    buttonCpsX7Id.style.display = "none";
    buttonCpsX8Id.style.display = "none";
    buttonCpsX9Id.style.display = "none";
    buttonCpsX10Id.style.display = "none";
    imageYuuClicker.style.display = "none";
    imageFunesClicker.style.display = "none";
    imageWaterClicker.style.display = "none";
    imageWindClicker.style.display = "none";
    imageGeoClicker.style.display = "none";
    imageSolarClicker.style.display = "none";
    imageNuclearClicker.style.display = "none";
    displayATin.style.display = "block";
    displayACopper.style.display = "block";
    displayAIron.style.display = "block";
    displayASilver.style.display = "block";
    displayAGold.style.display = "block";
    displayADiamond.style.display = "block";
    buttonCopperCable.style.display = "block";
    buttonTinCable.style.display = "block";
    buttonAdvancedTinCable.style.display = "block";
    buttonHybridTinCable.style.display = "block";
    buttonUltimateTinCable.style.display = "block";
    buttonCopperCable.style.display = "block";
    buttonAdvancedCopperCable.style.display = "block";
    buttonHybridCopperCable.style.display = "block";
    buttonUltimateCopperCable.style.display = "block";
    buttonGoldCable.style.display = "block";
    buttonAdvancedGoldCable.style.display = "block";
    buttonHybridGoldCable.style.display = "block";
    buttonUltimateGoldCable.style.display = "block";
    buttonDiamondCable.style.display = "block";
    buttonAdvancedDiamondCable.style.display = "block";
    buttonHybridDiamondCable.style.display = "block";
    buttonUltimateDiamondCable.style.display = "block";
}

function onCClickerButtonClick() {
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);
    MOD.eps += 1;
    updateEpsMeterDisplay();
    let rand = Math.floor(Math.random() * 10000);
    if (rand > 950 && rand < 1000) {
        MOD.diamond += 1;
        updateADiamondDisplay();
        Game.Notify('ダイヤモンドを見つけた！', '', 0, 2);
    }
    if (rand > 777 && rand < 950) {
        MOD.gold += 1;
        updateAGoldDisplay();
        Game.Notify('金を見つけた！', '', 0, 2);
    }
    if (rand > 0 && rand < 1000) {
        MOD.silver += 1;
        updateASilverDisplay();
        Game.Notify('銀を見つけた！', '', 0, 2);
    }
    if (rand > 7000 && rand < 9000) {
        MOD.iron += 1;
        updateAIronDisplay();
        Game.Notify('鉄を見つけた！', '', 0, 2);
    }
    if (rand > 1000 && rand < 5000) {
        MOD.copper += 1;
        updateACopperDisplay();
        Game.Notify('銅を見つけた！', '', 0, 2);
    }
    if (rand > 5000 && rand < 7000) {
        MOD.tin += 1;
        updateATinDisplay();
        Game.Notify('錫を見つけた！', '', 0, 2);
    }
}

function onResetButtonClick() {
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);
    MOD.eps = 0;
    updateEpsMeterDisplay();
    MOD.tlevel = 0;
    updateThermalButton();
    MOD.hlevel = 0;
    updateHydroButton();
    MOD.wlevel = 0;
    updateWindButton();
    MOD.glevel = 0;
    updateGeoButton();
    MOD.slevel = 0;
    updateSolarButton();
    MOD.nlevel = 0;
    updateNuclearButton();
    MOD.addeps = 0;
    updateEpsCheckerDisplay();
    MOD.tincableonoff = 0;
    updateTinCable();
    MOD.advtincableon = 0;
    updateAdvancedTinCable();
    MOD.hybtincableon = 0;
    updateHybridTinCable();
    MOD.ulttincableon = 0;
    updateUltimateTinCable();
    MOD.multiplicationeps = 1;
    updateEpsCheckerDisplay();
    MOD.subtraction = 0;
    updateEpsCheckerDisplay();
    MOD.cuppercableon = 0;
    updateCopperCable();
    MOD.advcuppercableon = 0;
    updateAdvancedCopperCable();
    MOD.hybcuppercableon = 0;
    updateHybridCopperCable();
    MOD.ultcuppercableon = 0;
    updateUltimateCopperCable();
    MOD.goldcableon = 0;
    updateGoldCable();
    MOD.advgoldcableon = 0;
    updateAdvancedGoldCable();
    MOD.hybgoldcableon = 0;
    updateHybridGoldCable();
    MOD.ultgoldcableon = 0;
    updateUltimateGoldCable();
    MOD.diamondcableon = 0;
    updateDiamondCable();
    MOD.advdiamondcableon = 0;
    updateAdvancedDiamondCable();
    MOD.hybdiamondcableon = 0;
    updateHybridDiamondCable();
    MOD.ultdiamondcableon = 0;
    updateUltimateDiamondCable();
}

function onStoreClickerButtonClick() {
    if (MOD.eps >= 10 + 10 * MOD.tlevel * MOD.tlevel && MOD.tlevel < 10) {
        MOD.eps -= 10 + 10 * MOD.tlevel * MOD.tlevel;
        updateEpsMeterDisplay();
        MOD.tlevel += 1;
        updateThermalButton();
        MOD.addeps += 0.05;
        updateEpsCheckerDisplay();
        MOD.tp = 10 + 10 * MOD.tlevel * MOD.tlevel;
        updateThermalButton();
        if (MOD.tlevel === 1) {
            Game.Notify('火力発電機解放！', '地球温暖化', 0, 6);
            MOD.cuppercableon = 0;
            updateCopperCable();
            MOD.advcuppercableon = 0;
            updateAdvancedCopperCable();
            MOD.hybcuppercableon = 0;
            updateHybridCopperCable();
            MOD.ultcuppercableon = 0;
            updateUltimateCopperCable();
            MOD.goldcableon = 0;
            updateGoldCable();
            MOD.advgoldcableon = 0;
            updateAdvancedGoldCable();
            MOD.hybgoldcableon = 0;
            updateHybridGoldCable();
            MOD.ultgoldcableon = 0;
            updateUltimateGoldCable();
            MOD.diamondcableon = 0;
            updateDiamondCable();
            MOD.advdiamondcableon = 0;
            updateAdvancedDiamondCable();
            MOD.hybdiamondcableon = 0;
            updateHybridDiamondCable();
            MOD.ultdiamondcableon = 0;
            updateUltimateDiamondCable();
            MOD.tincableonoff = 0;
            updateTinCable();
            MOD.advtincableon = 0;
            updateAdvancedTinCable();
            MOD.hybtincableon = 0;
            updateHybridTinCable();
            MOD.ulttincableon = 0;
            updateUltimateTinCable();
        }
        if (MOD.tlevel === 10) {
            Game.Notify('火力発電機の限界', 'もう置くスペースがありません！', 0, 6);
        }
    } else {
        if (MOD.tlevel < 10) {
            Game.Notify('電力不足！', '', 0, 2);
        } else {
            Game.Notify('これ以上増設できません。', '', 0, 2);
        }
    }
}

function onWClickerButtonClick() {
    if (MOD.eps >= 100 + 100 * MOD.hlevel * MOD.hlevel && MOD.hlevel < 10) {
        MOD.eps -= 100 + 100 * MOD.hlevel * MOD.hlevel;
        updateEpsMeterDisplay();
        MOD.hlevel += 1;
        updateHydroButton();
        MOD.addeps += 0.5;
        updateEpsCheckerDisplay();
        MOD.hp = 100 + 100 * MOD.hlevel * MOD.hlevel;
        updateHydroButton();
        if (MOD.hlevel === 1) {
            Game.Notify('水力発電開放！', 'ここで満足しないでね', 0, 6);
            MOD.cuppercableon = 0;
            updateCopperCable();
            MOD.advcuppercableon = 0;
            updateAdvancedCopperCable();
            MOD.hybcuppercableon = 0;
            updateHybridCopperCable();
            MOD.ultcuppercableon = 0;
            updateUltimateCopperCable();
            MOD.goldcableon = 0;
            updateGoldCable();
            MOD.advgoldcableon = 0;
            updateAdvancedGoldCable();
            MOD.hybgoldcableon = 0;
            updateHybridGoldCable();
            MOD.ultgoldcableon = 0;
            updateUltimateGoldCable();
            MOD.diamondcableon = 0;
            updateDiamondCable();
            MOD.advdiamondcableon = 0;
            updateAdvancedDiamondCable();
            MOD.hybdiamondcableon = 0;
            updateHybridDiamondCable();
            MOD.ultdiamondcableon = 0;
            updateUltimateDiamondCable();
            MOD.tincableonoff = 0;
            updateTinCable();
            MOD.advtincableon = 0;
            updateAdvancedTinCable();
            MOD.hybtincableon = 0;
            updateHybridTinCable();
            MOD.ulttincableon = 0;
            updateUltimateTinCable();
        }
        if (MOD.hlevel === 10) {
            Game.Notify('水力発電機の限界', 'ウチ、そんなに水ないんすよ。', 0, 6);
        }
    } else {
        if (MOD.hlevel < 10) {
            Game.Notify('電力不足！', '', 0, 2);
        } else {
            Game.Notify('これ以上増設できません。', '', 0, 2);
        }
    }
}

function onAClickerButtonClick() {
    if (MOD.eps >= 1100 + 1100 * MOD.wlevel * MOD.wlevel && MOD.wlevel < 100) {
        MOD.eps -= 1100 + 1100 * MOD.wlevel * MOD.wlevel;
        updateEpsMeterDisplay();
        MOD.wlevel += 1;
        updateWindButton();
        MOD.addeps += 5;
        updateEpsCheckerDisplay();
        MOD.wp = 1100 + 1100 * MOD.wlevel * MOD.wlevel;
        updateWindHover();
        if (MOD.wlevel === 1) {
            Game.Notify('風力発電開放！', '近隣の騒音被害は無視ですか…？', 0, 6);
        }
        if (MOD.wlevel === 10) {
            Game.Notify('風力発電の開拓者！', '近隣からは毎晩クレームの嵐です。', 0, 6);
        }
        if (MOD.wlevel === 50) {
            Game.Notify('風力発電の可能性！', 'クレームの世界記録を更新しました。', 0, 6);
        }
        if (MOD.wlevel === 100) {
            Game.Notify('風力発電の異端児！', '国からストップがかかりました。', 0, 6);
        }
    } else {
        if (MOD.wlevel < 100) {
            Game.Notify('電力不足！', '', 0, 2);
        } else {
            Game.Notify('これ以上増設できません。', '', 0, 2);
        }
    }
}

function onGClickerButtonClick() {
    if (MOD.eps >= 12100 + 12100 * MOD.glevel * MOD.glevel && MOD.glevel < 1000) {
        MOD.eps -= 12100 + 12100 * MOD.glevel * MOD.glevel;
        updateEpsMeterDisplay();
        MOD.glevel += 1;
        updateGeoButton();
        MOD.addeps += 45;
        updateEpsCheckerDisplay();
        MOD.gp = 12100 + 12100 * MOD.glevel * MOD.glevel;
        updateGeoHover();
        if (MOD.glevel === 1) {
            Game.Notify('地熱発電機解放！', 'マグマはどこから…？', 0, 6);
        }
        if (MOD.glevel === 10) {
            Game.Notify('地熱発電機の開拓者！', '案外これコスパ良いよね', 0, 6);
        }
        if (MOD.glevel === 50) {
            Game.Notify('地熱発電機の新参者！', '工業化は始まったばかり', 0, 6);
        }
        if (MOD.glevel === 100) {
            Game.Notify('地熱発電機の使徒！', 'どこにそんな量のマグマがあるんだい', 0, 6);
        }
        if (MOD.glevel === 500) {
            Game.Notify('地熱発電機の逆襲！', 'まだまだマグマは消えない', 0, 6);
        }
        if (MOD.glevel === 1000) {
            Game.Notify('地熱発電機の限界！', '発電機のせいでマグマが見えないよ', 0, 6);
        }
    } else {
        if (MOD.glevel < 1000) {
            Game.Notify('電力不足！', '', 0, 2);
        } else {
            Game.Notify('これ以上増設できません。', '', 0, 2);
        }
    }
}

function onSClickerButtonClick() {
    if (MOD.eps >= 1214000 + 1214000 * MOD.slevel * MOD.slevel && MOD.slevel < 1000000) {
        MOD.eps -= 1214000 + 1214000 * MOD.slevel * MOD.slevel;
        updateEpsMeterDisplay();
        MOD.slevel += 1;
        updateSolarButton();
        MOD.addeps += 2555;
        updateEpsCheckerDisplay();
        MOD.sp = 1214000 + 1214000 * MOD.slevel * MOD.slevel;
        updateUranHover();
        if (MOD.slevel === 1) {
            Game.Notify('太陽光発電開放！', 'リソース不要の最高の発電！', 0, 6);
        }
        if (MOD.slevel === 10) {
            Game.Notify('太陽光発電の開拓者！', '目指せ、テラソーラー！', 0, 6);
        }
        if (MOD.slevel === 50) {
            Game.Notify('太陽光発電の使徒！', 'ここからが本番！', 0, 6);
        }
        if (MOD.slevel === 75) {
            Game.Notify('太陽光発電の支配人！', 'ギア上げていこうぜ！', 0, 6);
        }
        if (MOD.slevel === 100) {
            Game.Notify('太陽光発電の喰らい人！', 'まだ100だよ？', 0, 6);
        }
        if (MOD.slevel === 125) {
            Game.Notify('太陽光発電で有名な人！', '太陽光は終わらない', 0, 6);
        }
        if (MOD.slevel === 150) {
            Game.Notify('太陽光発電の愛人！', '人生を捧げる準備はできたかい？', 0, 6);
        }
        if (MOD.slevel === 175) {
            Game.Notify('太陽光発電の偉人！', '教科書に載る日も近い？', 0, 6);
        }
        if (MOD.slevel === 200) {
            Game.Notify('太陽光発電の異人！', 'キムチ鍋っておいしいよね', 0, 6);
        }
        if (MOD.slevel === 225) {
            Game.Notify('太陽光発電ののれん分け！', 'このゲームでは電気は減衰しません', 0, 6);
        }
        if (MOD.slevel === 250) {
            Game.Notify('太陽光発電の影武者！', '太陽光も戦国時代？', 0, 6);
        }
        if (MOD.slevel === 275) {
            Game.Notify('太陽光発電の兄者人！', 'まさかあなたは…生き別れの…', 0, 6);
        }
        if (MOD.slevel === 300) {
            Game.Notify('太陽光発電の座敷童！', '未練が残っちゃった', 0, 6);
        }
        if (MOD.slevel === 325) {
            Game.Notify('太陽光発電の候補者！', '立候補して生贄となれ', 0, 6);
        }
        if (MOD.slevel === 350) {
            Game.Notify('太陽光発電の申し子！', '身体が太陽光パネルに…！？', 0, 6);
        }
        if (MOD.slevel === 375) {
            Game.Notify('太陽光発電の客人！', 'きゃくじんじゃないよまろうどだよ', 0, 6);
        }
        if (MOD.slevel === 400) {
            Game.Notify('太陽光発電の管理人！', '苦節あってようやくたどり着いた', 0, 6);
        }
        if (MOD.slevel === 425) {
            Game.Notify('太陽光発電の番人！', '全宇宙が注目を集めてる', 0, 6);
        }
        if (MOD.slevel === 450) {
            Game.Notify('太陽光発電検定30級！', 'まだまだ赤ちゃん', 0, 6);
        }
        if (MOD.slevel === 475) {
            Game.Notify('太陽光発電検定29級！', 'まだ歩けないよ', 0, 6);
        }
        if (MOD.slevel === 500) {
            Game.Notify('太陽光発電検定28級！', '言葉を話せるようになった！', 0, 6);
        }
        if (MOD.slevel === 525) {
            Game.Notify('太陽光発電検定27級！', '立てそうで立てない！', 0, 6);
        }
        if (MOD.slevel === 550) {
            Game.Notify('太陽光発電検定26級！', 'ようやく立てるようになった！', 0, 6);
        }
        if (MOD.slevel === 575) {
            Game.Notify('太陽光発電検定25級！', '言葉を交わせるようになった', 0, 6);
        }
        if (MOD.slevel === 600) {
            Game.Notify('太陽光発電検定24級！', '地球はもう滅びるらしい', 0, 6);
        }
        if (MOD.slevel === 625) {
            Game.Notify('太陽光発電検定23級！', '火星に飛べるロケットを開発した！', 0, 6);
        }
        if (MOD.slevel === 650) {
            Game.Notify('太陽光発電検定22級！', '小学校に入学しました', 0, 6);
        }
        if (MOD.slevel === 675) {
            Game.Notify('太陽光発電検定21級！', '同級生にいじめられたよ～～～', 0, 6);
        }
        if (MOD.slevel === 700) {
            Game.Notify('太陽光発電検定20級！', '先生をルンバで論破したルンパッパ！', 0, 6);
        }
        if (MOD.slevel === 725) {
            Game.Notify('太陽光発電検定19級！', '旅立ちの日にを逆立ちで歌った卒業式！', 0, 6);
        }
        if (MOD.slevel === 750) {
            Game.Notify('太陽光発電検定18級！', '入学式で椅子を倒しちゃった！', 0, 6);
        }
        if (MOD.slevel === 775) {
            Game.Notify('太陽光発電検定17級！', '生徒指導室に呼ばれました！', 0, 6);
        }
        if (MOD.slevel === 800) {
            Game.Notify('太陽光発電検定16級！', '何もかもが嫌になった文化祭！', 0, 6);
        }
        if (MOD.slevel === 825) {
            Game.Notify('太陽光発電検定15級！', '何もかもがどうでもよくなった体育祭！', 0, 6);
        }
        if (MOD.slevel === 850) {
            Game.Notify('太陽光発電検定14級！', '図書室でこっそり本に折り目つけてやった！', 0, 6);
        }
        if (MOD.slevel === 875) {
            Game.Notify('太陽光発電検定13級！', '暴れてたらガラス割れちゃった！', 0, 6);
        }
        if (MOD.slevel === 900) {
            Game.Notify('太陽光発電検定12級！', '部活出禁？！', 0, 6);
        }
        if (MOD.slevel === 925) {
            Game.Notify('太陽光発電検定11級！', 'トマト！', 0, 6);
        }
        if (MOD.slevel === 950) {
            Game.Notify('太陽光発電検定10級！', '初めて笑った卒業式！', 0, 6);
        }
        if (MOD.slevel === 975) {
            Game.Notify('太陽光発電検定9級！', '舐め腐った態度で高校入学！', 0, 6);
        }
        if (MOD.slevel === 1000) {
            Game.Notify('太陽光発電検定8級！', 'ハバネロを入れたら怒られた！', 0, 6);
        }
        if (MOD.slevel === 1025) {
            Game.Notify('太陽光発電検定7級！', 'なぜか先生に好かれる！', 0, 6);
        }
        if (MOD.slevel === 1050) {
            Game.Notify('太陽光発電検定6級！', '校内放送でやらかす！', 0, 6);
        }
        if (MOD.slevel === 1075) {
            Game.Notify('太陽光発電検定5級！', '学校１の変わり者！', 0, 6);
        }
        if (MOD.slevel === 1100) {
            Game.Notify('太陽光発電検定4級！', '囚われの身！', 0, 6);
        }
        if (MOD.slevel === 1125) {
            Game.Notify('太陽光発電検定3級！', '進級の危機！', 0, 6);
        }
        if (MOD.slevel === 1150) {
            Game.Notify('太陽光発電検定2級！', '無事卒業！', 0, 6);
        }
        if (MOD.slevel === 1175) {
            Game.Notify('太陽光発電検定1級！', '浪人の危機！', 0, 6);
        }
        if (MOD.slevel === 1200) {
            Game.Notify('太陽光発電検定1段！', '進学が決定！', 0, 6);
        }
        if (MOD.slevel === 1225) {
            Game.Notify('太陽光発電検定2段！', '入学式に４分遅刻する！', 0, 6);
        }
        if (MOD.slevel === 1250) {
            Game.Notify('太陽光発電検定3段！', '初回の授業でやらかす！', 0, 6);
        }
        if (MOD.slevel === 1275) {
            Game.Notify('太陽光発電検定4段！', '成績優秀者に選ばれる！', 0, 6);
        }
        if (MOD.slevel === 1300) {
            Game.Notify('太陽光発電検定5段！', '危険思想を抱く！', 0, 6);
        }
        if (MOD.slevel === 1325) {
            Game.Notify('太陽光発電検定6段！', '世界はクッキーでできていたことを知る！', 0, 6);
        }
        if (MOD.slevel === 1350) {
            Game.Notify('太陽光発電検定7段！', '太陽神の力を借りる！', 0, 6);
        }
        if (MOD.slevel === 1375) {
            Game.Notify('太陽光発電検定8段！', '君も太陽神にならないか？', 0, 6);
        }
        if (MOD.slevel === 1400) {
            Game.Notify('太陽光発電検定9段！', '太陽の一部になるのは辛い', 0, 6);
        }
        if (MOD.slevel === 1425) {
            Game.Notify('太陽光発電検定10段！', '辛味チキンをほおばる', 0, 6);
        }
        if (MOD.slevel === 1450) {
            Game.Notify('太陽光発電検定名人！', 'カラムーチョは敵', 0, 6);
        }
        if (MOD.slevel === 1475) {
            Game.Notify('太陽光発電検定師範！', '師匠、一生ついていきます', 0, 6);
        }
        if (MOD.slevel === 1500) {
            Game.Notify('太陽光発電検定師範代！', '今日から俺が師匠だ', 0, 6);
        }
        if (MOD.slevel === 1525) {
            Game.Notify('太陽光発電検定超人！', '人という概念を超える', 0, 6);
        }
        if (MOD.slevel === 1550) {
            Game.Notify('太陽光発電検定仙人！', 'はんだごてで世界征服', 0, 6);
        }
        if (MOD.slevel === 1575) {
            Game.Notify('屋上ソーラーパネル化計画１！', 'まずは資金調達から', 0, 6);
        }
        if (MOD.slevel === 1600) {
            Game.Notify('屋上ソーラーパネル化計画２！', 'クラウドファンディングで垢バンをくらう', 0, 6);
        }
        if (MOD.slevel === 1625) {
            Game.Notify('屋上ソーラーパネル化計画３！', 'なんとか１０万の融資を受け取る', 0, 6);
        }
        if (MOD.slevel === 1650) {
            Game.Notify('屋上ソーラーパネル化計画４！', 'とあるビルの屋上だけを購入する', 0, 6);
        }
        if (MOD.slevel === 1675) {
            Game.Notify('屋上ソーラーパネル化計画５！', 'ビルの社長を説得してソーラーパネルを２枚置いてもらう', 0, 6);
        }
        if (MOD.slevel === 1700) {
            Game.Notify('屋上ソーラーパネル化計画６！', '２枚のソーラーパネルでお金を稼ぐ', 0, 6);
        }
        if (MOD.slevel === 1725) {
            Game.Notify('屋上ソーラーパネル化計画７！', '１００年放置してようやくソーラーパネルが３枚に', 0, 6);
        }
        if (MOD.slevel === 1750) {
            Game.Notify('屋上ソーラーパネル化計画８！', '幾年の歳月を経てソーラーパネルを１００枚に増やす', 0, 6);
        }
        if (MOD.slevel === 1775) {
            Game.Notify('屋上ソーラーパネル化計画９！', '１００枚置いてもまだ屋上の１％しか埋まってない…', 0, 6);
        }
        if (MOD.slevel === 1800) {
            Game.Notify('屋上ソーラーパネル化計画１０！', '維持費が足りないので社長に直談判', 0, 6);
        }
        if (MOD.slevel === 1825) {
            Game.Notify('屋上ソーラーパネル化計画１１！', '太陽光の良さを５時間語り尽くす', 0, 6);
        }
        if (MOD.slevel === 1850) {
            Game.Notify('屋上ソーラーパネル化計画１２！', '記念すべき１０１枚目を置く', 0, 6);
        }
        if (MOD.slevel === 1875) {
            Game.Notify('屋上ソーラーパネル化計画１３！', '全てがうまくいく気がする', 0, 6);
        }
        if (MOD.slevel === 1900) {
            Game.Notify('屋上ソーラーパネル化計画１４！', '抹茶ミルクの美味さに気づく', 0, 6);
        }
        if (MOD.slevel === 1925) {
            Game.Notify('屋上ソーラーパネル化計画１５！', 'きのこの山VSたけのこの里', 0, 6);
        }
        if (MOD.slevel === 1950) {
            Game.Notify('屋上ソーラーパネル化計画１６！', '氷山の一角、されど富士山', 0, 6);
        }
        if (MOD.slevel === 1975) {
            Game.Notify('屋上ソーラーパネル化計画１７！', '右往左往八方美人', 0, 6);
        }
        if (MOD.slevel === 2000) {
            Game.Notify('屋上ソーラーパネル化計画１８！', '右も左もモアイ像', 0, 6);
        }
        if (MOD.slevel === 2025) {
            Game.Notify('屋上ソーラーパネル化計画１９！', '座右の銘は名誉革命', 0, 6);
        }
        if (MOD.slevel === 2050) {
            Game.Notify('屋上ソーラーパネル化計画２０！', '犬も歩けば碧空に笑う', 0, 6);
        }
        if (MOD.slevel === 2075) {
            Game.Notify('屋上ソーラーパネル化計画２１！', '為体に終止符を', 0, 6);
        }
        if (MOD.slevel === 2100) {
            Game.Notify('屋上ソーラーパネル化計画２２！', '猫の手もかなり痛い', 0, 6);
        }
        if (MOD.slevel === 2125) {
            Game.Notify('屋上ソーラーパネル化計画２３！', '人よ人よに痛み分け', 0, 6);
        }
        if (MOD.slevel === 2150) {
            Game.Notify('屋上ソーラーパネル化計画２４！', '人並みにじゃんけんや', 0, 6);
        }
        if (MOD.slevel === 2175) {
            Game.Notify('屋上ソーラーパネル化計画２５！', '富士山麓禁書目録', 0, 6);
        }
        if (MOD.slevel === 2200) {
            Game.Notify('屋上ソーラーパネル化計画２６！', '言語道断の写輪眼', 0, 6);
        }
        if (MOD.slevel === 2225) {
            Game.Notify('屋上ソーラーパネル化計画２７！', '風林火山国破山有', 0, 6);
        }
        if (MOD.slevel === 2250) {
            Game.Notify('屋上ソーラーパネル化計画２８！', 'はじめましては一期一会', 0, 6);
        }
        if (MOD.slevel === 2275) {
            Game.Notify('屋上ソーラーパネル化計画２９！', '因果応報レモン参上', 0, 6);
        }
        if (MOD.slevel === 2300) {
            Game.Notify('屋上ソーラーパネル化計画３０！', '我田引水我ここに在り', 0, 6);
        }
        if (MOD.slevel === 2325) {
            Game.Notify('屋上ソーラーパネル化計画３１！', '有象無象の写像', 0, 6);
        }
        if (MOD.slevel === 2350) {
            Game.Notify('屋上ソーラーパネル化計画３２！', '魑魅魍魎チミ、もう用無し', 0, 6);
        }
        if (MOD.slevel === 2375) {
            Game.Notify('屋上ソーラーパネル化計画３３！', 'ハヤブサ花鳥風月戦', 0, 6);
        }
        if (MOD.slevel === 2400) {
            Game.Notify('屋上ソーラーパネル化計画３４！', '頑張って臥薪嘗胆した', 0, 6);
        }
        if (MOD.slevel === 2425) {
            Game.Notify('屋上ソーラーパネル化計画３５！', 'たくまきゅんと切磋琢磨', 0, 6);
        }
        if (MOD.slevel === 2450) {
            Game.Notify('屋上ソーラーパネル化計画３６！', '諸行無常は響かない', 0, 6);
        }
        if (MOD.slevel === 2475) {
            Game.Notify('屋上ソーラーパネル化計画３７！', 'なよたけの久保建英', 0, 6);
        }
        if (MOD.slevel === 2500) {
            Game.Notify('屋上ソーラーパネル化計画３８！', '御手洗手洗', 0, 6);
        }
        if (MOD.slevel === 2525) {
            Game.Notify('屋上ソーラーパネル化計画３９！', '引きこもりの最高到達点', 0, 6);
        }
        if (MOD.slevel === 2550) {
            Game.Notify('屋上ソーラーパネル化計画４０！', 'トムヤンクン', 0, 6);
        }
        if (MOD.slevel === 2575) {
            Game.Notify('屋上ソーラーパネル化計画４１！', 'トマトケチャップ日本代表', 0, 6);
        }
        if (MOD.slevel === 2600) {
            Game.Notify('屋上ソーラーパネル化計画４２！', 'さえずりのない日常', 0, 6);
        }
        if (MOD.slevel === 2625) {
            Game.Notify('屋上ソーラーパネル化計画４３！', '綱渡り耐え之助参上', 0, 6);
        }
        if (MOD.slevel === 2650) {
            Game.Notify('屋上ソーラーパネル化計画４４！', '明け透けな助太刀', 0, 6);
        }

    } else {
        if (MOD.slevel < 1000000) {
            Game.Notify('電力不足！', '', 0, 2);
        } else {
            Game.Notify('これ以上増設できません。', '', 0, 2);
        }
    }
}

function onUClickerButtonClick() {
    if (MOD.eps >= 666666666 + 666666666 * MOD.nlevel * MOD.nlevel && MOD.nlevel < 666666666) {
        MOD.eps -= 666666666 + 666666666 * MOD.nlevel * MOD.nlevel;
        updateEpsMeterDisplay();
        MOD.nlevel += 1;
        updateNuclearButton();
        MOD.addeps += 666666;
        updateEpsCheckerDisplay();
        MOD.np = 666666666 + 666666666 * MOD.nlevel * MOD.nlevel;
        updateUranHover();
        if (MOD.nlevel === 1) {
            Game.Notify('核融合炉解放！', '事故は起こさないでね…', 0, 6);
        }
        if (MOD.nlevel === 10) {
            Game.Notify('核融合炉の先駆者！', 'メルティーキッスのメルトダウン', 0, 6);
        }
        if (MOD.nlevel === 25) {
            Game.Notify('核融合炉の使徒！', 'アブナイ発電', 0, 6);
        }
        if (MOD.nlevel === 50) {
            Game.Notify('核融合炉の挑戦者！', '核を超えていけ', 0, 6);
        }
        if (MOD.nlevel === 75) {
            Game.Notify('核融合炉の仙人！', '増やし過ぎても大丈夫', 0, 6);
        }
        if (MOD.nlevel === 100) {
            Game.Notify('核融合炉の支配者！', '全てを理解した', 0, 6);
        }
        if (MOD.nlevel === 125) {
            Game.Notify('核融合炉の豊田議員！', 'ちーがーうーだーろー！', 0, 6);
        }
        if (MOD.nlevel === 150) {
            Game.Notify('核融合炉の想い人！', 'アブナイカンケイ', 0, 6);
        }
        if (MOD.nlevel === 175) {
            Game.Notify('核融合炉の操り人形！', '傀儡の君', 0, 6);
        }
        if (MOD.nlevel === 200) {
            Game.Notify('核融合炉の職人！', '離れ業', 0, 6);
        }
        if (MOD.nlevel === 225) {
            Game.Notify('核融合炉の為政者！', '記憶にございません', 0, 6);
        }
        if (MOD.nlevel === 250) {
            Game.Notify('核融合炉の家政婦！', 'キケンな香り', 0, 6);
        }
        if (MOD.nlevel === 275) {
            Game.Notify('核融合炉の帝王！', 'エンペラーカイザー', 0, 6);
        }
        if (MOD.nlevel === 300) {
            Game.Notify('核融合炉の征服者！', 'こんかーだわーるど', 0, 6);
        }
        if (MOD.nlevel === 325) {
            Game.Notify('核融合炉を掴むもの！', '世界を掌握せよ', 0, 6);
        }
    } else {
        if (MOD.slevel < 666666666) {
            Game.Notify('電力不足！', '', 0, 2);
        } else {
            Game.Notify('これ以上増設できません。', '', 0, 2);
        }
    }
}

function onCpsX2IdButtonClick() {
    if (MOD.eps < 200) {
        return
    }
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    MOD.x2 += 1;
    updateCpsX2Button();
    if (MOD.x2 % 2 === 0) {
        startTimer();
        Game.registerHook('cps', function (cps) {
            return cps * 2;
        });
        Game.recalculateGains = 1;
        displayConfX2.style.display = "block";
    } else {
        stopTimer();
        Game.registerHook('cps', function (cps) {
            return cps / 2;
        });
        Game.recalculateGains = 1;
        displayConfX2.style.display = "none";
    }
}

function onCpsX3IdButtonClick() {
    if (MOD.eps < 5000) {
        return
    }
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    MOD.x3 += 1;
    updateCpsX3Button();
    if (MOD.x3 % 2 === 0) {
        x3Timer();
        Game.registerHook('cps', function (cps) {
            return cps * 3;
        });
        Game.recalculateGains = 1;
        displayConfX3.style.display = "block";
    } else {
        stopx3Timer();
        Game.registerHook('cps', function (cps) {
            return cps / 3;
        });
        Game.recalculateGains = 1;
        displayConfX3.style.display = "none";
    }
}

function onCpsX4IdButtonClick() {
    if (MOD.eps < 444444) {
        return
    }
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    MOD.x4 += 1;
    updateCpsX4Button();
    if (MOD.x4 % 2 === 0) {
        x4Timer();
        Game.registerHook('cps', function (cps) {
            return cps * 4;
        });
        Game.recalculateGains = 1;
        displayConfX4.style.display = "block";
    } else {
        stopx4Timer();
        Game.registerHook('cps', function (cps) {
            return cps / 4;
        });
        Game.recalculateGains = 1;
        displayConfX4.style.display = "none";
    }
}

function onCpsX5IdButtonClick() {
    if (MOD.eps < 6666666) {
        return
    }
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    MOD.x5 += 1;
    updateCpsX5Button();
    if (MOD.x5 % 2 === 0) {
        x5Timer();
        Game.registerHook('cps', function (cps) {
            return cps * 5;
        });
        Game.recalculateGains = 1;
        displayConfX5.style.display = "block";
    } else {
        stopx5Timer();
        Game.registerHook('cps', function (cps) {
            return cps / 5;
        });
        Game.recalculateGains = 1;
        displayConfX5.style.display = "none";
    }
}

function onCpsX6IdButtonClick() {
    if (MOD.eps < 666666666) {
        return
    }
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    MOD.x6 += 1;
    updateCpsX6Button();
    if (MOD.x6 % 2 === 0) {
        x6Timer();
        Game.registerHook('cps', function (cps) {
            return cps * 6;
        });
        Game.recalculateGains = 1;
        displayConfX6.style.display = "block";
    } else {
        stopx6Timer();
        Game.registerHook('cps', function (cps) {
            return cps / 6;
        });
        Game.recalculateGains = 1;
        displayConfX6.style.display = "none";
    }
}

function onCpsX7IdButtonClick() {
    if (MOD.eps < 8888888888) {
        return
    }
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    MOD.x7 += 1;
    updateCpsX7Button();
    if (MOD.x7 % 2 === 0) {
        x7Timer();
        Game.registerHook('cps', function (cps) {
            return cps * 7;
        });
        Game.recalculateGains = 1;
        displayConfX7.style.display = "block";
    } else {
        stopx7Timer();
        Game.registerHook('cps', function (cps) {
            return cps / 7;
        });
        Game.recalculateGains = 1;
        displayConfX7.style.display = "none";
    }
}

function onCpsX8IdButtonClick() {
    if (MOD.eps < 100000000000) {
        return
    }
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    MOD.x8 += 1;
    updateCpsX8Button();
    if (MOD.x8 % 2 === 0) {
        x8Timer();
        Game.registerHook('cps', function (cps) {
            return cps * 8;
        });
        Game.recalculateGains = 1;
        displayConfX9.style.display = "block";
    } else {
        stopx8Timer();
        Game.registerHook('cps', function (cps) {
            return cps / 8;
        });
        Game.recalculateGains = 1;
        displayConfX8.style.display = "none";
    }
}

function onCpsX9IdButtonClick() {
    if (MOD.eps < 10000000000000) {
        return
    }
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    MOD.x9 += 1;
    updateCpsX9Button();
    if (MOD.x9 % 2 === 0) {
        x9Timer();
        Game.registerHook('cps', function (cps) {
            return cps * 9;
        });
        Game.recalculateGains = 1;
        displayConfX9.style.display = "block";
    } else {
        stopx9Timer();
        Game.registerHook('cps', function (cps) {
            return cps / 9;
        });
        Game.recalculateGains = 1;
        displayConfX9.style.display = "none";
    }
}

function onCpsX10IdButtonClick() {
    if (MOD.eps < 10000000000000000) {
        return
    }
    PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
    MOD.x10 += 1;
    updateCpsX9Button();
    if (MOD.x10 % 2 === 0) {
        x10Timer();
        Game.registerHook('cps', function (cps) {
            return cps * 10;
        });
        Game.recalculateGains = 1;
        displayConfX10.style.display = "block";
    } else {
        stopx10Timer();
        Game.registerHook('cps', function (cps) {
            return cps / 10;
        });
        Game.recalculateGains = 1;
        displayConfX10.style.display = "none";
    }
}

function onTinCableButtonClick() {
    MOD.tincableonoff += 1;
    if (MOD.tincableonoff === 1) {
        if (MOD.tin >= 50) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 2;
            updateEpsCheckerDisplay();
            MOD.tin -= 50;
            updateATinDisplay();
            Game.Notify('錫の導線', 'やぁ、こんにちは', 0, 4);
            MOD.tincableonoff += 1;
            updateTinCable();
        }

    }
}

function onAdvancedTinCableButtonClick() {
    MOD.advtincableon += 1;
    if (MOD.advtincableon === 1) {
        if (MOD.tin >= 500 && MOD.iron >= 30) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 2;
            updateEpsCheckerDisplay();
            MOD.tin -= 500;
            updateATinDisplay();
            MOD.iron -= 30;
            updateAIronDisplay();
            Game.Notify('改良型錫の導線', '調子はどうだい？', 0, 4);
            MOD.advtincableon += 1;
            updateAdvancedTinCable();
        }
    }
}

function onHybridTinCableButtonClick() {
    MOD.hybtincableon += 1;
    if (MOD.hybtincableon === 1) {
        if (MOD.tin >= 5000 && MOD.silver >= 100 && MOD.diamond >= 5) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 3;
            updateEpsCheckerDisplay();
            MOD.tin -= 5000;
            updateATinDisplay();
            MOD.silver -= 100;
            updateASilverDisplay();
            MOD.diamond -= 5;
            updateADiamondDisplay();
            Game.Notify('発展型錫の導線', '嘘だろ？', 0, 4);
            MOD.hybtincableon += 1;
            updateHybridTinCable();
        }
    }
}

function onUltimateTinCableButtonClick() {
    MOD.ulttincableon += 1;
    if (MOD.ulttincableon === 1) {
        if (MOD.tin >= 50000 && MOD.silver >= 1000 && MOD.diamond >= 100) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 4;
            updateEpsCheckerDisplay();
            MOD.tin -= 50000;
            updateATinDisplay();
            MOD.silver -= 1000;
            updateASilverDisplay();
            MOD.diamond -= 100;
            updateADiamondDisplay();
            Game.Notify('究極型錫の導線', '重力に逆らう者', 0, 4);
            MOD.ulttincableon += 1;
            updateUltimateTinCable();
        }
    }
}

function onCopperCableButtonClick() {
    MOD.cuppercableon += 1;
    if (MOD.cuppercableon === 1) {
        if (MOD.copper >= 50) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 2;
            updateEpsCheckerDisplay();
            MOD.copper -= 50;
            updateACopperDisplay();
            Game.Notify('銅の導線', 'ようこそ', 0, 4);
            MOD.cuppercableon += 1;
            updateCopperCable();
        }
    }
}

function onAdvancedCopperCableButtonClick() {
    MOD.advcuppercableon += 1;
    if (MOD.advcuppercableon === 1) {
        if (MOD.copper >= 500 && MOD.iron >= 30) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 2;
            updateEpsCheckerDisplay();
            MOD.copper -= 500;
            updateACopperDisplay();
            MOD.iron -= 30;
            updateAIronDisplay();
            Game.Notify('改良型銅の導線', 'やぁ、元気かい？', 0, 4);
            MOD.advcuppercableon += 1;
            updateAdvancedCopperCable();
        }
    }
}

function onHybridCopperCableButtonClick() {
    MOD.hybcuppercableon += 1;
    if (MOD.hybcuppercableon === 1) {
        if (MOD.copper >= 5000 && MOD.gold >= 100 && MOD.diamond >= 5) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 3;
            updateEpsCheckerDisplay();
            MOD.copper -= 5000;
            updateACopperDisplay();
            MOD.gold -= 100;
            updateAGoldDisplay();
            MOD.diamond -= 5;
            updateADiamondDisplay();
            Game.Notify('発展型銅の導線', '大変だったんじゃないの？', 0, 4);
            MOD.hybcuppercableon += 1;
            updateHybridCopperCable();
        }
    }
}

function onUltimateCopperCableButtonClick() {
    MOD.ultcuppercableon += 1;
    if (MOD.ultcuppercableon === 1) {
        if (MOD.copper >= 50000 && MOD.gold >= 1000 && MOD.diamond >= 100) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 4;
            updateEpsCheckerDisplay();
            MOD.copper -= 50000;
            updateACopperDisplay();
            MOD.gold -= 1000;
            updateAGoldDisplay();
            MOD.diamond -= 100;
            updateADiamondDisplay();
            Game.Notify('究極型銅の導線', 'よくここまで来たね', 0, 4);
            MOD.ultcuppercableon += 1;
            updateUltimateCopperCable();
        }
    }
}

function onGoldCableButtonClick() {
    MOD.goldcableon += 1;
    if (MOD.goldcableon === 1) {
        if (MOD.gold >= 50 && MOD.copper >= 100) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 2;
            updateEpsCheckerDisplay();
            MOD.gold -= 50;
            updateAGoldDisplay();
            MOD.copper -= 100;
            updateACopperDisplay();
            Game.Notify('金の導線', 'さらなる高みへ', 0, 4);
            MOD.goldcableon += 1;
            updateGoldCable();
        }

    }
}

function onAdvancedGoldCableButtonClick() {
    MOD.advgoldcableon += 1;
    if (MOD.advgoldcableon === 1) {
        if (MOD.gold >= 250 && MOD.copper >= 500 && MOD.iron >= 150) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 2;
            updateEpsCheckerDisplay();
            MOD.gold -= 250;
            updateAGoldDisplay();
            MOD.copper -= 500;
            updateACopperDisplay();
            MOD.iron -= 150;
            updateAIronDisplay();
            Game.Notify('改良型金の導線', 'こっちは雨が降ってるよ', 0, 4);
            MOD.advgoldcableon += 1;
            updateAdvancedGoldCable();
        }
    }
}

function onHybridGoldCableButtonClick() {
    MOD.hybgoldcableon += 1;
    if (MOD.hybgoldcableon === 1) {
        if (MOD.gold >= 1000 && MOD.copper >= 5000 && MOD.iron >= 1500) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 3;
            updateEpsCheckerDisplay();
            MOD.gold -= 1000;
            updateAGoldDisplay();
            MOD.copper -= 5000;
            updateACopperDisplay();
            MOD.iron -= 1500;
            updateAIronDisplay();
            Game.Notify('発展型金の導線', 'あちゃぽん！', 0, 4);
            MOD.hybgoldcableon += 1;
            updateHybridGoldCable();
        }
    }
}

function onUltimateGoldCableButtonClick() {
    MOD.ultgoldcableon += 1;
    if (MOD.ultgoldcableon === 1) {
        if (MOD.gold >= 5000 && MOD.copper >= 50000 && MOD.iron >= 15000) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 4;
            updateEpsCheckerDisplay();
            MOD.gold -= 5000;
            updateAGoldDisplay();
            MOD.copper -= 50000;
            updateACopperDisplay();
            MOD.iron -= 15000;
            updateAIronDisplay();
            Game.Notify('究極型金の導線', 'お前は何者だ？', 0, 4);
            MOD.ultgoldcableon += 1;
            updateUltimateGoldCable();
        }
    }
}

function onDiamondCableButtonClick() {
    MOD.diamondcableon += 1;
    if (MOD.diamondcableon === 1) {
        if (MOD.diamond >= 25) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 2;
            updateEpsCheckerDisplay();
            MOD.diamond -= 25;
            updateADiamondDisplay();
            Game.Notify('ダイヤの導線', '最高の導線', 0, 4);
            MOD.diamondcableon += 1;
            updateDiamondCable();
        }
    }
}

function onAdvancedDiamondCableButtonClick() {
    MOD.advdiamondcableon += 1;
    if (MOD.advdiamondcableon === 1) {
        if (MOD.diamond >= 100 && MOD.copper >= 1000 && MOD.silver >= 500) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 2;
            updateEpsCheckerDisplay();
            MOD.diamond -= 100;
            updateADiamondDisplay();
            MOD.copper -= 1000;
            updateACopperDisplay();
            MOD.silver -= 500;
            updateASilverDisplay();
            Game.Notify('改良型ダイヤの導線', '風邪引いてない？大丈夫？', 0, 4);
            MOD.advdiamondcableon += 1;
            updateAdvancedDiamondCable();
        }
    }
}

function onHybridDiamondCableButtonClick() {
    MOD.hybdiamondcableon += 1;
    if (MOD.hybdiamondcableon === 1) {
        if (MOD.diamond >= 500 && MOD.copper >= 10000 && MOD.silver >= 1500) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 3;
            updateEpsCheckerDisplay();
            MOD.diamond -= 500;
            updateADiamondDisplay();
            MOD.copper -= 10000;
            updateACopperDisplay();
            MOD.silver -= 1500;
            updateASilverDisplay();
            Game.Notify('発展型ダイヤの導線', 'うわぁ…', 0, 4);
            MOD.hybdiamondcableon += 1;
            updateHybridDiamondCable();
        }
    }
}

function onUltimateDiamondCableButtonClick() {
    MOD.ultdiamondcableon += 1;
    if (MOD.ultdiamondcableon === 1) {
        if (MOD.diamond >= 1000 && MOD.copper >= 100000 && MOD.silver >= 15000) {
            PlaySound('snd/pop' + Math.floor(Math.random() * 3 + 1) + '.mp3', 0.5);//play the sound pop1, pop2 or pop3 at random with half-volume
            MOD.multiplicationeps = MOD.multiplicationeps * 4;
            updateEpsCheckerDisplay();
            MOD.diamond -= 1000;
            updateADiamondDisplay();
            MOD.copper -= 100000;
            updateACopperDisplay();
            MOD.silver -= 15000;
            updateASilverDisplay();
            Game.Notify('究極型ダイヤの導線', '地球がひっくり返った', 0, 4);
            MOD.ultdiamondcableon += 1;
            updateUltimateDiamondCable();
        }
    }
}
