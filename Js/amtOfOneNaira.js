function amtOfN1(){
    let rate = document.getElementById("rate").value;
    rate = rate / 100;
    rate ++;
    let year = document.getElementById("year").value;

    let calc = rate ** year;

    document.getElementById("answer").value = calc;
}