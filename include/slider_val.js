const heightSlider = document.getElementById("height_slider");
const heightField = document.getElementById("height_field");
connectSliderWithField(heightSlider, heightField);

const widthSlider = document.getElementById("width_slider");
const widthField = document.getElementById("width_field");
connectSliderWithField(widthSlider, widthField);

const depthSlider = document.getElementById("depth_slider");
const depthField = document.getElementById("depth_field");
connectSliderWithField(depthSlider, depthField);

function connectSliderWithField(slider, field) {
    slider.oninput = function() {
        field.value = this.value;
    }

    field.oninput = function() {
        slider.value = this.value;
        if (this.value === "") {
            slider.value = 0;
        }
    }
}