function calculateType() {
    const height = parseInt(document.getElementById("height_field").value);
    const width = parseInt(document.getElementById("width_field").value);
    const depth = parseInt(document.getElementById("depth_field").value);
    const weight = parseInt(document.getElementById("weight_field").value);

    let res = normalLetterCost(height, width, depth, weight);
    if (res !== undefined) {
        document.getElementById("result").innerHTML = res;
        return;
    }

    res = boughtEnvelope(height, width, depth, weight);
    if (res !== undefined) {
        document.getElementById("result").innerHTML = res;
        return;
    }

    res = buyOnline(height, width, depth, weight);
    if (res !== undefined) {
        document.getElementById("result").innerHTML = res;
        return;
    }

    if (res === undefined) {
        document.getElementById("result").innerHTML = "<h1>Kunde inte hitta bra pris. Kan alltid skickas som vanligt brev</h1>";
    }
}

function normalLetterCost(height, width, depth, weight) {
    if (weight > 250) {
        return;
    }

    const d = [height, width, depth];
    d.sort((a, b) => a- b )

    if (Math.max(d) > 60) {
        return;
    }

    if (height + width + depth > 90) {
        return;
    }

    // Check if the maximal 2D dimension is in the minimal requirement 9 x 14 cm
    if (d[2] < 14 && d[1] < 9) {
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
    const d = [height, width, depth];
    d.sort((a, b) => a- b )

    if (weight > 10 * 1000 && d[2] <= 52 && d[1] <= 320 && d[0] <= 12) {
        const infoText = "<h1>Väl Karton XL. Pris 190 SEK<h1>"
        const refUrl = "https://www.postnord.se/skicka-forsandelser/priser-och-villkor/kartong-xl"
        const refText = `<h5>Referens: <a href="${refUrl}">${refUrl}</a><h5>`

        return `${infoText}${refText}`;
    }

    // S, M, L, 2 kg envelopes
    if (weight <= 2000 && d[0] <= 3) {
        const refUrl = "https://www.postnord.se/skicka-forsandelser/priser-och-villkor/forpackningar-med-porto"
        const refText = `<h5>Referens: <a href="${refUrl}">${refUrl}</a><h5>`

        let infoText = ""
        if (d[1] <= 13 && d[2] <= 19) {
            infoText = "<h1>Välj Blå påse S. Pris 42 SEK<h1>"
        }
        else if (d[1] <= 19 && d[2] <= 24) {
            infoText = "<h1>Välj Blå påse M. Pris 59 SEK<h1>"
        }
        else if (d[1] <= 24 && d[2] <= 34) {
            infoText = "<h1>Välj Blå påse L. Pris 79 SEK<h1>"
        }

        return `${infoText}${refText}`;
    }
}

function buyOnline(height, width, depth, weight) {
    const d = [height, width, depth];
    d.sort((a, b) => a- b )

    // min requirements
    if (d[0] < 2 && d[1] < 9 && d[3] < 14) {
        return
    }

    const refUrl = "https://portal.postnord.com/skickadirekt/#"
    const refText = `<h5>Referens: <a href="${refUrl}">${refUrl}</a><h5>`

    if (weight <= 1000 && height + width + depth <= 90) {
        const infoText = "<h1>Köp frakt online, paket Light. Pris: 63 SEK</h1>"
        return `${infoText}${refText}`;
    }
    if (weight <= 2000 && height + width + depth <= 90) {
        const infoText = "<h1>Köp frakt online, paket Small. Pris: 95 SEK</h1>"
        return `${infoText}${refText}`;
    }
    if (weight <= 3000 && height + width + depth <= 110) {
        const infoText = "<h1>Köp frakt online, paket Medium. Pris: 122 SEK</h1>"
        return `${infoText}${refText}`;
    }
    if (weight <= 5000 && height + width + depth <= 110) {
        const infoText = "<h1>Köp frakt online, paket Large. Pris: 149 SEK</h1>"
        return `${infoText}${refText}`;
    }
    if (weight <= 10000 && height + width + depth <= 300 && d[2] <= 120) {
        const infoText = "<h1>Köp frakt online, paket X Large. Pris: 199 SEK</h1>"
        return `${infoText}${refText}`;
    }
    if (weight <= 15000 && height + width + depth <= 300 && d[2] <= 120) {
        const infoText = "<h1>Köp frakt online, paket XX Large. Pris: 240 SEK</h1>"
        return `${infoText}${refText}`;
    }
    if (weight <= 20000 && height + width + depth <= 300 && d[2] <= 120) {
        const infoText = "<h1>Köp frakt online, paket X Large. Pris: 199 SEK</h1>"
        return `${infoText}${refText}`;
    }
}