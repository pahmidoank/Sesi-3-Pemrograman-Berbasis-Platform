let nilai = Number(prompt("Masukkan nilai:"));

if (isNaN(nilai)) {
    console.log("Input harus berupa angka!");
} else if (nilai >= 85) {
    console.log("Nilai: A");
} else if (nilai >= 70) {
    console.log("Nilai: B");
} else if (nilai >= 55) {
    console.log("Nilai: C");
} else if (nilai >= 40) {
    console.log("Nilai: D");
} else {
    console.log("Nilai: E");
}