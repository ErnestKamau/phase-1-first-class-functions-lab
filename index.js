const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);  // Gets the first two elements of the array
};


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);  // Gets the last two elements of the array
};



const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}


const fareDoubler = createFareMultiplier(2);



const fareTripler = createFareMultiplier(3);



function selectDifferentDrivers(arrayOfDrivers, driverSelectorFunction) {
    return driverSelectorFunction(arrayOfDrivers);
}