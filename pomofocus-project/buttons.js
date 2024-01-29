function activateButton(buttonIndex) {
    const controlerButtons = document.querySelectorAll(".controler-button");
    controlerButtons.forEach(button => {
        button.id = null;
    });

    controlerButtons[buttonIndex].id = "active-button";

    if(buttonIndex === 0){
        renderFunction("05:00");
    }else if(buttonIndex === 1){
        renderFunction("02:00");
    }else{
        renderFunction("03:00");
    }
}

function renderFunction(timeToRender){
    clock = document.querySelector(".clock");
    clock.innerText = timeToRender;
}