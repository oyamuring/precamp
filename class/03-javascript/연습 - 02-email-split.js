// split(), join(), push()

const email = "codecamp@gmail.com"
// 'codecamp@gmail.com'

let userMail = email.split("@")[0]
// 'codecamp'
let company = email.split("@")[1]
// 'gmail.com'
let maskingMail = []
// []
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']

let result2 = maskingMail.join("") + "@" + company
// 'code****@gmail.com'
result
// 'code****@gmail.com'