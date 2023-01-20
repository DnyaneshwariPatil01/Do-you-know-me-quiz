var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your Name? ");
console.log("Hi " + userName + " Welcome to - How well do you know Dnyaneshwari? ");

console.log("---------------------------------------");
var score = 0;
var questionOne = {
  question : "What is my favorite TV genre? \n a. rom-com \t b. fiction \n c. fantasy \t d. documentary \n",
  answer : "a"
}
var questionTwo = {
  question : "Do I like meeting new people? \n a. yes \t b. no",
  answer : "a"
}
var questionThree = {
  question : "What is my zodiac sign? \n a. pisces \t b. Aquarius \n c. scorpio \t d. virgo",
  answer : "a"
}
var questionFour = {
  question : "Do I believe in aliens? \n a. yes \t b. no",
  answer : "b"
}
var questionFive = {
  question : "What is my eye color? \n a. black \t b. dark-brown \n c. brown \t d. green",
  answer : "b"
}
var questionSix = {
  question : "Do I have any allergies? \n a. yes \t b. no",
  answer : "b"
}
var questionSeven = {
  question : "Who knows my credit card details? \n a. my papa \t b. me \n c. my bestfriend \t d. i dont have it",
  answer : "d"
}
var questionEight = {
  question : "When is my father’s birthday?? \n a. 5 june \n b. 5 may",
  answer : "a"
}
var questionNine = {
  question : "Would I ever go on a blind date? \n a. yes \t b. no",
  answer : "a"
}
var questionTen = {
  question : "What is my shoe size? \n a. 5 \t b. 6 \n c. 7 \t d. 8",
  answer : "c"
}
var questionEleven = {
  question : "Do I prefer coffee or tea? \n a. coffee \t b. tea \t c. both",
  answer : "a"
}
var questionTwelve = {
  question : "Who is my current crush? \n a. Rohit saraf \t b. Parth Samthaan \n c. Shahrukh khan \t d. someone else",
  answer : "a"
}
var questionThirteen = {
  question : "Do I believe in zodiacs? \n a. yes \t b. no",
  answer : "a"
}
var questionFourteen = {
  question : "Am I a dog or a cat person? \n a. dog \n b. cat \n c. both",
  answer : "c"
}
var questionFifteen = {
  question : "How tall am I? \n a. 5'4 \t b. 5'5 \n c. 6'0 \t d. 5'2 ",
  answer : "a"
}
function play(question, answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer === answer){
    score = score + 1;
    console.log("You are right. your final score is "+ score); 
    
    if(score == 5){
      console.log("----------------------------------------------");
      console.log("Congratulations! you are entering Level one now");
      console.log("----------------------------------------------");
    }

    if(score == 10){
      console.log("----------------------------------------------");
      console.log("Congratulations! you are entering Level two now");
      console.log("----------------------------------------------");
    }
    if(score == 15){
      console.log("----------------------------------------------");
      console.log("Congratulations! You Win");
      console.log("----------------------------------------------");
    }
  }else{
    score = score;
    console.log("You are wrong.your final score is "+ score);
  }

}
play(questionOne.question, questionOne.answer);
play(questionTwo.question, questionTwo.answer);
play(questionThree.question, questionThree.answer);
play(questionFour.question, questionFour.answer);
play(questionFive.question, questionFive.answer);
play(questionSix.question, questionSix.answer);
play(questionSeven.question, questionSeven.answer);
play(questionEight.question, questionEight.answer);
play(questionNine.question, questionNine.answer);
play(questionTen.question, questionTen.answer);
play(questionEleven.question, questionEleven.answer);
play(questionTwelve.question, questionTwelve.answer);
play(questionThirteen.question, questionThirteen.answer);
play(questionFourteen.question, questionFourteen.answer);
play(questionFifteen.question, questionFifteen.answer);