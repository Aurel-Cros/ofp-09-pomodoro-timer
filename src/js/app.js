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
                div: DOM.timerTypeDiv,
                focus: DOM.focusBtn,
                short: DOM.shortBtn,
                long: DOM.longBtn
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
            if (!this.timer) {
                console.log("Clicked play.");
                this.play();
            }
            else {
                console.log("Clicked pause.");
                this.pause();
            }
        })

        // In case of a manual type switch, we abort a potential current automatic cycle and reset to a starting position
        this.ctrls.types.div.addEventListener("click", (e) => {
            // If the click is on the container but not a button, nothing happens
            if (e.target === this.ctrls.types.div) {
                return
            }

            const buffer = this.settings.autocycle;
            this.settings.autocycle = false;
            this.reset();

            switch (e.target) {
                case this.ctrls.types.focus:
                    e.target.classList.add('active');
                    this.ctrls.types.short.classList.remove('active');
                    this.ctrls.types.long.classList.remove('active');

                    this.setTime(0);
                    break;
                case this.ctrls.types.short:
                    e.target.classList.add('active');
                    this.ctrls.types.focus.classList.remove('active');
                    this.ctrls.types.long.classList.remove('active');
                    this.setTime(1);
                    break;
                case this.ctrls.types.long:
                    e.target.classList.add('active');
                    this.ctrls.types.short.classList.remove('active');
                    this.ctrls.types.focus.classList.remove('active');
                    this.setTime(2);
                    break;
            }
            this.refreshTime();
            this.settings.autocycle = buffer;
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
        // Play sound alert

        // Kill timer
        clearInterval(this.timer);
        this.timer = false;

        // Reset animation - left side rotates back, then right side rotates back
        DOM.pieL.style = `transform: rotate(0deg);`
        setTimeout(() => {
            DOM.pieL.classList.add('hide');
            DOM.pieR.style = `transform: rotate(0deg);`
        }, 500);


        if (!this.settings.autocycle) {
            this.currentCycle.stage = 0;
            this.currentCycle.i = 1;
            this.setTime();
            this.refreshTime();
            return;
        }
        // After reset, is autocycle is enabled, start the next stage
        let replay = true;

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
            if (this.currentCycle.stage == 2) {
                replay = false;
                console.log("Full cycle complete.");
            }

            // Previous cycle was a break, go back to a focus period
            this.currentCycle.stage = 0;
        }
        this.currentCycle.i++;
        this.setTime(this.currentCycle.stage);
        this.refreshTime();

        if (replay) {
            setTimeout(() => {
                console.log("Play in logic.");
                this.play();
            }, 1001);
        }
    }

    play() {
        this.ctrls.start.classList.add('pause');
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
    pause() {
        clearInterval(this.timer);
        this.timer = false;
        this.ctrls.start.classList.remove('pause');
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