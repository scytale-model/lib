// File for sonarcloud testing. Adds some vulnerabilities to the repo 

consoloe.log('hello utils');
// let's see if sonarcloud would consider this a problem
const gooogle_api_key = 'AIzaSyD9_eOv-tM4XjWhmWzH5bQXxXy5zqDmlKc';

// that should be considered a high-severity issues
const userInput = req.query.user;
const query = `SELECT * FROM users WHERE username = '${userInput}'`;
db.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
});

const userInput = req.query.input;
res.send(`<div>${userInput}</div>`);

const crypto = require('crypto');
const hash = crypto.createHash('md5').update('password').digest('hex');

// that should be considered a moderate-severity issues
const userInput = req.query.code;
eval(userInput);

const dbPassword = 'supersecretpassword';
const dbUser = 'admin';

const randomValue = Math.random();
if (randomValue > 0.5) {
    console.log("You win!");
}

// that should be considered a low-severity issues
console.log("Debugging info: ", someVariable);

function add(a, b) {
    return a + b;
}

function sum(a, b) {
    return a + b;
}

const unusedVariable = "I'm not used anywhere";

const longString = "This is an extremely long string that exceeds the typical length for a single line of code and might trigger a warning in some linters or code quality tools like SonarCloud.";

const user_name = "JohnDoe";
const userName = "JaneDoe";


switch (status) {
    case 'active':
        // do something
        break;
    case 'inactive':
        // do something else
        break;
    // no default case
}

// function oldFunction() {
//     return "This function is deprecated";
// }


function complexFunction(a, b, c) {
    if (a > b) {
        if (b > c) {
            if (c > a) {
                // deeply nested logic
            }
        }
    }
}


function add(a, b) {
    return a + b;
}


// let's see if sonarcloud would consider this a problem
const gooogle_api_2_key = 'AIzaSyD9_a8z-tM4XjWhmWzH5bQXxXy5zqDmlKc';


const x = 5;;


const y = 10;    
