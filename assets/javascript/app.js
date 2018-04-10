$(document).ready(function(){

    // Global Variables //
    var words = [
        {
            name: 'tapper', 
            picture: './assets/images/tapper-logo.jpg',
        },
        {
            name: 'burger time', 
            picture: './assets/images/burger-time-header.jpg',
        },
        {
            name: 'pacman', 
            picture: './assets/images/pacman-Logo-8.jpg',
        },
        {
            name: 'space invaders', 
            picture: './assets/images/spaceinvadersLogo.png',
        },
    ];

    var winCounter = 0;
    var losses = 0;
    var hearts = 6;
    var underScores = [];
    var letters = [];
    var lettersLength = []
    var currentWordDiv = $("#currentWord")
    var computerChoice
    var objectChoice
    var chosenPic

    function startGame(){
        generateWord()
    }

    function generateWord() {
        objectChoice = words[Math.floor(Math.random()*words.length)];
        computerChoice = objectChoice.name
        console.log(computerChoice);
        // Splits the letters of the word //
        letters.push(computerChoice.split(""))
        // Shows how many lives you have //
        $("#lives").html(hearts);

        // Push the underscores for the word to an array and to the html //
        for(var i = 0; i< computerChoice.length; i++) {
            underScores.push('_');
            currentWordDiv.html(underScores)
        }
    }

    document.addEventListener('keypress', (event) => {
        $("#instruction").empty()
        var keyword = String.fromCharCode(event.keyCode);
            console.log(keyword)
            // Check if letter is in word //
        if(computerChoice.indexOf(keyword)> -1) {
            for (var i=0; i< underScores.length; i++) {
                // If user guess is right //
                if (computerChoice[i] == keyword) {
                    underScores[i] = keyword;
                    currentWordDiv.html(underScores);
                    // If the word is complete, win counter increases by 1 and reset game//
                    if((underScores.join('')) === (computerChoice)) {
                        winCounter++;
                        $("#winCounter").html(winCounter);
                        $("#instruction").html('<button id="newWord" type="button">Click Me for a New Word</button>')
                        $("#picture").html('<img id="gameLogo" src=' + objectChoice.picture + '>')
                    }
                }
            }
        }
        else {
            $("#guesses").append(keyword)
            hearts --;
            $("#lives").html(hearts)
            if(hearts === 0) {
                losses ++;
                $("#lossCounter").html(losses)
                $("#instruction").html('<button id="newWord" type="button">Click Me for a New Word</button>')
                $("#picture").html('<p>The answer was ' + computerChoice + '!</p><img id="gameLogo" src=' + objectChoice.picture + '>')
            }
        }
    });

   $(document).on("click", "#newWord", function(){
       reset()
       console.log("hi")
   })

    function reset() {
       hearts = 6;
       underScores = []
       currentWordDiv.empty()
       $("#guesses").empty()
       $("#picture").empty()
       startGame()
    }

    startGame()
}); 