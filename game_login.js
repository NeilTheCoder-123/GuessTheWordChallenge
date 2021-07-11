function login(){
    localStorage.setItem("player1", document.getElementById("player1").value);
    localStorage.setItem("player2", document.getElementById("player2").value);

    window.location = "game_page.html";
}