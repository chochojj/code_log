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
    if(arr.length === 0){                       //arr.length === 0 의 의미는 빈 배열인지 확인하는 것
      return undefined;                         //undefined을 리턴
    }else if(arr.length <= index){              //문자길이가 인덱스보다 작거나 같으면 = 인덱스가 배열 길이를 초과하면 
      return 'out of index range';              //'범위 밖입니다' 리턴
    }else{
      return arr[index];                        //나머지 경우에 index번째 배열의 엘리먼트 리턴
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
      sum = sum + arr[n];                       //for문이 한바퀴 돌고 한번씩 n이 증가될때마다 결과값에 n번째 인덱스값의 엘리먼트을 더해줌
    }
    return sum;
  }
  

//6번 코드 비교 -- 문자열을 입력받아, 문자열을 구성하는 각 단어를 요소로 갖는 배열을 리턴
function getAllWords(str) {
    let splt = str.split(" ");  
  
    if(str.length === 0){
      return [];
    }
    
    return splt;
  }
  

  /*
  
  function getAllWords(str) {
    if (str === '') {
      return [];
    }
  
    return str.split(' ');
  }
  
  */



  //7번 코드 비교
  function getAllLetters(str) {
    let divide = [...str];
    return divide;
  }
  

  /*
function getAllLetters(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
  }

  return arr;
}

  */

//8번 
function getLargestElement(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++ ){
      if(arr[i] < arr[i+1]){
        max = arr[i+1];
      }
    }
    return max;
  }
  


  //못풀었음ㅠㅠ  9번!!

  function getLongestWord(str) {
    let arr = str.split(" ");
    let longest = arr[0];
  
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length > longest.length){
        longest = arr[i];
      }
    }
    return longest;
  }
  
  
  
//10번
  function getEvenNumbers(arr) {
    let blank = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i]%2 === 0){
        blank.push(arr[i]);
      }
    }
   return blank;
  }
  


  //11번 이건 왜 안되는지

  function addToFront(arr, el) {
    return arr.unshift(el);
  }
//이건됨

  function addToFront(arr, el) {
    arr.unshift(el);
    return arr;
  }
//12번
function addToBack(arr, el) {
    arr.push(el);
    return arr;
  }
  
//13번
function mergeArrays(arr1, arr2) {
    let add = arr1.concat(arr2);
    return add;
  }
  


//14번

  function getElementsAfter(arr, n) {
    let cut = arr.slice(n+1);
    return cut;
  }
  
  //15번
  function getElementsUpTo(arr, n) {
    if(arr.length < n || n === 0 || arr.length === 0){
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
  
  
/*
배열 내장 매서드 -> 배열에 사용할 수 있는 자동으로 생성되어 있는 함수
  1. 원본 배열을 변경하는 메서드 
  2. 원본 배열을 변경하지 않는 메서드
원본 배열을 변경하는 메서드는 대표적으로 push, pop, shift, unshift, splice등이 있고,
원본 배열을 변경하지 않는 메서드는 slice, concat등이 있습니다.

arr.length 가 9일때
arr.push() 는 10 //추가된 길이를 리턴
*/