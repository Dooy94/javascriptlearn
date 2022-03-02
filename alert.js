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