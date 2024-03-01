const startWord = ()=>{
    let myword = document.getElementById("myword").value /*자체의 값*/
    let word = document.getElementById("word").innerText /*태그 사이의 값 값*/
    
    let lastword = word[word.length -1]
    let firstword =myword[0]

    if (lastword === firstword){

        //정답일때
        document.getElementById("result").innerText = "정답입니다!"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""

        //오답일때
    }else{
        document.getElementById("result").innerText = "땡!"



        }

}