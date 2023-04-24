var x; //variable to hold the max integer from user input 
var randomNum; //variable to hold random number generated with math.random
var userInput; //variable representing user guess
let userGuess = []; //array to hold the user guesses


//function called on site load; asks for user input
function n(){
     x = Math.round(prompt("Enter Max Number: "));

    while(x <= 0 || isNaN(x)){
        alert('Invalid entry. Enter a valid number greater than 1.');
        
        //prompt(), similar to alert(), this asks for user input
        x = parseInt(prompt("Enter Max Integer: "));
    }
    document.getElementById("maxInt").innerText = x;
    randomNum = Math.floor(Math.random()*Number(x)) + 1;

    //kept this here to hide the play again button soon as the site loads
    document.getElementById('replay').style.display = "none";
}



//function executed when 'guess' button is clicked.
function guess(){

    //holds guess number from user
   userInput = Math.round(document.getElementById('guess').value);
    
   //to check for empty user input
   while(userInput == '')
   {
    document.getElementById("message").innerHTML = "Invalid empty input, try again.";
        return;
   }

    //while loop to check if number is in range if not, tells the user
    while(userInput < 1 || userInput > x){
        document.getElementById("message").innerHTML = "That number is not in range, try again.";
        return;
    }
    //while loop to check if userInput is a word.
    while(isNaN(userInput)){
        document.getElementById("message").innerHTML = "That is not a number!";
        return;
    }
    //while loop to check if the userInput is a repeating number
    while(userGuess.includes(userInput)){
        document.getElementById("message").innerHTML = "You already guessed this number.";
        return;
    }
    //while loops above prevent the initialization of unwanted guesses to the userGuess[] array



    // document.getElementById("two").innerHTML = 'You guessed: ' + userInput;



   //if-else to check only valid user input guess.
    if (randomNum == userInput)
    {
        document.getElementById("message").innerHTML = "You got it!";
        document.getElementById("x").innerHTML = 'Random generated number is: ' + randomNum;
          
    }
    else if (randomNum > userInput)
    {
        document.getElementById("message").innerHTML = "No, try a higher number.";
    }
    else 
    {
        document.getElementById("message").innerHTML = "No, try a lower number.";
    }


    //pushes the values of userInput to the array list, userGuess[].
    userGuess.push(userInput);
    
    //list is assigned to a created span element and it will hold the user guesses in an array
    let list = document.createElement('span');

    //second array to hold only non-repeating nums
    let guessedNumbers = [];

    list.innerText += 'It took you ' + userGuess.length +' tries, and your guesses were:  ';


    for (let i = 0; i < userGuess.length; i++) 
    { 
        //if-statement executes if guessedNumbers does not already have a number
      if(!guessedNumbers.includes(userGuess[i])) 
      { 
        //if-statement to add comma after a number is inside
        if (i > 0) {
         list.innerText += ', ';
        }
      //adds the user input to the list created as the loop iterates 
        list.innerText += userGuess[i];
        guessedNumbers.push(userGuess[i]);
        }
    }
 

    //this is needed to print the values on HTML page
    let finalList = document.getElementById('guessList');
    if (randomNum == userInput)
     {
        //making the list empty otherwise it may hold values
        finalList.innerHTML = '';
        finalList.appendChild(list);

        //button shows up when the above condition is true
        document.getElementById('replay').style.display = "block";

    } 
    else 
    {
        finalList.innerHTML = '';
    }

}






