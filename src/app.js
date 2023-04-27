import { MakeElement } from "./makeElement";
const make = new MakeElement();

class PomoTimer {
    constructor() {
        this.frame = document.querySelector("#component");

        // This references interactive elements and gets populated inside build methods.
        this.ctrls = {};

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
        settingsDiv.appendChild(settingsBtn);
        this.ctrls.settings = settingsBtn;

        header.append(title, settingsDiv);

        this.container.appendChild(header);
    }
    buildMain() {
        this.main = make.create('main');
        // Timer element
        const timer = make.create('div', { attributes: { id: "timer" } });
        const time = make.create('p', { attributes: { id: "time" } });
        timer.appendChild(time);
        this.time = time;

        // Control elements
        const timerType = make.create('div');
        const focusBtn = make.create('button', { attributes: { class: "btn-timer-type" }, content: "focus" });
        const shortBtn = make.create('button', { attributes: { class: "btn-timer-type" }, content: "short break" });
        const longBtn = make.create('button', { attributes: { class: "btn-timer-type" }, content: "long break" });
        timerType.append(shortBtn, focusBtn, longBtn);
        this.ctrls.types = {
            focus: focusBtn,
            shortBrk: shortBtn,
            longBrk: longBtn
        }


        const startBtnDiv = make.create('div');
        const startBtn = make.create('button', { attributes: { id: "btn-start" } });
        startBtnDiv.appendChild(startBtn);
        this.ctrls.start = startBtn;

        this.main.append(timer, timerType, startBtnDiv);
        this.container.appendChild(this.main);
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