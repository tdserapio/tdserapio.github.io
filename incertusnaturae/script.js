var POSSIBLE = {
    "age": [
        "adult",
        "kid",
        "old",
        "young_adult"
    ],
    "gender": [
        "boy",
        "girl"
    ],
    "jobs": [
        "banker",
        "doctor",
        "food_vendor",
        "janitor",
        "lawyer",
        "police",
        "student",
        "teacher",
        "unemployed",
        "waiter"
    ],
    "culture": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "religion": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "society": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "work": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
}
function view(cl, string) {
    string = string.toLowerCase();
    string1 = random_choice(POSSIBLE[string]);
    cl = cl.split(" ")[1];
    window.open(`${window.location.href.split("/").slice(0, -1).join("/")}/${cl}/${string}/${string1}.jpg`)
}

function random(mn, mx) {
    return Math.random() * (mx - mn) + mn;
}

function random_choice(arr) {
    console.log(Math.floor(random(0, arr.length)));
    return arr[Math.floor(random(0, arr.length))];
}