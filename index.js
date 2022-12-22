// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2);
}


const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(fareMultiplier) {
    return fare => {
        return fare * fareMultiplier;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arr, firstOrLast) {
    return firstOrLast(arr);
}