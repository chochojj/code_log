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
