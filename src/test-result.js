function testResult(biker, numStates, hobby, place, age){
    biker = biker.toLowerCase();
    numStates = numStates.toLowerCase();
    hobby = hobby.toLowerCase();
    place = place.toLowerCase();
    age = age.toLowerCase();

    let score = 0;

    if(biker === 'pavel'){
        score++;
    }
    if(numStates === '3'){
        score++;
    }
    if(hobby === 'photography'){
        score++;
    }
    if(place === 'crimea'){
        score++;
    }
    if(age === '23'){
        score++;
    }

    return score;
}

export default testResult;
