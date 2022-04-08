// HTML VARIABLE TO JS CREATIONS ----------------

// const onePlayer = id onePlayer ; const p1 = id p1
const onePlayerButton = document.getElementById("onePlayerButton")
const p1Div = document.getElementById("p1Div")

// const twoPlayer = id twoPlayer ; const p2 = id p2
const twoPlayerButton = document.getElementById("twoPlayerButton")
const p2Div = document.getElementById("p2Div")

// run fxn for one or two players based on selection
onePlayerButton.addEventListener('click', askPlayerName)
twoPlayerButton.addEventListener('click', askPlayerNames)

// ONE PLAYER SELECTION ----------------

// one player
function askPlayerName(){

    // variable will be used in future function selection
    var numPlayers = 1

    // hide button options, add text to p1Div
    onePlayerButton.hidden = true;
    twoPlayerButton.hidden = true;
    p1Div.innerHTML = "ENTER PLAYER NAME:"

    // create form tag, append to p2
    const addNameForm = document.createElement("form")
    addNameForm.setAttribute('type', 'submit')
    addNameForm.setAttribute('id', 'addNameForm')
    p2Div.appendChild(addNameForm)

    // create input tag, append to form tag in p2
    const addNameOneInput = document.createElement("input")
    addNameOneInput.setAttribute('type', 'text')
    addNameOneInput.setAttribute('id', 'addNameOneInput')
    addNameForm.appendChild(addNameOneInput)

    // on name input run addPlayerName fxn
    addNameForm.addEventListener('submit', addPlayerName)

    function addPlayerName(){
        event.preventDefault();
        document.getElementById('p1Name').innerHTML = addNameOneInput.value
        document.getElementById('p2Name').innerHTML = "COMPUTER"
        p1Div.hidden = true
        addNameOneInput.hidden = true
    }

    // on name input run choose who starts fxn
    addNameForm.addEventListener('submit', whoStarts)

    // ONE PLAYER: WHO STARTS ----------------

    function whoStarts(){

        // choose random number: either 0 or 1
        let number = Math.floor(Math.random()*2)
        console.log(number)

        // if number = 0: user starts
        if(number == 0){
            p1Div.hidden = false
            p1Div.innerHTML = "YOU START"
        }else{ // if number = 1: computer starts
            p1Div.hidden = false
            p1Div.innerHTML = "THE COMPUTER STARTS"
        }

    }
}

// TWO PLAYER SELECTION ----------------

// two player
function askPlayerNames(){

    // variable will be used in future function selection
    var numPlayers = 2

    // hide button options, add text to p1Div
    onePlayerButton.hidden = true;
    twoPlayerButton.hidden = true;
    p1Div.innerHTML = "ENTER PLAYER NAMES:"

    // create form #1, append to p2
    const addNameForm = document.createElement("form")
    addNameForm.setAttribute('type', 'submit')
    addNameForm.setAttribute('id', 'addNameForm')
    p2Div.appendChild(addNameForm)

    // create input #1, append to form #1 in p2
    const addNameOneInput = document.createElement("input")
    addNameOneInput.setAttribute('type', 'text')
    addNameOneInput.setAttribute('id', 'addNameOneInput')
    addNameOneInput.placeholder = "PLAYER 1"
    // addNameOneInput.required = true
    addNameForm.appendChild(addNameOneInput)

    // create input #2, append to form #2 in p2
    const addNameTwoInput = document.createElement("input")
    addNameTwoInput.setAttribute('type', 'text')
    addNameTwoInput.setAttribute('id', 'addNameTwoInput')
    addNameTwoInput.placeholder = "PLAYER 2"
    // addNameTwoInput.required = true
    addNameForm.appendChild(addNameTwoInput)

    // create a submit button for addEventListener to work for two input fields
    // button is hidden via CSS for appearance but eventListeners do not work otherwise
    // hiding button via JS does not work either
    const addNamesButton = document.createElement("button")
    addNamesButton.setAttribute('id', 'addNamesButton')
    addNameForm.appendChild(addNamesButton)

    // on name input run addPlayerName fxn
    addNameForm.addEventListener('submit', addPlayerOneName)
    addNameForm.addEventListener('submit', addPlayerTwoName)

    function addPlayerOneName(){
        event.preventDefault();
        document.getElementById('p1Name').innerHTML = addNameOneInput.value
        addNameOneInput.hidden = true
    }

    function addPlayerTwoName(){
        event.preventDefault();
        document.getElementById('p2Name').innerHTML = addNameTwoInput.value
        p2Div.hidden = true
        addNameTwoInput.hidden = true
    }
    
    // on name input run choose who starts fxn
    addNameForm.addEventListener('submit', whoStarts)

    // TWO PLAYER: WHO STARTS ----------------

    function whoStarts(){

        // choose random number: either 0 or 1
        let number = Math.floor(Math.random()*2)
        console.log(number)

        // if number = 0: player 1 starts
        if(number == 0){
            p1Div.hidden = false
            p1Div.innerHTML = "PLAYER 1 STARTS"
        }else{ // if number = 1: player 2 starts
            p1Div.hidden = false
            p1Div.innerHTML = "PLAYER 2 STARTS"
        }
    }
    onePlayerGame()
}

// ARROW BUTTONS CAUSE TOKEN PLAY ----------------

// create variable for each column
const col1 = document.getElementById("col1")
const col2 = document.getElementById("col2")
const col3 = document.getElementById("col3")
const col4 = document.getElementById("col4")
const col5 = document.getElementById("col5")
const col6 = document.getElementById("col6")
const col7 = document.getElementById("col7")

// run playTurn fxn whenever a button is clicked
// *would like to create a function for this maybe, if possible, if I have enough time?
col1.addEventListener('click', clickArrow)
col2.addEventListener('click', clickArrow)
col3.addEventListener('click', clickArrow)
col4.addEventListener('click', clickArrow)
col5.addEventListener('click', clickArrow)
col6.addEventListener('click', clickArrow)
col7.addEventListener('click', clickArrow)

// set empty board to start
let grid = [
    //n= 0  1  2  3  4  5  6
        [0, 0, 0, 0, 0, 0, 0], // i= 0
        [0, 0, 0, 0, 0, 0, 0], // 1
        [0, 0, 0, 0, 0, 0, 0], // 2
        [0, 0, 0, 0, 0, 0, 0], // 3
        [0, 0, 0, 0, 0, 0, 0], // 4
        [0, 0, 0, 0, 0, 0, 0], // 5
    ]

// when arrow is clicked, grab nth column using col id
function clickArrow(event){
    console.log('clicked')
    let n = event.target.id
    n = n.substring(3)
    console.log(n)
    playChip(grid, n)
}

// play token fsn
function playChip(grid, n){

    // empty array
    let grabColumn = [];

    // grab the nth (clicked) column from the board's current state
    for (let i = 0; i < grid.length; i ++){
      grabColumn.push(grid[i][n-1])
    }

    // work backwards in grabColumn array, if '0', add chip 'r' or 'b'
    for (let i = grabColumn.length - 1; i >= 0; i--){
        if(grabColumn[i] == 0){
            grabColumn[i] = "r"
            console.log(grabColumn)

            // update board state
            for (let i = 0; i < grid.length; i ++){
                grid[i][n-1] = grabColumn[i]
            }
            console.log(grid)
            return
        }
    }
}

function onePlayerGame(){
    
}