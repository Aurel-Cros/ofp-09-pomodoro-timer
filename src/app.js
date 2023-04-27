import { MakeElement } from "makeElement";
const make = new MakeElement();

class PomoTimer {
    constructor() {
        this.container = document.querySelector("#component");

        // Default values, maybe use localStorage to remember settings
        this.settings = {
            font: 'Suravaram',
            color: 'blue',
            durations: {
                focus: 25 * 60,
                short: 5 * 60,
                long: 20 * 60,
                cycles: 4
            },
            autocycle: true
        };
        buildDOM();
    }
    buildDOM() {
        buildHeader();
        buildMain();
        buildSettings();
    }
    buildHeader() {
        // Title, settings button
    }
    buildMain() {
        // Timer element

        // Control elements

    }
    buildSettings() {
        // USE SHADOW DOM
        // Title and close button

        // Font section

        // Duration section
    }
}

class Slider {
    constructor(name, range, defaultValue) {
        this.name = name;
        this.min = range.min;
        this.max = range.max;
        this.value = defaultValue;
    }
    get = {
        value: () => {
            return this.value;
        }
    }
    set = {
        value: (newValue) => {
            this.value = newValue;
        }
    }
    build() {
        // Build slider
    }
}

const app = new PomoTimer();