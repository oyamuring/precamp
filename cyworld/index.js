const menuHome = () =>{

    /* 돔 조작 속성 변경 .setAttribute("속성","값") */
    document.getElementById("contentFrame").setAttribute("src", "home.html")
    /* 현재 페이지 버튼 강조 */
    document.getElementById("menuHome").style = "color:black; background-color:white;"
    /* 나머지 페이지 버튼 초기화 */
    document.getElementById("menuJukebox").style = "color:white; background-color:#298eb5;"
    document.getElementById("menuGame").style = "color:white; background-color:298eb5;"
}



const menuJukebox = () =>{
    document.getElementById("contentFrame").setAttribute("src", "jukebox.html")
    /* 현재 페이지 강조 */
    document.getElementById("menuJukebox").style = "color:black; background-color:white;"
    /* 나머지 페이지 버튼 초기화 */
    document.getElementById("menuHome").style = "color:white; background-color:#298eb5;"
    document.getElementById("menuGame").style = "color:white; background-color:298eb5;"
}

const menuGame = () =>{
    document.getElementById("contentFrame").setAttribute("src", "game.html")
    /* 현재 페이지 강조 */
    document.getElementById("menuGame").style = "color:black; background-color:white;"
    /* 나머지 페이지 버튼 초기화 */
    document.getElementById("menuJukebox").style = "color:white; background-color:#298eb5;"
    document.getElementById("menuHome").style = "color:white; background-color:298eb5;"
}