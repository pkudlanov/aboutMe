const test = QUnit.test;

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
