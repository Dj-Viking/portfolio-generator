//const commandLineArgs = process.argv;

//console.log(commandLineArgs);

// //allowed to manipulate whats inside an array or object for const
// // but can't reassign a 'const' with a new value
// //  'let' is used for this reassigning
// const animalArray = ['dog', 'cat', 'pig'];

// animalArray.push('cow');

// console.log(animalArray);
// //we are just referencing the container of the content inside the object
// // not referencing the content itself. 
// const personObj = {
//     name: 'Anders',
//     age: 99
// };

// //can manipulate contents inside a const object
// personObj.age = 28;
// personObj.occupation = 'Developer';

// console.log(personObj);

//using function expression syntax
// const addNums = function(numOne, numTwo){
//     return numOne + numTwo;
// }

//arrow function syntax
// const addNums = (numOne, numTwo) => return numOne + numTwo;
// 
//
// if only one parameter in the arrow function can remove parenthesis
// no curly braces means implicit return value of the function
// const doubler = num => num * 2;
// console.log(doubler(2));


//const printProfileData = profileDataArr =>/*console.log(profileDataArr);*///semicolon for declaring function expression
//same as writing this below, and the function above just has an implicit return of the function value and outputs to console.

//  const printProfileData = (profileDataArr) => {
    //print the array itself
    //      console.log(profileDataArr);  
    //  };
    




        /* EXAMPLES SHOWING THE SCOPING OF VAR AND LET VARIABLES */
        /******************************************************** */
    // // var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:
    
    // var one = 'one: declared outside the block';
    
    // if (true === true) {
    //   var one = 'one: declared inside the block'; // notice: we redeclare 'one' here
    //   console.log(one); // prints 'one: declared inside the block'
    // }
    
    // console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by inner var variable.
    
    // // 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:
    
    // let two = 'two: declared outside the block';
    
    // if (true === true) {
    //   let two = 'two: declared inside the block';
    //   console.log(two); // prints 'two: declared inside the block'
    // }
    
    // console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected by each other.
    
    // // var is function-scoped, so changing its value in a block causes its value in the outer environment to change as well:
    
    // var three = 'three: declared outside the block';
    
    // if (true === true) {
    //   three = 'three: changed inside the block'; // notice: we don't redeclare
    //   console.log(three); // prints 'three: changed inside the block'
    // }
    
    // console.log(three); // also prints 'three: changed inside the block', because the variable has function scope. This means that the value change in the block is reflected throughout the function, i.e., outside the block.
    
    // // let is block-scoped, so changing its value in a block does change its value outside the block _if_ the variable is not redeclared in the block:
    
    // let four = 'four: outside the block';
    
    // if (true === true) {
    //   four = 'four: inside the block'; // notice: we don't redeclare the variable
    //   console.log(four); // prints 'four: inside the block'
    // }
    
    // console.log(four); // prints 'four: inside the block', because we didn't redeclare the variable inside the block. That meant we referenced the variable outside the block, and we therefore changed it.


    




    
    
    
    
//slicing the first two arguments in the process object off as
//  to not display them in the console when logging the process.argv's 
//const profileDataArgs = process.argv.slice(2, process.argv.length);

// console.log("logging just the array of arguments we want");
// console.log(profileDataArgs);

// //more than one line will need curly brackets
// console.log("logging the for loop of each item in the data array no functions used against the items in the array")
// const printProfileData1 = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         //print the content inside the array
//         console.log(profileDataArr[i]);
//     }
// };

// printProfileData1(profileDataArgs);

// /*** EXPLAINING FOREACH LOOP ********** */

// console.log("===================");
// console.log("logging the forEach loop, for each item in the data array do a function")
// const printProfileData2 = profileDataArr => {
//     console.log(profileDataArr);
//     profileDataArr.forEach(profileItem => {
//         console.log(profileItem);
//     });
// };


// printProfileData2(profileDataArgs);



//arguments into a function using template literals
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

// console.log(generatePage('Anders', "dj-viking"));


//multi line strings using return ` (backtick) 

const profileDataArgs = process.argv.slice(2, process.argv.length);

//declaring const name is type: never
//  i think name is part of a namespace of another global object within the runtime engine?


// const userName = profileDataArgs[0];
// const github = profileDataArgs[1];

//or we can do assignment destructuring

const [userName, github] = profileDataArgs;

// const name = "name";
// name + userName; 

const generatePage = (userName, githubName) => {
    /* line break */return `
        Name: ${userName}
        GitHub: ${githubName} 
        `;/* line break */
};

console.log(generatePage(userName, github));

