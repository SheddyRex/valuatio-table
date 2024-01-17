function pvOfN1(){
    let rate = document.getElementById("rate").value;
    rate = rate / 100;
    rate ++;
    let year = document.getElementById("year").value;

    let amtOfN1 = rate ** year;

    let calc = 1 / amtOfN1;

    document.getElementById("answer").value = calc;
}