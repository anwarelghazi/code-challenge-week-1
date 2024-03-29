function speedDetector(speed){
    //give variables to speedmlimit and km per point
    const speedlimit = 70;
    const kmPerPoint = 5;
    //checki if the speed is less than or equal to speed limit 
    if(speed <= speedlimit) {
        console.log("ok");
    }else{
        const points = Math.floor((speed - speedlimit) / kmPerPoint);
        //calculate points 
        if (points >= 12){
            console.log('license suspended');
        }else{
            console.log("points",points)
        }
    }
}
speedDetector(200)