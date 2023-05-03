import { PageBuild } from "./pageBuild";
const DOM = new PageBuild();

class PomodoroTimer {
    constructor() {
        // This references interactive elements
        this.ctrls = {
            settings: {
                open: DOM.settingsBtn,
                close: DOM.close,
                font: {
                    family: DOM.fontFamilyBlock,
                    color: DOM.fontColorBlock,
                },
                autocycle: DOM.autoCycle,
                sliders: {
                    focus: DOM.focusSlider,
                    short: DOM.shortSlider,
                    long: DOM.longSlider,
                    cycles: DOM.cyclesSlider
                }
            },
            displayedType: 0,
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
                focus: 1500,
                short: 6,
                long: 1200,
                cycles: 4
            },
            autocycle: true
        };
        this.currentCycle = { stage: 0, i: 1 };
        this.setTime();
        this.refreshTime();
        this.initEvents();
        this.initSliders();
    }
    initSliders() {
        this.ctrls.settings.sliders.long.updateDisplay(this.settings.durations.long, true);
        this.ctrls.settings.sliders.focus.updateDisplay(this.settings.durations.focus, true);
        this.ctrls.settings.sliders.short.updateDisplay(this.settings.durations.short, true);
        this.ctrls.settings.sliders.cycles.updateDisplay(this.settings.durations.cycles, true);
        this.ctrls.settings.autocycle.checked = this.settings.autocycle;
    }
    initEvents() {
        this.ctrls.settings.open.addEventListener("click", () => {
            // Open settings panel

        })
        this.ctrls.settings.close.addEventListener("click", () => {
            // Close settings panel
        })

        this.ctrls.settings.font.family.addEventListener("click", (e) => {
            if (!e.target.title)
                return;
            DOM.font1.classList.remove('active');
            DOM.font2.classList.remove('active');
            DOM.font3.classList.remove('active');
            e.target.classList.add('active');

            this.settings.font = e.target.title;
            DOM.main.className = `font-${e.target.dataset.font}`;
        })
        this.ctrls.settings.font.color.addEventListener("click", (e) => {
            if (!e.target.title)
                return;
            DOM.colour1.classList.remove('active');
            DOM.colour2.classList.remove('active');
            DOM.colour3.classList.remove('active');
            e.target.classList.add('active');

            this.settings.color = String(e.target.title).toLowerCase();
            DOM.frame.className = `theme-${this.settings.color}`;
        })

        this.ctrls.settings.sliders.focus.slider.addEventListener("input", (e) => {
            this.ctrls.settings.sliders.focus.updateDisplay(e.target.value, true);
            this.settings.durations.focus = e.target.value;
            if (this.ctrls.displayedType === 0) {
                this.setTime(0)
                this.refreshTime();
            }
        })
        this.ctrls.settings.sliders.short.slider.addEventListener("input", (e) => {
            this.ctrls.settings.sliders.short.updateDisplay(e.target.value, true); this.settings.durations.short = e.target.value;
            if (this.ctrls.displayedType === 1) {
                this.setTime(1)
                this.refreshTime();
            }
        })
        this.ctrls.settings.sliders.long.slider.addEventListener("input", (e) => {
            this.ctrls.settings.sliders.long.updateDisplay(e.target.value, true);
            this.settings.durations.long = e.target.value;
            if (this.ctrls.displayedType === 2) {
                this.setTime(2)
                this.refreshTime();
            }
        })
        this.ctrls.settings.sliders.cycles.slider.addEventListener("input", (e) => {
            this.ctrls.settings.sliders.cycles.updateDisplay(e.target.value, true);
            this.settings.durations.cycles = e.target.value;
        })
        this.ctrls.settings.autocycle.addEventListener("click", (e) => {
            this.settings.autocycle = e.target.checked;
        })

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
            // If the click is on the container but not a button, nothing
            if (e.target === this.ctrls.types.div) {
                return
            }

            this.settings.autocycle = false;
            this.ctrls.settings.autocycle.checked = false;
            this.reset();

            switch (e.target) {
                case this.ctrls.types.focus:
                    this.currentCycle.stage = 0;
                    this.setDisplayType(0);
                    break;
                case this.ctrls.types.short:
                    this.currentCycle.stage = 1;
                    this.setDisplayType(1);
                    break;
                case this.ctrls.types.long:
                    this.currentCycle.stage = 2;
                    this.setDisplayType(2);
                    break;
            }
            this.refreshTime();
        })
    }
    setDisplayType(type = this.currentCycle.stage) {
        switch (type) {
            case 0:
                this.ctrls.types.focus.classList.add('active');
                this.ctrls.types.short.classList.remove('active');
                this.ctrls.types.long.classList.remove('active');
                break;
            case 1:
                this.ctrls.types.short.classList.add('active');
                this.ctrls.types.focus.classList.remove('active');
                this.ctrls.types.long.classList.remove('active');
                break;
            case 2:
                this.ctrls.types.long.classList.add('active');
                this.ctrls.types.short.classList.remove('active');
                this.ctrls.types.focus.classList.remove('active');
                break;
        }
        this.setTime(type);
        this.ctrls.displayedType = type;
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
            this.ctrls.start.classList.remove('pause');
            this.currentCycle.stage = 0;
            this.currentCycle.i = 1;
            this.setDisplayType();
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
        this.ctrls.displayedType = this.currentCycle.stage;
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
                this.alert();
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

        console.log(this.timeLeft, maxTime);

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

    alert() {
        const alert = new Audio('../assets/audio/alert.mp3');
        alert.volume = 0.5;
        alert.play();
    }
}

export { PomodoroTimer };