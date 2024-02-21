let classmates =['철수', '영희','훈이']
// undefined
classmates
// (3) ['철수', '영희', '훈이']
classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("영희")
// true
classmates.includes("맹구")
// false
classmates.length
// 3
classmates.push("맹구")
// 4
classmates.includes("맹구")
// true
classmates.pop()
// '맹구'
classmates.length
// 3
classmates
// (3) ['철수', '영희', '훈이']

let developer = ["성장", "성취", "보람", "풍요", "전문가"]
undefined
developer[0]
'성장'
let dream =["커리어점프", "성공", "할 수있다"]
undefined
dream.concat(developer)
(8) ['커리어점프', '성공', '할 수있다', '성장', '성취', '보람', '풍요', '전문가']
developer
(5) ['성장', '성취', '보람', '풍요', '전문가']
dream
(3) ['커리어점프', '성공', '할 수있다']
developer.concat(dream)
(8) ['성장', '성취', '보람', '풍요', '전문가', '커리어점프', '성공', '할 수있다']
let result = developer.concat(dream)
undefined
result
(8) ['성장', '성취', '보람', '풍요', '전문가', '커리어점프', '성공', '할 수있다']



