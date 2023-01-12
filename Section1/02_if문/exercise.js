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



//1번 -- 나이를 입력받아 18세 이상인지 리턴
function isOldEnoughToDrink(age) {
	if(age >= 18){      //조건)18세 이상이라면
	  return true;
	}else{              //그렇지 않을경우
	  return false;
	}
  }
  


//2번 -- 수를 입력받아 3과 5로 나눈 뒤 나머지 값에 따라 알맞은 메세지 리턴
function fizzBuzz(num) {
	if (num%3 === 0 && num%5 === 0) {    	//3과 5의 공배수일 경우 
		return 'FizzBuzz'		
	}else if (num%3 === 0){               	//3의 배수일 경우
	   return 'Fizz'
	}else if (num%5 === 0){               	//5의 배수일 경우
	   return 'Buzz'	
	}else {
	   return 'No FizzBuzz'         		//아무것도 아닐 경우
	}
  }



//3번 -- 두 개의 수와 기호를 입력받아 알맞게 계산한 값을 리턴
function miniCalculator(num1, num2, operator) {
	if(operator === '+'){           // '+' 를 입력받을 경우
	  return num1 + num2 ;
	}else if(operator === '-'){     // '-' 를 입력받을 경우
	  return num1 - num2 ;
	}else if(operator === '*'){     // '*' 를 입력받을 경우
	  return num1 * num2 ;
	}else if(operator === '/'){     // '/'를 입력받을 경우
	  return num1 / num2 ;
	}
}



//4번 -- 점수를 입력받아 점수에 해당하는 등급을 리턴
function convertScoreToGrade(score) {
	if(score <= 100 && score >= 90){         //100-90점 사이
	  return 'A'
	}else if(score <= 89 && score >= 80){    // 90점 미만 80점 이상
	  return 'B'
	}else if(score <= 79 && score >= 70){    // 80점 미만 70정 이상
	  return 'C'
	}else if(score <= 69 && score >= 60){    // 70점 미만 60점 이상
	  return 'D'
	}else if(score <= 59 && score >= 0){    // 60점 미만
	  return 'F'
	}else{
	  return 'INVALID SCORE'        //그 외 점수
	}
  }

  

//5번 -- 이름과 나이를 입력받아 나이별로 다른 메세지를 리턴
function checkAge(name, age) {
    if (age >= 21){
      return `Welcome, ${name}!` //21살 이상
    }else {
      return `Go home, ${name}!` //20살 이하
    }
}



//6번 -- 점수를 입력받아 점수에 해당하는 등급을 리턴 (진화형)
//추가된 조건 > 끝점수가 8이상이면 등급에 +를, 2이하이면 -를 달아줘야함
function convertScoreToGradeWithPlusAndMinus(score) {
	let grade, plusMinus = '';
	if(score === 100 ){
	  return 'A+'
	}else if(score < 100 && score >= 90){         //100-90점 사이
	  grade = 'A';
	}else if(score <= 89 && score >= 80){    // 90점 미만 80점 이상
	  grade = 'B';
	}else if(score <= 79 && score >= 70){    // 80점 미만 70정 이상
	  grade = 'C';
	}else if(score <= 69 && score >= 60){    // 70점 미만 60점 이상
	  grade = 'D';
	}else if(score <= 59 && score >= 0){    // 60점 미만
	  return 'F';
	}else{
	  return 'INVALID SCORE'        //그 외 점수
	}
  
									//새로운 조건
	if(score%10 >= 8){              //끝자리가 8 이상
	  plusMinus = '+';
	}else if(score%10 <= 3){        //끝자리가 3이하
	  plusMinus = '-';
	}
  
  
	return grade + plusMinus ;		//두 조건을 거친 변수를 합해줌
}



//7번 -- 시, 분, 초를 입력받아 1초를 더한 결과값을 특정 형태의 메세지로 리턴 (진화형)
function addOneSecond(hour, minute, second) {
	if(second === 59){            			//초의 경우 59초면
	  minute = minute + 1;					//분에서 +1을 해주고
	  second = 0;							//초는 0이 되게 한다
	}else{
	  second = second + 1;					//그렇지 않은 경우에 그냥 초에 +1 해주기
	}
  
	if(minute === 60){						//분의 경우 60인 경우에
	  hour = hour + 1;						//시에 +1을 해주고
	  minute = 0;							//분은 0이 된다
	}
	if(hour === 24){						//시간이 24인 경우
	  hour = 0;								//0이 됨
	}
  
	return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`   //백틱을 사용한 템플릿 리터럴 이용 
  }
  


//8번 -- 차례대로 문자열 3개를 입력받아, 가장 짧은 문자열을 리턴 (진화형)
function findShortestOfThreeWords(word1, word2, word3) {
	let wordleg1 = word1.length 							// 문자열의 길이를 알기 위해 선언
	let wordleg2 = word2.length
	let wordleg3 = word3.length
  
	if(Math.min(wordleg1,wordleg2,wordleg3) === wordleg1){	 // 가장 짧은 것이 뭔지 알기 위해 math.min 씀
	  return word1;
	}
	  else if(Math.min(wordleg1,wordleg2,wordleg3) === wordleg2){
	  return word2;
	}
	  else if(Math.min(wordleg1,wordleg2,wordleg3) === wordleg3){
	  return word3;
	}
}
/*
<math.min을 사용하지 않는 경우>
function findShortestOfThreeWords(word1, word2, word3) {
  let shortestWord = word1;

  // 첫 번 째 글자가 2번째 글자보다 길 때
  if (word1.length > word2.length) {
    shortestWord = word2;
    // word 2 랑 word 3을 비교
    if (word2.length > word3.length) {
      shortestWord = word3;
    }
  } else {
    // word1 과 word3 을 비교
    if (word1.length > word3.length) {
      shortestWord = word3;
    }
  }
  return shortestWord;
}
*/



//9번 -- 사용자의 이름과 미접속 시간(분)을 입력받아 조건별로 다른 메세지를 리턴 (진화형)
function makeLastSeenMsg(name, period) {
	if(period < 60 ){														//60분 미만의 경우
	  return `${name}: ${period}분 전에 접속함`
	}else if (period < 1440 ) {												//1440 분 미만의 경우
	  return `${name}: ${Math.floor(period/60)}시간 전에 접속함`			 //60으로 나눈다음 버림하여 시간으로 환산한 값을 출력	
	} else if (period > 1440) {												//1440 분 이상의 경우
	  return `${name}: ${Math.floor(period / 1440)}일 전에 접속함`			 //1440으로 나눈다음 버림하여 날일로 환산한 값을 출력
	}
}
  