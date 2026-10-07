let kata1 = "Katak";
let kata2 = "Makan";
let kata3 = "Kasur";
let kata4 = "Kasur ini rusak";

function cekPalindrome(kata) {
    let teks = kata.toLowerCase().replace(/\s/g, "");
    let balik = "";

    for (let i = teks.length - 1; i >= 0; i--) {
        balik += teks[i];
    }

    if (teks == balik) {
        console.log(kata + " : Palindrome");
    } else {
        console.log(kata + " : Bukan palindrome");
    }
}

cekPalindrome(kata1);
cekPalindrome(kata2);
cekPalindrome(kata3);
cekPalindrome(kata4);