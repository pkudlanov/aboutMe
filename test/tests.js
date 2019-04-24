const test = QUnit.test;

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

test('All answers correct is 5', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const bikerIn = "Einstein";
    const numStatesIn = "1";
    const hobbyIn = "Sodoku";
    const placeIn = "Galapagos Islands";
    const ageIn = "99";
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const quizScore = testResult(bikerIn, numStatesIn, hobbyIn, placeIn, ageIn)
    //Assert
    assert.equal(quizScore, expected);
});
