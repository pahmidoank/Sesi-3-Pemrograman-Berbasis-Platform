let papan = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "R", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "B", "*", "*"],
    ["*", "*", "*", "*", "*"]
];

let barisRaja;
let kolomRaja;
let barisBenteng;
let kolomBenteng;

// Mencari posisi R dan B
for (let i = 0; i < papan.length; i++) {
    for (let j = 0; j < papan[i].length; j++) {

        if (papan[i][j] == "R") {
            barisRaja = i;
            kolomRaja = j;
        }

        if (papan[i][j] == "B") {
            barisBenteng = i;
            kolomBenteng = j;
        }
    }
}

// Mengecek apakah raja terkena skak
if (barisRaja == barisBenteng || kolomRaja == kolomBenteng) {
    console.log("RAJA TERKENA SKAK");
} else {
    console.log("RAJA TIDAK TERKENA SKAK");
}