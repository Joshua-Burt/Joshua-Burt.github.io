function fall() {
    let pin = document.getElementById("pin");

    $(pin).fadeOut('slow', function() {
        cardFall();
    });
}

function cardFall() {
    let card = document.getElementById("card");
    card.style.zIndex = String(10);
    let ySpeed = 2;

    let timer = setInterval(function() {
        let yPos = parseInt(card.style.top.slice(0,-2));
        if(isNaN(yPos)) {
            yPos = 500;
        }
        console.log(yPos);
        if(yPos > screen.height) {
            card.style.display = "none";
            clearInterval(timer);
        } else {
            ySpeed += 0.5;
            let newPos = yPos + ySpeed;
            card.style.top = newPos + "px";
        }
    }, 20);
}