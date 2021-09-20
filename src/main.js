import {init} from "./init";
import {load, save} from "./variables";

const MOD_NAME = 'industrial cookies';

const INIT_FUNCTIONS = {
    init, load, save
};

Game.registerMod(MOD_NAME, INIT_FUNCTIONS);

