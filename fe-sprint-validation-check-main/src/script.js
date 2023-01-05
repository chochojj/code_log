// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const elInputUserName = document.querySelector('#username');
const elfailuremessage = document.querySelector('.failure-message');
const elsuccessmessage = document.querySelector('.success-message');
const elInputPassword = document.querySelector('#password');
const elInputPasswordCheck = document.querySelector('#password-retype');
const elPasswordMiss = document.querySelector('.mismatch-message');
const fillPassword = document.querySelector('.fillpassword-message');



//아이디 입력창elInputUserName에 글자를 키보드로 입력할 떄.onkeyup
elInputUserName.onkeyup = function (){
  if(isMoreThan4Length(elInputUserName.value)){
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

//비밀번호를 입력했을때
//비밀번호 확인칸을 먼저 기입하고 비밀번호를 눌렀을때 fullpassword 메세지가 사라지지 않는 오류
elInputPassword.oninput = function(){
  //비밀번호 확인칸이 빈칸이 아니면
  if(elInputPasswordCheck !== ''){
    if(isMatch(elInputPassword.value, elInputPasswordCheck.value)){
      elPasswordMiss.classList.add('hide');
    }else{
      fillPassword.classList.add('hide');
      elPasswordMiss.classList.remove('hide');
    }
  
  }
}

//비밀번호 확인칸을 기입했을 때
elInputPasswordCheck.onkeyup = function (){
  if(elInputPasswordCheck.value === '' && elInputPassword.value === ''){    //비밀번호와 비밀번호 확인값이 모두 빈경우에
    fillPassword.classList.add('hide');                                     //하단 메세지가 계속 남아있는 오류 수정
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


//인풋창에 아무것도 없을 경우에
//아이디와 비밀번호 확인창에 값을 기입했다 지웠을때  남아있는 메세지를 지움 > onchange 사용
//인풋값을 모두 지우고 마우스로 다른 영역을 클릭하면 하단 메세지를 지움
//onkeyup, onkeydown, onfocus, oninput 다 안됨
//값이 사라지는 순간 메세지도 사라지게 하고 싶다...위에 이미 onkeyup을 사용해서 안되는건가?
//onkeyup안에 병합하는 방법 시도하기






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

