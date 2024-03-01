// const getRandomColor = () =>{
//     var letters = '0123456789ABCDEF'
//     var color = '#'
//     for (var i =0; i<6; i++) {
//         color += letters[Math.floor(Math.random()*16)];
//         }
//     return color;
// };

const auth = ()=>{
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("target").innerText = token;
    document.getElementById("target").style.color = "#"+token; // 랜덤 색상 적용
     return token;
};