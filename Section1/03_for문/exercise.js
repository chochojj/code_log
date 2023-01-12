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



//1번 -- 수를 입력받아 0부터 해당 수까지의 합을 리턴
function sumTo(num) {
    let sum = 0 ;                         // sum 자리 0으로 설정해두기
    for(let i = 0 ; i <= num; i ++ ){     // i초기값 0, num수가 될때까지 반복시행
      sum = sum + i ;                     // sum에 결과값 다시 넣어주기
    }
    return sum;
}



//2번 -- 수를 입력받아 1부터 입력받은 수까지의 정수로 구성된 문자열을 리턴
function makeDigits(num) {
    let digits = '';                      // 초기에는 빈문자열
    for(let i = 1; i <= num; i++){        // 1부터 num까지 수 나열 
      digits = digits + `${i}`;           //String(i)으로 대신 사용 가능
    }
    return digits;
}



//3번 -- 수를 입력받아 1부터 입력받은 수까지의 정수로 구성된 분자열을 리턴 
//조건 > for문 사용 금지, 숫자간 구분은 '-'로 구분
function makeDigits2(num) {
    let dgn = '1';                  // 1앞에는 '-'이 없기 때문에 미리 1을 빼서 문자형 형식으로 넣어줌
    let i = 2;                      // while문은 초기식이 없기 때문에 변수로 먼저 지정해줌, 2부터 시작
    while(i <= num){
      dgn = dgn + `-${i}`;          // 2부터 -i의 형식으로 출력
      i++;
    }
    return dgn;
}
/*
<입출력 예시>
let output = makeDigits2(5);
console.log(output); // --> "1-2-3-4-5"
*/



//4번 -- 수를 입력받아 1부터 해당 수까지의 수 중에서 3의 배수로만 구성된 문자열을 리턴
function makeMultiplesOfDigit(num) {
    let multinum = '';                        //문자열을 리턴하기 때문에 문자형 빈자리 설정
    for(let i = 1; i <= num; i++){            //1부터 num이하까지 하나씩 증가하며 순회
      if(i%3 === 0){                          //3의 배수인지 확인
        multinum = multinum + String(i);      //참일 경우 빈문자열에 문자형 i를 넣어줌
      }
    }
    return multinum;
}
  


//5번 -- 문자열과 문자를 입력받아 문자열에서 문자가 등장하는 횟수를 리턴
function countCharacter(str, letter) {
    let cal = 0;                                    //숫자형을 리턴하기때문에 카운트할 횟수 초기값을 0으로 설정
      for(let i = 1; i <= str.length ; i ++){       //문자열 수만큼 횟수 시행 => 조건식이 (let i = 0; i < str.length ; i ++)일 경우가 더 바람직함
        if(str[i] === letter){                      //str[i]- 문자열에서 i번째 위치한 문자 = 매개변수 letter와 일치하는 것이 참일때
          cal++;                                    //횟수를 한번 더해줌
        }
      }
      return cal;
}



//6번 -- 숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중 가장 큰 수를 나타내는 숫자 리턴
function getMaxNumberFromString(str) {
    let maxNum = 0;                             //숫자값으로 초기설정
    for(let i = 0; i < str.length; i ++){       //1부터 문자길이만큼 반복시행
      if(parseInt(str[i])> maxNum){             //parseInt(str[i])- (i번째 문자에서 숫자값으로 변환)이 값이 maxNum보다 클 때 
        maxNum = parseInt(str[i]);              //초기값에 숫자문자열을 숫자형으로 반환한 값을 할당
      }
    }
    return String(maxNum);                      //문자형으로 리턴해야하므로 String()사용하여 리턴
}



//7번 -- 문자열과 두개의 문자(from, to)를 입력받아 문자열에 등장하는 특정 문자(from)가 다른 문자(to)로 바뀐 문자열을 리턴해야함
function replaceAll(str, from, to) {
    let chgword = '';                         //빈 문자열자리로 설정
    for(let i = 0; i < str.length; i++){  
      if(str[i] === from){                    //한자리씩 비교해서 from과 같은 문자일때
        chgword = chgword + to;               //빈문자열에 to 문자로 바꿔줌
      }else{
        chgword = chgword + str[i];           //그렇지 않을때 그냥 원래 str[i] 문자를 더해줌
      }
    }
    return chgword;
}
/*
<기억할 점>
원래 문자에서 문자를 하나씩 바꾸는게 아니라
빈 문자열에 새로 문자를 하나씩 쌓아주는 개념임 
*/



//8번 -- 수를 입력받아 약수의 합을 리턴
//약수 : 자기자신이 아닌 수 중에서 나누어 떨어지는 수가 존재하는 수
function getSumOfFactors(num) {
    let sum = 0;                        //초기값 0 설정
    for(let i = 1; i <= num; i ++){
      if(num%i === 0 ){                 //i로 나눴을때 나머지가 0인 수
        sum = sum + i ;                 //i의 수를 합해줌
      }
    }
    return sum;
}



//9번 -- 1이상의 자연수를 입력받아 소수인지 여부를 리턴
//소수 : 자기자신이 아닌 수 중에서 나누어 떨어지는 수가 존재하지 않는 수
function isPrime(num) {
    if(num ===1){                                    //1일때 판별
      return false;
    } 
    if(num === 2){                                   //2일때 판별, 짝수중 유일하게 소수가 될 수 있는 수
      return true;
    }
    if(num%2 === 0 ){                                //2로 나눴을때, 짝수일때 판별
      return false;
    }
  
    for(let i = 3; i <= Math.sqrt(num); i += 1){     // num의 제곱근 수까지 비교하여 나눠지는 것이 있는지 판별
      if(num % i === 0){
        return false;
      }
    }
    return true;
}



//10번 -- 2이상의 자연수를 입력받아 2부터 해당 수까지의 소수들을 리턴 (진화형)
function listPrimes(num) {
    let result = '2';
    for (let candi = 3; candi <= num; candi += 2) {             //3부터 num까지 홀수의 경우
      let isPrime = true;                                       //참으로 리턴
      let sqrt = parseInt(Math.sqrt(candi));                    //제곱근 candi를 변수로 지정 
      for (let divider = 3; divider <= sqrt; divider += 2) {    //홀수중에서도 검사함 3부터 제곱근 candi전까지 2식 건너뛰어 순회    
        if (candi % divider === 0) {                            //나눠 떨어지는 수가 있으면
          isPrime = false;                                      //거짓으로 판단
          break;                                                //실행을 멈춤, continue 사용해서 실행을 건너뛰어도 됨
        }
      }
  
      if (isPrime) {                                            //isPrime이 참인 경우에
        result = `${result}-${candi}`;                          //result변수에 계속 추가해줌
      }
    }
  
    return result;
  }
/*
<내가 완성한 코드>
function listPrimes(num) {
  let sum = '2';
  let check = 0;
  for(let i = 3; i <= num; i += 2){      //3부터 num까지 홀수만 
    for(let j = 3; j <= Math.sqrt(i); j +=2 ){
      if(i%j === 0){
        check = 1;
        break;
      }
    }
    if(check === 0 ){
      sum = sum + `-${i}`;
    }
    check = 0;
  }
  return sum;
}

*/



//11번 -- 문자열을 입력받아 해당 문자열에 등장하는 각 문자를 가지고 만들수 있는 길이 2의 문자열들을 리턴 (진화형)
function makePermutations(str) {
    let word = '';                               //빈 문자열 할당
    if(str.length === 0){                        //빈 문자열을 입력받았을 때 
      return word;
    }
    for(let i = 0; i < str.length; i++){        //처음부터 끝까지 문자길이만큼 순회하여
      for(let j = 0; j < str.length; j++){      //처음부터 끝까지 문자길이만큼 순회
        word = word + `${str[i]}${str[j]},`      //두 조건이 필요한 이유는 i와j를 인덱스 값으로 사용하기 위해서임 => ij, 출력
      }
    }
    return word.slice(0,word.length-1);          //맨끝에 찍힌 ,를 떼어주는 함수
}



//12번 -- 문자열을 입력받아 해당 문자열에 중복된 문자가 존재하는지 여부를 리턴 (진화형)
function hasRepeatedCharacter(str) {
    for(let first = 0; first < str.length; first++){                           //처음부터 문자길이만큼 순회
      for(let second = first + 1 ; second < str.length; second++){             //첫번째 인덱스와 두번째 인덱스의 요소를 비교해아 하기 때문에 두번째는 +1부터시작
        if(str[first] === str[second]){                                        //첫문자와 두번째문자가 같을 경우
          return true;
        }
      }
    }
    return false;
}
  

  
//13번 --  문자열을 입력받아 해당 문자열을 처음부터 한 글자씩 다시 작성
//조건 > 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴
function makeMarginalString(str) {
    let word = '';                              //빈 문자열을 할당
    for(let i = 0; i < str.length; i++){        //반복횟수를 결정 - 문자열의 길이만큼
      for(let j = 0; j <= i; j++ ){             //몇 개의 문자를 더해줄건지 결정
        word = word + str[j];
      }
    }
    return word;
  }
  
/*
<입출력 예시>
let output = makeMarginalString('abc');
console.log(output); // --> 'aababc'

output = makeMarginalString('flower');
console.log(output); // --> 'fflfloflowfloweflower'

output = makeMarginalString('');
console.log(output); // --> ''

i= 0 일 때, j = 0 => str[0] 추가
i= 1 일 때, j = 0과 1 => str[0]과 str[1] 추가
i= 2 일 때, j = 0과 1과 2 => str[0]과 str[1] 과 str[2] 추가
*/