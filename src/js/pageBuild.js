import { MakeElement } from "./makeElement";
import { Slider } from './slider';
const make = new MakeElement();

export class PageBuild {
    constructor() {
        this.frame = document.querySelector("#component");
        this.buildDOM();
    }
    buildDOM() {
        // Main container for component
        this.container = make.create('div', { attributes: { id: "container" } });

        // Shadow DOM creation / link for its stylesheet
        this.shadow = this.frame.attachShadow({ mode: 'open' });
        const link = make.create('link', { attributes: { href: "style.mini.css", rel: "stylesheet" } });
        this.shadow.appendChild(link);
        this.shadow.appendChild(this.container);

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
        this.settingsPanel = new SettingsPanel();
    }
    displaySettings() {
        this.container.appendChild(this.settingsPanel.panel);
    }
    closeSettings() {
        this.container.removeChild(this.settingsPanel.panel);
    }
}

class SettingsPanel {
    constructor() {
        this.build();
    }
    build() {
        this.panel = make.create('div', { attributes: { class: "settingsWindow" } });
        // Title and close button
        const settingsHeader = make.create('div', { attributes: { class: "settings-header" } });
        const title = make.create('h2', { content: "Settings" });
        this.close = make.create('button', { attributes: { class: "settings-close-btn" } });
        settingsHeader.append(title, this.close);
        this.panel.appendChild(settingsHeader);
        // Font section
        const fontTitle = make.create('h3', { content: "Font" });

        this.fontFamilyBlock = make.create('div', { attributes: { class: "font-family" } });
        const fontFamilyP = make.create('p', { content: "Family :" });
        this.font1 = make.create('button', { content: "aA", attributes: { title: "Suravaram", 'data-font': 'sura' } });
        this.font2 = make.create('button', { content: "aA", attributes: { title: "Prompt", 'data-font': 'prompt' } });
        this.font3 = make.create('button', { content: "aA", attributes: { title: "Bruno Ace", 'data-font': 'bruno' } });
        this.fontFamilyBlock.append(fontFamilyP, this.font1, this.font2, this.font3);

        this.fontColorBlock = make.create('div', { attributes: { class: "font-colour" } });
        const fontColourP = make.create('p', { content: "Colour :" });
        this.colour1 = make.create('button', { attributes: { title: "Blue" } });
        this.colour1.appendChild(make.create('span'));
        this.colour2 = make.create('button', { attributes: { title: "Red" } });
        this.colour2.appendChild(make.create('span'));
        this.colour3 = make.create('button', { attributes: { title: "Green" } });
        this.colour3.appendChild(make.create('span'));
        this.fontColorBlock.append(fontColourP, this.colour1, this.colour2, this.colour3);

        const fontSection = make.create('div');
        fontSection.append(fontTitle, this.fontFamilyBlock, this.fontColorBlock);

        this.panel.appendChild(fontSection);

        // Duration section
        const durationTitle = make.create('h3', { content: "Durations" });

        this.focusSlider = new Slider({ name: "Focus", range: { min: 600, max: 3600 }, step: 60 });
        this.shortSlider = new Slider({ name: "Short break", range: { min: 60, max: 600 }, step: 60 });
        this.longSlider = new Slider({ name: "Long break", range: { min: 300, max: 1800 }, step: 60 });
        this.cyclesSlider = new Slider({ name: "Cycles", type: "plain", range: { min: 1, max: 10 }, step: 1 });

        const durationSection = make.create('div');
        durationSection.append(durationTitle, this.focusSlider.block, this.shortSlider.block, this.longSlider.block, this.cyclesSlider.block);
        this.panel.appendChild(durationSection);

        const autoCycleBlock = make.create('label', { content: "Automatic cycling :", attributes: { class: "auto-cycle-label" } });
        this.autoCycle = make.create('input', { attributes: { type: "checkbox" } });

        autoCycleBlock.append(this.autoCycle, make.create('div'));
        durationSection.appendChild(autoCycleBlock);
    }
}