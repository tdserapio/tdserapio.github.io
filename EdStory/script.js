const OPER = ["+", "-", "×"]
const OPER_DICT = {
    "+": (a, b) => { return a + b; },
    "-": (a, b) => { return a - b; },
    "×": (a, b) => { return a * b; }
}

var flag = true;

const changeQuestion = (eqnElement, mi = 1, ma = 1000) => {
    document.querySelector(".answer").value = "";
    var operation = OPER[Math.floor(Math.random() * OPER.length)];
    var num1 = Math.floor(mi + Math.random() * ma);
    var num2 = Math.floor(mi + Math.random() * ma);

    while ((operation == "-" && num1 < num2) || (num1 == 1 && num2 == 1) || (operation == "×" && (num1 > 10 || num2 > 10))) {
        var num1 = Math.floor(mi + Math.random() * ma);
        var num2 = Math.floor(mi + Math.random() * ma);
    }

    eqnElement.innerHTML = `${num1} ${operation} ${num2} = `
}

const respond = (corong) => {
    if (flag) {
        var res = document.querySelector(".res_div").appendChild(document.createElement("h2"));
        if (corong == "c") {
            res.setAttribute("class", "res correct");
            res.innerHTML = "CORRECT!";
            flag = false;

            setTimeout(() => {
                res.remove()
                changeQuestion(document.querySelector(".question"));
                flag = true;
            }, 1500)
        } else if (corong == "w") {
            res.setAttribute("class", "res wrong");
            res.innerHTML = "WRONG!";
            flag = false;

            setTimeout(() => {
                res.remove();
                flag = true;
            }, 1500);
        }
    }
}

const ansQ = (ans) => {
    var ans = Number(document.querySelector(".answer").value);
    var eqn = document.querySelector(".question").innerHTML.split(" ");
    var dapat_ans = OPER_DICT[eqn[1]](Number(eqn[0]), Number(eqn[2]));

    console.log(dapat_ans);
    console.log(ans);

    if (ans == dapat_ans) {
        respond("c");
        return;
    }
    respond("w");
}

const startup = () => {
    var ques = document.querySelector(".question");
    changeQuestion(ques);
}