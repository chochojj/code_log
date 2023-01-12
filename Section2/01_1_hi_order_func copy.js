//1번 -- 'Hello HoF!' 리턴하는 함수를 리턴
function returnFunction() {
    return function(){
      return 'Hello HoF!';  //console.log('Hello HoF!') 하니까 안됐음
    };
}




//2번 -- 함수와 수(num)를 입력받아 num에 함수를 적용(apply)한 결과를 리턴
function functionParameter(func, num) {
    return func(num);
}




//3번 -- 함수와 수(num)를 입력받아 num에 함수를 두 번(twice) 적용(apply)한 결과를 리턴
function applyTwice(func, num) {
    return func(func(num));             // return func(func,num) 과 어떻게 다른지 생각하기
}



//4번 -- 두 개의 함수와 수(num)를 입력받아 num에 함수들을 num에 가까운 순서대로 적용한 결과를 리턴
function compose(func1, func2, num) {
    return func1(func2(num));           // func2(func1(num)); 과 결과 비교하기
}



//5번 -- 두 개의 함수를 입력받아 두 함수가 결합된 새로운 함수를 리턴
//리턴되는 함수는 정수를 입력받아 func2, func1의 순으로 적용
function compose2(func1, func2) {
    return function(num){
      return func1(func2(num));
    }
}



//6번 -- 함수들을 입력받아 함수들이 입력된 차례대로 결합된 새로운 함수를 리턴
function pipe(...func) {
    return function(num){
      for(let i= 0; i < func.length; i++ ){
        num = func[i](num);  
      }
      return num;
    }
}



//7번 --함수와 객체를 입력받아 조건별로 아래와 같은 동작을 수행
//객체의 'status' 속성값이 'fail'인 경우, 'Something went wrong!'을 리턴
//객체의 'status' 속성값이 'success'인 경우, 'data' 속성값에 입력받은 함수를 적용한 결과를 리턴
function callbackOnly(callback, response) {
    if(response['status'] === 'fail'){
      return console.log('Something went wrong!');
    }else{
      return callback(response['data']);
    }
}



//8번 -- 함수와 배열을 입력받아 배열의 각 요소에 함수가 적용된 새로운 배열 리턴
function mapCallback(func, arr) {
  let result = []
  for(let i = 0 ; i < arr.length; i ++ ){
    result.push(func(arr[i]));
  }
  return result;
}



//9번 -- 함수와 배열을 입력받아 배열의 각 요소에 함수를 적용했을 때 그 결과가 참인 요소만을 갖는 새로운 배열을 리턴
function filterCallback(func, arr) {
  let result = [];
  for(let i = 0; i <arr.length; i++){
    if(func(arr[i])){
      result.push(arr[i])                   //push(func(arr[i])) 하면 boolean값이 리턴됨
    }
  }
  return result
}



//10번 --  배열과 임의의 값(discarder)을 입력받아 기존 배열에서 discarder와 일치하는 요소가 제거된 새로운 배열을 리턴  ! 다시보기
function removeElement(arr, discarder) {
  return arr.filter(function (el) {
    if (el !== discarder) {
      return true;                                //배열의 요소가 참이면 새로운 배열로 자동 생성
    }
    return false;
  });
}



//11번 -- 배열과 임의의 값(keeper)을 입력받아 기존 배열에서 keeper와 일치하는 요소만을 갖는 새로운 배열을 리턴
function keep(arr, keeper) {
  return arr.filter(function(el){
    if(el === keeper){
      return true
    }else{
      return false
    }
  })
}


/* 다시 풀도록 하기 */
//12번 -- 문자열을 요소로 갖는 배열을 입력받아 그 길이가 홀수인 요소만을 갖는 배열을 리턴
function filterOddLengthWords(words) {
  return words.filter(function(el){
    if(el.length % 2 === 1){
      return el
    }
  })
}




//13번 -- 정수를 요소로 갖는 배열과 정수(num)를 입력받아 num을 배열에 추가하고 정렬한다고 가정할 경우, num의 인덱스를 리턴
// function getIndex(arr, num) {
  
//   let newArr = arr.filter(function(el){
//     el < num 
//     return el
//   })
//   return newArr.length;
// }

function getIndex(arr, num) {
  return arr.filter(function (el) {
    return el < num;
  }).length;
}
//내 코드가 어디가 이상한건지



//14번 -- 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 100 보다 작은 요소들만 갖는 배열을 리턴
// function lessThan100(number) {
//   return number < 100;
// }

// function getElementsLessThan100AtProperty(obj, property) {
//   let arr = obj[property];
//   if(Array.isArray(arr)){
//     return arr.filter(function(el){
//       typeof el === 'number' && lessThan100(el)
//     })
//   }else{
//     return [];
//   }
// }


function lessThan100(number) {
  return number < 100;
}

function getElementsLessThan100AtProperty(obj, property) {
  let arr = obj[property];
  if(Array.isArray(arr)) 
  return arr.filter(el => typeof el === 'number' && lessThan100(el));
  else return [];
}