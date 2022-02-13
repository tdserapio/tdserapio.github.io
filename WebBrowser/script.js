var times = 0;
var thing = true;
function search() {
    var a = document.body.querySelector("#answer").value;
    var b = document.body.querySelector(".title");

    if (a == "I'm Red") {
        document.body.querySelector("#answer").remove();
        document.body.querySelector("#submit").remove();
        setTimeout(function () {
            b.innerHTML = "Oh, hiiii\~";
            if (times >= 1) {
                setTimeout(function () {
                    setTimeout(b.innerHTML = "BY THE WAY REALLY SORRY\nABOUT THAT RED\-", 3000);
                }, 3000);
            }
            setTimeout(function () {
                b.innerHTML = "Happy Valentines Day Red! <33";
                document.body.style.backgroundColor = "HotPink";
                document.body.style.color = "white";
            }, 5000);
        }, 2000);
    }

    if (times == 0 && thing) {
        b.innerHTML = "No I'm Lazy >:(";
    } else if (times == 1 && thing) {
        b.innerHTML = "IM DAY-OFF TODAY, OK?";
    } else if (times == 2 && thing) {
        b.innerHTML = "SHUT THE EFF UP YOU-";
    } else if (times == 3 && thing) {
        b.innerHTML = "PLEAASEE JUST NO!";
    } else if (times == 4 && thing) {
        b.innerHTML = "911 IS ON SPEEDDIAL";
    } else if (times == 5 && thing) {
        b.innerHTML = "THIS IS THE FINAL STRAW!!!";
    } else if (times == 6 && thing) {
        b.innerHTML = "REALLY NOW-";
    } else if (times == 7 && thing) {
        b.innerHTML = "Ok, I will let it be";
    } else if (times == 8 && thing) {
        b.innerHTML = "I won't respond... unless";
    }

    times += 1;
    console.log(a);
}