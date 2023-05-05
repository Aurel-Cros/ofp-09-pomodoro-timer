import { PageBuild } from "./pageBuild";
const DOM = new PageBuild();

export class PomodoroTimer {
    constructor() {
        // This references interactive elements in the DOM
        this.ctrls = {
            settings: {
                open: DOM.settingsBtn,
                close: DOM.settingsPanel.close,
                font: {
                    family: DOM.settingsPanel.fontFamilyBlock,
                    color: DOM.settingsPanel.fontColorBlock,
                },
                autocycle: DOM.settingsPanel.autoCycle,
                sliders: {
                    focus: DOM.settingsPanel.focusSlider,
                    short: DOM.settingsPanel.shortSlider,
                    long: DOM.settingsPanel.longSlider,
                    cycles: DOM.settingsPanel.cyclesSlider
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

        // Get settings from localstorage or use default values
        this.settings = JSON.parse(localStorage.getItem('settings')) || {
            font: 'sura',
            color: 'blue',
            durations: {
                focus: 1500,
                short: 300,
                long: 1200,
                cycles: 4
            },
            autocycle: true
        };
        // Set fonts, colors and time values from settings
        this.initTheme();
        this.initSliders();

        // Set initial state of timer
        this.currentCycle = { stage: 0, i: 1 };
        this.setTime();
        this.refreshTime();

        // Set event handlers for interactive elements
        this.initEvents();
    }
    initTheme() {
        // Add theme classes to containers
        DOM.container.className = `theme-${this.settings.color}`;
        DOM.main.className = `font-${this.settings.font}`;

        // Set active class to corresponding font and color in settings
        DOM.settingsPanel.font1.classList.remove('active');
        DOM.settingsPanel.font2.classList.remove('active');
        DOM.settingsPanel.font3.classList.remove('active');
        switch (this.settings.font) {
            case 'sura':
                DOM.settingsPanel.font1.classList.add('active');
                break;
            case 'prompt':
                DOM.settingsPanel.font2.classList.add('active');
                break;
            case 'bruno':
                DOM.settingsPanel.font3.classList.add('active');
                break;
        }

        DOM.settingsPanel.colour1.classList.remove('active');
        DOM.settingsPanel.colour2.classList.remove('active');
        DOM.settingsPanel.colour3.classList.remove('active');
        switch (this.settings.color) {
            case 'blue':
                DOM.settingsPanel.colour1.classList.add('active');
                break;
            case 'red':
                DOM.settingsPanel.colour2.classList.add('active');
                break;
            case 'green':
                DOM.settingsPanel.colour3.classList.add('active');
                break;
        }
    }
    initSliders() {
        this.ctrls.settings.sliders.long.updateDisplay(this.settings.durations.long);
        this.ctrls.settings.sliders.focus.updateDisplay(this.settings.durations.focus);
        this.ctrls.settings.sliders.short.updateDisplay(this.settings.durations.short);
        this.ctrls.settings.sliders.cycles.updateDisplay(this.settings.durations.cycles);
        this.ctrls.settings.autocycle.checked = this.settings.autocycle;
    }
    initEvents() {
        // Before unloading the page, store settings in localstorage
        window.addEventListener("beforeunload", () => {
            const settings = JSON.stringify(this.settings);
            localStorage.setItem('settings', settings);
        })
        this.ctrls.settings.open.addEventListener("click", () => {
            // Open settings panel
            DOM.displaySettings();
        })
        this.ctrls.settings.close.addEventListener("click", () => {
            // Close settings panel
            DOM.closeSettings();
        })

        // Font selector - returns an empty title value if click event was in empty container space
        // Same with color selector
        this.ctrls.settings.font.family.addEventListener("click", (e) => {
            if (!e.target.title)
                return;
            DOM.settingsPanel.font1.classList.remove('active');
            DOM.settingsPanel.font2.classList.remove('active');
            DOM.settingsPanel.font3.classList.remove('active');
            e.target.classList.add('active');

            this.settings.font = e.target.dataset.font;
            this.initTheme();
        })
        this.ctrls.settings.font.color.addEventListener("click", (e) => {
            if (!e.target.title)
                return;
            DOM.settingsPanel.colour1.classList.remove('active');
            DOM.settingsPanel.colour2.classList.remove('active');
            DOM.settingsPanel.colour3.classList.remove('active');
            e.target.classList.add('active');

            this.settings.color = String(e.target.title).toLowerCase();
            this.initTheme();
        })

        // Update slider values when moving them - adjust timer live if the current associated type is on display
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

        // Start/Pause button
        this.ctrls.start.addEventListener("click", () => {
            if (!this.timer) {
                this.play();
            }
            else {
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

    // Change active class to timer types selector
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

    // Updates the settings value
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
    // Updates the display
    refreshTime() {
        const mins = Math.trunc(this.timeLeft / 60);
        const secs = this.timeLeft % 60;
        DOM.time.textContent = `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
    }

    reset() {
        // Kill timer
        clearInterval(this.timer);
        this.timer = false;

        // Reset animation - left side rotates back, then right side rotates back
        DOM.pieL.style = `transform: rotate(0deg);`
        setTimeout(() => {
            DOM.pieL.classList.add('hide');
            DOM.pieR.style = `transform: rotate(0deg);`
        }, 500);

        // Without autocycle on, reset to base state and exit method
        if (!this.settings.autocycle) {
            this.ctrls.start.classList.remove('pause');
            this.currentCycle.stage = 0;
            this.currentCycle.i = 1;
            this.setDisplayType();
            this.setTime();
            this.refreshTime();
            return;
        }
        // If autocycle is enabled, start the next stage
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
            // Stop the timer and reset to initial state after a long break
            // Simply increment cycle stage otherwise
            if (this.currentCycle.stage == 2) {
                replay = false;
                console.log("Full cycle complete.");
                this.currentCycle.i = 1;
            }
            else {
                this.currentCycle.i++;
            }

            // Previous cycle was a break, go back to a focus period
            this.currentCycle.stage = 0;
        }
        this.setTime(this.currentCycle.stage);
        this.setDisplayType(this.currentCycle.stage);
        this.refreshTime();

        // If condition is met, restart timer automatically
        if (replay) {
            setTimeout(() => {
                console.log("Play in logic.");
                this.play();
            }, 1001);
        }
    }

    // Start ticking interval
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
    // Clear interval without affecting current values
    pause() {
        clearInterval(this.timer);
        this.timer = false;
        this.ctrls.start.classList.remove('pause');
    }

    /* Calculate % of time elapsed and match progress bar % to it.
    * This uses two half circles for right and left sides that are hidden by default and rotate into view progressively.
    * Think cardboard rectangle in front of a half circle and you rotate the half circle board each second.
    * Right side first, as we follow a clock layout - once right side is at 180°, leave it there and start left side to complete a full circle.
    */
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

    // Audio alert at the end of timer
    alert() {
        const alert = new Audio('../assets/audio/alert.mp3');
        alert.volume = 0.5;
        alert.play();
    }
}