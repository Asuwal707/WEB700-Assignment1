/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: aashish suwal Student ID: 161760236 Date: 5/17/2024
*
********************************************************************************/
// creating gllobal variabls 
serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
serverPaths = ["/", "/about", "/contacts", "/login", "/panel", "/logout"];
serverResponse = ["Welcome to WEB700 Assignment 1", "This assignment was prepared by aashish suwal", "Student Name: Aashish suwal Student Email: asuwal@myseneca.ca", "User Logged in", "Main panel", "Logout Complete"];

// creating our http request as an arrow function :) (tried smth else lol)

// using const coz we wont be reassigning them. httpverb and path are just parameters for serververbs and serverpaths.
const httpRequest = (httpVerb, path) => {
    for (let i = 0; i < serverPaths.length; i++) {
        if(serverVerbs[i] === httpVerb && serverPaths[i] === path ) {
            return `200: ${serverResponse[i]}`;
        }
    }

    return `404: unable to process ${httpVerb} request for ${path}`; // ` is a template literal allowing us to embed expression inside ${} string
}

// testing our function 

console.log(httpRequest("GET", "/")); // should return 200: Welcome to WEB700 Assignment 1
console.log(httpRequest("GET", "/about")); // 200: This assignment was prepared by aashish suwal
console.log(httpRequest("GET", "/contact")); // 200: aashish suwal: asuwal@myseneca.ca
console.log(httpRequest("POST", "/login")); // 200: User Logged In
console.log(httpRequest("GET", "/panel")); // 200: Main Panel
console.log(httpRequest("POST", "/logout")); // 200: Logout Complete
console.log(httpRequest("PUT", "/")); // 404: Unable to process PUT request for 

// a function to generate random numb between 0 and specified maximum (will be implementing the code from link provided)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// automating out test function .
function automateTests() 
{           //defining out testverbs and testpaths
    let testVerbs = ["GET", "POST"];
    let testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

    // this is out function randomRequest which generates random http requests and logs it into httprequest
    function randomRequest() {
        let randVerb = testVerbs[getRandomInt(testVerbs.length)];
        let randPath = testPaths[getRandomInt(testPaths.length)];
        console.log(httpRequest(randVerb, randPath)); 
    }

    setInterval(randomRequest, 1000);  // 1 second interval
}

automateTests(); // starts the automation  :D 

  
 