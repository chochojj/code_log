/* for문 만드는 법 */
let result = 0;

//for(초기값; 조건식; 증감식){ 실행코드 }
for (let num = 1; num <= 5; num++) {
  result = result + num;
}
console.log(result); // 15


// 실습) 0부터 10까지의 숫자를 출력하는 코드를 반복문으로 작성하세요.
for (let i = 0; i <= 10; i++) {
  console.log(i); // 출력 0 1 2 3 4 5 6 7 8 9 10
}




/* 문자열 인덱스 */
let str = 'codestates';
console.log(str[0]); // 'c'      인덱스는 0으로 시작
console.log(str[4]); // 's'
console.log(str.length); // 10   .length로 길이 조회

//문자열을 알수 없을때 이렇게 사용가능
for (let i = 0; i <= str.length - 1; i++) {   //i < str.length; 로도 변환사용 가능
    console.log(str[i]);
}




/* 반복문과 조건문 */
//반복문안에 조건문이, 조건문 안에 반복문이 들어갈 수 있음

// 실습) 1부터 10까지의 숫자 중 홀수만 출력하도록 코드를 작성하세요.
for (let i = 1; i <= 10; i++) {
	// 홀수만 출력하는 조건문
	if (i % 2 === 1) {
		console.log(i);
	}
}




/* 반복문 중첩 */ 
//반복문 중첩시 while문 보다 for문 사용
for (let i = 1; i <= 6; i++) {
	for (let j = 1; j <= 6; j++) {
		console.log(`첫번째 주사위는 ${i}, 두번째 주사위는 ${j}입니다.`);
	}
}

// 실습) 구구단
for (let i = 2; i <= 9; i++) {
    console.log(`${i}단`);
    for (let j = 1; j <= 9; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  } 




/* while문 */
//조건식만 입력한 후 조건식이 true인 경우 코드를 반복 실행
let num = 0;

while (num < 3) {
	console.log(num); // 0 1 2
	num++
}

//do...while문
do {
	console.log('코드블록 내부의 코드는 최소 한 번은 실행됩니다.') 
	// while문이 평가되는동안 코드블록 내부의 코드는 최소 한 번 실행
} while (false)

//while문의 경우 반복 횟수가 명확하지 않을때 주로 사용