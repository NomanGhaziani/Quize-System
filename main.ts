#!/usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to my quize game");
console.log("you are requite for point" );
let points = 0 ;
let question1 = await inquirer.prompt([{
    name : "one",
    message : "What is your name",
    type : "list",
    choices : ["raza","noman","usman","ali"]
}
])
if(question1.one == "noman"){
console.log("your answer is correct")
points++
}else{
    console.log("incorrect anwer")
};
let question2 = await inquirer.prompt([{
    name : "two",
    message : "What is your father name",
    type : "list",
    choices : ["saleem","noman","usman","ali"]
}
])
if(question2.two == "saleem"){
console.log("your answer is correct")
points++
}else{
    console.log("incorrect anwer")
};
let question3 = await inquirer.prompt([{
    name : "three",
    message : "What is your country name",
    type : "list",
    choices : ["U.K","Pakistan","U.A.E","india"]
}
])
if(question3.three == "Pakistan"){
console.log("your answer is correct")
points++
}else{
    console.log("incorrect anwer")
};
let question4 = await inquirer.prompt([{
    name : "four",
    message : "What is your city name",
    type : "list",
    choices : ["mirpur","queeta","Karachi","lahore"]
}
])
if(question4.four == "Karachi"){
console.log("your answer is correct")
points++
}else{
    console.log("incorrect anwer")
};
let question5 = await inquirer.prompt([{
    name : "five",
    message : "You are student",
    type : "list",
    choices : ["yes","no"]
}
])
if(question5.five == "yes"){
console.log("your answer is correct")
points++
}else{
    console.log("incorrect anwer")
};
if(points >= 4){
console.log("Congratulations!");
console.log(`your points:${points}`);
}else{
    console.log("try again");
    console.log(`your points:${points}`);
}