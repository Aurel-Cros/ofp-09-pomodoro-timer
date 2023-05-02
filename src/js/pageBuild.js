import { MakeElement } from "./makeElement";
const make = new MakeElement();

class PageBuild {
    constructor() {
        this.frame = document.querySelector("#component");
        this.buildDOM();
    }
    buildDOM() {
        this.container = make.create('div', { attributes: { id: "container", class: "font-sura" } });
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
        this.settingsBtn = make.create('button', { attributes: { class: "btn-settings", title: "Settings" } });
        settingsDiv.appendChild(this.settingsBtn);

        header.append(title, settingsDiv);

        this.container.appendChild(header);
    }
    buildMain() {
        this.main = make.create('main');
        // Timer element
        const timerBlock = make.create('div', { attributes: { id: "timerBlock" } });
        const timer = make.create('div', { attributes: { id: "timer" } });

        const pieDivL = make.create('div', { attributes: { class: "pie-left" } });
        const pieL = make.create('div', { attributes: { class: "pie hide" } });
        pieDivL.appendChild(pieL);
        this.pieL = pieL;

        const pieDivR = make.create('div', { attributes: { class: "pie-right" } });
        const pieR = make.create('div', { attributes: { class: "pie" } });
        pieDivR.appendChild(pieR);
        this.pieR = pieR;

        const time = make.create('p', { attributes: { id: "time" } });
        timer.append(pieDivL, pieDivR, time);
        this.time = time;
        timerBlock.appendChild(timer);

        // Control elements
        const timerType = make.create('div', { attributes: { id: "div-timer-type" } });
        this.timerTypeDiv = timerType;
        this.focusBtn = make.create('button', { attributes: { class: "btn-timer-type active" }, content: "focus" });
        this.shortBtn = make.create('button', { attributes: { class: "btn-timer-type" }, content: "short break" });
        this.longBtn = make.create('button', { attributes: { class: "btn-timer-type" }, content: "long break" });
        timerType.append(this.shortBtn, this.focusBtn, this.longBtn);

        const startBtnDiv = make.create('div');
        this.startBtn = make.create('button', { attributes: { id: "btn-start" } });
        startBtnDiv.appendChild(this.startBtn);

        this.main.append(timerBlock, timerType, startBtnDiv);
        this.container.appendChild(this.main);
    }
    buildSettings() {
        // USE SHADOW DOM
        this.settingsWindow = make.create('div', { attributes: { class: "settingsWindow" } });
        // Title and close button
        const settingsHeader = make.create('div', { attributes: { class: "settings-header" } });
        const title = make.create('h2', { content: "Settings" });
        this.close = make.create('button', { attributes: { class: "settings-close-btn" } });
        settingsHeader.append(title, this.close);
        this.settingsWindow.appendChild(settingsHeader);
        // Font section
        const fontTitle = make.create('h3', { content: "Font" });

        const fontFamilyBlock = make.create('div', { attributes: { class: "font-family" } });
        const fontFamilyP = make.create('p', { content: "Family :" });
        const font1 = make.create('button', { content: "aA", attributes: { class: "active" } });
        const font2 = make.create('button', { content: "aA" });
        const font3 = make.create('button', { content: "aA" });
        fontFamilyBlock.append(fontFamilyP, font1, font2, font3);

        const fontColourBlock = make.create('div', { attributes: { class: "font-colour" } });
        const fontColourP = make.create('p', { content: "Colour :" });
        const colour1 = make.create('button', { attributes: { class: "active" } });
        colour1.appendChild(make.create('span'));
        const colour2 = make.create('button');
        colour2.appendChild(make.create('span'));
        const colour3 = make.create('button');
        colour3.appendChild(make.create('span'));
        fontColourBlock.append(fontColourP, colour1, colour2, colour3);

        const fontSection = make.create('div');
        fontSection.append(fontTitle, fontFamilyBlock, fontColourBlock);

        this.settingsWindow.appendChild(fontSection);

        // Duration section
        const durationTitle = make.create('h3', { content: "Durations" });

        this.focusSlider = new Slider({ name: "Focus", range: { min: 600, max: 3600 }, step: 30, defaultValue: 1500 });
        this.shortSlider = new Slider({ name: "Short break", range: { min: 60, max: 600 }, step: 30, defaultValue: 300 });
        this.longSlider = new Slider({ name: "Long break", range: { min: 300, max: 1800 }, step: 30, defaultValue: 1200 });
        this.cyclesSlider = new Slider({ name: "Cycles", type: "plain", range: { min: 1, max: 10 }, step: 1, defaultValue: 4 });

        const durationSection = make.create('div');
        durationSection.append(durationTitle, this.focusSlider.block, this.shortSlider.block, this.longSlider.block, this.cyclesSlider.block);
        this.settingsWindow.appendChild(durationSection);

        const autoCycleBlock = make.create('label', { content: "Automatic cycling :", attributes: { class: "auto-cycle-label" } });
        this.autoCycle = make.create('input', { attributes: { type: "checkbox" } });

        autoCycleBlock.append(this.autoCycle, make.create('div'));
        durationSection.appendChild(autoCycleBlock);

        this.frame.append(this.settingsWindow);
    }
}
class Slider {
    constructor(options) {
        this.name = options.name;
        this.min = options.range.min;
        this.max = options.range.max;
        this.step = options.step;
        this.value = options.defaultValue;
        this.type = options.type || "time";

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

        const sliderName = make.create('p', { content: `${this.name} :` });
        const displayValue = this.type == 'time' ? (String(Math.trunc(this.value / 60)) + ' mins ' + String(this.value % 60 || '')) : this.value;
        const sliderDuration = make.create('p', { content: displayValue });
        const sliderNameAndDuration = make.create('div');
        sliderNameAndDuration.append(sliderName, sliderDuration);

        div.append(sliderNameAndDuration, input);
        this.block = div;
    }
}
export { PageBuild };