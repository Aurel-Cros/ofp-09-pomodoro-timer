import { PageBuild } from "./pageBuild";
import { MakeElement } from "./makeElement";
const make = new MakeElement();
const DOM = new PageBuild();

class PomodoroTimer {
    constructor() {
        // This references interactive elements
        this.ctrls = {
            settingsOpen: DOM.settingsBtn,
            types: {
                focus: DOM.focusBtn,
                shortBrk: DOM.shortBtn,
                longBrk: DOM.longBtn
            },
            start: DOM.startBtn
        };

        // Default values, maybe use localStorage to remember settings
        this.settings = {
            font: 'Suravaram',
            color: 'blue',
            durations: {
                focus: 4,
                short: 2,
                long: 6,
                cycles: 2
            },
            autocycle: true
        };
        this.currentCycle = { stage: 0, i: 1 };
        this.setTime();
        this.refreshTime();
        this.initEvents();
    }
    initEvents() {
        this.ctrls.start.addEventListener("click", () => {
            console.log("Clicked play");
            this.play();
        })
    }

    setTime(type = 0) {
        // O is focus, 1 is short break, 2 is long break
        switch (type) {
            case 0:
                this.timeLeft = this.settings.durations.focus;
                break;
            case 1:
                this.timeLeft = this.settings.durations.short;
                break;
            case 2:
                this.timeLeft = this.settings.durations.long;
                break;
        }
    }
    refreshTime() {
        const mins = Math.trunc(this.timeLeft / 60);
        const secs = this.timeLeft % 60;
        DOM.time.textContent = `${mins}:${secs < 10 ? '0' + secs : secs}`;
    }
    reset() {
        // Kill timer
        clearInterval(this.timer);

        // Reset animation - left side rotates back, then right side rotates back
        DOM.pieL.style = `transform: rotate(0deg);`
        setTimeout(() => {
            DOM.pieL.classList.add('hide');
            DOM.pieR.style = `transform: rotate(0deg);`
        }, 500);

        // After reset, is autocycle is enabled, start the next stage
        let replay = true;

        if (!this.settings.autocycle) {
            this.setTime();
            this.refreshTime();
            return;
        }
        if (this.currentCycle.stage == 0) {
            // If previous cycle was a focus period, go to a break
            // If this is the 4th cycle, go to a longer break
            if (this.currentCycle.i < 4)
                this.currentCycle.stage = 1;
            else
                this.currentCycle.stage = 2;
        }
        else {
            // Stop the timer after a long break
            if (this.currentCycle.stage == 2)
                replay = false;

            // Previous cycle was a break, go back to a focus period
            this.currentCycle.stage = 0;
        }
        this.currentCycle.i++;
        this.setTime(this.currentCycle.stage);
        this.refreshTime();

        setTimeout(() => {
            if (replay) {
                console.log("Play in logic.");
                this.play();
            }
        }, 1001);
    }

    play() {
        this.timer = setInterval(() => {
            this.timeLeft--;
            if (this.timeLeft < 0) {
                this.reset();
            }
            else {
                this.refreshTime();
                this.doRotation();
            }

        }, 1000)
    }

    doRotation() {
        const maxTime = this.currentCycle.stage == 0 ? this.settings.durations.focus :
            (this.currentCycle.stage == 1 ? this.settings.durations.short : this.settings.durations.long);
        const ratio = this.timeLeft / maxTime;
        const newDeg = 360 * (1 - ratio);
        const overHalf = Math.trunc(newDeg / 180);

        if (overHalf) {
            if (newDeg == 180) {
                DOM.pieR.style = `transform: rotate(180deg);`;
                setTimeout(() => {
                    DOM.pieL.classList.remove('hide');
                }, 500);
            }
            DOM.pieL.style = `transform: rotate(${overHalf == 2 ? 180 : newDeg % 180}deg);`;
        }
        else {
            DOM.pieR.style = `transform: rotate(${newDeg % 180}deg);`;
        }

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

const app = new PomodoroTimer();