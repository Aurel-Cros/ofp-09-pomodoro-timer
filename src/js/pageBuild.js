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
        // Title and close button

        // Font section

        // Duration section
    }
}
export { PageBuild };