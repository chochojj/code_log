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



//11번 -- 수와 객체를 입력받아 입력받은 수보다 큰 수를 갖는 속성을 모두 제거
function removeNumbersLargerThan(num, obj) {
    for(let key in obj){                                        //객체안의 키를 모두 순회
      if(typeof(obj[key]) === 'number' && obj[key] > num ){     //값의 속성이 숫자이고, num보다 클때
        delete obj[key];                                        //속성을 삭제
      }                                                         
    }
  }



//12번 -- 객체를 입력받아 속성의 개수를 리턴
function countNumberOfKeys(obj) {
    let count = 0;                                              //초기값으로 숫자 0을 변수 count에 할당
    for(let key in obj){                                        //객체의 키를 모두 순회
      count++;                                                  //한번 순회할 때마다 count에 1을 더해줌
    }     
    return count;                                               //count리턴 - 순회한 횟수
  }
  


//13번 -- 객체를 입력받아 키,값 쌍을 표현하는 문자열 리턴
//조건) 각 문자열 끝에는 줄바꿈 문자가 포함 될것  - \n 사용
function printObject(obj) {
    let result = '';                                            //result변수에 빈 문자열 할당;
    for(let key in obj){                                        //객체의 키를 모두 순회
      result += `${key}: ${obj[key]}\n`;                        //빈 문자열에 키값 쌍을 더해줌 => 이때, 템플릿 리터럴 사용시 `키: 값` 띄어쓰기 조심
    }
    return result;                                              //result변수에 채워진 문자열 리턴
  }
  

  
//14번 -- 객체, 키, 수를 입력받아 주어진 키에 해당하는 값이 배열인 경우, 수가 가리키는 인덱스에 해당하는 요소 리턴
function getElementOfArrayProperty(obj, key, index) {           //매개변수는 객체, 키, 인덱스
    if(Array.isArray(obj[key]) === true){                       //만약 객체의 키에 해당하는 값이 배열이면, (배열인지 확인)
      return obj[key][index];                                   //객체의 키의 배열인 값의 인덱스 번째를 조회해서 뽑아냄 
    }
  }
/* 
객체[키]  === 배열
배열의 인덱스번째 요소를 조회하려면
배열[인덱스]
따라서 배열에서 값이 배열인 요소의 인덱스번째 요소를 조회하려면
객체[키][인덱스] 형식으로 조회할 수 있음
*/



//15번 -- 배열과 객체를 입력받아 배열의 각요소들을 객체의 키로 했을 때 그 값을 추출하여 만든 새로운 객체를 리턴
function select(arr, obj) {
    let blankObj = {};                  //빈 배열칸을 변수 할당
    for(let i of arr){                  //배열의 각 요소를 순회하면서     
      for(let key in obj){              //객체의 키와 비교
        if(i === key){                  //배열의 요소과 키가 같으면
          blankObj[i] = obj[key];       //속성 값을 추가하고 있음
                                        //blankObj[a] = obj[a] => obj[a] === 1;
                                        //blankObj = { a : 1};
                                        //user['category'] = '직장인';     => 배열에 키:값 쌍을 넣어주는 예시
                                        //user =  { category : 직장인 };
        }
      }
    }
    return blankObj;
  }
/*
입출력 예시
const arr = ['a', 'c', 'e'];
const obj = { a: 1, b: 2, c: 3, d: 4 };

let output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }

설명)
for문으로 배열의 요소를 순회하였을 때 
const arr = ['a', 'c', 'e'];  //  i= a 혹은 c 혹은 e => 즉, 배열의 요소 
const obj = { a: 1, b: 2, c: 3, d: 4 };  // key는 obj의 속성 값 => a, b, c, d
배열의 요소가 객체의 키로 있으면, 그 키와 값을 새로운 객체에 넣는다
배열의 요소와 객체의 키를 각각 비교 -> 문자열 가지고 두 문자열 중복된거 확인 => 이중반복문
*/



//16번 -- 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소를 리턴
function getLastElementOfProperty(obj, property) {
    let objProp = obj[property];                      //객체의 값을 objProp변수에 할당 
    if(Array.isArray(objProp) === true){              //값이 배열인지 확인하고, 배열이면
      return objProp[objProp.length-1];               //배열의 맨마지막 인덱스 요소를 리턴
    }
  }
//objProp[objProp.length-1] 대신 objProp.pop() 을 리턴해도 됨    



//17번 -- 배열과 수를 입력받아 수가 가리키는 인덱스에 해당하는 객체의 'name'속성 값을 리턴
//arr는 객체를 배열로 가진 변수 => [{ name: 'Jim' }, { name: 'Tim' }, { name: 'Pooh' }]
function getValueOfNthElement(arr, num) {
    if(arr.length === 0){                             //매개변수 arr가 빈배열이면
      return 'no name';                               //'이름 없음'을 리턴
    }
    if(arr.length <= num ){                           //num가 arr의 인덱스(arr.length -1)를 벗어나면
      return arr[arr.length-1]['name'];               //'name'맨 마지막 요소(객체)의 키가 'name'인 값을 리턴
    }else {                                           //위의 두 조건을 충족하지 않는 경우
      return arr[num]['name'];                        //num번째 인덱스의 요소의 키가 'name'인 값을 리턴
    }
  }
  /*
  let arr = [{ name: 'Kelly' }, { name: 'Anna' }];
  arr[0] === { name : 'Kelly' }  === { 키 : 값 }
  객체이름['키']
  arr[0]['name']
  */



//18번  -- 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 마지막 요소가 제거된 새로운 배열을 리턴
function getAllButLastElementOfProperty(obj, key) {
    let objProp =obj[key];                                                //key 키의 값을 변수에 할당
    if(Array.isArray(objProp) === true &&  objProp.length !== 0){         //값이 배열인지 확인하고, 빈 배열이 아닐 경우에
        let newArr = objProp.slice(0,objProp.length-1);                   //마지막 요소를 자른 배열을 newArr에 할당
        return newArr;                                                    //newArr 리턴
    }else{                                                                //빈 배열일 경우
      return [];                                                          //빈 배열 리턴
    }
  }
//Array.isArray(objProp)에 ()꼭 확인



//19번 -- 두 개의 객체를 입력받아 두번째 객체의 속성들을 첫번째 객체에 추가
// 못풀었음 와우
function extend(obj1, obj2) {
    for(let key in obj2){        //객체2의 키를 순회해서 => 키(속성)을 검사할때 for in 사용 
      if (!(key in obj1)){       //객체2의 키가 객체1에 없을 때
        obj1[key] = obj2[key];   //객체1에 키를 만들어 객체2의 값을 넣어줌
      }
    }
  }
/* 
중복되는지 여부를 확인해서 합쳐줌
두번째 객체를 반복 -> 프로퍼티 모두 obj1에 추가
조건: 첫번째에 이미 있으면 제외
<입출력 예시>

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  b: 4,
  c: 3,
};

extend(obj1, obj2);
console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}

< 다른 방법 >
for (let prop in obj2){             //객체2의 키를 순회해서
  if(prop in obj1){                 //키가 객체1에 있으면
      continue;                     //건너뛰고 => continue
  }else{
      obj1[prop] = obj2[prop];      //없으면 객체1에 키를 만들어 객체2의 값을 넣어줌
  }
}

<for in 구문 사용법>
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
*/

  
  
//20번 -- 문자열을 입력받아 문자열을 구성하는 각 문자를 키로 갖는 객체를 리턴
//각 키의 값은 해당 문자가 문자열에서 등장하는 횟수를 의미하는 number타입의 값이여야 함
function countAllCharacters(str) {
  let newObj = {};                                        //newObj에 빈 객체를 할당

  for(let i = 0; i < str.length; i++){                    //문자열의 처음부터 끝까지 순회해서
    if(!newObj[str[i]]){                                  //인덱스 i번째 키의 값이 newObj 배열에 없으면
      newObj[str[i]] = 0;                                 //newObj에 i번째 키를 만들고 값으로 0을 넣어줌 => "obj = {str[i]: 0};"
      //이 조건이 마쳤을 때 arr가 'banana'로 가정했다면
      //newObj의 예상 출력값은 {b:0, a:0, n:0}이 됨
    }
    newObj[str[i]]++;                                     //문자열을 순회하며 newObj의 str[i]키의 값을 1 증가시킴
  }
  return newObj;
}
/*
<입출력 예시>
let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}

<참조>
str = 'banana';
str[0] = 'b';
i = i + 1;
i += 1;
i++;
*/



//21번 -- 문자열을 입력받아 가장 많
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