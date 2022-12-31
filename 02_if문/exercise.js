//if문은 주어진 조건식의 참/거짓 여부에 따라 실행이 결정됨
//형식은 if(소괄호 안에 조건식){중괄호 안에 실행문};
if (true) {								
	console.log('hello world');      	//조건이 참이기 때문에 콘솔창에 hello world가 출력됨
}

//동치연산자 (===)
//두 피연산자가 동일하면 true, 그렇지 않으면 false를 반환
// !==는 반대로 동일하지 않을경우 true, 동일하면 false를 반환
let firstName = 'kim';
if (firstName === 'kim') {
	console.log('중복된 이름입니다.'); // '중복된 이름입니다.'
}

let fullName = 'parkhacker';
if (fullName !== 'kimcoding') {
	console.log('가입할 수 있는 이름입니다.'); // '가입할 수 있는 이름입니다.'
}

//비교연산자 (<, >, <=, >=)
//비교연산자는 두 연산자의 값의 크기를 비교
let num = 5;
if (num < 10) {
	num = num + 1;
}

//논리연산자(논리곱 &&, 논리합 ||)
//복수의 조건을 작성할 수 있게 해줌
// ||의 경우 여러 조건 중 하나만 참이여도 참으로 판단
// &&의 경우 여러 조건 중 하나라도 거짓이면 거짓으로 판단, 따라서 모든 조건이 참일 경우에만 참으로 판단한다
let age = 15;
if (age > 13 && age <= 19) {
	console.log('청소년입니다.'); // '청소년입니다.'
}

//부정연산자 (!)
//조건을 부정함 => 조건이 참이면 거짓, 거짓일 경우 참을 반환함
let snum = 11;
if (!(snum === 10)) {
	console.log('변수 num은 10이 아닙니다.'); // '변수 num은 10이 아닙니다.'
}

//if문의 경우 조건식이 참일때만 코드가 실행됨
//참일 경우와 거짓일 경우 각각 다른 코드를 실행시켜주기 위해 else를 사용함
//else는 독립적으로 사용할 수 없음
let tnum = 5;
if (tnum % 2 === 0) {
	console.log('짝수입니다.');
} else {
	console.log('홀수입니다.'); // '홀수입니다.'
}
/*
이때 조건을 더 추가하고 싶으면 else if문을 사용
if와 else는 두번 사용할 수 없지만 else if는 여러번 사용이 가능함
*/
let tname = 'kimcoding';
let course = 'seb be'

if(tname === 'kimcoding' && course === 'seb fe') {
	console.log('정보가 일치합니다.')
} else if (tname === 'kimcoding' && course !== 'seb fe') {
	console.log('코스를 확인하세요.') // '코스를 확인하세요.'
} else {
	console.log('일치하지 않는 정보입니다.')
}


//삼항 조건 연산자
//if문과 else문을 삼항 조건 연산자로 바꿔 쓸 수 있음
//조건식을 먼저 작성한 후 ? 를 입력한 후 뒤에 참 : 거짓일때 실행할 코드를 각각 입력함
let fnum = 5;
fnum % 2 === 0 ? console.log('짝수') : console.log('홀수'); // '홀수입니다.'