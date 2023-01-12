//화살표 함수
//화살표를 사용하여 간단한 함수를 만들 수 있음 
const add = (x, y) => x + y;
add(5,7); //12

//화살표를 두번 사용해서 이렇게 표현할 수 있음
//이때 함수의 호출이 두번 발생
const adder = x => y => x + y ;
adder(5)(7); //12
adder(5) // y => x + y
typeof adder(5) // 'function'
//adder(5)의 리턴 값이 함수임
//adder는 함수를 리턴하는 함수


//클로저란?
//함수와 그 함수가 선언됐을 때의 렉시컬 환경과의 조합
//클로저는 리턴하는 함수에 의해 스코프가 구분되는데,
//핵심은 스코프를 이용해서 변수의 접근 범위를 닫는 것에 있다
//함수를 두번 리턴하는 함수는 클로저의 가장 큰 특징
const addermore = function (x) {        //x가 선언된 외부함수
    return function (y){                //y가 선언된 내부함수
        return x + y ;                  
    }
}
//외부함수는 y에 접근할 수 없지만 (바깥 스코프 > 안쪽 스코프)
//내부함수는 x에 접근할 수 있음 (안쪽 스코프 > 바깥 스코프)
//바깥 스코프에서 선언한 변수는 내부 함수가 사용할 수 있다

const addagain = function (x){
    return function (y){
        return x + y ;
    }
}
const add5 = addagain(5);
//이때 add5에는 addagain함수에 있는 x에 5를 인자로 넘긴 값을 계속 저장한 채로 있음
add5(7) //addagain(5)(7) === 12
add5(10) //addagain(5)(10) === 15

//html
const htmlMaker = tag => textContent => `<${tag}>${textContent}</${tag}>`
htmlMaker('div')('hi'); //(`<${'div'}>${'hi'}</${'div'}>`)

const divmaker = htmlMaker('div'); 
//이렇게 할당해두면 나중에 div영역을 만들때 언제든지 다시 사용할 수 있음


//예시문제 
let addnum = function(x) {
    let sum = function(y) {
      return x + y;
    }
    return sum;
  }
  
  let foo = addnum(1); 
  foo(3);
  let total = foo(6); //7
//let foo에 add(1)을 할당했을 때 x에 1의 값이 넘어간 채로 저장된다
//foo(6)의 값을 도출할 때 내부함수에는 x의 값이 없기때문에
//외부의 x를 참조해서 결과를 도출한다
//이때 외부함수라는 '함수의 환경'을 참조하기 때문에 클로저의 특징을 확인할 수 있음