//1번 -- 객체와 키를 입력받아 키에 해당하는 값을 리턴
function getProperty(obj, property) {                   //매개변수 property를 이미 문자열로 받아옴
    return  obj[property];                              //따라서 bracket 안에 ''를 해주지 않아도 됨
}
/*
let 객체 = { 키1: 값1 , 키2: 값2, 키3: 값3};  -- 키:값 한쌍은 프로퍼티(속성)으로 부름
객체[키] = 값;
이 논리를 잘 기억해 둬야 헷갈리지 않음!
*/



//2번 -- 객체와 키를 입력받아 키에 해당하는 값을 true로 설정
function addProperty(obj, property) {           
    obj[property] = true;                               //객체[키] = 값;
}



//3번 -- 객체와 키, 값을 입력받아 키에 값을 할당
function addPropertyAndValue(obj, property, value) {    //매개변수는 (객체, 키, 값)
    obj[property] = value;                              //객체[키] = 값;
  }



//4번 -- 두 개의 객체와 키를 입력받아 첫번째 객체의 키에 두번째 객체를 할당
function addObjectProperty(obj1, property, obj2) {      //매개변수 (객체1, 키, 객체2)
    obj1[property] = obj2;                              //객체1[키] = 객체2; 
 }



//5번 -- 객체와 키를 입력받아 키가 가리키는 속성을 제거
function removeProperty(obj, property) {               
   delete obj[property]                                 //배열의 속성(키:값)을 삭제할때 delete 사용
}



//6번 -- 객체를 입력받아 number 타입의 값을 갖는 속성을 모두 제거
function removeNumberValues(obj) {
    for(let key in obj){                                //객체의 모든 키를 처음부터 끝까지 순회 
      if(typeof(obj[key]) === 'number'){                //객체의 값의 타입이 숫자형인지 검사해서 숫자형이면
        delete obj[key];                                //객체의 속성 삭제
      }
    }
  }
  /*
  객체을 반복문으로 돌릴때는 for in 구문을 사용해야함
  배열의 경우 for of 구문 사용
  */


 
//7번 -- 객체를 입력받아 배열을 값으로 갖는 속성을 모두 제거
function removeArrayValues(obj) {
    for(let key in obj){                                //객체의 모든 키를 처음부터 끝까지 순회
      if(Array.isArray(obj[key]) === true){             //객체의 값이 배열인지 검사해서 배열이면
          delete obj[key];                              //객체의 속성 삭제
      }
    }
  }


  
//8번 -- 객체를 입력받아 홀수를 값으로 갖는 속성을 모두 제거
//조건, 홀수 판단은 숫자형 타입에만 적용해주기
function removeOddValues(obj) {
    for(let key in obj){                                            //객체의 모든 키를 처음부터 끝까지 순회
      if(obj[key]%2 !== 0 && typeof(obj[key]) !== 'string' ){       //객체의 값이 홀수이고, 문자형 타입이 아닌경우
        delete obj[key];                                            //객체의 속성 삭제
      }
    }
  }
  


//9번 -- 객체를 입력받아 객체가 가진 age 속성값이 18세 이상인지 여부를 리턴
function isPersonOldEnoughToVote(person) {
    if(person['age'] >= 18){                            //person객체의 age 키의 값이 18이상이면                  
      return true;                                      //true값을 리턴
    }else{
      return false;                                     //그렇지 않은 경우 false리턴
    }
  }



//10번 -- 객체를 입력받아 'firstName','lastName' 속성 값 사이에 띄어쓰기 하나를 둔 단일 문자열을 fullName 속성값으로 할당 
function addFullNameProperty(obj) {         
    let full = `${obj['firstName']} ${obj['lastName']}`;        //객체의 firstName과 lastName 값을 빼내서 템플릿 리터럴로 연결해서 full변수에 할당
    obj.fullName = full;                                        //객체의 fullName 키에 full변수를 값으로 할당
  }
/* 
입출력 예시
const person = {
  firstName: 'Jade',
  lastName: 'Smith',
};

addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'
*/



//11번 -- 
function removeNumbersLargerThan(num, obj) {
    for(let key in obj){
      if(typeof(obj[key]) === 'number' && obj[key] > num ){
        delete obj[key];
      }
      obj[key];
    }
  }

//
function countNumberOfKeys(obj) {
    let count = 0;
    for(let key in obj){
      count++;
    }
    return count;
  }
  

// 띄어쓰기 조심
function printObject(obj) {
    let result = '';
    for(let key in obj){
      result += `${key}: ${obj[key]}\n`; 
    }
    return result;
  }
  
  
//
function getElementOfArrayProperty(obj, key, index) {
    if(Array.isArray(obj[key]) === true){
      return obj[key][index];
    }
  }
  

//
function select(arr, obj) {
    let blankObj = {};
    for(let i of arr){
      for(let key in obj){
        //obj의 a라는 키랑, arr의 각 요소 비교
        if(i === key){
          blankObj[i] = obj[key];       //속성 값을 추가하고 있음
          //blankObj[a] = obj[a] => obj[a] === 1;
          //blankObj = { a : 1};
          //user['category'] = '직장인';
          // user =  { category : 직장인 };
        }
      }
    }
    return blankObj;
  }
  /*
  const arr = ['a', 'c', 'e'];  //  i= a 혹은 c 혹은 e => 즉, 배열의 요소 
  const obj = { a: 1, b: 2, c: 3, d: 4 };  // key는 obj의 속성 값
  배열의 요소가 객체의 키로 있으면, 그 키와 값을 새로운 객체에 넣는다
  배열의 요소와 객체의 키를 각각 비교 -> 문자열 가지고 두 문자열 중복된거 확인 => 이중반복문
  */


//
function getLastElementOfProperty(obj, property) {
    let objProp = obj[property];
    if(Array.isArray(objProp) === true){
      return objProp[objProp.length-1];
    }
  }

//
function getLastElementOfProperty(obj, property) {
    let objProp = obj[property];
    if(Array.isArray(objProp) === true){
      return objProp[objProp.length-1];
    }
  }
//objProp.pop() 을 리턴해도 됨

//
function getValueOfNthElement(arr, num) {
    if(arr.length === 0){
      return 'no name';
    }
    if(arr.length <= num ){
      return arr[arr.length-1]['name'];
    }else {
      return arr[num]['name'];
    }
  }
  /*
  let arr = [{ name: 'Kelly' }, { name: 'Anna' }];
  arr[0] === { name : 'Kelly' }  === { 키 : 값 }
  객체이름['키']
  arr[0]['name']
  */


//
function getAllButLastElementOfProperty(obj, key) {
    let objProp =obj[key];   //key 키의 속성
    if(Array.isArray(objProp) === true &&  objProp.length !== 0){
        let newArr = objProp.slice(0,objProp.length-1); 
        return newArr;
    }else{
      return [];
    }
  }
//Array.isArray(objProp)에 ()꼭 확인


// 못풀었음 와우
function extend(obj1, obj2) {
    for(let key in obj2){        //키(속성)을 검사할때 for in 사용
      if (!(key in obj1)){
        obj1[key] = obj2[key];   //객체2의 값을 key에 넣어줌
      }
    }
  }
/* 
중복되는지 여부를 확인해서 합쳐줌
두번째 객체를 반복 -> 프로퍼티 모두 obj1에 추가
조건: 첫번째에 이미 있으면 제외
< 다른 방법 >
for (let prop in obj2){
if(prop in obj1){
    continue;
}else{
    obj1[prop] = obj2[prop];
}
}


*/
// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }
// expected output:
// "a: 1"  키 : 값
// "b: 2"
// "c: 3"
  
  
  //
  function countAllCharacters(str) {
    let newObj = {};
  
    
    for(let i = 0; i < str.length; i++){
      if(!newObj[str[i]]){               
        newObj[str[i]] = 0;
      }
      newObj[str[i]]++;             //newObi의 str[i]키의 값을 1 증가시킴
    }
    return newObj;
  }
  // str = 'banana';
  // str[0] = 'b';
  // i = i + 1;
  // i += 1;
  // i++;

  //진짜 모르겠음!
  function countAllCharacters(str) {
    let newObj = {};
  
    
    for(let i = 0; i < str.length; i++){
      if(!newObj[str[i]]){               
        newObj[str[i]] = 0;
      }
      newObj[str[i]] = newObj[str[i]] + 1;
      //newObj[str[i]] = b + 1 ;
    }
    return newObj;
  }
  // newObj = { b : n } 이라 했을때 newObj[b] = n
  // str = 'banana';
  // str[0] = 'b';
  // i = i + 1;
  // i += 1;
  // i++;


  //
  function mostFrequentCharacter(str) {
  
    let newObj = {};
    let max = 0;          
    let wordFreq  = '';   //키랑 비교해줘야함, 리턴할 것
    //공백이 나오면 건너뜀 
  
    for(let i = 0; i < str.length; i++){
      if(str[i] === ' '){
        continue;
      }
  
      if(!newObj[str[i]]){               
        newObj[str[i]] = 0;
      }
      newObj[str[i]] = newObj[str[i]] + 1;       //여기까지 20번과 동일
  
      if(newObj[str[i]] > max){
       max = newObj[str[i]];
       wordFreq = str[i];
     }
    }                                              
     return wordFreq;
  }
  
  
  //반복문 돌리다가 공백이 나와서 건너뜀
  //break -> 공백 나오면 반복문 종료
  //continue -> 공백 나오면 그 횟수를 건너뜀