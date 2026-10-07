const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let total = 0;

input.question("Pilih olahraga (1. Lari, 2. Push-up, 3. Plank): ", (olahraga1) => {
    input.question("Masukkan waktu olahraga pertama (menit): ", (menit1) => {

        if (olahraga1 == 1) {
            total += (menit1 / 5) * 60;
        } 
        else if (olahraga1 == 2) {
            total += (menit1 / 30) * 200;
        } 
        else if (olahraga1 == 3) {
            total += menit1 * 5;
        }

        input.question("Pilih olahraga kedua (1. Lari, 2. Push-up, 3. Plank): ", (olahraga2) => {
            input.question("Masukkan waktu olahraga kedua (menit): ", (menit2) => {

                if (olahraga2 == 1) {
                    total += (menit2 / 5) * 60;
                } 
                else if (olahraga2 == 2) {
                    total += (menit2 / 30) * 200;
                } 
                else if (olahraga2 == 3) {
                    total += menit2 * 5;
                }

                input.question("Pilih olahraga ketiga (1. Lari, 2. Push-up, 3. Plank): ", (olahraga3) => {
                    input.question("Masukkan waktu olahraga ketiga (menit): ", (menit3) => {

                        if (olahraga3 == 1) {
                            total += (menit3 / 5) * 60;
                        } 
                        else if (olahraga3 == 2) {
                            total += (menit3 / 30) * 200;
                        } 
                        else if (olahraga3 == 3) {
                            total += menit3 * 5;
                        }

                        console.log("Total kalori yang terbakar:", total, "kalori");

                        input.close();
                    });
                });
            });
        });
    });
});