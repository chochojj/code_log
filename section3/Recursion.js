// 1번 - 수(num)를 입력받아 1부터 num까지의 합을 리턴
function sumTo(num) {
    //if는 재귀 함수의 탈출조건 , if문의 return은 탈출시 뱉어낼 작은 형태의 문제의 답
    if(num === 0 ) return 0
    return num + sumTo(num - 1)
}



// 2번 - 수를 입력받아 홀수인지 여부를 리턴
function isOdd(num) {
    if(num === 0) return false
    if(num === 1) return true
    if(num < 0 ) num = Math.abs(num)
    // if(num < 0 ) return isOdd(-num)
    return isOdd(num - 2)
}



// 3번 - 수를 입력받아 n-factorial(!; 팩토리얼) 값을 리턴
function factorial(num) {
    if(num === 1 | num === 0) return 1
    return num * factorial(num - 1)
}



// 4번 - 수(num)를 입력받아 피보나치 수열의 num번째 요소를 리턴
function fibonacci(num) {
    // 별도의 최적화 기법(memoization)은 금지됩니다.
    if(num === 0) return 0
    if(num === 1) return 1
    return fibonacci(num - 2) + fibonacci(num - 1)
}



// 5번 - 배열을 입력받아 모든 요소의 합을 리턴
function arrSum(arr) {
    if(arr.length === 0) return 0
    return arr[0] + arrSum(arr.slice(1))
}



// 6번 - 배열을 입력받아 모든 요소의 곱을 리턴
function arrProduct(arr) {
    if(arr.length == 0) return 1
    let newArr = arr.slice()
    return newArr.shift() * arrProduct(newArr)
}



// 7번 - 배열을 입력받아 그 길이를 리턴
function arrLength(arr) {
    if(arr.isEmpty()) return 0;
    return 1 + arrLength(arr.slice(1))  
}



// 8번 - 수(num)와 배열을 입력받아 차례대로 num개의 요소가 제거된 새로운 배열을 리턴
function drop(num, arr) {
    if(arr.length === 0 || num === 0) return arr
    return drop(num -1, arr.slice(1))
}



// 9번 - 수(num)와 배열을 입력받아 차례대로 num개의 요소만 포함된 새로운 배열을 리턴
function take(num, arr) {
    if(num === 0 || arr.length === 0) return []
    return [arr[0]].concat(take(num -1 , arr.slice(1)));
}



// 10번 - 배열을 입력받아 모든 요소의 논리곱(and)을 리턴
function and(arr) {
    if(arr.length === 0) return true
    return arr[0] && and(arr.slice(1))
}



// 11번 - 배열을 입력받아 모든 요소의 논리합(or)을 리턴
function or(arr) {
    if(arr.length === 0) return false
    return arr[0] || or(arr.slice(1))
}
  


// 12번 - 배열을 입력받아 순서가 뒤집힌 배열을 리턴
function reverseArr(arr) {
    if(arr.length === 0) return [];
    return reverseArr(arr.slice(1)).concat(arr[0])
}



// 13번 -  마트료시카에 대한 정보를 담은 객체와 수를 입력받아 조건에 맞는 인형이 있는지 여부를 리턴
function findMatryoshka(matryoshka, size) {
    if(matryoshka.size === size) return true;
    if(matryoshka.matryoshka){
      return findMatryoshka(matryoshka.matryoshka, size)
    }
    return false
}



// 14번 - 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴
function unpackGiftbox(giftBox, wish) {
    // TODO: 여기에 코드를 작성합니다.
    
      for( let el of giftBox){
        if(el === wish) return true
  
        if(Array.isArray(el)){
        let answer = unpackGiftbox(el, wish);
        if(answer) return true
      }
      
    }
    return false
}



// 15번 - 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴
function flattenArr(arr) {
    let result = [];
    if(arr.length === 0 ) return result;
    for(let el of arr){
      if(Array.isArray(el)){
        result.push(...flattenArr(el));
      }else{
        result.push(el);
      }
    }
    return result
  }
  
  //다른 방법 1
  // function flattenArr(arr) {
  //   if(arr.length === 0 ) return arr;
  //   if(Array.isArray(arr[0])){
  //     return flattenArr([...arr[0],...arr.slice(1)])
  //   }else{
  //     return [arr[0]].concat(flattenArr(arr.slice(1)))
  //   }
  // }
  
  //다른 방법 2
  // function flattenArr(arr) {
  //   if (arr.length === 0) return [];
  //   return arr.reduce((acc, value) => {
  //     Array.isArray(value) ? acc.push(...flattenArr(value)) : acc.push(value);
  //     return acc;
  //   }, []);
  // }