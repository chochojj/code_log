//1번
let x1 = 30;
function get () {
  return x1;
}

let result1 = get(20);  //30
//함수 get은 x를 반환하는데, 이때 x는 전역 스코프의 x 
//get 함수 스코프 내에는 x라는 변수가 별도로 선언되어 있지 않음
//따라서 변수 result에는 30이 할당



//2번
let x2 = 30;
function get (x2) {
  return x2;
}

let result2 = get(20);  //20
//1번 문제와 달리, get함수에 매개변수 x가 선언되어 있음
//즉 get함수가 반환하는 x는 전역 스코프의 x가 아니라, get함수 스코프에 선언된 별도의 매개변수 x



//3번
let x3 = 30;

function get () { return x3; }
function set (value) { let x3 = value; }

set(10);
let result3 = get(20);  //30
//get함수는 전역에 선언된 x를 반환
//set함수는 value라는 매개변수를 통해 받은 값을 변수 x에 할당 
//하지만 get함수의 x !== set함수의 x  
//get의 x는 전역에 있는 변수 x를 가리키지만
//set의 x는 let 키워드를 통해 set 함수 스코프 내에서 별도로 선언된 변수
//따라서 set(10)을 실행해도 전역의 x값은 여전히 30이고, set 함수 스코프 내의 x값만 10으로 변경됨



//4번
let x4 = 30;

function get () { return x4; }
function set (value) { x4 = value; }

set(10);
let result4 = get(20); //10
//set함수는 매개변수 value를 통해 전달받은 값을 전역 변수 x에 할당
//즉 set(10)이 실행되면 전역의 x에 할당된 값이 30에서 10으로 변경됨
//get(20)의 인자 20은 get 함수 내부에서 사용되지 않아, result의 값에 아무런 영향을 주지 않음



//5번
let x5 = 30;

function get (x5) { return x5; }
function set (value) { x = value; }

set(10);
let result5 = get(20); //20
//get함수는 매개변수 x를 통해 전달된 값을 반환하므로, get(20)은 20을 반환
//set(10)은 무슨 역할을 할까요? set(10)이 실행되면 전역변수 x의 값이 10으로 변경됨



//6번
let x6 = 10;

function add (y) {
  return x6 + y;
}

function strangeAdd (x) {
  return add(x) + add(x);
}

let result6 = strangeAdd(5); //30
//함수 strangeAdd는 매개변수 x를 통해 전달받은 값을 다시 add 함수에 전달하는 구조
//add 함수는 매개변수 y를 통해 받은 값을 전역에 선언된 x와 더하여 반환
//strangeAdd(5)를 실행하면 add(5) + add(5)가 반환되고, add(5)는 15를 반환




//7번
let x7 = 10;

function outer () {
  let x7 = 20;
  function inner () {
    return x7;
  }

  return inner();
}

let result7 = outer();  //20
//outer 함수 스코프에는 20을 값으로 하는 변수 x와 함수 inner가 선언되어 있음
//outer는 inner 함수를 실행시킨 값을 반환
//inner함수는 x를 반환함
//하지만 inner 함수 스코프 내에 x라는 변수가 없기 때문에, x는 바로 한 단계 위인 outer 함수 스코프의 x가 됨
//!위 코드에서처럼 스코프가 위계적으로 겹칠 경우 안쪽 스코프부터 바깥 스코프로, 순차적인 스코프 체이닝이 일어납니다.



//8번  -- 헷갈림
let x8 = 10;

function outer () {
  let x8 = 20;              //let으로 함수안에서 재할당해줌 => 전역변수에 영향을 주지않음

  function inner () {
    x8 = x8 + 10;
    return x8;
  }
  inner();
}

outer();
let result8 = x8;  // 10
//outer 함수를 실행하면, outer 함수 스코프 내에서 inner 함수가 호출
//inner는 변수 x의 값에 10을 더하는 함수이고 이때, inner에 의해 값이 변경되는 x는 inner의 바로 한 단계 위 스코프인 outer에 속한 x
//즉 inner가 실행되면서, outer함수 스코프의 변수 x값이 30으로 바뀝니다.
//하지만 변수 result에 할당된 값은 전역 스코프의 x이므로, outer함수가 호출되어도 아무런 영향을 받지 않음



//9번
let x9 = 10;

function outer () {
  x9 = 20;

  function inner () {
    let x9
    x9 = x9 + 20;
    return x9;
  }
  inner();
}

outer();
let result9 = x9;  //20
//outer 함수는 전역 변수 x에 20을 재할당하고, 따라서 result의 값은 20이 됨
//outer 내부에서 inner 함수가 호출되고 있긴 하지만, inner 함수는 바깥 스코프에 아무런 영향을 미치지 않음
//inner 함수는 무슨 역할을 하고 있을까? > 매개변수가 없어서 40이 되지않을까 생각했지만 실행을 돌려보면 inner를 찾을 수 없다고 뜸



//10번
let x10 = 10;

function outer () {
  x10 = 20;
  function inner () {
    x10 = x10 + 20;
  }
  inner();
}

outer();
let result10 = x10;  //40
//outer, inner 함수 모두 전역에 선언된 x값을 변경하는 함수
//outer가 실행되며 전역의 x가 20이 되고, 이어서 outer 내부에서 inner가 호출되면서 전역의 x값에 또다시 20이 더해짐