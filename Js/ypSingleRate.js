function singleRate(){
    let rate = document.getElementById("rate").value;
    rate = rate / 100;
    rate ++;
    let year = document.getElementById("year").value;

    let amtOfN1 = rate ** year;

    let ypsr = 1 / amtOfN1;
    ypsr = 1 - ypsr;

    let rateAgain = document.getElementById("rate").value;
    rateAgain = rateAgain / 100;
    let calc = ypsr / rateAgain
    document.getElementById("answer").value = calc;
}