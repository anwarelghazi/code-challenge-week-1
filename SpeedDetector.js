function to determine speed
 calculateDemeritPoint(speed) {
    const speedLimit ();//= 70;
    const kmPerKmOverLimit = 5;
    const pfunctionointPerKmOverLimit = 1;
    if (speed < speedLimit) {
        console.log ("Ok")
        return 0;
    }else {
        const kmOverLimit = speed - speedLimit;
        const demeritPoints =Math.floor(kmOverLimit / kmPerKmDemeritPoints)
        if (demeritPoint > 12) {
            console.log("license suspended");
        }else {
            console.log("points:", demeritPoints);
        }
        return demeritPoints;
    }
}