function moveButton() {
    var noButton = document.getElementById("noButton");
    
    // Movimento aleatório do botão
    var maxX = window.innerWidth - noButton.offsetWidth;
    var maxY = window.innerHeight - noButton.offsetHeight;
    
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
}
