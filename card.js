function fall() {
    let pin = document.getElementById("pin");

    pickImage();

    $(pin).fadeOut('slow', function() {
        cardFall();
    });
}

function cardFall() {
    document.getElementById("underCard").style.display = "inline";
    let card = document.getElementById("card");
    card.style.zIndex = String(10);
    let ySpeed = 2;

    let timer = setInterval(function() {
        let yPos = parseInt(card.style.top.slice(0,-2));
        if(isNaN(yPos)) {
            yPos = 500;
        }

        if(!$(card).visible(true)) {
            card.style.display = "none";
            clearInterval(timer);
        } else {
            ySpeed += 0.5;
            let newPos = yPos + ySpeed;
            card.style.top = newPos + "px";
        }
    }, 20);

}


function pickImage() {
    let num = Math.round(Math.random() * 2);

    let x = document.createElement("IMG");
    x.setAttribute("src", "imgs/undercard/" + num + ".png");
    x.setAttribute("width", "125");
    x.setAttribute("height", "125");
    document.getElementById("image").appendChild(x);
}