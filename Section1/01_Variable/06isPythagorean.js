//직감삼각형 판별하기, 값은 boolean으로 받기
//조건 제곱 구하는 3가지 방법 사용
function isPythagorean(side1, side2, side3) {
    let line1 = side1 * side1 ;
    let line2 = side2 ** 2 ; //세제곱 하고싶으면 **3 
    let line3 = Math.pow(side3,2); //side3이 밑, 2가 지수가 됨

    return (line1 + line2) === line3 || (line1 + line3) === line2 || (line2 + line3) === line1 ; //꼭 엄격한 등치연산자 사용
}

/*
let pow1 = side1*side1
  let pow2 = side2**2
  let pow3 = Math.pow(side3,2)

  let type_A = pow1 === pow2 + pow3
  let type_B = pow2 === pow1 + pow3
  let type_C = pow3 === pow1 + pow2

  return type_A || type_B || type_C ? true:false;

//페어님이랑 짠 코드는 ?사용함
*/