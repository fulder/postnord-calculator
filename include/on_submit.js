function calculateType() {
    const height = parseInt(document.getElementById("height_field").value);
    const width = parseInt(document.getElementById("width_field").value);
    const depth = parseInt(document.getElementById("depth_field").value);
    const weight = parseInt(document.getElementById("weight_field").value);

    let res = normalLetterCost(height, width, depth, weight);
    if (res !== undefined) {
        document.getElementById("result").innerHTML = res;
    }



    if (res === undefined) {
        document.getElementById("result").innerHTML = "<h1>Error</h1>";
    }
}

function normalLetterCost(height, width, depth, weight) {
    if (weight > 250) {
        return;
    }

    const dims = [height, width, depth];
    dims.sort()

    if (Math.max(dims) > 60) {
        return;
    }

    if (height + width + depth > 90) {
        return;
    }

    // Check if the maximal 2D dimension is in the minimal requirement 9 x 14 cm
    if (dims[2] < 14 && dims[1] < 9) {
        return;
    }

    if (weight < 50) {
        weight = 50;
    }
    const stampsCount = parseInt(weight/50);
    const stampsPrice = 11
    const cost = stampsCount * stampsPrice;
    return `<h1>Välj normalt brev. Antal frimärken: ${stampsCount}. Pris: ${cost} SEK<h1><h5>Referens: <a href="https://www.postnord.se/siteassets/pdf/ovrigt/portoguide_privat.pdf">https://www.postnord.se/siteassets/pdf/ovrigt/portoguide_privat.pdf</a><h5>`;
}