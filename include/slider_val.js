const heightSlider = document.getElementById("height_slider");
const heightField = document.getElementById("height_field");

heightSlider.oninput = function() {
    heightField.value = this.value;
}
heightField.oninput = function() {
    heightSlider.value = this.value;
    if (this.value === "") {
        heightSlider.value = 0;
    }
}