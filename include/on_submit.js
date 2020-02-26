function calculateType() {
    const height = parseInt(document.getElementById("height_field").value);
    const width = parseInt(document.getElementById("width_field").value);
    const depth = parseInt(document.getElementById("depth_field").value);
    const weight = parseInt(document.getElementById("weight_field").value);

    let res = normalLetterCost(height, width, depth, weight);
    if (res !== undefined) {
        document.getElementById("result").innerHTML = res;
    }

    res = boughtEnvelope(height, width, depth, weight);
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

    const infoText = `<h1>Välj normalt brev. Antal frimärken: ${stampsCount}. Pris: ${cost} SEK<h1>`
    const refUrl = "https://www.postnord.se/siteassets/pdf/ovrigt/portoguide_privat.pdf"
    const refText = `<h5>Referens: <a href="${refUrl}">${refUrl}</a><h5>`

    return `${infoText}${refText}`;
}

function boughtEnvelope(height, width, depth, weight) {
    const dims = [height, width, depth];
    dims.sort()

    if (weight > 10 * 1000 && dims[2] <= 52 && dims[1] <= 320 && dims[0] <= 12) {
        const infoText = "<h1>Väl Karton XL. Pris 190 SEK<h1>"
        const refUrl = "https://www.postnord.se/skicka-forsandelser/priser-och-villkor/kartong-xl"
        const refText = `<h5>Referens: <a href="${refUrl}">${refUrl}</a><h5>`

        return `${infoText}${refText}`;
    }
}