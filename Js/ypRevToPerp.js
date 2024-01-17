function ypRevtoPerp(){
    let rate = document.getElementById("rate").value;
    rate = rate / 100;
    rate ++;
    let year = document.getElementById("year").value;

    let amt = rate ** year;

    let rateAgain = document.getElementById("rate").value;
    rateAgain = rateAgain / 100;

    let revtoPerp = amt * rateAgain;

    let calc = 1 / revtoPerp;

    document.getElementById("answer").value = calc;
}