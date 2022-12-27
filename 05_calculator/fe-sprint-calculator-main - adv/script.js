const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
//const calculatedResultAdvanced = document.querySelector('.calculator__display--for-advanced'); //calculator__display--for-advanced의 정보를 불러옴


//testing area
// let testNum = firstOperend.textContent;
// console.log(testNum);

  //숫자 변수 선언하기
  let currentFirstNum = '';
  let currentSecondNum = '';
  //연산자 변수 선언하기
  let currentOperator = '';


function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.

  //parseInt(string)

  //operator가 + 인 경우 덧셈한걸 result에 넣기
  //operator가 - 인 경우 뺀 걸 result에 넣기
  //operator가 * 인 경우 곱셈한걸 result에 넣기
  //operator가 / 인 경우 나누기한걸 result에 넣기

  // console.log('operator: ' + operator);
  let _n1 = parseFloat(n1);
  let _n2 = parseFloat(n2);

  switch(operator){
    case '+' :
      result = _n1 + _n2 ;
      break;

    case '-':
      result = _n1 - _n2 ;
      break;

    case '*':
      result = _n1 * _n2 ;
      break;

    case '/':
      result = _n1 / _n2 ;
      break;

      default :
      console.log('연산자를 확인해주세요');
  }

  return String(result);
}

buttons.addEventListener('click', function (event) {
  //버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

//처음 숫자를 누르면 .calculator__operend--left에 숫자 할당 표시
// 버튼 엘리멘트 찾아서 firstOperend에 할당
// const firstOperend = document.querySelector('calculator__operend--left');
// 클래스가 number인지 확인



  if (target.matches('button')) {
    // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
    // 클릭된 HTML 엘리먼트가 button이면



    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.

      // console.log('숫자 ' + buttonContent + ' 버튼');

     //  firstOperend의 textContent를 바꿔줌
    //  firstOperend.textContent = buttonContent;

        // 첫번째 입력된 숫자 0 인지 확인
        // 0인 경우, 첫번째 숫자칸에 버튼으로 눌린 숫자 넣기
        // 0이 아닌경우, 두번째 숫자칸에 버튼으로 눌린 숫자 넣기

        if(firstOperend.textContent ==='0'){
          firstOperend.textContent = buttonContent;
          //클릭된 문자열 숫자를 정수형으로 변환후 첫번째 숫자변수에 할당
          currentFirstNum = buttonContent;
          // console.log(currentFirstNum);
        }else{
          secondOperend.textContent = buttonContent;
          currentSecondNum = buttonContent;
          // console.log(currentSecondNum);
        }



    }

    if (action === 'operator') {
      // console.log('연산자 ' + buttonContent + ' 버튼');

      //연산자 변수에 클릭된 연산자 할당하기
      currentOperator = buttonContent;
      // console.log(currentOperator);
      operator.textContent = buttonContent;
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }

    if (action === 'clear') {
      // console.log('초기화 버튼');

      //현재 첫번째 숫자, 두번째 숫자, 연산자 변수 초기화하기
      //모든 출력칸을 초기화하기
      currentFirstNum = '';
      currentSecondNum = '';
      currentOperator = '';
      firstOperend.textContent = '0';
      secondOperend.textContent = '0';
      calculatedResult.textContent = '0';
      operator.textContent = '+';

    }

    if (action === 'calculate') {
      // console.log('계산 버튼');

      //마지막 숫자 칸에 연산된 숫자를 넣기
      calculatedResult.textContent = calculate(currentFirstNum, currentOperator, currentSecondNum);
    }
  }




});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

//현재 숫자 초기화
firstNum = '0';

// console.log(firstNum);
// console.log(!previousKey);

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {
      //출력칸에 클릭한 숫자를 넣어줌
      // console.log('display content is: ' + display.textContent);
      //출력칸의 숫자가 0일 경우, 클릭된 숫자로 바꿈
      //출력칸의 숫자가 0이 아닐경우, 클릭된 숫자를 출력칸에 이어붙임
      if(display.textContent === '0' && previousKey !== 'operator'){
        display.textContent = buttonContent;
        //첫번째 클릭된 숫자를 변수에 할당
        firstNum = buttonContent;
        previousKey = 'number';
        console.log("first display number: " + firstNum);
      }else{

        //앞의 클린된 버튼이 연산자가 아닌 경우, 클릭한 숫자를 출력칸과 첫번째 숫자 변수에 이어붙임
        //앞의 클린된 버튼이 연산자인 경우, 클릭된 숫자를 출력칸과 두번째 숫자 변수에 이어붙임

        if(previousKey === 'operator'){

          firstNum = buttonContent;
          display.textContent = firstNum;
          previousKey = 'number';
          console.log('두번째 숫자: ' + firstNum);

          //00000으로 안 되게끔 해야함

        }else{
              firstNum += buttonContent;
              display.textContent = firstNum;
              console.log(firstNum);

        }
        

      }


    }
    if (action === 'operator') {
      //연산자를 클릭하면 연산자를 연산자 변수에 할당
      operatorForAdvanced = buttonContent;

      console.log("operator: " + operatorForAdvanced);

      //전에 클릭한 버튼이 연산자가 아닌경우에만 전 숫자 변수에 현재 숫자를 저장하고 현재 숫자를 0으로 초기화
      if(previousKey !== 'operator'){
        //previousNum 변수안에 전 숫자를 저장
        previousNum = firstNum;
        firstNum = '0';   //숫자 초기화
        //전연산자 변수를 operator로 할당
        previousKey = 'operator';
      }

    }
    if (action === 'decimal') {

      //현재 숫자 변수가 0인 경우, 문자형 0 을 decimal앞에 붙혀줌

      //.을 입력하면 현재 숫자 변수에 .추가, 출력칸에도 .추가
      //전에 눌렀던 버튼이 decimal이 아닌 경우에만 .추가
      // later >> decimal이 현재 숫자에 이미 입력된 경우
      if(previousKey !== 'decimal' || !previousKey){
        firstNum += '.';

        //출력칸 바꿔주기
        display.textContent = firstNum;

      //전에 눌렀던 버튼 변수를 decimal이라고 바꿔줌
      previousKey = 'decimal';
      }



    }
    if (action === 'clear') {
      //첫번째 값 초기화
      //연산자 초기화
      //두번째 값 초기화
      //출력칸 초기화
      //previousKey 초기화

      previousNum = '';
      operatorForAdvanced = '';
      firstNum = '';
      display.textContent = '0';
      previousKey = 'clear';
    }
    if (action === 'calculate') {
      //출력칸에 calculate 함수 결과값을 넣어주기

      //전에 클릭한 버튼이 연산자인 경우 현재숫자 변수에 전 숫자를 저장
      if(previousKey === 'operator'){
        firstNum = previousNum;
      }


      //연산자 변수에 값이 있을때만 결과값으로 바꿔주기
      if(operatorForAdvanced){
        previousNum = calculate(previousNum, operatorForAdvanced, firstNum);
        display.textContent = previousNum;
        console.log("result: " + previousNum);

      }
      previousKey = 'calculate';


      //전에 눌렀던 버튼이 enter인 경우, 전에 했던 연산을 반복
      // if(previousKey === 'calculate'){
      //   //이전 숫자 변
      // }else{

      //   //이전 숫자 변수에 결과값을 저장
      //   previousNum = calculate(previousNum, operatorForAdvanced, firstNum);
      //   display.textContent = previousNum;

      //   previousKey = 'calculate';
      //   // console.log("result: " + calculate(previousNum, operatorForAdvanced, firstNum));
      // }



    }
  }

});

