const returnFirstTwoDrivers = function(arr) {
    return arr.slice(0, 2);
  };
  
const returnLastTwoDrivers = function(arr) {
    return arr.slice(-2);
  };
console.log(returnFirstTwoDrivers(['Antonia','Nuru', 'Amari', 'Mo'])); 
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
const fareDoubler = createFareMultiplier(2);
  
const fareTripler = createFareMultiplier(3);
  
const selectDifferentDrivers = function(arr, driverSelector) {
    return driverSelector(arr);
  };
  
