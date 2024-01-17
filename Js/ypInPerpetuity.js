function ypInPerp(){
    let rate = document.getElementById("rate").value;
    rate = rate / 100;

    let calc = 1 / rate;

    document.getElementById("answer").value = calc;
}