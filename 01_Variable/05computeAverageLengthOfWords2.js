function computeAverageLengthOfWords2(word1, word2) {
    let leng1 = word1.length;
    let leng2 = word2.length;
    let avg = (leng1 + leng2)/2 ;

    return Math.floor(avg);
}


// let으로 word.length를 leng 할당하지 않고도
// 바로 let avg = (word1.length + word2.length)/2 ; 으로 사용가능
// 이 코드가 더 효율적