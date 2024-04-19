
//by the dom concept i will acess the elemnt
let input=document.getElementById('input');
let btn=document.getElementById('btn');
let wrong=document.querySelector('.wrong');
let guesses=document.getElementById('guesses');

let answer=Math.floor(Math.random()*100)+1;  //this function is generate random number

// console.log(answer);

let numGuesses=0;

btn.addEventListener("click",()=>{
    guessesNumber();
})
  
//this is condition for generating the number
function guessesNumber(){
  //this is wrong condtion if user select the wrong number then it will execute
    if(input.value<1 ||input.value>100 ||isNaN(input.value)){
        wrong.innerHTML="Enter between 1 to 100";
    }

    //this is right condition 
    else{
        numGuesses++;
        guesses.innerHTML="No. of Guess : "+numGuesses;

      if(input.value>answer){
        wrong.innerHTML='you guessed to High!';
        input.value="";
      }
      else if(input.value<answer){
        wrong.innerHTML='you guessed too low!';
        input.value="";
      }else{
        wrong.innerHTML="Congratulation you guessed the correct answer";

        setTimeout(()=>{
            resetGame();
        },5000)
      }






    }
}


function resetGame(){
    numGuesses=0;
    answer=Math.floor(math.random()*100)+1;
    input.value="";
    guesses.innerHTML="No of guess :0";
}

