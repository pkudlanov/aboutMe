function testResult(biker, numStates, hobby, place, age){
    biker = biker.toLowerCase();
    numStates = numStates.toLowerCase();
    hobby = hobby.toLowerCase();
    place = place.toLowerCase();
    age = age.toLowerCase();

    let score = 0;

    if(biker === "pavel"){
        score++;
    }
    if(numStates === "3"){
        score++;
    }
    if(hobby === "photography"){
        score++;
    }
    if(place === "crimea"){
        score++;
    }
    if(age === "23"){
        score++;
    }

    return score;
}

const submitButton = document.getElementById ('submit-button');
const biker = document.getElementById ('biker');
const numStates = document.getElementById ('num-states');
const hobby = document.getElementById ('hobby');
const place = document.getElementById ('place');
const age = document.getElementById ('age');
const quizResult = document.getElementById ('quiz-result');

submitButton.addEventListener('click', () => {
    const bikerInput = biker.value;
    const numStatesInput = numStates.value;
    const hobbyInput = hobby.value;
    const placeInput = place.value;
    const ageInput = age.value;

    quizResult.textContent = testResult(bikerInput, numStatesInput, hobbyInput, placeInput, ageInput);
});

const mess = document.getElementById ('messing');

const helloButton = document.getElementById ('greeting');
helloButton.addEventListener('click', () => {
    mess.textContent = "YO Yo yo!!!...";
})