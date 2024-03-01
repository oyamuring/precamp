// 전화번호 텍스트 다 들어왔을 때 다음 input으로 전환 함수
const changeFocus1 = () =>{
    let phone1 = document.getElementById("p1").value
    if( phone1.length === 3) {
        document.getElementById("p2").focus()
    }

}
const changeFocus2 = () =>{
    let phone2 = document.getElementById("p2").value
    if (phone2.length === 4) {
        document.getElementById("p3").focus()

    }
}

//인증번호 활성화 함수
const checkValidation = function() {

    let phone1 = document.getElementById("p1").value
    let phone2 = document.getElementById("p2").value
    let phone3 = document.getElementById("p3").value //value는 문자열이 들어옴

    // 모든 input이 비어있지 않고, phone3의 길이가 4일 때
    if(phone1 && phone2  && phone3 && phone3.length==4){
    
            document.getElementById("phoneButton").disabled = false
    
        }else{
             //하나라도 비어있거나 phone3의 길이가 4가 아닐 떄
        document.getElementById("phoneButton").disabled = true
    }
};
//인증번호 전송 함수
// 상태저장(상태 초기화)
let isStarted = false;
let timer;
const auth = ()=>{
    if(isStarted ===false) {
        //함수 눌려서 시작
        isStarted = true;
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
        document.getElementById("target").innerText = token;
        document.getElementById("target").style.color = "#0068FF"; 
         // 타이머 시작
         let time = 180; // 인증 버튼을 다시 클릭할 경우를 대비해 타이머를 리셋
         //setInterval 초기화 - setInterval을 timer 변수에 담아주고, clearInterval을 이용해서 변수 초기화
         timer = setInterval(function () {
             if(time >= 0) {
                 document.getElementById("finish").disabled = false;
                 let min = Math.floor(time / 60);
                 let sec = String(time % 60).padStart(2, "0");
                 document.getElementById("timer").innerText = min+":"+sec;
                 document.getElementById("timer").style.color = "#0068FF"; 
                 time = time - 1;
               
             } else {
                resetAuthState();
             };
         }, 1000);
     };
 };

 // 인증 상태 초기화 함수
function resetAuthState() {
    clearInterval(timer);
    document.getElementById("target").innerText = "000000";
    document.getElementById("timer").innerText = "3:00";
    document.getElementById("finish").disabled = true;
    isStarted = false;
};

// 인증확인 함수
function finishAuth() {
    if (isStarted) {
        alert("인증이 완료되었습니다.");
        resetAuthState();
        document.getElementById("finish").innerText = "인증완료";
        document.getElementById("submit").disabled = false;
        document.getElementById("phoneButton").disabled = true;
    }
};

const final = () => {
    let isValid = true; // 유효성 검사 결과를 추적하는 변수

    // 입력 값 가져오기
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const regionSelect = document.querySelector(".region_select");
    const genderOptions = document.querySelectorAll(".gender");

    // 에러 메시지 초기화
    document.getElementById("emailError").textContent = "";
    document.getElementById("nameError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";
    document.getElementById("regionError").textContent = "";
    document.getElementById("genderError").textContent = "";

    // 이메일 유효성 검사
    if (!email.includes("@")) {
        document.getElementById("emailError").textContent = "이메일이 올바르지 않습니다.";
        isValid = false;
    }

    // 이름 유효성 검사
    if (name === '') {
        document.getElementById("nameError").textContent = "이름이 올바르지 않습니다.";
        isValid = false;
    }

    // 비밀번호 확인 유효성 검사
    if (confirmPassword === '') {
        document.getElementById("confirmPasswordError").textContent = "비밀번호 확인란을 채워주세요.";
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "비밀번호가 일치하지 않습니다. 다시 입력해주세요.";
        isValid = false;
    }

    // 지역 선택 유효성 검사
    if (regionSelect.selectedIndex === 0) {
        document.getElementById("regionError").textContent = "지역을 선택해주세요.";
        isValid = false;
    }

    // 성별 선택 유효성 검사
    const isGenderSelected = Array.from(genderOptions).some(option => option.checked);
    if (!isGenderSelected) {
        document.getElementById("genderError").textContent = "성별을 선택해주세요.";
        isValid = false;
    }

    // 모든 검사를 통과한 경우
    if (isValid) {
        alert("코드캠프 가입을 축하합니다!");
    }
};
