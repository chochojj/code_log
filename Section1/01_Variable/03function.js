function getRunCatDistance(speed, time) {
    let distance = speed * time;
    return distance;
}

//speed, time은 함수안에서 let으로 선언하지 않아도 바로 사용가능
//let output = getRunCatDistance(3,1);