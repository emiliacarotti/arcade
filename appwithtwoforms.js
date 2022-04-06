//   const onePlayer = id onePlayer ; const p1 = id p1
const onePlayerButton = document.getElementById("onePlayerButton")
const p1Div = document.getElementById("p1Div")

//   const twoPlayer = id twoPlayer ; const p2 = id p2
const twoPlayerButton = document.getElementById("twoPlayerButton")
const p2Div = document.getElementById("p2Div")

// run fxn for one or two players based on selection
onePlayerButton.addEventListener('click', askPlayerName)
twoPlayerButton.addEventListener('click', askPlayerNames)

// one player
function askPlayerName(){
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

// two player
function askPlayerNames(){
    // hide button options, add text to p1Div
    onePlayerButton.hidden = true;
    twoPlayerButton.hidden = true;
    p1Div.innerHTML = "ENTER PLAYER NAMES:"

    // create form #1, append to p2
    const addNameOneForm = document.createElement("form")
    addNameOneForm.setAttribute('type', 'submit')
    addNameOneForm.setAttribute('id', 'addNameForm')
    p2Div.appendChild(addNameOneForm)

    // create input #1, append to form #1 in p2
    const addNameOneInput = document.createElement("input")
    addNameOneInput.setAttribute('type', 'text')
    addNameOneInput.setAttribute('id', 'addNameOneInput')
    addNameOneInput.placeholder = "PLAYER 1"
    addNameOneInput.required = true
    addNameOneForm.appendChild(addNameOneInput)

    // create form #2, append to p2
    const addNameTwoForm = document.createElement("form")
    addNameTwoForm.setAttribute('type', 'submit')
    addNameTwoForm.setAttribute('id', 'addNameForm')
    p2Div.appendChild(addNameTwoForm)

    // create input #2, append to form #2 in p2
    const addNameTwoInput = document.createElement("input")
    addNameTwoInput.setAttribute('type', 'text')
    addNameTwoInput.setAttribute('id', 'addNameTwoInput')
    addNameTwoInput.placeholder = "PLAYER 2"
    addNameTwoInput.required = true
    addNameTwoForm.appendChild(addNameTwoInput)

    // on name input run addPlayerName fxn
    addNameOneForm.addEventListener('submit', addPlayerOneName)
    addNameTwoForm.addEventListener('submit', addPlayerTwoName)

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
}