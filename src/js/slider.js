import { MakeElement } from "./makeElement";
const make = new MakeElement();


class Slider {
    constructor(options) {
        this.name = options.name;
        this.min = options.range.min;
        this.max = options.range.max;
        this.step = options.step;
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
        const sliderDuration = make.create('p');
        const sliderNameAndDuration = make.create('div');
        sliderNameAndDuration.append(sliderName, sliderDuration);

        div.append(sliderNameAndDuration, input);
        this.block = div;
        this.slider = input;
        this.display = sliderDuration;
        this.updateDisplay(this.value);
    }

    updateDisplay(value, updateValue = false) {
        if (updateValue)
            this.value = value;
        const displayValue = this.type == 'time' ? (String(Math.trunc(this.value / 60)) + ' mins') : this.value;
        this.display.textContent = displayValue;
    }
}

export { Slider };