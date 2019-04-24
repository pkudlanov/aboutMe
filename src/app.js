

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

    console.log(bikerInput, numStatesInput, hobbyInput, placeInput, ageInput);
});