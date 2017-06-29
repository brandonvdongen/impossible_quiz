document.addEventListener("DOMContentLoaded", function () {

    let qi = 0;//question index
    const questions = {
        question1: {question: "The answer is 1", answers: ["one", "2", "III", ""], correct: 5},
        question2: {question: "What number matches the answer", answers: ["FOUR", "ONE", "THREE", "SIX"], correct: 1},
        question3: {question: "Which cheese is made backwards", answers: ["Brie", "Cheddar", "Edam", "Babybel"], correct: 3},
        question4: {question: "vraag4", answers: ["a", "b", "c", "d"], correct: 4},
        question5: {question: "Click yes to exit", answers: ["NO", "YES", "canel", "exit"], correct: 1},
    };

    let question = document.getElementById("question");
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");
    let answer5 = document.getElementById("answer5");

    function set_question(i) {
        qi = i;
        question.innerHTML = questions["question" + qi]["question"];
        answer1.innerHTML = "<button>" + questions["question" + qi]["answers"][0] + "</button>";
        answer2.innerHTML = "<button>" + questions["question" + qi]["answers"][1] + "</button>";
        answer3.innerHTML = "<button>" + questions["question" + qi]["answers"][2] + "</button>";
        answer4.innerHTML = "<button>" + questions["question" + qi]["answers"][3] + "</button>";
    }

    function answer_question(i) {
        let sel = questions["question"+qi]["correct"];
        console.log(sel);
        if(i == sel){
            console.log("ok",i,sel);
        }
        console.log("fail",i,sel);
    }

    set_question(1);
    document.addEventListener("click", function (e) {
        console.log(e.target.parentNode.id);
        console.log();

        if(e.target.parentNode.id.slice(0,-1) == "answer"){
            answer_question(e.target.parentNode.id.charAt(6));
        }
    });
});