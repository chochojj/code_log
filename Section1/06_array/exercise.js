//1번 -- 값을 입력받아서 타입을 리턴함 
function getType(anything) {    
    if(Array.isArray(anything)){            //만약 배열이면
      return 'array';                       //문자열 '배열'을 리턴
    }else if(anything === null){            //null이면
      return 'null';                        //문자열 'null'을 리턴
    }else{                                  //나머지 경우에
      return String(typeof (anything));     //typeof연산자를 사용하여 타입을 리턴
    }
}



//2번 -- 배열을 입력받아 배열의 첫번째 요소를 리턴
function getFirstElement(arr) {           
    let firstNum = arr[0];                  //firstNum에 배열의 0번째 인덱스 엘리먼트 추출하여 할당    
    return firstNum;                        //추출된 엘리먼트 리턴
}



//3번 -- 배열을 입력받아 배열의 마지막 요소를 리턴
function getLastElement(arr) {            
    let lastNum = arr[arr.length-1];        //lastNum에 배열의 마지막 인덱스 엘리먼트를 추출하여 할당
    return lastNum;                         //추출된 엘리먼트 리턴
}
/*
인덱스는 0으로 시작하기 때문에 배열의 마지막 인덱스는 
배열 전체 길이에서 -1을 해줘야함
*/



//4번 -- 배열과 수를 입력받아 수가 인덱스로 가리키는 배열의 요소를 리턴
function getNthElement(arr, index) {          //매개변수는 배열과 인덱스
    if(arr.length === 0){                     //arr.length === 0 의 의미는 빈 배열인지 확인하는 것
        return undefined;                     //undefined을 리턴
    }else if(arr.length <= index){            //문자길이가 인덱스보다 작거나 같으면 = 인덱스가 배열 길이를 초과하면 
        return 'out of index range';          //'범위 밖입니다' 리턴
    }else{
        return arr[index];                    //나머지 경우에 index번째 배열의 엘리먼트 리턴
    }
}
/* 
빈 배열은 falsy한 갑이기 때문에
console.log(!arr.length)는 true
*/



//5번 -- 배열을 입력받아 배열의 모든 요소의 합을 리턴
function computeSumOfAllElements(arr) {
    let sum = 0;                                //초기값은 0으로 설정                  
    for(let n = 0; n < arr.length; n++){        //0번부터 문자길이-1까지 -> 모든 배열을 길이만큼 하나씩 증가시킴
        sum = sum + arr[n];                     //for문이 한바퀴 돌고 한번씩 n이 증가될때마다 결과값에 n번째 인덱스값의 엘리먼트을 더해줌
    }
    return sum;
}



//6번  -- 문자열을 입력받아, 문자열을 구성하는 각 단어를 요소로 갖는 배열을 리턴
//내가 짠 코드
function getAllWords(str) {
    let splt = str.split(" ");                  //str배열을 공백을 기준으로 나눠주고 splt변수에 할당

    if(str.length === 0){                       //만약 빈 배열이면
        return [];                              //빈 배열을 리턴
    }

return splt;                                    //splt변수 리턴 
}

/*                                                  
//레퍼런스 코드

function getAllWords(str) {                     
    if (str === '') {                           //만약 배열이 비었으면  
        return [];                              //빈 배열을 리턴
    }

    return str.split(' ');                      //str배열을 공백을 기준으로 나워서 리턴
}

//내 코드와의 차이점 
//조건문을 건저 걸어서 빈배열을 걸러주고
//배열을 문자열로 쪼갠것을 바로 리턴
*/



//7번 -- 문자열을 입력받아 문자열을 구성하는 각 문자를 요소로 갖는 배열을 리턴 
// => ('red'을 받으면 ['r','e','d']로 리턴)
//내가 짠 코드
function getAllLetters(str) {                   
    let divide = [...str];                      //spread연산자를 사용하여 만들어진 배열을 divide 변수에 할당
    return divide;                              //divide변수를 리턴
}
//spread연산자란? [...string] => ['s','t','r','i','n',','g']

/*
//레퍼런스 코드
function getAllLetters(str) {
    let arr = [];                               //빈 배열을 arr변수에 할당
    for (let i = 0; i < str.length; i++) {      //i가 0일때부터 문자 길이를 모두 순회할 때까지
    arr.push(str[i]);                           //빈 배열에 str의 i인덱스 엘리먼트를 추가해줌
    }

    return arr;
}

//내 코드와의 차이점
//for문을 사용해서 arr변수의 빈 배열에 하나씩 붙혀줌
//arr변수를 리턴함
*/



//8번 -- 배열을 입력받아 가장 큰 요소를 리턴
function getLargestElement(arr) {
    let max = 0;                                //max변수에 초기값 0 설정하여 할당
    for(let i = 0; i < arr.length; i++ ){       //문자길이만큼 i를 1씩 증가시키며 확인
        if(arr[i] < arr[i+1]){                  //인덱스 i번째 엘리먼트가 i+1번째보다 작으면 
        max = arr[i+1];                         //max변수에 더큰 i+1번째 엘리먼트를 할당
        }
    }
    return max;                                 //다 비교하고 가장 큰 수로 판별된 엘리먼트를 담은 max변수를 리턴               
}



//9번 -- 문자열을 입력받아 문자열에서 가장 긴 단어를 리턴
//궁금한 점 있음 !
function getLongestWord(str) {
    let arr = str.split(" ");                   //arr변수에 str을 공백을 기준으로 쪼갠 배열을 할당
    let longest = arr[0];                       //longest변수에 0번째 인덱스 엘리먼트를 초기값으로 설정

    for(let i = 0; i < arr.length; i++){        //0부터 배열의 길이만큼 1씩 증가시키며 확인
        if(arr[i].length > longest.length){     //i번째 엘리먼트 길이와 초기값 longest변수 길이를 비교 => i번째 엘리먼트 길이가 더 크면
        longest = arr[i];                       //longest변수에 i번째 엘리먼트 길이 할당
        }
    }

    return longest;                             //longest변수 리턴
}
/*
8번은 arr[i] < arr[i+1] 로 i번째와 i+1번째를 바로 비교했는데
9번은 왜 longest와 i번째를 비교하는거지?
if(arr[i].length > arr[i+1].length)로 하면 어떤 오류가 발생하는지
> 일단 생각하기에 i+1번째는 없기때문인듯
*/


//10번 -- 수를 요소로 갖는 배열을 입력받아 짝수만을 요소로 갖는 배열을 리턴
function getEvenNumbers(arr) {
    let blank = [];                             //빈 배열 초기값으로 설정하여 blank변수에 할당
    for(let i = 0; i < arr.length; i++){        //0번 부터 배열 길이만큼 1씩 증가시키면서 체크
        if(arr[i]%2 === 0){                     //만약 배열의 인덱스 i번째 엘리먼트를 2로 눴을때 나눠떨어지면
            blank.push(arr[i]);                 //빈 배열에 인덱스 i번째 엘리먼트 추가 
        }
    }
    return blank;
}



//11번 -- 배열과 요소를 입력받아 주어진 요소를 배열의 맨 앞에 추가하고 해당 배열을 리턴
//!기존 배열에 주어진 요소가 추가된 형태의 배열을 리턴
function addToFront(arr, el) { 
    arr.unshift(el);                            //arr배열 앞에 el을 추가
    return arr;                                 //arr를 리턴
}
/*
function addToFront(arr, el) {
    return arr.unshift(el);                     //arr.unshift()를 리턴하면 안됨
}
//안되는 이유
//arr.length 가 9일때
//arr.push()는 10 -- 추가된 길이를 리턴
//arr.unshift()도 마찬가지로 추가된 길이를 리턴


//추가로 알아야 할 부분!
//배열 내장 매서드 -> 배열에 사용할 수 있는 자동으로 생성되어 있는 함수
//1. 원본 배열을 변경하는 메서드 
//2. 원본 배열을 변경하지 않는 메서드
//원본 배열을 변경하는 메서드는 대표적으로 push, pop, shift, unshift, splice 등등
//원본 배열을 변경하지 않는 메서드는 slice, concat등이 있음

*/



//12번 -- 배열과 요소를 입력받아 주어진 요소를 배열의 맨 뒤에 추가하고 해당 배열을 리턴
//!기존 배열에 주어진 요소가 추가된 형태의 배열을 리턴
function addToBack(arr, el) {
    arr.push(el);                                   //arr배열 뒤에 을 el추가
    return arr;                                     //arr를 리턴
}



//13번 -- 두 개의 배열을 입력받아 순서대로 합쳐진 배열을 리턴
function mergeArrays(arr1, arr2) {
    let add = arr1.concat(arr2);                    //arr1배열에 arr2배열을 이어붙힌것을 add 변수에 할당
    return add;                                     //add 변수 리턴
}
/*
//concat함수를 사용하여 배열에 문자열을 추가할 수 있음 
//mergeArrays(['a','b','c'],'apple') 했을때
//["a", "b", "c", "apple"] 로 출력됨
*/



//14번 -- 배열과 인덱스를 입력받아 주어진 인덱스 이후의 요소들을 갖는 새로운 배열을 리턴
//! 새로운 배열을 리턴
function getElementsAfter(arr, n) {
    let cut = arr.slice(n+1);                       //arr배열을 n+1번까지 잘라서 버리고 cut변수에 할당
    return cut;                                     //새로운 배열을 리턴해야해서 cut변수에 담아 리턴
}



//15번 -- 배열과 인덱스를 입력받아 주어진 인덱스 이전의 요소들을 갖는 새로운 배열을 리턴
function getElementsUpTo(arr, n) {
    if(arr.length < n || n === 0 || arr.length === 0){  //배열의 길이가 n보다 작거나, n이 0이거나, 빈 문자열일 때
        return arr = [];                                //arr에 빈 문자열을 리턴
    }
    return arr.slice(0,n);                              //arr배열을 0번 인덱스에서부터 n번 인덱스 앞까지 잘라서 리턴
}



//16번 -- 배열을 입력받아 첫번째 요소를 제외한 배열을 리턴
function getAllElementsButFirst(arr) {
    arr.shift()                                         //shift 매서드로 맨 앞에 요소를 제거해줌
    return arr;                                         //앞 요소를 제거해준 배열arr를 리턴
}
/*
function getAllElementsButFirst(arr) {              
  return arr.slice(1);
} 
*/



//17번 -- 배열을 입력받아 마지막 요소를 제외한 배열을 리턴
function getAllElementsButLast(arr) {
    arr.pop();                                          //pop 매서드로 맨 뒤의 요소를 제거
    return arr;                                         //마지막 요소를 제거해준 배열arr를 리턴
}
/*
function getAllElementsButLast(arr) {
  return arr.slice(0, arr.length - 1);
}
*/



//18번 -- 배열을 입력받아 배열의 첫번째 요소가 삭제된 배열을 리턴
//!기존 배열에 첫번째 요소가 삭제된 배열(주소값 동일)을 리턴해야함
function removeFromFront(arr) {
    arr.shift();                                        //16번 문제와 비교 slice 매서드는 동일한 주소값(인스턴스)를 리턴하지 않음            
    return arr;
}
/*
//인스턴스 => 다음 챕터 객체 파트에서 알아보기!
*/



//19번 -- 배열을 입력받아 배열의 마지막 요소를 삭제한 배열을 리턴
function removeFromBack(arr) {
    arr.pop();                                         //17번 문제와 비교 - slice 매서드는 동일한 주소값(인스턴스)를 리턴하지 않음
    return arr;
}



//20번 -- 배열을 입력받아 배열의 마지막 요소가 제외된 새로운 배열을 리턴
function removeFromBackOfNew(arr) {             
    let str = arr.slice(0, arr.length-1);               //arr배열 길이의 마지막 요소 앞까지 잘라서 변수 str에 할당
    return str;                                         //변수 str리턴
}



//21번  -- 배열을 입력받아 새로운 요소가 추가된 새로운 배열을 리턴
function addToBackOfNew(arr, el) {
    return arr.concat(el);                              //arr배열에 push매서드로 el추가
}
/* 
다른 방법
function addToBackOfNew(arr, el) {
    let newArray = arr.slice();                         //newArray변수에 slice로 한번 복사해서 할당
    newArray.push(el);                                  //newArray변수의 뒤에 el 추가
    return newArray;                                    //newArray를 리턴
}
*/



//22번 -- 배열과 요소를 입력받아 맨앞에 새로운 요소가 추가된 새로운 배열을 리턴
function addToFrontOfNew(arr, el) {
    let newArr = arr.slice();                           //newArr변수에 slice로 한번 복사해서 할당
    newArr.unshift(el);                                 //newArr변수의 앞에 el 추가
    return newArr;                                      //newArr 리턴
}



//23번 -- 배열과 인덱스를 입력받아 해당 인덱스의 요소를 제외한 배열을 리턴
function getAllElementsButNth(arr, n) {
    let result = [];                                    //빈 배열을 result에 할당
    for(let i = 0; i <arr.length; i++){                 //0부터 배열 길이까지 하나씩 증가시키며 검사하는데
        if(i !== n){                                    //만약 i === n이 아니면 => n번째 인덱스 요소가 아니면
        result.push(arr[i]);                            //빈 배열에 i번째 인덱스를 추가
        }
    }
    return result;                                      // 0에서 i까지 n번째 인덱스 요소를 제외한 요소가 추가된 배열 리턴
}
/*
// 1.n전까지 자르고    2. n뒤부터 잘라    3. 둘을 이어붙이는 방법도 있음
 function getAllElementsButNth(arr, n) {
  let front = arr.slice(0,n);               -- 1
  let back = arr.slice(n+1);                -- 2
  let sum = front.concat(back);             -- 3
    
  return sum;
}

 */



//24번 -- 0~9 사이의 정수를 요소로 갖는 배열을 입력받아 전화번호 형식의 문자열로 리턴
//예시 -- ['0','1','0','1','2','3','4','5','6','7','8'] => (010)1234-5678
function createPhoneNumber(arr) {

    let firstNum = arr.slice(0,3).join('');                                     //앞의 배열 3개를 잘라내 공백을 기준으로 join으로 합쳐줌 - firstNum에 할당
    let secondNum = arr.slice(arr.length-8, arr.length-4).join('');             //중간 4개의 배열 요소를 추출해 공백을 기준으로 join으로 합쳐줌 - secondNum에 할당
    let lastNum = arr.slice(arr.length-4, arr.length).join('');                 //뒤의 4개의 배열 요소를 추출해 공백을 기준으로 join으로 합쳐줌 - lastNum에 할당

    if(arr.length === 8){                                                       //010이 없는 뒷자리 숫자 8자리 배열만 입력받았을 경우 
        return `(010)${secondNum}-${lastNum}`;                                  //010을 붙혀 출력
    };

    return `(${firstNum})${secondNum}-${lastNum}`;                              //템플릿 리터럴 firstNum,secondNum,lastNum 문자열로 다듬어 출력;
}
/*
function createPhoneNumber(arr) {
  // 경우의 수가 많아.....
  // 입력: [0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8], [8, 7, 6, 5, 4, 3, 2, 1])
  // 출력: '(010)1234-5678', '(010)8765-4321'
  // 11자리일 때도 있고, 8자리일 때도 있음.
  // '(0번째 요소~ 2번째 요소)3번째 요소 ~ 6번째 요소-7번째요소 ~ 11번째요소'
  // `(${0~2})${3~6}-${7~11}`
  // 괄호 안에 들어가는 걸 first
  // 하이픈 앞에 오는걸 second
  // 하이픈 뒤에 오는 걸 third
  // 원본 배열에서 복사한 다음, 복사한걸 문자열로 변환

  let first = arr.slice(0, 3).join(''); // [0, 1, 0] -> '010'
  let second = arr.slice(-8, -4).join(''); // '1234'
  let third = arr.slice(-4).join(''); // '5678'

  if(arr.length === 8) {
    first = '010';
  }

return `(${first})${second}-${third}`;
}
 */



//25번 -- num를 입력받아 입력받은 num번째까지 총 num+1개의 피보나치 수열을 리턴
function fibonacci(num) {
    let arr = [0,1];                        // arr변수에 이미 [0,1]배열을 할당
    for(i = 0; i<= num; i++ ){              // 0부터 num번째까지 1씩 증가하며 반복
        if(i === 0){                        // num이 0일때 
        arr = [0] ;                         // 배열 arr 를 [0]으로 출력
        }else if(i === 1){                  // num이 1일때 
        arr = [0,1] ;                       // 배열 arr 를 [0,1]으로 출력
        }else{
        arr.push(arr[i-2]+arr[i-1]);        // 그렇지 않은 경우에 i-2인덱스 요소와 i-1인덱스 요소를 더해서 배열에 i번째 요소로 추가해줌
        
        }
    }
    return arr;                             //num까지 반복하여 추가된 배열 arr를 리턴
}
/*
//같은 코드를 다음과 같이 다듬을 수 있음
function fibonacci(num) {
  let arr = [0,1];                          // arr변수에 이미 [0,1]배열을 할당
  if(num === 0){                            // num이 0일 경우 미리 걸러줌
      arr = [0]
  }
  if(num === 1){                            // num이 1일 경우 미리 걸러줌
      arr = [0,1];
  }
  for(i = 2; i<= num; i++ ){                // i를 2부터 시작해서 num까지 하나씩 증가하며 반복
      arr.push(arr[i-2]+arr[i-1]);          // i-2인덱스 요소와 i-1인덱스 요소를 더해서 배열에 i번째 요소로 추가해줌
  }
  return arr;                               //num까지 반복하여 추가된 배열 arr를 리턴
}
*/


