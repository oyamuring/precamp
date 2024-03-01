const persons = [
    {name: "철수", age:17},
    {name: "영희", age:22},
    {name: "도우너", age:5},
    {name: "그루트", age:65},
    {name: "도비", age:3},
    
] 

for (let count = 0; count<persons.length ; count++) {

    if(persons[count].age >= 19){
        console.log("성인입니다.")
    } else {
        console.log("미성년자입니다.")
    }
    
}
// VM6658:6 미성년자입니다.
// VM6658:4 성인입니다.
// VM6658:6 미성년자입니다.
// VM6658:4 성인입니다.
// VM6658:6 미성년자입니다.

for (let count = 0; count<persons.length ; count++) {

    if(persons[count].age >= 19){
        console.log(persons[count].name+"님은 성인입니다")
    } else {
        console.log(persons[count].name+"님은 미성년자입니다.")
    }
    
}
// VM6953:6 철수님은 미성년자입니다.
// VM6953:4 영희님은 성인입니다
// VM6953:6 도우너님은 미성년자입니다.
// VM6953:4 그루트님은 성인입니다
// VM6953:6 도비님은 미성년자입니다.


const fruits = [
    {number: 1, title :"레드향"},
    {number: 2, title: "샤인머스켓"},
    {number: 3, title :"산청딸기"},
    {number: 4, title :"한라봉"},
    {number: 5, title :"사과"},
    {number: 6, title :"애플망고"},
    {number: 7, title :"딸기"},
    {number: 8, title :"천혜향"},
    {number: 9, title :"과일선물세트"},
    {number: 10, title :"귤"},
]
// undefined
fruits
// (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {number: 1, title: '레드향'}1: {number: 2, title: '샤인머스켓'}2: {number: 3, title: '산청딸기'}3: {number: 4, title: '한라봉'}4: {number: 5, title: '사과'}5: {number: 6, title: '애플망고'}6: {number: 7, title: '딸기'}7: {number: 8, title: '천혜향'}8: {number: 9, title: '과일선물세트'}9: {number: 10, title: '귤'}length: 10[[Prototype]]: Array(0)
for (count = 0 ; count<fruits.length ; count++ ) {

    console.log(fruits[count].number+ " " + fruits[count].title)
}
// VM7601:3 1 레드향
// VM7601:3 2 샤인머스켓
// VM7601:3 3 산청딸기
// VM7601:3 4 한라봉
// VM7601:3 5 사과
// VM7601:3 6 애플망고
// VM7601:3 7 딸기
// VM7601:3 8 천혜향
// VM7601:3 9 과일선물세트
// VM7601:3 10 귤
// undefined
for (count = 0 ; count<fruits.length ; count++ ) {

    console.log(`${fruits[count].number} ${fruits[count].title}`)
}
// VM7741:3 1 레드향
// VM7741:3 2 샤인머스켓
// VM7741:3 3 산청딸기
// VM7741:3 4 한라봉
// VM7741:3 5 사과
// VM7741:3 6 애플망고
// VM7741:3 7 딸기
// VM7741:3 8 천혜향
// VM7741:3 9 과일선물세트
// VM7741:3 10 귤
// undefined
for (count = 0 ; count<fruits.length ; count++ ) {

    console.log(`과일 차트 ${fruits[count].number}위는 ${fruits[count].title}입니다`) //백틱 사용
}
// VM7773:3 과일 차트 1위는 레드향입니다
// VM7773:3 과일 차트 2위는 샤인머스켓입니다
// VM7773:3 과일 차트 3위는 산청딸기입니다
// VM7773:3 과일 차트 4위는 한라봉입니다
// VM7773:3 과일 차트 5위는 사과입니다
// VM7773:3 과일 차트 6위는 애플망고입니다
// VM7773:3 과일 차트 7위는 딸기입니다
// VM7773:3 과일 차트 8위는 천혜향입니다
// VM7773:3 과일 차트 9위는 과일선물세트입니다
// VM7773:3 과일 차트 10위는 귤입니다
// undefined
