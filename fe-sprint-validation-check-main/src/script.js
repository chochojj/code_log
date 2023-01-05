// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const elInputUserName = document.querySelector('#username');
const elfailuremessage = document.querySelector('.failure-message');
const elsuccessmessage = document.querySelector('.success-message');
const elInputPassword = document.querySelector('#password');
const elInputPasswordCheck = document.querySelector('#password-retype');
const elPasswordMiss = document.querySelector('.mismatch-message');
const fillPassword = document.querySelector('.fillpassword-message');
/* 
//아이디/비밀번호 유효성 검사도 하고싶음! > 만약 한다면 각 이벤트 어디에 들어가야할지
let checkNum = password.search(/[0-9]/g); // 숫자사용
let checkEng = password.search(/[a-z]/ig); // 영문사용
*/

//아이디 입력창elInputUserName에 글자를 키보드로 입력할 떄.onkeyup
elInputUserName.onkeyup = function (){
  if(elInputUserName.value === ''){             //아이디 인풋창에 값이 없을때
    elfailuremessage.classList.add('hide');
    elsuccessmessage.classList.add('hide');
  }else if(isMoreThan4Length(elInputUserName.value)){
    //성공메세지
    elsuccessmessage.classList.remove('hide');
    //실패메세지 가려짐
    elfailuremessage.classList.add('hide');
  }else{
    //성공메세지 가려짐
    elsuccessmessage.classList.add('hide');
    //실패메세지 
    elfailuremessage.classList.remove('hide');
  }
}
//if구문을 통해 아이디 인풋창에 값을 넣었다 지워도 남아있는 하단 메세지를 가려줌


//비밀번호를 입력했을때
//비밀번호 확인칸을 먼저 기입하고 비밀번호를 눌렀을때 fillpassword 메세지가 사라지지 않는 오류
elInputPassword.oninput = function(){
  //비밀번호 확인칸이 빈칸이 아니면
  if(elInputPasswordCheck.value !== '' && elInputPassword.value === ''){    //비밀번호 칸이 비고 비밀번호 확인값이 채워진 경우에
    fillPassword.classList.remove('hide');                                  //비밀번호를 먼저 채워달라는 메세지 출력
    elPasswordMiss.classList.add('hide');                                     
  }
  else if(elInputPasswordCheck !== ''){
    if(isMatch(elInputPassword.value, elInputPasswordCheck.value)){  //확인칸이 빈칸이 아니고 비밀번호와 확인칸의 값이 같을때
      elPasswordMiss.classList.add('hide');                           //두 값이 다르다는 메세지 지워줌
    }else{                                          //확인칸이 빈칸이 아니지만 두 값이 다를때
      fillPassword.classList.add('hide');             //칸을 채워달라는 메세지를 지우고
      elPasswordMiss.classList.remove('hide');        //값이 다르다는 메세지를 출력
    }
  
  }
}

//비밀번호 확인칸을 기입했을 때
elInputPasswordCheck.onkeyup = function (){
  if(elInputPasswordCheck.value === '' && elInputPassword.value === ''){    //비밀번호와 비밀번호 확인값이 모두 빈경우에
    fillPassword.classList.add('hide');                                     
  }else if(elInputPassword.value === ''){                                   //비밀번호는 없는데 비밀번호 확인을 먼저 입력한 경우
    fillPassword.classList.remove('hide'); 
    elPasswordMiss.classList.add('hide');
  }else{
    //비밀번호를 입력하고 비밀번호 확인을 입력한 경우
    if(isMatch(elInputPassword.value, elInputPasswordCheck.value)){
      elPasswordMiss.classList.add('hide');
    }else{
      elPasswordMiss.classList.remove('hide');
    }
  }
};

//if문을 통해 비밀번호 값을 지운 이후 비밀번호 확인값을 지울때 하단 메세지가 계속 남아있는 오류 수정 
//elInputPasswordCheck에 onchange 이벤트를 사용할 경우 마우스를 다른 영역 클릭해야 지워짐
//onkeydown, onfocus, oninput 다 안됨 > 이미 사용되는 onkeyup 이벤트와 충돌해서 그런건지?







function isMoreThan4Length(value) {
  return value.length >= 4
}

function isMatch (password1, password2) {
  if(password1 === password2){
    return true;
  }else{
    return false;
  }
}

