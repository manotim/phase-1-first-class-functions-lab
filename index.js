// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {

return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(fare) {
    return function(dist) {
        return fare * dist
    } 
}
const calcFare = createFareMultiplier(3)


function fareDoubler(num) {
    return num * 2
}

function fareTripler(num) {
    return num * 3
}

function selectDifferentDrivers(driverparam, funcParam) {
    let selectedDriver = funcParam(driverparam)
    return selectedDriver
}


