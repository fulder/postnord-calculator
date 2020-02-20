function calculateType() {
    const height = document.getElementById("height_field").value;
    const width = document.getElementById("width_field").value;
    const depth = document.getElementById("depth_field").value;

    if normalLetter(height, width, depth) {
        console.log("NORMAL LETTER")
    }
}

function normalLetter(height, width, depth) {
    if (height > 60 || width > 60 || depth > 60) {
        return false;
    }
    if (height + width + depth > 90) {
        return false;
    }
    return true;
}