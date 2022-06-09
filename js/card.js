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

    $("#card").finish().animate({
        top: "+=" + screen.availHeight * 1.5,
    }, 1250, function() {
        card.style.display = "none";
    });

}


function pickImage() {
    let num = Math.round(Math.random() * 2);

    let x = document.createElement("IMG");
    x.setAttribute("src", "imgs/undercard/" + num + ".png");
    x.setAttribute("width", "125");
    x.setAttribute("height", "125");
    x.setAttribute("class","behind-torn-hole")
    document.getElementById("image").appendChild(x);
}