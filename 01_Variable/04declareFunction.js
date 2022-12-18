//변수 선언식
function plusOne(input1) {
    input1 = input1 + 1;
    return input1;
  }
  //함수 표현식을 변수 minusOne에 할당
  let minusOne = function (input2) {
    input2 = input2 - 1;
    return input2;
  };

  //실습
  function multiplyBy2(input3){
    input3 = input3 * 2; 
    return input3;
  }

  let divideBy2 = function(input4){
    input4 = input4 / 2;
    return input4;
  }