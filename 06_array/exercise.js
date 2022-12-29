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
  function getFirstElement(arr) {           //
    let firstNum = arr[0];                  
    return firstNum;
  }
  
//3번
  function getLastElement(arr) {
    let lastNum = arr[arr.length-1];
    return lastNum;
  }
  
//4번
  function getNthElement(arr, index) {
    if(arr.length === 0){
      return undefined;
    }else if(arr.length <= index){
      return 'out of index range';
    }else{
      return arr[index];
    }
  }

  //5번
  
  function computeSumOfAllElements(arr) {
    let sum = 0;
    for(let n = 0; n < arr.length; n++){
      sum = sum + arr[n];
    }
    return sum;
  }
  
//6번 코드 비교

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

  원본 배열을 변경하는 메서드, 원본 배열을 변경하지 않는 메서드입니다.
원본 배열을 변경하는 메서드는 대표적으로 push, pop, shift, unshift등이 있고,
원본 배열을 변경하지 않는 메서드는 slice, concat등이 있습니다.

*/