const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

input.question("Masukkan angka: ", (angka) => {

    let hasil = Number(angka) + 1;

    while (true) {
        let teks = hasil.toString();
        let balik = "";

        for (let i = teks.length - 1; i >= 0; i--) {
            balik += teks[i];
        }

        if (teks == balik) {
            console.log("Angka palindrome terdekat:", hasil);
            break;
        }

        hasil++;
    }

    input.close();
});