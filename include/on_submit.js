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

    // Check if the maximal 2D dimension is in the minimal requirement 9 x 14 cm
    const firstMax = Math.max(dims)
    const secondMax = Math.max(dims.splice(dims.indexOf(firstMax)))
    if (firstMax <= 14 && secondMax <= 9) {
        return false
    }

    return true;
}