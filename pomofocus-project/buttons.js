controlerButtons = document.querySelectorAll(".controler-button");
const clockText = document.querySelector(".clock");

controlerButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        activateButton(button, controlerButtons);
    })
});

function activateButton(button, controlerButtons){
    controlerButtons.forEach((btn) => {
        if(btn.innerText === button.innerText){
            btn.id = "active-button";
        }else{
            btn.id = null;
        }
    })

    let timerMode = document.querySelector("#active-button").innerText;
    console.log(document.getElementsByClassName("clock"))
    if(timerMode === "Pomodoro"){
        clockText.innerText = "25:00";
    }else if(timerMode === "Short Break"){
        clockText.innerText = "05:00";
    }else{
        clockText.innerText = "15:00";
    }
}