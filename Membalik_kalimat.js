const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Masukkan kata/kalimat: ", (kalimat) => {

    let hasil = "";

    for (let i = kalimat.length - 1; i >= 0; i--) {
        hasil += kalimat[i];
    }

    console.log("Hasil dibalik:", hasil);

    input.close();
});