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
/*

/*객체 user, 키 name 과 age, 값 'Yoon'(문자형)과 29(정수형) 총 두개의 프로퍼티가 있다.
// let user = {
//     name: 'Yoon',
//     age: 29,
// };

// let key = prompt('사용자의 어떤 정보를 얻고 싶으신가요?', 'name');
// alert(user[key]); //Yoon 출력.


/*계산된 프로퍼티
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

/*단축 프로퍼티
-실무에서 종종 쓰이는 내용! */
// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }
// let user = makeUser('Yoon', 29);
// alert(user.name);


/* in 연산자로 프로퍼티 존재 여부 확인하기.

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
  

/*Q. 다음 각 동작을 한 줄씩, 코드로 작성해보세요.
// let user = {
//     name: 'John',
//     surname: 'Smith',
//     name: 'Pete',
// };
// delete user.name;

// alert(user.name);

//Q.객체가 비어있는지 확인하기
// function isEmpty(obj){
//     for(let key in obj) {
//         return false;
//     }
    
//     return true;
// }

//Q. 모든 팀원의 월급에 대한 정보를 담고 있는 객체가 있다고 해봅시다.
//모든 팀원의 월급을 합한 값을 구하고, 그 값을 변수 sum에 저장해주는 코드를 작성해보세요.
//sum엔 390이 저장되어야겠죠?
//주의: salaries가 비어있다면 sum에 0이 저장되어야 합니다.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };

//   let sum = 0;
//   for(let key in salaries){
//     sum += salaries[key];
//   }

//alert(sum);
*/

/*Q. 프로퍼티 값 두 배로 부풀리기
//객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배해주는
//함수 multiplyNumeric(obj)을 만들어보세요.

// let gap = {
//     one: 100,
//     two: 200,
//     title: 'gaps'
// };

// function multiplyNumeric(gap) {
//     for(let key in obj){
//         if(typeof obj[key] =='number'){
//             obj[key] *= 2;
//         }
//     }
}; */


/*여러 객체를 하나로 병합하기. */
// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // permissions1과 permissions2의 프로퍼티를 user로 복사합니다.
// Object.assign(user, permissions1, permissions2);

/*메서드 만들기 예제 */
let user = {
    name: 'Yoon',
    age: '29',
};

user.sayHi = function(){ //객체 프로퍼티에 함수를 할당->user에 할당된 sayHi 메서드
    alert('안녕하세요!');
};

user.sayHi(); //안녕하세요!
//객체에 할당된 함수를 호출 => user가 인사를 해준다.
/*정의된 함수를 이용해서 메서드 만들기
function sayHi(){
    alert('안녕하세요!');
};

user.sayHi - sayHi;
*/

/*메서드 단축 구문
user = {
 sayHi: function() {
     alert('Hello);
 }
};
//단축 구문 이용
user = {
    sayHi() {
        alert('Hello');
    }
};
*/