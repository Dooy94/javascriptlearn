// //함수 연습문제
// 인자를 세개 받습니다.
// 첫번째 인자는 년도에 해당하는 숫자입니다.
// 두번째 인자는 월에 해당하는 숫자입니다.
// 세번째 인자는 일에 해당하는 숫자입니다.
// 년도 인자만 받았을 경우 → "1234년" 과
// 같은 형식의 문자열을 리턴 해주세요.
// 년도,월 인자를 받았을 경우 → 년도와 월을 조합해서 "1234년 5월" 과
//  같은 형식의 문자열을 리턴 해주세요.
// 년도,월,일 인자를 전부 받았을 경우 → 년도,월,일을 조합해서 "1234/5/6" 과
//  같은 형식의 문자열을 리턴 해주세요.

// let year = prompt('첫번째 인자를 입력하세요.','');
// let month = prompt('두번째 인자를 입력하세요.','');
// let day = prompt('세번째 인자를 입력하세요.','');

// function ymd (x, y, z) {
   
//     let yresult = year;
//     let mresult = month;
//     let dresult = day;

//     let result;

//     if(yresult.length >= 1 && yresult.length == 4){
//         result = year;
//         alert(`${year}년`);
//     } else if(mresult.length >= 1 && yresult.length == 2){
//         result = month;
//         alert(`${month}월`);
//     } else if(dresult.length >= 1 && dresult.length == 2){
//         result = year;
//         alert(`${day}일`);
//     return result;
//     }
// }

// function ymd();

// let user = {
//     name: 'Yoon',
//     age: 29,
// };

// let key = prompt('사용자의 어떤 정보를 얻고 싶으신가요?', 'name');

// // alert(user[key]);
// let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
// let bag = {
//   [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
// };
// alert( bag.apple ); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.
//위 코드와 아래 코드는 동일하다.
// let fruit=prompt('어떤 과일을 구매할래?', 'apple');
// let bag = {};

// bag[fruit] = 5;

// alert(bag.apple);

// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for (let key in user) {
//     // 키
//     alert( key );  // name, age, isAdmin
//     // 키에 해당하는 값
//     alert( user[key] ); // John, 30, true
//   }
  
//Q. 다음 각 동작을 한 줄씩, 코드로 작성해보세요.
// let user = {
//     name: 'John',
//     surname: 'Smith',
//     name: 'Pete',
// };
// delete user.name;

// alert(user.name);

//Q.객체가 비어있는지 확인하기
function isEmpty(obj){
    for(let key in schedule)
    alert(isEmpty(obj))
}
