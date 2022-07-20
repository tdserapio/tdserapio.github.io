class Interval {

    constructor(interval, onTick) {
        this.interval = interval;
        this.onTick = onTick || function () { };
        this.timer = false;
        this.ticks = 0;
        this.startTime = 0;
        this.currentTime = 0;
        this.elapsedTime = 0;
        return this;
    }

    run() {
        this.currentTime = Date.now();
        if (!this.startTime) {
            this.startTime = this.currentTime;
        }

        this.onTick();

        let nextTick = this.interval - (this.currentTime - (this.startTime + (this.ticks * this.interval)));
        this.ticks++;

        let self = this;
        this.timer = setTimeout(function () {
            self.run();
        }, nextTick);

        return this;
    }

    start() {
        this.run();
        return this;
    }

    stop() {
        clearTimeout(this.timer);
        return this;
    }
}

function redirect(link) {
    window.location.href = link;
}

function isGreen(input) {
    if (input.files[0]) {
        document.querySelector(".file_wrapper").style.backgroundColor = "rgb(174, 255, 174)";
    }
}

function frfr(input) {
    if (input.files[0]) {
        input.files[0].text()
            .then(val => {
                document.querySelector(".hidden").textContent = val;
            })
    }
}

const start = () => {
    document.querySelector(".wpm").style.display = 'none';
    console.log(document.querySelector("#file"))

    frfr(document.querySelector("#file"));
    setTimeout(() => {
        var text = document.querySelector(".hidden").innerHTML.split(" ");

        var textPlace = document.querySelector(".text");
        textPlace.textContent = "";
        textPlace.style.textAlign = "justify";

        for (var i = 0; i < text.length; i++) {
            var new_span = document.createElement("span");
            new_span.className = "text text_span";
            new_span.textContent += text[i];
            textPlace.appendChild(new_span);

            var space = document.createElement("span");
            space.textContent = " ";
            textPlace.appendChild(space);
        }

        let spans = document.querySelectorAll(".text_span");

        let cnter = 3;
        let sub = document.querySelector(".subtitle");

        sub.textContent = `Reading starts at ${cnter} seconds...`;
        sub.style.display = "inline";

        var counter_interval = setInterval(() => {
            cnter -= 1;
            sub.textContent = `Reading starts at ${cnter} seconds...`;
            sub.style.display = "inline";

            if (cnter == 0) {
                document.querySelector(".subtitle").textContent = "";
                sub.style.display = "none";
                setTimeout(() => { flashText(spans) }, 200);
                clearInterval(counter_interval);
            }
        }, 1000);
    }, 400)
}

function flashText(spans) {
    let i = 0;

    console.log(60000 / document.querySelector("#wpm").value)

    var flashWordsInterval = new Interval(60000 / document.querySelector("#wpm").value, () => {
        if (i != 0) {
            spans[i - 1].style.color = "rgb(165, 165, 165)";
            spans[i - 1].style.textDecoration = "none";
        }

        spans[i].style.color = "white";
        spans[i].style.textDecoration = "underline";

        i += 1;

        if (i == spans.length) {
            setTimeout(() => { defaultTextPlace(spans[i - 1]) }, 1000);
            flashWordsInterval.stop();
        }
    });
    flashWordsInterval.start();
}

function defaultTextPlace(lastSpan) {
    lastSpan.style.color = "rgb(165, 165, 165)";
    lastSpan.style.textDecoration = "none";

    var textPlace = document.querySelector(".text");
    textPlace.style.textAlign = "center";
    textPlace.textContent = `Press the "Start" button to start.`;

    document.querySelector(".wpm").style.display = 'flex';
    document.querySelector("#wpm").value = 200;
}