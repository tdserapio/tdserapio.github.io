function isSiteOnline(url,callback) {
    // try to load favicon
    var timer = setTimeout(function(){
        // timeout after 5 seconds
        callback(false);
    },5000)

    var img = document.createElement("img");
    img.onload = function() {
        clearTimeout(timer);
        callback(true);
    }

    img.onerror = function() {
        clearTimeout(timer);
        callback(false);
    }

    img.src = url+"/favicon.ico";
}

isSiteOnline("https://khub.mc.pshs.edu.ph/",function(found){
    if(found) {
        document.querySelector("h1").innerHTML = "KHub is UP!";
        document.querySelector("p").innerHTML = "Hey, do your reqs!";
        document.querySelector("body").style.backgroundColor = "#4bff4b";
    }
    else {
        document.querySelector("h1").innerHTML = "KHub is DOWN!";
        document.querySelector("p").innerHTML = "No more reqs... for now";
        document.querySelector("body").style.backgroundColor = "#ff4b4b";
    }
})
