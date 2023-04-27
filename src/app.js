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
    constructor(options) {
        this.name = options.name;
        this.min = options.range.min;
        this.max = options.range.max;
        this.step = options.step;
        this.value = options.defaultValue;

        this.build();
    }
    build() {
        // Build slider
        const div = make.create('div', { attributes: { class: "slider" } });
        const input = make.create('input', {
            attributes: {
                type: "range",
                min: this.min,
                max: this.max,
                step: this.step,
                value: this.value
            }
        });

        const sliderName = make.create('p', { content: this.name });
        const displayValue = String(Math.trunc(this.value / 60)) + ' mins ' + String(this.value % 60 || '');
        const sliderDuration = make.create('p', { content: displayValue });
        const sliderNameAndDuration = make.create('div');
        sliderNameAndDuration.append(sliderName, sliderDuration);

        div.append(sliderNameAndDuration, input);
        this.block = div;
    }
}

const app = new PomoTimer();