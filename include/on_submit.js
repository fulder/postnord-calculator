function calculateType() {
    const height = parseInt(document.getElementById("height_field").value);
    const width = parseInt(document.getElementById("width_field").value);
    const depth = parseInt(document.getElementById("depth_field").value);

    if (normalLetter(height, width, depth)) {
        console.log("NORMAL LETTER")
    }
}

function normalLetter(height, width, depth) {
    const dims = [height, width, depth];
    if (Math.max(dims) > 60) {
        return false;
    }

    if (height + width + depth > 90) {
        return false;
    }


    if (height * width * depth / Math.min(dims) < 9 * 14) {
        return false;
    }

    return true;
}