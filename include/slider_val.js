const heightSlider = document.getElementById("height_slider");
const heightFIeld = document.getElementById("height_field");

heightSlider.oninput = function() {
    heightFIeld.value = this.value;
}