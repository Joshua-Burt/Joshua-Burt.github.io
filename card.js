function fall() {
    let pin = document.getElementById("pin");

    $(pin).fadeOut('slow', function() {
        cardFall();
    });
}

function cardFall() {
    document.getElementById("undercard").style.display = "inline";
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
            let rotation = parseInt(card.style.rotate.slice(0,-3));

            $(card).css({'transform' : 'rotate('+ rotation + 0.1 +'deg)'});
        }
    }, 20);

}