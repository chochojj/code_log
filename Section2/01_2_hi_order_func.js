//15번 -- 수를 요소로 갖는 배열을 입력받아 각 요소를 2배 곱한 새로운 배열을 리턴
function getDoubledElements(arr) {
    return arr.map(function(el){
      return el * 2
    })
  }



  //16번 -- 문자열을 요소로 갖는 배열을 입력받아 각 요소의 길이를 요소로 갖는 새로운 배열을 리턴
  function getLengthOfElements(arr) {
    return arr.map(function(el){
      return el.length;
    })
}

  

//17번 -- 수를 요소로 갖는 배열을 입력받아 각 요소가 2의 배수인지에 대한 정보를 요소로 갖는 새로운 배열을 리턴
function checkEvenOrNot(arr) {
    return arr.map(function(el){
      if(el % 2 !== 0 || el === 0){
        return 'no'
        
      }else{
        return 'ok'
      }
    })
}



//18번 -- 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 각 객체의 'name' 속성을 요소로 갖는 배열을 리턴
function getOnlyNames(arr) {
    return arr.map(function(el){
      return el['name']
    })
}
  
//19번 -- 개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 이름 전체를 요소로 갖는 배열을 리턴
function getFullNames(arr) {
    return arr.map(function(el){
      return `${el.firstName} ${el.lastName}`
    })
  }
  


//20번 -- 객체와 키를 입력받아 키에 해당하는 값이 배열인 경우, 배열의 각 요소를 제곱한 새로운 배열을 리턴  ! 다시
function square(number) {
  return number * number;
}

function getSquaredElementsAtProperty(obj, property) {
  //객체의 속성이 배열인 것을 가져옴
  let arr = obj[property];
  let result = [];
  if(Array.isArray(arr) === false){
     return result;
  }
  return arr.map(square);
}



//21번 --개인 정보를 담고 있는 객체를 요소로 갖는 배열을 입력받아 18세 이상인 사람의 이름을 요소로 갖는 배열을 리턴
function getOnlyAllowedToDrink(arr) {
    let overage = arr.filter(function(el){
      return el.age >= 18
    })
    return overage.map(function(el){
      return el.name;
    })
}
  


//22번 -- 영화 정보가 담긴 객체를 요소로 갖는 배열과 연도를 입력받아 해당 연도 이전의 영화를 요소로 갖는 배열을 리턴
function classicMovies(arr, year) {
    let before = arr.filter(function(el){
      return el.year < year;
    })
    return before.map(function(el){
      return `${el.title} by ${el.director}`
    })
  }



//23번 -- number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 합을 리턴  => reduce 사용
function computeSumOfAllElements(arr) {
    if(arr.length === 0){
      return 0
    }
    return arr.reduce((first, second)=>{
      const sum = first + second
      return sum
    })
  }
  



//24번 -- number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 곱을 리턴
function computeProductOfAllElements(arr) {
    if(arr.length === 0){
      return 1
    }
    return arr.reduce((first, second)=>{
      const sum = first * second
      return sum
    })
  }
  



//25번 -- number 타입을 요소로 갖는 배열을 입력받아 배열의 모든 요소의 평균을 리턴
function computeAverageOfNumbers(arr) {
    if(arr.length === 0){
      return 0
    }
    return arr.reduce(function(fir, sec){
      let sum = fir + sec
      return sum
    })/ arr.length                                  // 나누는 위치 확인!
  }
  



//26번 -- 객체를 요소로 갖는 배열과 문자열을 입력받아 각 요소의 'animal' 속성값이 문자열과 일치할 경우, 해당 요소의 'score' 속성값을 모두 더한 값을 리턴
function calculateScore(records, value) {
    let correct = records.filter(function(el){
      return el.animal === value;
    })
    let corScore = correct.map(function(el){
      return el.score;
    })   
    const initialValue = 0;                                                 //배열까지는 잘 걸러짐
    return corScore.reduce((fir,sec) => fir + sec, 0                        //arr.reduce mdn 다시 읽기 
    )                                                                       //초기값 위치 보기
}
  


//27번 -- 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열을 리턴
function getLongestElement(arr) {
    if(arr.length === 0){
      return '';
    }
    return arr.reduce(function(fir, sec){
      let max = fir;
      if(fir.length < sec.length){
        max = sec
      }
      return max 
    })    
  }
  



//28번 -- 문자열을 요소로 갖는 배열을 입력받아 배열에서 가장 긴 문자열의 길이를 리턴
function getLengthOfLongestElement(arr) {
    if(arr.length === 0){
      return 0;
    }
    return arr.reduce(function(fir, sec){
      if(fir.length >= sec.length){
        return fir                                              //리턴 꼭 해주기
      }else{
        return sec
      }
    }).length
}
  


//29번 -- 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 배열들의 요소를 모두 담고 있는 단일 배열을 리턴
function joinArrayOfArrays(arr) {
    return arr.reduce(function(fir, sec){                   //하나씩 잘라 붙히기
      return fir.concat(sec)
    })
  }  



//30번 -- 배열을 입력받아 배열에서 가장 짧은 길이를 가진 문자열 요소를 리턴
function findShortestWord(arr) {
    //문자열을 구분해줌
    let str = arr.filter(function(el){
      return typeof el === 'string'
    })
    if(str.length === 0){
      return '';
    }
  
    return str.reduce(function(acc, cur){
      if(acc.length <= cur.length){
        return acc
      }else{
        return cur
      }
    })
  }
  


//31번 -- 학생의 정보가 담긴 객체를 요소로 갖는 배열을 입력받아 아래 조건에 맞게 변형된 배열을 리턴
function studentReports(students) {
    //여학생 정보만 빼기
    //등급은 평균
    let girls = students.filter(function(el){                       
      return el.gender === 'female'                                 //리턴을 꼭 해줘야함
    })
    return girls.map(function(el){
      //여학생 등급 합
      let sum = el.grades.reduce(function(fir, sec){
      return fir + sec
      })
      //등급 평균
      let avg = sum / el.grades.length;
      //등급을 평균으로 넣어줌
      el.grades = avg;
      return el;
    })
  }
   



//32번 -- 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 모든 수(number)의 합을 리턴
function sumOfArraysInArray(arr) {
  let accArr = arr.reduce(function(acc, cur){
    return acc.concat(cur);
  })
  let num = accArr.filter(el => typeof el === 'number');
  return num.reduce(function(acc, cur){
    sum = acc + cur;
    return sum
  },0)
}
/*
function sumOfArraysInArray(arr) {
  let accArr = arr.reduce(function(acc, cur){
    return acc.concat(cur);
  })
  let num = accArr.filter(el => typeof el === 'number');
  if(num.length === 0){
    return 0
  }
  return num.reduce(function(acc, cur){
    sum = acc + cur;
    return sum
  })
}
// 배열에 숫자가 없으면 0이 리턴되는 부분을 조건식으로 먼저 빼줘도 같은 코드임
*/
