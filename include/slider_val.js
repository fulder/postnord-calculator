const heightSlider = document.getElementById("height_slider");
const heightField = document.getElementById("height_field");

const widthSlider = document.getElementById("width_slider");
const widthField = document.getElementById("width_field");

const depthSlider = document.getElementById("depth_slider");
const depthField = document.getElementById("depth_field");

heightSlider.oninput = function() {
    heightField.value = this.value;
}
heightField.oninput = function() {
    heightSlider.value = this.value;
    if (this.value === "") {
        heightSlider.value = 0;
    }
}

widthSlider.oninput = function() {
    widthField.value = this.value;
}
widthField.oninput = function() {
    widthSlider.value = this.value;
    if (this.value === "") {
        widthSlider.value = 0;
    }
}

depthSlider.oninput = function() {
    depthField.value = this.value;
}
depthField.oninput = function() {
    depthSlider.value = this.value;
    if (this.value === "") {
        depthSlider.value = 0;
    }
}