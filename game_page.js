player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");

document.getElementById("player1n").innerHTML = player1 + " : ";
document.getElementById("player2n").innerHTML = player2 + " : ";

player1score = 0;
player2score = 0;

document.getElementById("player1score").innerHTML = player1score;
document.getElementById("player2score").innerHTML = player2score;

document.getElementById("playerque").innerHTML = "Question Turn - " + player1;
document.getElementById("playerans").innerHTML = "Answer Turn - " + player2;

function send(){
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    charAt1 = word.charAt(1);

    lengthby2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lengthby2);

    lengthminus1 = word.length - 1;
    charAt3 = word.charAt(lengthminus1);

    remchar1 = word.replace(charAt1, "_");
    remchar2 = remchar1.replace(charAt2, "_");
    remchar3 = remchar2.replace(charAt3, "_");

    q_word = "<h4 id = 'word_display'> Q . "+remchar3+"</h4>";
    inputans = "<br> Answer : <input type='text' id = 'ans_input'>";
    checkbutton = "<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
    combination = q_word + inputans + checkbutton;

    document.getElementById("output").innerHTML = combination;

    document.getElementById("word").innerHTML = "";
}

questionturn = "player1";
answerturn = "player2";

function check(){
    get_answer = document.getElementById("ans_input").value;
    fanswer = get_answer.toLowerCase();
    if (fanswer == word){
        if (answerturn == "player1"){
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        }
        else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = player2score;
        }
    }
    if (questionturn == "player1"){
        questionturn = "player2";
        document.getElementById("playerque").innerHTML = "Question Turn - "+ player2;
    }
    else {
        questionturn = "player1";
        document.getElementById("playerque").innerHTML = "Question Turn - "+ player1;
    }
    if (answerturn == "player1"){
        answerturn = "player2";
        document.getElementById("playerans").innerHTML = "Answer Turn - "+ player2;
    }
    else {
        answerturn = "player1";
        document.getElementById("playerans").innerHTML = "Answer Turn - "+ player1;
    }

    document.getElementById("output").innerHTML = "";
}