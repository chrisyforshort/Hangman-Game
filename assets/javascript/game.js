var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


// Capture those choices
// Compare choices for correct letter or not
// Display the Results to the User -->



var options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var words = ['tapper', 'burger time', 'pacman','space invaders','tim'];
var winCounter = 0;
var losses = 0;
var hearts = 6;
var underScores = [];
var wrongletter = [];
var userGuesses = [];
var letters = [];



// $(document).ready(function(){
// Computer to make a choice

var computerChoice = words[Math.floor(Math.random()*words.length)];

console.log(computerChoice);

letters.push(computerChoice.split(""))
console.log(letters)

// // Create Underscore based on length of word
var docunderscores = document.getElementsByClassName('underscores');


var generateUnderscore = () => {
    for(var i = 0; i< computerChoice.length; i++) {
        underScores.push('_');
        generateUnderscore.innerHTML;
    }
    // return underScore;
}
generateUnderscore()



// // <!-- I need the User to Make a Choice
var docwrongletter = document.getElementsByClassName('guesses');

document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
// if user guess is right
    if(computerChoice.indexOf(keyword)> -1) {
        console.log(true);
        console.log(keyword)
        for (var i=0; i< letters.length; i++) {
            if (letters[i] == keyword) {
                underScores[i] = keyword;
            }
        }
        docunderscores.innerHTML = underScores.join(' ');
        console.log(docunderscores);
        // if (keyword.indexOf(keyword[computerChoice]) !== keyword.lastIndexOf(keyword[computerChoice])){
        //     return false;
        // }
        if(underScores.join('') == computerChoice) {
            winCounter++;
            document.getElementById("winCounter").innerHTML = winCounter ;
        }
    }
    else {
        wrongletter.push(keyword);
        docwrongletter[0].innerHTML = wrongletter;
        hearts--;

        document.getElementById("lives").innerHTML = hearts;
        if (hearts == 0) {
            losses++;
            document.getElementById("lossCounter").innerHTML = losses;
        }
    }

});
// }); 

