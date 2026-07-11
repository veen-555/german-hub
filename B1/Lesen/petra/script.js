const answers = {
    q1: "B",
    q2: "D",
    q3: "C",
    q4: "A",
    q5: "G"
};

function checkAnswers() {

    let score = 0;

    for (let key in answers) {

        const userAnswer = document.getElementById(key).value;

        if (userAnswer === answers[key]) {
            score++;
        }

    }

    document.getElementById("result").innerHTML =
        "Du hast <b>" + score + " von 5 Fragen richtig beantwortet.</b>";
}

function resetAnswers() {

    for (let key in answers) {
        document.getElementById(key).selectedIndex = 0;
    }

    document.getElementById("result").innerHTML = "";
}