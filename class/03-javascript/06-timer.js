// 상태저장
let isStarted = false;

const auth = () => {

    if(isStarted === false){
        //타이머가 작동중이 아닐 때
        isStarted = true
        document.getElementById("finish").disabled = false;
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        document.getElementById("target").innerText = token;
    
        // 타이머 시작
        let time = 10; // 인증 버튼을 다시 클릭할 경우를 대비해 타이머를 리셋
        //setInterval 초기화 - setInterval을 timer 변수에 담아주고, clearInterval을 이용해서 변수 초기화
        let timer 
        timer = setInterval(function () {
            if(time >= 0) {
                let min = Math.floor(time / 60);
                let sec = String(time % 60).padStart(2, "0");
                document.getElementById("timer").innerText = min+":"+sec;
                time = time - 1;
            } else {
                document.getElementById("finish").disabled = true;
                isStarted = false;
                console.log("타이머 작동중")
                clearInterval(timer) // 변수를 삭제해줌
            };
        }, 1000);
            
        return token;

    }else{
        //타이머가 작동중일때
    }

};