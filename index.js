var wakeDog = function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`;
}

var leashDog = function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`;
}

var walkToPark = function walkToPark(dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}`;
}

var throwFrisbee = function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}
var walkHome = function walkHome(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`;
}
var unleashDog = function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dog, breed) {
    return routine.map(fn => fn(dog, breed))
}