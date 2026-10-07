let mahasiswa = [
    "Arab",
    "Bangke",
    "Agus",
    "Indri",
    "April",
    "Dina",
    "Rizky"
];

// Nama yang diawali huruf A
console.log("Nama mahasiswa yang diawali huruf A:");

for (let i = 0; i < mahasiswa.length; i++) {
    if (mahasiswa[i][0].toUpperCase() == "A") {
        console.log(mahasiswa[i]);
    }
}

// Mencari nama paling panjang dan paling pendek
let palingPanjang = mahasiswa[0];
let palingPendek = mahasiswa[0];

for (let i = 1; i < mahasiswa.length; i++) {

    if (mahasiswa[i].length > palingPanjang.length) {
        palingPanjang = mahasiswa[i];
    }

    if (mahasiswa[i].length < palingPendek.length) {
        palingPendek = mahasiswa[i];
    }
}

console.log("\nNama paling panjang:", palingPanjang);
console.log("Nama paling pendek:", palingPendek);