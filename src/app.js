import { MakeElement } from "./makeElement";
const make = new MakeElement();

class PomoTimer {
    constructor() {
        this.frame = document.querySelector("#component");


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
        this.buildDOM();
    }
    buildDOM() {
        this.container = make.create('div', { attributes: { id: "container" } });
        this.frame.appendChild(this.container);

        this.buildHeader();
        this.buildMain();
        this.buildSettings();
    }
    buildHeader() {
        // Title, settings button
        const header = make.create('header');
        const title = make.create('h1', { content: "Pomodoro" });
        const subTitle = make.create('span', { content: " timer" });
        title.appendChild(subTitle);

        const settingsDiv = make.create('div', { attributes: { class: "settings" } });
        const settingsBtn = make.create('button', { attributes: { class: "btn-settings", title: "Settings" } });
        this.settingsBtn = settingsBtn;
        settingsDiv.appendChild(settingsBtn);

        header.append(title, settingsDiv);

        this.container.appendChild(header);
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