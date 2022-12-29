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
if(arr.length < n || n === 0 || arr.length === 0){  //
    return arr = [];    
}
return arr.slice(0,n);
}

//16번
function getAllElementsButFirst(arr) {
arr.shift()
return arr;
}

//17번
function getAllElementsButLast(arr) {
arr.pop();
return arr;
}

//18번
function removeFromFront(arr) {
arr.shift();
return arr;
}

//19번 
function removeFromBack(arr) {
arr.pop();
return arr;
}

//20번
function removeFromBackOfNew(arr) {
let str = arr.slice(0, arr.length-1);
return str;
}

//21번  -- 배열에 문자열 넣기
function addToBackOfNew(arr, el) {
return arr.concat(el);
}

function addToBackOfNew(arr, el) {
const newArr = arr.slice();
newArr.push(el);
return newArr;
}

//22번
function addToFrontOfNew(arr, el) {
let newArr = arr.slice(0);
newArr.unshift(el);
return newArr;
}

//23번
function getAllElementsButNth(arr, n) {
let result = [];
for(let i = 0; i <arr.length; i++){
    if(i !== n){
    result.push(arr[i]);
    }
}
return result;
}
/*
n전을 자르고 n뒤를 잘라 이어붙이는 방법도 있음
 front = arr.splice(0,3) 
 back = arr.slice(n+1)
 front.concat(back)
 */

//24번
function createPhoneNumber(arr) {

let firstNum = arr.slice(0,3).join('');
let secondNum = arr.slice(arr.length-8, arr.length-4).join('');
let lastNum = arr.slice(arr.length-4, arr.length).join('');

if(arr.length === 8){
    return `(010)${secondNum}-${lastNum}`;
};

return `(${firstNum})${secondNum}-${lastNum}`;



}

//25번
function fibonacci(num) {
let arr = [0,1];
for(i = 0; i<= num; i++ ){
    if(i === 0){
    arr = [0]
    }else if(i === 1){
    arr = [0,1]
    }else{
    arr.push(arr[i-2]+arr[i-1]);
    
    }
}
return arr;
}


