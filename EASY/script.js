// --- Version 1 ---

// --- CHECK CONSOLE FOR OUTPUT ---


let userInput = document.getElementById('user-input');
let messageInput = document.getElementById('message-input');
let button = document.querySelector('button')



button.addEventListener('click', function(e){
    e.preventDefault
    console.log('exercise: ' + userInput.value)

    messageInput.value = "Today's exercise is: " + userInput.value

})


// --- Version 2 ---

function exercise(input){
    return "Today's exercise: " + input

}



console.log(exercise('Running'))
console.log(exercise('Swimming'))
console.log(exercise('Dancing'))
console.log(exercise('Fencing'))


