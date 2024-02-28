// Code your solution in this file!
function distanceFromHqInBlocks(a) {
    if (a > 42) {
        return a - 42
    }    
    else {
        return 42 - a
    }
        
}
function distanceFromHqInFeet(a) {
    return distanceFromHqInBlocks(a)* 264
    
}

function distanceTravelledInFeet(b,c) {
    if (b > c) {
        return (b - c)*264
    }    
    else {
        return (c - b)*264
    }
}
let dis = distanceTravelledInFeet(b,c)
function calculatesFarePrice(b, c) {
    if (distanceTravelledInFeet(b,c) <= 400) {
        return 0
    }
    else if (distanceTravelledInFeet(b,c) <= 2000 ) {
        return (distanceTravelledInFeet(b,c) - 400)*0.02
    }
    else if (distanceTravelledInFeet(b,c) <= 2500) {
        return 25
    }
    else {
        return 'cannot travel that far'
    }
}