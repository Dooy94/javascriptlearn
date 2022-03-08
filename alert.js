// 1. 얼럿창 띄우기
// alert('javascript!!');
// let message = 'next message'
// alert(message);

//2. 변수 가지고 놀기
// admin과 name이라는 변수를 선언하세요.
// name에 값으로 "John"을 할당해 보세요.
// name의 값을 admin에 복사해 보세요.
// admin의 값을 alert 창에 띄워보세요. "John"이 출력되어야 합니다.
// let admin
// let name = "John"
// admin = name
// alert(admin);

//3. 옳은 이름 명명하기
// 현재 우리가 살고있는 행성(planet)의 이름을 값으로 가진 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
// 웹사이트를 개발 중이라고 가정하고, 현재 접속 중인 사용자(user)의 이름(name)을 저장하는 변수를 만들어보세요. 변수 이름은 어떻게 지어야 할까요?
// let ourPlanetName = "Earth";
// let currentUserName = "dooinas";

//4. 스크립트 결과 예측
// let name = "Ilya";
// alert( `hello ${1}` ); // 1
// alert( `hello ${"name"}` ); // name
// alert( `hello ${name}` ); // Ilya

//5.사용자에게 이름을 물어보고, 입력받은 이름을 그대로 출력해주는 페이지를 만들어 보세요.
// let inputUserName = prompt('당신의 이름은 입력하세요.','');
// alert(`반갑습니다! ${inputUserName}님`);

//6. 전위형과 후위형
// let a = 1, b = 1;
// let c = ++a; 
// let d = b++; // a 2, b 2, c 2, d 1
// //6-1. 할당후 결과 예측
// let a = 2;
// let x = 1 + (a *= 2); //a 4, x 5
// //6-2. 형 변환
// "" + 1 + 0 //1
// "" - 1 + 0 //-1
// true + false //1
// 6 / "3" //2
// "2" * "3" //6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 //$45
// "4" - 2 //2
// "4px" - 2 //NaN
// 7 / 0 //Infinity
// "  -9  " + 5 //-9 5
// "  -9  " - 5 //-14
// null + 1 //1
// undefined + 1 //Nan
// " \t \n" - 2 //-2
//6-3. 덧셈고치기
// let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
// let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);

// alert(+a + +b); // 12

//표현식의 결과를 예측해보시오.
// 5 > 4 //t
// "apple" > "pineapple" //f
// "2" > "12" //f
// undefined == null //t 특별한 규칙이 적용된다.
// undefined === null //f
// null == "\n0\n" //f
// null === +"\n0\n" //F

// let password = prompt('비밀번호를 입력하세요.','');
// if(password==1234){
//     alert('어서오세요!');
// }else if{
//     alert('비밀번호가 일치하지 않습니다.');
// }

// let 결과 = prompt('비밀번호를 입력하세요.','') == 1234 ? alert('어서오세요!') : alert('비번이 달라요!')
//이와 같은 코드는 가독성이 떨어진다.
//?를 if 대용으로 쓰는 이유는 코드 길이를 짧게 하기 위함.

//7.이프문을 이용해 자바스크립트의 공식 이름을 맞추는 코드를 작성하라
// let mainJavaName = 'ECMAScript'
// if (prompt("자바스크립트의 공식 이름은 무엇일까요?",'') == mainJavaName) {
//     alert('정답입니다! 잘맞추셨어요!');
// }else{
//     alert('틀렸습니다. 다시한번 생각해보세요.');
// }

//8. 입력받은 숫자의 부호 표시하기
// let result = prompt('숫자를 입력하세요.',0) //이 형식 꼭 기억할 것!
// if(result==0){
//  alert('0');
// }
//  else if(result > 0){
//  alert('1');
//  }
//  else{
//  alert('-1');
//  }

//8-1. 아래 if문을 ?문으로 변경하라
//  let result;
// if (a + b < 4) {
//   result = '미만';
// } else {
//   result = '이상';
// }
// let result = (a+b<4) ? '미만' : '';

//8-2. 아래 if else문을 ?문으로 변경하라
// let message;

// if (login == '직원') {
//   message = '안녕하세요.';
// } else if (login == '임원') {
//   message = '환영합니다.';
// } else if (login == '') {
//   message = '로그인이 필요합니다.';
// } else {
//   message = '';
// }

// let message = (login =='직원') ? '안녕하세요.' :
// (login == '임원') ? '환영합니다.' :
// (login == '') ? '로그인이 필요합니다.':
//  ''; 간결하게 작성되는 코드와 변수가 어디에 어떻게 저장되는지 잘 확인

//9. 코드 결과 예측
// alert(null || 2 || undefined); //2
// alert(alert(1) || 2 || alert(3)); //1과 2 alert메서드는 값을 반환하지 않는다.(=undefined)
// alert(1 && null && 2); //null
// alert(alert(1) && alert(2)); //1과 undefined
// alert(null || 2 && 3 ||4); // 3

// //9-1. 사이 범위 확인하기
// //14세 이상 90세 이하에 속하는지 확인하는 if문
// let age;
// if(age>=14 && age<=90)

//9-2.로그인 구현하기
// let id = prompt('ID를 입력하세요.','');
// if(id=='admin'){
//     let pw = prompt('비밀번호를 입력하세요','');

//     if(id=='admin' && pw=='TheMaster'){
//     alert('환영합니다!');
//     }else if(pw == '' || pw == null){
//     alert('취소되었습니다.');
// }else {
//     alert('인증에 실패했습니다.');
// }

// } else if(id=='' || id==null){
//     alert('취소됐습니다.');
// }else{
//     alert('인증되지 않은 사용자입니다.');
// }

//nullish 연산자
//height = height ?? 100;
//height가 null이거나 undefined인 경우, 100을 할당!

//10.반복문 2부터 10까지의 짝수가 출력되는 반복문 작성
// for(let i=2;i<=10;i+=2){
//     alert(i);
// }

//10-1. 다음 for문을 while문으로 바꾸시오(단, 동작과 출력값이 동일하게)
//for (let i=0;i<3;i++){
//     alert(`number ${i}!`);
// } d
// let i = 0;
// while(i<3){
//     alert(`number ${i}!`);
//     i++;
// }

//10-2. 100이상의 값을 입력할 때까지 반복되는 프롬프트 창을 띄우시오.
// let input = prompt('100이상의 값을 입력해주세요.','');
// while(input<=100){
//     let input = prompt('100이상의 값을 입력해주세요.','');
//     if(input>=100 || input==''){
//     break;
// }
// }

//10-3. 2부터 n까지의 숫자중 소수만 출력해주는 코드를 작성해보자.
//모르겠음
// let input=prompt('숫자 몇의 소수를 알고 싶나요?','');
// nextPrime:
// for(let pn;pn<=input;pn++){
//     for(let pn2=2; pn2<pn;pn2++){
//         if(pn % pn2 == 0) {
//     continue nextPrime;
//     }
//     alert(pn);
//     }
// }

// let browser = prompt('사용하는 브라우저는 무엇인가요?','');
// if(browser=='edge' || browser=='chrome' || browser=='firefox' ||browser== 'safari' || browser=='opera'){
//     alert('저희 서비스가 지원하는 브라우저를 사용하고 계시네요.');
// } else
// alert('현재 페이지가 괜찮아 보이길 바랍니다.');

// let a = +prompt('a?',''); //염병할 +는 뭐지???? 형 변환 스위치문은 자료형이 중요하다.
// switch(a){
//     case 0:alert( 0 ); break;
//     case 1:alert( 1 ); break;
//     case 2:
//     case 3
//     :alert('2,3'); break;
// }

// function checkAge(age){
//     return age > 18 ? true : alert('동의받음?');
// }

// function checkAge2(age){
//     return age > 18 || confirm('동의받음?');
// }
// checkAge(11);


// function pow(x,n){
//         let k = x;
//     for(let i=1;i<n;i++){
//         k *= x;
//     }
//     return k; //k 값을 반환한다.
// }
// let x = prompt('자연수를 입력하세요.','');
// let n = prompt('제곱을 입력하세요.','');

// alert(pow(x, n));
//자바 스크립트에서 함수는 반드시 ()괄호가 있어야 호출된다.
 
//     if (confirm(question)) yes() //인수 showOk, 인수 showCancel: '콜백 함수', '콜백'
//     else no();
//   }
  
//   function showOk() {
//     alert( "동의하셨습니다." );
//   }
  
//   function showCancel() {
//     alert( "취소 버튼을 누르셨습니다." );
//   }
  
//   // 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
//   ask("동의하십니까?", showOk, showCancel);

// let gop = (x,y) => x*y; 이 화살표 함수는 아래 함수 표현식과 같다.
// alert(gop(2,3)); 

// function gop1(x,y){ 이 함수 선언은 아래 함수와 같다.
//     let ma= x * y;
//     return ma;
// };
// alert(gop1(3,4));

// let gop2 = function(x,y){
//     return x*y;
// };
// alert(gop2(4,5));

//11. 화살표 함수로 변경하라.
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "동의하십니까?",
//     function() { alert("동의하셨습니다."); },
//     function() { alert("취소 버튼을 누르셨습니다."); }
//   );


// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
// ask(
//     "동의하십니까?",
// () => alert("동의"),
// () => alert('취소')
// );


//11. 더 좋은 코드로 만들어보라
// function pow(x,n)
// {
//   let result=1;
//   for(let i=0;i<n;i++) {result*=x;}
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'')
// if (n<=0)
// {
//   alert(`Power ${n} is not supported, please enter an integer number greater than zero`);
// }
// else
// {
//   alert(pow(x,n))
// }

function pow(x,n) { //인수 사이의 공백과 같은 라인의 중괄호
    let result = 1;
    //
    for(let i = 0; i < n ; i++) { //인수 사이의 공백과 같은 중괄호로 구문 구분
        result *= x; //인수 사이의 공백
    }
    //
    return result;
}

let x = prompt('x?', ''); //두 줄로 나눠 작성
let n = prompt('n?', ''); //구문 끝 세미콜론 포함
//
if (n <= 0) { //인수 사이의 공백
    alert(`Power ${n} is not supported,
    please enter an integer number greater than zero`);
} else { //중괄호로 구문 구분
    alert( pow(x, n)); //인수 사이의 공백
}